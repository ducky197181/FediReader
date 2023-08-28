# FediReader

Pure HTML & JS front that makes browsing select Mastodon instances easy.

Once you've added servers, FediReader makes public API calls to them and collects new posts. These are displayed in chronological order across instances in FediReader.

You can optionally enter a token to a server, which unlocks more features such as boosting, starring and following accounts.

# Timelines

Out of the box, FediReader can display three separate timelines. These are 'Explore', 'Local' and 'Adventure'.

'Explore' lists posts that are trending.

'Local' shows posts that have been posted on given instances. Some instances require a token to display local timelines.

'Adventure' displays posts that are not local to given instances but are known to it.

A fourth timeline, 'Home', is available if a server is given a token with `read:statuses`. This displays posts from accounts that you follow.

# Tokens

You can add an application token to a server to enable actions that require writing posts in your behalf. These are the permissions that the token needs to enable, and what they are used for.

## read:search

Following, boosting and favouriting requires a search to be made on the instance.

## read:accounts, follow and read:search

These are required to follow people. A search needs to be made to find the proper account ID.

## write:favourites & read:search

Enables favouriting a status. A search needs to be made to find the proper ID of the post.

## write:statuses & read:search

Enables boosting. A search needs to be made to find the right ID of the post.
