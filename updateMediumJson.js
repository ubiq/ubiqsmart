const Parser = require('rss-parser')
const jsonfile = require('jsonfile')
const parser = new Parser()
const consola = require('consola')

const file = 'assets/medium.json'

const update = async () => {
  const feed = await parser.parseURL('https://medium.com/feed/the-ubiq-report')
  consola.log(feed.title)

  // extract img src from content:encoded and set as item.image
  // why you make me do this? -_-
  for (const item of feed.items) {
    const encoded = item['content:encoded']
    const start = encoded.indexOf('<img ')
    const end = encoded.indexOf('" />', start)
    const img = encoded.substr(start + 17, end - start - 17)
    item.image = img
  }

  jsonfile
    .writeFile(file, feed.items, { spaces: 2 })
    .then((res) => {
      consola.log('Write complete')
    })
    .catch((error) => consola.error(error))
}

update()
