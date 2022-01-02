# ubiqsmart

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

## Linting

Linting your code before pushing is not optional. To ease this pain you can run
```
$ yarn lint-fix
```

to fix any formatting issues.

## Blog posts / Medium embed

Medium is annoying to embed

a) no API to fetch posts (the API is primarily for writes)
b) rss works for reads, but does not have CORS enabled. 

The workaround for now. 

1) Publish new post on medium.
2) run `yarn update-blog`

This will pull info via rss (serverside using node [no CORS]) and save the contents to ./assets/medium.json

3) push to github
  - `git add assets/medium.json`
  - `git commit -m 'update medium.json`
  - `git push origin master`

The client side code pulls this json directly from github master branch. A new build and deploy is **NOT** required.

## Deployment

This repo is set up to auto deploy to github pages, if deploying elsewhere (e.g prod server) update router.base in params/config.json. If running at root level of a domain e.g ubiqsmart.com, set router base to "/", build/generate and deploy.

# chart.js & vue-chartjs

vue-chartjs does not support chart.js v3. chart.js v2.9.4 or a greater 2.x release should be used instead.