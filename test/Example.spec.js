/**
 * @jest-environment jsdom
 */

// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// components
import { mount, createLocalVue } from '@vue/test-utils'
import ExampleComponent from '@/components/Example.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('ExampleComponent.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('is a Vue instance', () => {
    const wrapper = mount(ExampleComponent, {
      localVue,
      vuetify,
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
