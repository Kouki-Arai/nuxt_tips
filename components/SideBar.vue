<template>
  <sidebar-menu :menu="menu" />
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "side-bar",
  data() {
    return {
      menu: [
        // {
        //   header: true,
        //   title: 'Main Navigation',
        //   icon: 'fas fa-home',
        //   hiddenOnCollapse: true
        // },
        {
          href: '/',
          title: 'Nuxt.js Tips',
          icon: 'fas fa-home'
        },
        // {
        //   href: '/validation',
        //   title: 'Validation',
        //   icon: 'fas fa-share-alt'
        // },
        {
          title: 'Form',
          icon: 'fa fa-chart-area',
          child: [
              {
                href: '/form/validation',
                title: 'Validation',
                icon: 'fas fa-circle'
              },
              {
                href: '/form/limit_character',
                title: 'Limit Character',
                icon: 'fas fa-circle'
              }
          ]
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.v-sidebar-menu{
  background-color: rgb(61,197,142);
}
</style>
