<template>
  <div class="c-menu">
    <nav class="c-menu-nav">
      <div class="o-box">
        <ul class="c-menu-nav__list">
          <li v-for="item in nav" :key="item.name" class="c-menu-nav__item">
            <NuxtLink
              exact
              :to="item.route"
              class="c-menu-nav__link"
              @click.native="closeMenu"
            >
              <h2 class="c-menu-nav__row2">
                <div class="u-bg" />
                {{ item.name }}
              </h2>
              <h2 class="c-menu-nav__row1">{{ item.name }}</h2>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const nav = reactive([
          { name: 'Work', route: '/' },
          { name: 'Archive', route: '/archive' },
          { name: 'Contacts', route: '/contacts' },
        ])

        const closeMenu = () => {
          const html = document.getElementsByTagName('html')[0]
          html.classList.remove('menu-active')
        }

        return {
          nav,
          closeMenu,
        }
    }
})
</script>
