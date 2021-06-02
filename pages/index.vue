<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col cols="12" class="text-center pa-0">
      <div class="text-center my-6">
        <v-avatar tile class="pa-2 bordered-avatar" size="320" max-width="100%">
          <v-img :src="params.logo[theme]" height="250" contain class="pa-2" />
        </v-avatar>
      </div>
      <p class="mx-auto" style="width: 420px; max-width: 85%">
        {{ $t('home.desc') }}
      </p>
      <v-row no-gutters align="center" class="text-center pt-4">
        <span class="mx-auto">
          <v-btn
            color="primary"
            nuxt
            :to="'/' + locale + '/what-is-ubiq'"
            x-large
            min-width="200px"
            class="mb-2"
            style="text-transform: none"
          >
            <v-icon class="mr-1">mdi-gauge</v-icon>
            {{ $t('home.getStarted') }}
          </v-btn>
          <v-btn
            color="#212121"
            style="color: #fff; text-transform: none"
            href="https://discord.gg/ubiq"
            target="_blank"
            x-large
            min-width="200px"
            class="mb-2"
          >
            <v-icon class="mr-1">mdi-discord</v-icon>
            {{ $t('home.discord') }}
          </v-btn>
        </span>
      </v-row>
      <v-row
        v-if="!!articles"
        no-gutters
        align="center"
        justify="center"
        class="px-1 mt-12"
      >
        <v-window v-model="onboarding" continuous show-arrows-on-hover>
          <v-window-item v-for="(slide, index) of articles" :key="index">
            <v-card
              align="left"
              width="480px"
              class="mx-auto"
              flat
              tile
              :outlined="theme === 'light'"
            >
              <v-img height="200px" :src="slide.image" />
              <v-card-title>{{ slide.title }}</v-card-title>
              <v-card-subtitle
                ><i>by {{ slide.creator }}</i></v-card-subtitle
              >
              <v-card-text>
                {{ clip(slide['content:encodedSnippet']) }}
              </v-card-text>
              <v-card-actions>
                <v-btn text @click="prev">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-spacer />
                <v-btn text tile ripple :href="slide.link" target="_blank">
                  {{ $t('home.readMore') }}
                </v-btn>
                <v-spacer />
                <v-btn text @click="next">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-window-item>
        </v-window>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      onboarding: 0,
      timer: null,
    }
  },
  computed: {
    params() {
      return this.$store.state.params
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    isMobile() {
      return this.$store.state.mobile
    },
    locale() {
      return this.$i18n.locale
    },
    articles() {
      return [...this.$store.state.medium.articles].reverse()
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    clip(text) {
      if (text) {
        const str = text.substr(0, 290)
        const pos = str.lastIndexOf(' ')
        return str.substr(0, pos) + '...'
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        if (this.onboarding < this.articles.length) {
          this.onboarding = this.onboarding + 1
        } else {
          this.onboarding = 0
        }
      }, 6000)
    },
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
      // reset timer
      clearInterval(this.timer)
      this.startTimer()
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
      // reset timer
      clearInterval(this.timer)
      this.startTimer()
    },
  },
}
</script>
