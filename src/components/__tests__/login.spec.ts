// src/components/__tests__/HelloWorld.spec.ts
import { shallowMount } from '@vue/test-utils'
import LoginForm from '../molecules/LoginForm.vue'

import "@types/jest"

describe('LoginForm.vue', () => {
  test('login', () => {
    const wrapper = shallowMount(LoginForm, {
    })
    expect(wrapper.text()).toMatch("Üye Girişi")
  })
})