<template>
  <v-card flat tile outlined>
    <v-simple-table striped>
      <template #default>
        <tbody>
          <tr v-for="item in shuffle()" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              <a :href="item.url" target="_blank">{{ item.url }}</a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import Pools from '~/assets/pools.json'

export default {
  name: 'Pools',
  methods: {
    // shuffle items in an array
    shuffle() {
      const array = Pools
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
  },
}
</script>
