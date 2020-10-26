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
        {
          title: 'Sass',
          icon: 'fab fa-sass',
          child: [
              {
                href: '/sass/set_up',
                title: 'Set Up',
                icon: 'fas fa-circle'
              }
          ]
        },
        {
          title: ' Vue Property',
          icon: 'fa fa-chart-area',
          child: [
              {
                // href: '/form/validation',
                title: 'data',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'props',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'created',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'mounted',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'computed',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'methods',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'watch',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'filter',
                icon: 'fas fa-circle'
              },
          ]
        },
        {
          title: 'v-attribute',
          icon: 'fa fa-chart-area',
          child: [
              {
                // href: '/form/validation',
                title: 'v-bind',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'props',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'created',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'mounted',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'computed',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'methods',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'watch',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'filter',
                icon: 'fas fa-circle'
              },
          ]
        },
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
        },
        {
          href: '/polling',
          title: 'Polling',
          icon: 'fas fa-bullseye'
        },
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.v-sidebar-menu{
  background-color: $main;
}
</style>
