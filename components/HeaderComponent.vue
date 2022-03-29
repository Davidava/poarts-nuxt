<template>
  <header class="c-header">
    <div class="c-header-wrap">
      <div class="c-header-logo">
        <a href="#"> POARTS </a>
      </div>
      <div class="c-header-burger">
        <button class="c-header-burger__button" @click="openMenu" />
      </div>
    </div>
  </header>
</template>

<script>
export default defineComponent({
    setup() {
        const openMenu = () => {
          const html = document.getElementsByTagName('html')[0]

          if (html.classList.contains('menu-active')) {
            html.classList.remove('menu-active')
          } else {
            html.classList.add('menu-active')
          }
        }

        return {
          openMenu,
        }
    }
})
</script>
