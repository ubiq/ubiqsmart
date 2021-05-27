# static

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Blog posts / Medium embed

Medium is a pain in the ass to embed

a) no API to fetch posts (the API is primarily for writes)
b) rss works for reads, but does not have CORS enabled. 

Publish The workaround for now. 

1) Post new post on medium.
2) run `node ./updateMediumJson.js`

This will pull info via rss (serverside using node [no CORS]) and save the contents to ./assets/medium.json

3) push to github
  - `git add assets/medium.json`
  - `git commit -m 'update medium.json`
  - `git push origin master`

The client side code pulls this json directly from github. A new build and deploy is **NOT** required.
