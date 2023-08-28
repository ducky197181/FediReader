import {decode} from "blurhash"

/**
 * @typedef {Object} ServerInfo
 * @property {string} url
 * @property {string} icon
 */

/**
 * @typedef {Object} MediaAttachments
 * @property {string} type
 * @property {string} url
 * @property {string} preview_url
 * @property {string} blurhash
 */

/**
 * @typedef {Object} Account
 * @property {string} avatar
 * @property {string} url
 * @property {string} display_name
 * @property {string} acct
 * @property {string} id
 */

/**
 * @typedef {Object} Toot
 * @property {string} uri
 * @property {string} content
 * @property {number} reblogs_count
 * @property {number} replies_count
 * @property {number} favourites_count
 * @property {string} language
 * @property {boolean} sensitive
 * @property {Array<MediaAttachments>} media_attachments
 * @property {Account} account
 * @property {Toot|null} reblog
 */


console.log('DM')

const SourceUpdate = new Event("SourceUpdate")
const NewPosts = new Event("NewPosts");
const DBReady = new Event("DBReady")

const MastodonServers = "Servers"
const BlockedAccounts = "Blocked"

const apis = {
    'Trends': 'api/v1/trends/statuses',
    'Public': 'api/v1/timelines/public?local=true',
    'Home': 'api/v1/timelines/home',
    'Adventure': 'api/v1/timelines/public?local=false'
}

/** @type {IDBDatabase} */
let db;
const request = indexedDB.open("FediReader",23);
request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onupgradeneeded = ( /** @type {IDBVersionChangeEvent} */ event) => {
    /**@type {IDBDatabase} */
    const d =  event.target.result

    if (d.objectStoreNames.contains(MastodonServers))
    {
        d.deleteObjectStore(MastodonServers)
    }
    const serverStore = d.createObjectStore(MastodonServers, {autoIncrement:true})
    serverStore.createIndex("url", "url", {unique: true})

    
    Object.keys(apis).forEach(a => {
        serverStore.createIndex(a, a, {unique:false})

        if (d.objectStoreNames.contains(a))
        {
            d.deleteObjectStore(a)
        }
        const apiStore = d.createObjectStore(a, {autoIncrement:true})
        apiStore.createIndex("uri", "uri", {unique:true})
        apiStore.createIndex("fediverse_server", "fediverse_server", {unique:false})
    })
    
    if (d.objectStoreNames.contains(BlockedAccounts))
    {
        d.deleteObjectStore(BlockedAccounts);
    }
    d.createObjectStore(BlockedAccounts, {autoIncrement:true}).createIndex("uri", "uri", {unique:true})
}
request.onsuccess = (event) => {
    db = event.target.result;

    navigator.storage.estimate().then(f => console.log(f))

    const updateServerList = UpdateServerList()
    const blockedUsers = GetBlockedUsers().then(users => {
        console.log('blocked', users)
        BlockedAccountsArray = users
    })
    const trimPosts = TrimPosts()

    Promise.allSettled([updateServerList, blockedUsers, trimPosts])
        .then(() => window.dispatchEvent(DBReady))
};

function GetBlockedUsers()
{
    return new Promise((resolve, reject) => {
        const users = []
        const objectStore = db.transaction(BlockedAccounts).objectStore(BlockedAccounts)
        objectStore.openCursor().onsuccess = (event) => {
            /** @type {IDBCursor} */
            const cursor = event.target.result;
            if (cursor)
            {
                users.push(cursor.value)
                cursor.continue()
            }
            else
            {
                resolve(users)
            }
        }
    }).catch(err => console.error(err))
}

function TrimPosts() {
    const trims = []
    Object.keys(apis).forEach(apiKey => {
        trims.push(TrimDB(apiKey))
    })
    return Promise.allSettled(trims)
}

function TrimDB(storeName)
{
    return new Promise((resolve, reject) => {
        GetLatestIndex(storeName).then(key => {
            console.log('latest')
            const objectStore = db.transaction(storeName, "readwrite").objectStore(storeName)
            objectStore.openCursor(IDBKeyRange.upperBound(key-1000), "prev").onsuccess = (event) => {
                /** @type {IDBCursor} */
                const cursor = event.target.result;
                if (cursor)
                {
                    cursor.delete()
                    cursor.continue()
                }
                else
                {
                    resolve()
                }
            }
        }) 
    }).catch(err => console.error(err))
}

function GetLatestIndex(apiKey)
{
    return new Promise((resolve, reject) => {
        const objectStore = db.transaction(apiKey, "readwrite").objectStore(apiKey)
        objectStore.openCursor(null, "prev").onsuccess = (event) => {
            /** @type {IDBCursor} */
            const cursor = event.target.result;
            if (cursor)
            {
                console.log(apiKey, "latest", cursor)
                resolve(cursor.key)
            }
            else
            {
                resolve(0)
            }
        }
    }).catch(err => console.error(err))
}

/**
 * 
 * @param {string} type 
 * @returns 
 */
export async function AddServer(type='mastodon')
{
    let strPath = prompt("Add server URL")
    if (strPath == "")
    {
        return
    }
    switch (type)
    {
        case 'mastodon':
            await AddMastodonServer(strPath)
            break;
    }
}

async function AddMastodonServer(strPath)
{
    try {
        strPath = strPath.startsWith("http") ? strPath : "https://" + strPath
        const url = new URL(strPath)
        const shortUrl = new URL(url.protocol + "//" + url.host)
        const infoUrl = new URL("/api/v2/instance", shortUrl)

        const response = await fetch(infoUrl)

        if (!response.ok)
        {
            throw new Error('Nah')
        }

        const info = await response.json()
        const thumbnail = info.contact.account.avatar

        /** @type {ServerInfo} */
        const serverInfo = {
            url: shortUrl.href,
            icon: thumbnail,
            token: ""
        }

        Object.keys(apis).forEach(api => {
            serverInfo[api] = "0"
        })

        db.transaction(MastodonServers, "readwrite")
            .objectStore(MastodonServers)
            .add(serverInfo)
            .onsuccess = (evt) => {
                UpdateServerList().then(ViewUpdate)
            }
    } catch (error)
    {
        console.error(error)
    }
}

function DownloadPosts(apiKey)
{
    return new Promise((allDownloaded, downloadError) => {
        console.log('download')

        const api = apis[apiKey]
        const transaction = db.transaction(MastodonServers, "readonly");
        const objectStore = transaction.objectStore(MastodonServers)
        
        /** @type {Array<PromiseLike>} */
        const promises = []
        
        objectStore.openCursor().onsuccess = (event) => {
            /** @type {IDBCursorWithValue|null} */
            const cursor = event.target.result;
            if (cursor)
            {
                /** @type {ServerInfo} */
                const serverInfo = cursor.value;
                const serverKey = cursor.key;

                const statusURL = new URL(api, serverInfo.url);
                //statusURL.searchParams.append("since_id", serverInfo[apikey])
                statusURL.searchParams.append("limit", 40)
                
                const req = {
                    method: 'GET',
                    headers: { }
                }

                if (serverInfo.token != "")
                {
                    req.headers["Authorization"] = "Bearer " + serverInfo.token
                }

                const pr = new Promise((resolve, reject) => {
                    fetch(statusURL, req).then(response => {
                        if (response.ok)
                        {
                            response.json().then((json) => {
                                //StoreLatest(serverKey, apikey, GetLargestID(json))
                                json.forEach(j => {
                                    j["fedireader_server"] = serverKey
                                })
                                resolve(json)
                            })
                        }
                        else
                        {
                            reject(`${response.statusText} for ${statusURL}`)
                        }
                    })
                }).catch(err => console.error(err))

                promises.push(pr)
                console.log('arr')
                cursor.continue();
            }
            else
            {
                console.log('err')
                Promise.allSettled(promises).then(value => {
                    
                    const posts = []
                    value.forEach(v => {
                        if (v.status == 'fulfilled' && v.value != undefined)
                        {
                            v.value.forEach(post => {
                                const createdAt = Date.parse( post.created_at );
                                post.epoch = createdAt
                                posts.push(post)
                            })
                        }
                    })

                    console.log('boo', posts)
        
                    posts.sort((a, b) => b.epoch - a.epoch)
                        
                    let added = false;
                    const addPromises = []
                    posts.forEach(post => {
                        addPromises.push(new Promise((resolve, reject) => {
                            const cacheTransaction = db.transaction(apiKey, "readwrite");
                            const postObjectStore = cacheTransaction.objectStore(apiKey)
                            const request = postObjectStore.add(post)
                            request.onsuccess = () => {
                                added = true;
                                console.log('add')
                                resolve()
                            }
                            request.onerror = reject
                        }))
                    })

                    Promise.allSettled(addPromises).then(value => {
                        
                        if (added)
                        {
                            document.body.dispatchEvent(NewPosts);
                        }
                        allDownloaded()
                    }).catch(err => console.error(err))
                })
            }
        }
    }).catch(rejected => console.error(rejected))
}

let LatestPost = -1
let OldestPost = -1
let visibleApi = ""
const visiblePosts = []
const loadMoreButton = document.createElement("button")
loadMoreButton.innerHTML = "Load more..."
loadMoreButton.onclick = () => DisplayPosts(visibleApi, true)

function DisplayPosts(apiKey = null, add = false)
{
    return new Promise((resolve, reject) => {

        const main = document.getElementById("Main")
    
        if (apiKey != visibleApi)
        {
            visibleApi = apiKey
            main.innerHTML = ""
            visiblePosts.length = 0;
            scrollTo( {
                top: 0,
                behaviour: "instant"
            } )
        }

        if (visibleApi == null)
        {
            return resolve()
        }
        
        const objectStore = db.transaction(apiKey).objectStore(apiKey)
        
        /** @type {IDBKeyRange|null} */
        const keyrange = add && visiblePosts.length > 0
            ? IDBKeyRange.upperBound(visiblePosts[visiblePosts.length-1])
            : null
        
        loadMoreButton.remove()

        let count = 0
        objectStore.openCursor(keyrange, "prev").onsuccess = (event) => {
            /** @type {IDBCursor} */
            const cursor = event.target.result;
            if (cursor)
            {
                const key = cursor.key
                count++;
                
                if (count < 40)
                {
                    const toot = cursor.value;
                    
                    const actualUrl = toot.reblog ? toot.reblog.account.url : toot.account.url
                    if (!toot.fedireader_deleted && !BlockedAccountsArray.includes(actualUrl))
                    {
                        const article = GenerateArticle(toot, key, apiKey)
                        article.querySelector("article").dataset["key"] = cursor.key
                        article.querySelector(".debug").innerHTML += " " + cursor.key
    
                        if (visiblePosts.length == 0)
                        {
                            main.append(article)
                            visiblePosts.push(key)
                        }
                        else if (visiblePosts[0] < key)
                        {
                            main.insertBefore(article, main.firstElementChild)
                            visiblePosts.unshift(key)
                        }
                        else if (visiblePosts[visiblePosts.length-1] > key)
                        {
                            main.append(article)
                            visiblePosts.push(key)
                        }
                        else
                        {
                            for (var i = 0; i < visiblePosts.length; i++)
                            {
                                if (key == visiblePosts[i])
                                {
                                    break;
                                }
                                if (key > visiblePosts[i])
                                {
                                    main.insertBefore(article, main.children.item(i))
                                    visiblePosts.splice(i-1, 0, key)
                                    break;
                                }
                            }
                        }
                    }
                    cursor.continue()
                }
                else
                {
                    console.log("visiblePosts", visiblePosts)
                    main.append(loadMoreButton)
                    resolve()
                }
            }
            else
            {
                resolve()
            }
        }
    }).catch(err => console.error(err))
}
//document.body.addEventListener(DBReady.type, DisplayPosts)

function DeleteServer(key)
{
    const objectStore = db.transaction(MastodonServers, "readwrite").objectStore(MastodonServers)
    objectStore.openCursor(IDBKeyRange.only(key), "prev").onsuccess = (event) => {
        /** @type {IDBCursor} */
        const cursor = event.target.result;
        if (cursor)
        {
            
            cursor.delete()
            

            const cleanup = []

            Object.keys(apis).forEach(api => {
                cleanup.push(
                    new Promise((resolve, reject) => {
                        const str = db.transaction(api, 'readwrite').objectStore(api)
                        str.openCursor().onsuccess = (evt) => {
                            /** @type {IDBCursor} */
                            const postCursor = evt.target.result;
                            if (postCursor)
                            {
                                if (postCursor.value.fedireader_server == key)
                                {
                                    postCursor.delete()
                                }
                                postCursor.continue();
                            }
                            else
                            {
                                resolve()
                            }
                        }
                    }).catch(err => console.error(err))
                )
            })

            console.log(cleanup)

            Promise.allSettled(cleanup).then(() => {
                console.log("cleanup done")
                UpdateServerList().then(() => ViewUpdate());
            })
        }
    }
}

let ServerList = {}
function UpdateServerList()
{
    return new Promise((resolve, reject) => {
        ServerList = {}
        const sources = document.getElementById("MastodonSources")
        while(sources.firstChild)
        {
            sources.removeChild(sources.firstChild)
        }
    
        const template = document.getElementById("template_serverlist")
        const objectStore = db.transaction(MastodonServers).objectStore(MastodonServers)
    
        objectStore.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor)
            {
                /** @type {HTMLElement} */
                const source = template.content.cloneNode(true)
                console.log(source)
    
                const url = cursor.value.url
                source.querySelector(".servername").innerHTML = new URL(cursor.value.url).hostname
                source.querySelector(".servericon").src = cursor.value.icon
                source.querySelector("a").href = cursor.value.url
    
                const key = cursor.key
                source.querySelector(".token").onclick = () => PromptToken(key)
    
                if (cursor.value.token != "")
                {
                    source.querySelector(".token").innerHTML = "Update token"
                    //source.querySelector(".token").classList.add("hastoken")
                    document.body.parentElement.classList.add("hastoken")
                }

                source.querySelector(".delete").onclick = () => {
                    DeleteServer(key)
                }
    
                ServerList[key] = cursor.value
    
                sources.append(source)
                cursor.continue()
            }
            else
            {
                resolve()
            }
        }
    }).catch(err => console.error(err))

}
document.body.addEventListener(SourceUpdate.type, UpdateServerList)

function DeleteArticle(key, storeName)
{
    const objectStore = db.transaction(storeName, "readwrite").objectStore(storeName)
    objectStore.openCursor(IDBKeyRange.only(key), "prev").onsuccess = (event) => {
        /** @type {IDBCursor} */
        const cursor = event.target.result;
        if (cursor)
        {
            const article = cursor.value;
            article.fedireader_deleted = true
            cursor.update(article)
            console.log(article)
        }
    }
}

let BlockedAccountsArray = []
function BlockUser(user)
{
    console.log('block', user)
    BlockedAccountsArray.push(user)
    db.transaction(BlockedAccounts, "readwrite")
        .objectStore(BlockedAccounts)
        .add(user)
}

const articleTemplate = document.getElementById("article_template")
/**
 * 
 * @param {Toot} toot 
 */
function GenerateArticle(toot, key, apiKey)
{
    /** @type {HTMLElement} */
    const article = articleTemplate.content.cloneNode(true)
    const articleNode = article.querySelector("article")
    article.querySelector(".status_name").href = toot.account.url
    article.querySelector(".status_avatar").src = toot.account.avatar;
    article.querySelector(".display_name").innerHTML = toot.account.display_name
    article.querySelector(".account").innerHTML = toot.account.acct

    article.querySelector(".open").href = toot.uri

    article.querySelector(".star").onclick = () => {
        StatusApi(toot, "Star", "favourite")
    }
    article.querySelector(".share").onclick = () => {
        StatusApi(toot, "Boost", "reblog")
    }

    article.querySelector(".follow").onclick = () => {
        FollowUser(toot)
    }

    article.querySelector(".block").onclick = () => {
        BlockUser(toot.account.url)
        articleNode.remove()
    }

    article.querySelector(".delete").onclick = () => {
        DeleteArticle(key, apiKey)
        articleNode.remove()
    }

    //console.log(toot)
    if ("fedireader_server" in toot)
    {
        const server = ServerList[toot.fedireader_server]
        const status_origin = article.querySelector(".status_origin")
        status_origin.src = server.icon
        status_origin.title = server.url
        //article.querySelector("article").style.backgroundImage = `url(${server.icon})` 
    }

    
    const statusbody = article.querySelector(".status_body")
    if (toot.reblog)
    {
        article.querySelector("article").classList.add( "reblog" )
        statusbody.append(GenerateArticle(toot.reblog, key, apiKey))
    }
    else
    {
        statusbody.innerHTML = toot.content
        const actual = toot;
        const media_attachments = article.querySelector(".status_media")
        media_attachments.classList.add("num" + actual.media_attachments.length)
        for (var i = 0; i < actual.media_attachments.length; i++)
        {
            const ma = actual.media_attachments[i];
    
            const a = document.createElement("a");
            a.href = ma.url
            a.target = '_blank'
            if (actual.sensitive)
            {
                const pixels = decode(ma.blurhash, 300, 300);
                const canvas = document.createElement("canvas")
                const ctx = canvas.getContext("2d")
                const imageData = ctx.createImageData(300,300)
                imageData.data.set(pixels)
                ctx.putImageData(imageData,0,0)
                a.append(canvas)
            }
            else
            {
                const img = document.createElement("img")
                img.src = ma.preview_url;
                a.append(img)
            }
    
            if (ma.type == 'gifv')
            {
                a.classList.add("videolink")
                a.onclick = (ev) => {
                    console.log('nah')
                    const v = VIDEOTEMPLATE.cloneNode(true)
                    v.querySelector("source").src = ma.url;
                    a.replaceWith(v)
                    return false;
                }
            }
            
            media_attachments.append(a)
    
        }
    }


    return article
}

async function GetSourcesWithAPI()
{
    return new Promise((resolve, reject) => {
        const servers = []
        const objectStore = db.transaction(MastodonServers).objectStore(MastodonServers)
    
        objectStore.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor)
            {
                if (cursor.value.token != "")
                {
                    servers.push(cursor.value)
                }
                cursor.continue()
            }
            else
            {
                resolve(servers)
            }
        }
    }).catch(err => console.error(err))
}

async function StatusApi(obj, confirm, action)
{
    GetSourcesWithAPI().then(postSources => {
        for (var i = 0; i < postSources.length; i++)
        {
            /** @type {ServerInfo} */
            const postSource = postSources[i];
    
            if (window.confirm(confirm + " post on instance " + postSource.url + "?") == false)
            {
                continue;
            }

            const actual = obj.reblog ? obj.reblog : obj
    
            const source = new URL(postSource.url);
            const statusURL = new URL("/api/v2/search", source);
            statusURL.searchParams.append("q", actual.uri)
            statusURL.searchParams.append("type", "statuses")
            statusURL.searchParams.append("resolve", "true")
                
            const req = {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + postSource.token
                }
            }
    
            fetch(statusURL, req).then(response => {
                if (response.ok)
                {
                    response.json().then(json => {
                        const postID = json.statuses[0].id
                        req.method = 'POST'
                        const starURL = new URL("/api/v1/statuses/"+postID+"/"+action, source);
                        fetch(starURL, req).then(r => {
                            console.log(r)
                        })
                    });
                }
            })
        }
    })
}

/**
 * 
 * @param {Toot} toot 
 */
async function FollowUser(toot)
{

    GetSourcesWithAPI().then(postSources => {
        for (var i = 0; i < postSources.length; i++)
        {
            /** @type {ServerInfo} */
            const postSource = postSources[i];
    
            if (window.confirm(`Follow user ${toot.account.acct} on server ${postSource.url}?`) == false)
            {
                continue;
            }

            const source = new URL(postSource.url);
            const searchURL = new URL(`/api/v2/search/`, source);
            searchURL.searchParams.append("q", toot.account.url)
            searchURL.searchParams.append('type', 'accounts')
            searchURL.searchParams.append('resolve', "true")

            const req = {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + postSource.token
                }
            }

            fetch(searchURL, req).then(response => {
                if (response.ok)
                {
                    response.json().then(json => {
                        if (json.accounts.length > 0)
                        {
                            const id = json.accounts[0].id
                            const followURL = new URL(`/api/v1/accounts/${id}/follow`, source)
                            req.method = 'POST'
                            fetch(followURL, req).then(response => {
                                console.log(response.ok)
                            })
                        }
                    });
                }
            })

        }
    })
}

/**
 * 
 * @param {Number} serverIndex 
 * @returns 
 */
function PromptToken(serverIndex)
{
    const token = prompt("Add token").trim()


    const objectStore = db.transaction(MastodonServers, "readwrite").objectStore(MastodonServers)
    objectStore.openCursor(IDBKeyRange.only(serverIndex)).onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor)
        {
            const data = cursor.value
            data.token = token
            cursor.update(data)
            UpdateServerList()
            cursor.continue();
        }
    }

}


async function ViewUpdate() {
    const hash = window.location.hash
    document.body.classList.value = hash.substring(1)

    switch(hash)
    {
        case "#explore":
            await DisplayPosts("Trends")
            await DownloadPosts("Trends")
            await DisplayPosts("Trends")
            break;
        case "#local":
            await DisplayPosts("Public")
            await DownloadPosts("Public")
            await DisplayPosts("Public")
            break;
        case "#home":
            await DisplayPosts("Home")
            await DownloadPosts("Home")
            await DisplayPosts("Home")
            break;
        case "#adventure":
            await DisplayPosts("Adventure")
            await DownloadPosts("Adventure")
            await DisplayPosts("Adventure")
            break;
        case "#settings":

            break;
        default:
            window.location.hash = "#explore"
            break;
    }
}
window.addEventListener('hashchange', ViewUpdate)
window.addEventListener(DBReady.type, ViewUpdate)