import {decode} from "blurhash"

console.log('DM')

/** @type {IDBDatabase} */
let db;
const request = indexedDB.open("FediReader",3);
request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onupgradeneeded = ( /** @type {IDBVersionChangeEvent} */ event) => {
    /**@type {IDBDatabase} */
    const d =  event.target.result

    if (!d.objectStoreNames.contains("mastodonservers"))
    {
        const serverStore = d.createObjectStore("mastodonservers", {keyPath: 'url'})
        serverStore.createIndex("icon", "icon", {unique: false})
    }
    
    if (!d.objectStoreNames.contains("posts"))
    {
        const postStore = d.createObjectStore("posts", {keyPath: "url"})
        postStore.createIndex("post", "post", {unique: false})
    }
}
request.onsuccess = (event) => {
  db = event.target.result;
  document.body.dispatchEvent(SourceUpdate)
};

const SOURCES = "sources";
const SEEN = "seen"
const HIDDEN = "hidden"
const BLOCKED = "block"

const SourceUpdate = new Event("SourceUpdate")

/** @type {HTMLElement} */
const ARTICLETEMPLATE = document.getElementById("article_template").content.firstElementChild

/** @type {HTMLElement} */
const VIDEOTEMPLATE = document.getElementById("video_element_template").content.firstElementChild

const colorPalettes = [
    "#bcc949",
    "#a8a72e",
    "#80a7d9",
    "#df8b6a",
    "#eadc8d",
    "#f2acba",
    "#a5dafc",
    "#65b698",
    "#dcdcdc"
]

/** @type {HTMLElement} */
let Target = document.body;


/**
 * 
 * @param {HTMLElement} t 
 */
export function SetTarget(t)
{
    Target = t;
}


async function DownloadPosts()
{
    
}
document.body.addEventListener(SourceUpdate.type, DownloadPosts)


/**
 * @typedef {Object} ServerInfo
 * @property {string} url
 * @property {string} icon
 */

const StorageCache = {}

/**
 * @param {string} str 
 * @returns {Array<string>}
 */
export function GetStorageArray(str)
{
    try {
        if (str in StorageCache)
        {
            return StorageCache[str];
        }
        let sources = localStorage.getItem(str);
        if (sources != null)
        {
            StorageCache[str] = JSON.parse(sources);
            return StorageCache[str]
        }
    } catch (error) {
        console.error(error)
    }
    return []
}

/**
 * @returns {Array<ServerInfo>}
 */
function GetMastodonSources()
{
    return GetStorageArray(SOURCES)
}

export function SaveStorageArray(str, arr)
{
    try {
        localStorage.setItem(str, JSON.stringify(arr));
    } catch (error) {
        console.error(error)
    }
}

function GetSourcesWithAPI()
{
    return GetStorageArray(SOURCES).filter(x => x.includes("#"))
}

function HasSourcesWithAPI()
{
    const arr = GetStorageArray(SOURCES);
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].includes("#"))
        {
            return true;
        }
    }
    return false;
}

/**
 * 
 * @param {string} str 
 */
function SafeSourceName(str)
{
    const index = str.indexOf("#")
    if (index > 0)
    {
        return str.substring(0, index+4) + "..." + str.substring(str.length-4)
    }
    return str;
}

/**
 * @param {URL} url 
 */
export function AddSource(url)
{
    let sources = GetSources();
    if (sources.includes(url.href) == false)
    {
        sources.push(url.href);
        SaveStorageArray(SOURCES, sources)
    }
}

/**
 * @param {HTMLElement} el 
 */
export async function PopulateServers(el)
{
    const servers = GetStorageArray(SOURCES)
    for (var i = 0; i < servers.length; i++)
    {
        const url = servers[i]
        const div = document.createElement("button")

        div.textContent = SafeSourceName(servers[i])
        div.classList.add("delete")
        div.title = "Remove Mastodon instance"
        div.style.backgroundColor = colorPalettes[i % colorPalettes.length]
        div.onclick = () => {
            if (window.confirm("Remove instance " + url + "?"))
            {
                SaveStorageArray(SOURCES, servers.filter(x => x != url))
                location.reload();
            }
        }
        el.append(div)
    }

    /*const div = document.createElement("button")
    div.textContent = "Add..."
    div.title = "Add new Mastodon instance"
    div.classList.add("Add");
    div.style.backgroundColor = colorPalettes[servers.length % colorPalettes.length]
    div.onclick = () => {
        let str = window.prompt("Add new server")
        console.log(str)
        try {
            if (str.startsWith("https://") == false)
            {
                str = "https://" + str;
            }
            const url = new URL(str)
            const trimmed = url.protocol + "//" + url.host + "/" + url.hash
            servers.push(trimmed)
            SaveStorageArray(SOURCES, servers)
            location.reload();
        } catch (error) {
            console.error(error)
        }
    }
    el.append(div)*/
}

export async function AddServer()
{
    const input = document.getElementById("NewMastodonUrl")
    try {
        const strPath = input.value.startsWith("http") ? input.value : "https://" + input.value
        const url = new URL(strPath)
        const shortUrl = new URL(url.protocol + "//" + url.host)
        const infoUrl = new URL("/api/v2/instance", shortUrl)

        const response = await fetch(infoUrl)

        if (!response.ok)
        {
            throw new Error('Nah')
        }

        const info = await response.json()
        const thumbnail = info.thumbnail.url

        /** @type {ServerInfo} */
        const serverInfo = {
            url: shortUrl.href,
            icon: thumbnail
        }

        db.transaction("mastodonservers", "readwrite")
            .objectStore("mastodonservers")
            .add(serverInfo)
            .onsuccess = (evt) => {
                document.body.dispatchEvent(SourceUpdate)
                input.value = ""
            }
    } catch (error)
    {
        console.error(error)
    }
}

/**
 * @returns {Array<string>}
 */
export function GetSources()
{
    return GetStorageArray(SOURCES)
}

export async function RefreshSources()
{
    const sources = GetSources();
    const ignored = GetStorageArray(HIDDEN);
    const blocked = GetStorageArray(BLOCKED);

    //const apis = ['api/v1/trends/statuses', 'api/v1/timelines/public']
    const apis = ['api/v1/trends/statuses', 'api/v1/timelines/public', 'api/v1/timelines/home']
    for (var e = 0; e < apis.length; e++)
    {
        const api = apis[e]
        for (var i = 0; i < sources.length; i++)
        {
            
            const source = new URL(sources[i]);
            const statusURL = new URL(api, source);
            
            const req = {
                method: 'GET',
                headers: {

                }
            }
            if (source.hash)
            {
                const token = source.hash.substring(1)
                req.headers["Authorization"] = "Bearer " + token
            }

            const response = await fetch(statusURL, req);
    
            if(!response.ok)
            {
                continue;
            }
    
            const color = colorPalettes[i % colorPalettes.length]
    
            /** @type {Array<Toot>} */
            const status = await response.json();
            status.forEach(x => {
                if (!ignored.includes(x.uri) && !blocked.includes(x.account.url))
                {
                    Serve(x, color)
                }
            })
        }
    }

}

/**
 * @param {string} element 
 * @param {string} title 
 * @param {string} style 
 * @returns {HTMLElement}
 */
function CreateIconElement(element, title, style)
{
    const el = document.createElement(element)
    el.title = title
    el.classList.add("icon", style)
    return el
}

/**
 * @param {string} textContent 
 * @param {string} title 
 * @param {string} style 
 */
function CreateIconButton(textContent, title, style, onclick)
{
    const btn = CreateIconElement("button", title, style)
    btn.textContent = textContent
    btn.onclick = onclick
    return btn;
}

function CreateIconLink(textContent, title, style, href)
{
    const a = CreateIconElement("a", title, style)
    a.innerText = textContent
    a.target = '_blank'
    a.href = href
    return a;
}

/**
 * 
 * @param {HTMLElement} root 
 */
export function PopulateFilters(root)
{
    const explore = document.createElement("button")
    explore.classList.add("fa-solid", "fa-hashtag", "icon")

    const user = document.createElement("button")
    user.classList.add("fa-solid", "fa-users", "icon")

    const home = document.createElement("button")
    home.classList.add("fa-solid", "fa-home", "icon")
    root.append(explore, user, home)

    root.append(document.createElement("hr"))

    const add = document.createElement("button")
    add.classList.add("fa-solid", "fa-add", "icon")
    root.append(add)
}

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
 */

/**
 * @param {Toot} obj
 * @param {string} confirm
 * @param {string} action
 */
async function StatusApi(obj, confirm, action)
{
    const postSources = GetSourcesWithAPI();
    for (var i = 0; i < postSources.length; i++)
    {
        const postSource = postSources[i];

        if (window.confirm(confirm + " post on instance " + SafeSourceName(postSource) + "?") == false)
        {
            continue;
        }

        const source = new URL(postSource);
        const statusURL = new URL("/api/v2/search", source);
        statusURL.searchParams.append("q", obj.uri)
        statusURL.searchParams.append("type", "statuses")
        statusURL.searchParams.append("resolve", "true")
            
        const req = {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + source.hash.substring(1)
            }
        }

        const response = await fetch(statusURL, req)

        if (response.ok == false)
        {
            continue;
        }

        const json = await response.json();
        const postID = json.statuses[0].id
        req.method = 'POST'
        const starURL = new URL("/api/v1/statuses/"+postID+"/"+action, source);
        const starResponse = await fetch(starURL, req)
    }
}

/**
 * 
 * @param {HTMLElement} node 
 */
function DeleteArticle(node)
{
    const ignored = GetStorageArray(HIDDEN);
    ignored.unshift(node.dataset.uri)
    if (ignored.length > 400)
    {
        ignored.length = 400
    }
    SaveStorageArray(HIDDEN, ignored)
    node.remove()
}

function BlockAccount(node)
{
    const blocked = GetStorageArray(BLOCKED)
    blocked.push(node.dataset.account)
    SaveStorageArray(BLOCKED, blocked)
    node.remove();
}

/**
 * @param {Toot} obj 
 */
function GenerateArticle(obj)
{
    /** @type {HTMLElement} */
    const newArticle = ARTICLETEMPLATE.cloneNode(true)

    /** @type {Toot} */
    const actual = obj.reblog ? obj.reblog : obj

    /** @type {Account} */
    const account = obj.account;
    

    newArticle.dataset.uri = actual.uri
    newArticle.dataset.account = account.uri

    // Source
    const srclink = newArticle.querySelector("a.status_name")
    srclink.href = obj.reblog ? obj.reblog.uri : obj.uri
    srclink.querySelector("img.status_avatar").src = account.avatar
    srclink.querySelector(".display_name").innerText = account.display_name
    srclink.querySelector(".account").innerText = account.url

    // UI
    newArticle.querySelector(".delete").onclick = () => DeleteArticle(newArticle)
    newArticle.querySelector(".block").onclick = () => BlockAccount(newArticle)
    newArticle.querySelector(".star").onclick = () => StatusApi(obj, "Star", "favourite")
    newArticle.querySelector(".share").onclick = () => StatusApi(obj, "Boost", "reblog")

    // Post
    const status_body = newArticle.querySelector(".status_body")
    const parser = new DOMParser();
    const content = parser.parseFromString(actual.content, 'text/html');
    status_body.append.apply(status_body, content.body.children);

    // Media
    const media_attachments = newArticle.querySelector(".status_media")
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

    if (actual.media_attachments.length > 0)
    {
        console.log(actual.media_attachments)
    }

    return newArticle
}


/**
 * 
 * @param {Toot} obj 
 * @param {string} color
 */
function Serve(obj, color)
{
    const uri = obj.reblog ? obj.reblog.uri : obj.uri
    if (!IsUnique(uri))
    {
        return;
    }


    const hotness = GetHotness(obj);
    const seen = GetStorageArray(SEEN);


    

    Target.append(GenerateArticle(obj));
    return;

    const article = document.createElement("article");

    const header = document.createElement("header")
    header.style.backgroundColor = color;


    const source = CreateIconLink("Source", "Go to source", "open", uri);

    const hide = CreateIconButton("Hide", "Hide this post", "delete", () => {
                        const ignored = GetStorageArray(HIDDEN);
                        ignored.unshift(article.dataset.uri)
                        if (ignored.length > 400)
                        {
                            ignored.length = 400
                        }
                        SaveStorageArray(HIDDEN, ignored)
                        article.remove()
                    });

    const block = CreateIconButton("Block user", "Block posts from this user", "block", () => {
                        const blocked = GetStorageArray(BLOCKED)
                        blocked.push(obj.account.url)
                        SaveStorageArray(BLOCKED, blocked)
                        article.remove();
                    });
    
    const star = CreateIconButton("Star post", "Star this post", "star", () => {
        StatusApi(obj, "Star", "favourite")
    })

    const share = CreateIconButton("Boost post", "Boost this post", "share", () => {
        StatusApi(obj, "Boost", "reblog")
    })


    const avatar = document.createElement("img")
    avatar.src = obj.reblog ? obj.reblog.account.avatar : obj.account.avatar
    avatar.classList.add("avatar")

    const buttons = HasSourcesWithAPI() ? [star, share, source, hide, block] : [source, hide, block]

    header.append(...buttons)
    header.append(avatar)
    article.append(header)

    article.dataset.uri = uri;
    article.dataset.hotness = hotness;
    article.dataset.seen = seen.includes(uri)
    article.style.borderColor = color;
    
    const actual = obj.reblog ? obj.reblog : obj
    const parser = new DOMParser();
    const content = parser.parseFromString(actual.content, 'text/html');
    article.append.apply(article, content.body.children);

    const newH2 = Target.querySelector("#new")
    const oldH2 = Target.querySelector("#old")

    for (var i = 0; i < actual.media_attachments.length; i++)
    {
        const ma = actual.media_attachments[i];
        if (ma.type == 'image')
        {
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
            
            article.append(a)
        }
    }
    
    if (Target.childElementCount == 0)
    {
        Target.append(article);
    }
    else
    {
        let targethotness = -1;
        /** @type {HTMLElement} */
        let target = null;
        /** @type {Array<HTMLElement>} */
        const ch = Array.from(Target.children)
        for (var i = 0; i < ch.length; i++)
        {
            const el = ch[i];
            if ("hotness" in el.dataset == false)
            {
                continue;
            }
            const elhot = parseFloat( el.dataset.hotness );
            if (elhot < hotness)
            {
                if (elhot > targethotness)
                {
                    if (el.dataset.seen == article.dataset.seen)
                    {
                        target = el;
                        targethotness = elhot;
                    }
                }
            }
        }
        if (target == null)
        {
            if (article.dataset.seen == 'false')
            {
                oldH2.before(article)
            }
            else
            {
                //oldH2.after(article)
                Target.append(article)
            }
        }
        else
        {
            target.parentElement.insertBefore(article, target)
        }
        // sort
    }

    
    seen.unshift(uri)
    if (seen.length > 600)
    {
        seen.length = 600
    }
    SaveStorageArray(SEEN, seen)


    
}

/**
 * 
 * @param {Toot} obj 
 */
function GetHotness(obj)
{
    return (obj.replies_count * 4) + (obj.reblogs_count * 2) + (obj.favourites_count + obj.account.followers_count)
}

/**
 * 
 * @param {string} uri 
 */
function IsUnique(uri)
{
    const children = Target.children;
    for (var i = 0; i < children.length; i++)
    {
        /** @type {HTMLElement} */
        const child = children.item(i);
        if (child.dataset.uri == uri)
        {
            return false;
        }
    }
    return true;
}