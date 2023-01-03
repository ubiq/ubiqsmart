<template>
  <v-app dark>
    <v-app-bar fixed app :flat="isMobile" clipped-right>
      <v-app-bar-nav-icon @click.stop="toggleNavDrawer()"></v-app-bar-nav-icon>
      <v-btn icon nuxt to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <template v-if="isMobile">
        <search-mobile />
      </template>
      <template v-else>
        <search />
      </template>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in avlLocales"
            :key="index"
            @click="$i18n.setLocale(item.code)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item :href="params.github" target="_blank">
            <v-list-item-title>{{ $t('helpTranslate') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon href="https://github.com/ubiq" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <resizable-drawer id="navigation" side="left">
      <v-toolbar>
        <v-spacer />
        <nuxt-link to="/">
          <img :src="params['logo-full'][theme]" height="38" class="mt-1" />
        </nuxt-link>
        <v-spacer />
      </v-toolbar>
      <v-list dense>
        <v-subheader class="ml-4">{{ $t('menu.getStarted') }}</v-subheader>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          nuxt
          color="primary"
          :to="{ path: item.path }"
        >
          <v-list-item-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="ml-4">{{ $t('menu.more') }}</v-subheader>
        <v-list-item link href="https://blog.ubiqsmart.com" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-post</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.blog') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="https://odin.ubiqsmart.com" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.gitbook') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="https://twitter.com/ubiqsmart" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-twitter</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.twitter') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="https://discord.gg/ubiq" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-discord</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.discord') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="ml-4">{{ $t('menu.explore') }}</v-subheader>
        <v-list-item link href="https://stats.ubiqscan.io" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-gauge</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.stats') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="https://ubiqscan.io" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-cube-scan</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.explorer') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          href="https://shinobi-info.ubiq.ninja"
          target="_blank"
        >
          <v-list-item-avatar>
            <v-icon>mdi-ninja</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.shinobi') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="https://redshift.ubiqsmart.com" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-bridge</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.redshift') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="https://jawacamp.ubiqsmart.com" target="_blank">
          <v-list-item-avatar>
            <v-icon>mdi-image-multiple</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.jawacamp') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </resizable-drawer>
    <v-main>
      <v-app-bar short flat class="ticker-bar">
        <v-col
          cols="1"
          style="min-width: 100px; max-width: 100%"
          class="flex-grow-1 flex-shrink-0 pt-0"
        >
          <marquee-text
            :key="shinobi.lastSync.tokens"
            :duration="60"
            :repeat="5"
          >
            <v-row no-gutters>
              <v-sheet
                v-for="(token, index) in shinobi.tokens"
                :key="index"
                class="ticker"
              >
                {{ token.symbol }} - ${{ token.price.toFixed(4) }}
              </v-sheet>
            </v-row>
          </marquee-text>
        </v-col>
        <v-col
          cols="1"
          class="flex-grow-0 flex-shrink-0 pt-0"
          style="min-width: 200px; max-width: 200px"
        >
          <v-btn
            v-if="shinobi.ubqPrice"
            color="primary"
            large
            text
            tile
            href="https://shinobi-info.ubiq.ninja"
            target="_blank"
            >UBQ - ${{ shinobi.ubqPrice }}</v-btn
          >
        </v-col>
      </v-app-bar>
      <v-container class="pb-12 mb-12">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      padless
      app
      fixed
      height="22px"
      style="
        background-color: var(--v-primary-base);
        font-size: 12px;
        font-weight: 600;
      "
      class="pa-0"
    >
      <v-btn
        class="bg-0 py-0 px-2"
        height="22px"
        small
        tile
        depressed
        ripple
        href="https://github.com/ubiq/go-ubiq/releases"
        target="_blank"
        style="text-transform: none; color: #fff"
      >
        <v-icon small class="mx-1">mdi-source-repository</v-icon>
        <strong>{{ gubiq }}</strong>
      </v-btn>
      <v-spacer />
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn
            small
            tile
            text
            class="bg-0 py-0 px-2"
            style="color: #fff"
            height="22px"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon small class="mx-1">mdi-cube-scan</v-icon>
            <strong>{{ nf.format(status.block) }}</strong>
          </v-btn>
        </template>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-cube-scan</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{
              $t('footer.height.title', [nf.format(status.block)])
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              $t('footer.height.subtitle')
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-tooltip>
      <v-tooltip v-if="!isMobile" top>
        <template #activator="{ on, attrs }">
          <v-btn
            small
            tile
            text
            class="bg-0 py-0 px-2"
            style="color: #fff"
            height="22px"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon small class="mx-1">mdi-web-clock</v-icon>
            <strong>{{ status.epoch }}</strong>
          </v-btn>
        </template>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-web-clock</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{
              $t('footer.epoch.title', [status.epoch])
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              $t('footer.epoch.subtitle')
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-tooltip>
      <v-tooltip v-if="!isMobile" top>
        <template #activator="{ on, attrs }">
          <v-btn
            small
            tile
            text
            class="bg-0 py-0 px-2"
            style="color: #fff"
            height="22px"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon small class="mx-1">mdi-memory</v-icon>
            <strong>{{ $t('footer.dag.size', [status.size]) }}</strong>
          </v-btn>
        </template>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-memory</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{
              $t('footer.dag.title', [status.size])
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              $t('footer.dag.subtitle')
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-tooltip>
    </v-footer>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
      class="mb-5"
      style="z-index: 5"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
import ResizableDrawer from '~/components/app/ResizableDrawer'
import Search from '~/components/app/Search'
import SearchMobile from '~/components/app/mobile/Search'

export default {
  name: 'DefaultLayout',
  components: {
    ResizableDrawer,
    Search,
    SearchMobile,
    MarqueeText,
  },
  data() {
    return {
      fab: false,
      nf: new Intl.NumberFormat(this.$i18n.locale, {}),
    }
  },
  async fetch() {
    await this.$store.dispatch('set_mobile', window.innerWidth < 600)
    await this.$store.dispatch('set_browser')
    await this.$store.dispatch('dag/set_dag')
    await this.$store.dispatch('content/fetch')
    await this.$store.dispatch('shinobi/getPriceUsd')
    await this.$store.dispatch('shinobi/getTokens')
    await this.$store.dispatch('shinobi/getGlobal')
    await this.$store.dispatch('medium/getBlogPosts')
    if (!this.$store.state.mobile) {
      this.$store.dispatch('drawers/set_navigation', true)
      this.$store.dispatch('drawers/set_toc', true)
    }
  },
  computed: {
    darkmode: {
      get() {
        return this.$vuetify.theme.dark
      },
      set() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    params() {
      return this.$store.state.params
    },
    avlLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    locale() {
      return this.$i18n.locale
    },
    groups() {
      return this.$store.state.content.groups
    },
    items() {
      return this.$store.state.content.items
    },
    article() {
      return this.$store.state.content.selected.article
    },
    isMobile() {
      return this.$store.state.mobile
    },
    shinobi() {
      return this.$store.state.shinobi
    },
    status() {
      return this.$store.state.dag
    },
    gubiq() {
      return this.$store.state.gubiq
    },
  },
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    toggleNavDrawer() {
      this.$store.dispatch('drawers/toggleNavigation')
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo('header', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      })
    },
    onResize() {
      this.$store.dispatch('set_mobile', window.innerWidth < 600)
    },
  },
}
</script>
