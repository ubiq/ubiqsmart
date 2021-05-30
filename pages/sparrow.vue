<template>
  <v-sheet
    align="center"
    justify="center"
    class="pt-12 bg-0 mx-auto"
    style="max-width: 800px"
  >
    <v-row v-if="hasMetaMask" style="text-align: center">
      <v-alert show type="warning" outlined text class="mb-12">{{
        $t('sparrow.conflict')
      }}</v-alert>
    </v-row>
    <img src="/sparrow/icon-128.png" class="mx-auto" />
    <h3>{{ $t('sparrow.title') }}</h3>
    <template v-if="!hasSparrow">
      <v-row no-gutters align="center" justify="center" class="mt-4">
        <v-list max-width="320px" outlined>
          <v-list-item :href="browsers[browser]" target="_blank">
            <v-list-item-avatar>
              <v-img :src="'/browsers/' + browser + '.png'" width="48px;" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ $t('sparrow.get') }}</v-list-item-title>
              <v-list-item-subtitle
                >{{ $t('sparrow.for') }} {{ browser }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action
              ><v-icon>mdi-chevron-right</v-icon></v-list-item-action
            >
          </v-list-item>
        </v-list>
      </v-row>
    </template>
    <template v-else>
      <v-row no-gutters align="center" justify="center" class="mt-4">
        <v-list max-width="320px" outlined>
          <v-list-item :href="browsers[browser]" target="_blank">
            <v-list-item-avatar>
              <v-img :src="'/browsers/' + browser + '.png'" width="48px;" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{
                $t('sparrow.installed')
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ browser }} </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action><v-icon>mdi-check</v-icon></v-list-item-action>
          </v-list-item>
        </v-list>
      </v-row>
    </template>
    <v-row no-gutters align="center" justify="center" class="my-2">
      <small>{{ $t('sparrow.available') }}</small>
    </v-row>
    <v-row no-gutters align="center" justify="center">
      <template v-for="(url, id) in browsers">
        <a
          v-if="id !== browser"
          :key="id"
          :href="url"
          target="_blank"
          class="mx-1"
        >
          <img :src="'/browsers/' + id + '.png'" width="24px;" />
        </a>
      </template>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="12">
        <v-card outlined tile style="min-height: 205px">
          <v-card-title style="display: block">{{
            $t('sparrow.box1title')
          }}</v-card-title>
          <v-card-text>
            {{ $t('sparrow.box1text') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-card outlined tile style="min-height: 205px">
          <v-card-title style="display: block">{{
            $t('sparrow.box2title')
          }}</v-card-title>
          <v-card-text>{{ $t('sparrow.box2text') }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <img src="/sparrow/sparrow.png" class="mt-6" style="max-width: 280px" />
  </v-sheet>
</template>

<script>
export default {
  name: 'Sparrow',
  data() {
    return {
      browsers: {
        firefox: 'https://addons.mozilla.org/en-US/firefox/addon/ubiq-sparrow/',
        chrome:
          'https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd',
        chromium:
          'https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd',
        edge:
          'https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd',
        brave:
          'https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd',
      },
    }
  },
  computed: {
    hasMetaMask() {
      return window.ethereum?.isMetaMask
    },
    hasSparrow() {
      return window.ethereum?.isSparrow
    },
    browser() {
      return this.$store.state.browser
    },
  },
}
</script>
