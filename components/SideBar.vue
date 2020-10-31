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
          title: 'ENV',
          icon: 'fab fa-sass',
          child: [
              {
                href: '/env',
                title: 'Set Up',
                icon: 'fas fa-circle'
              }
          ]
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
          title: 'TypeScript',
          icon: 'fa fa-code',
          child: [
              {
                href: '/typescript/usage',
                title: 'Usage',
                icon: 'fas fa-circle'
              }
          ]
        },
        {
          title: 'JavaScript',
          icon: 'fa fa-code',
          child: [
              {
                href: '/javascript/tips',
                title: 'Tips',
                icon: 'fas fa-circle'
              }
          ]
        },
        {
          title: 'Font',
          icon: 'fa fa-code',
          child: [
              {
                href: '/font',
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
                href: '/vue_property/props',
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
                href: '/vue_property/computed',
                title: 'computed',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'methods',
                icon: 'fas fa-circle'
              },
              {
                href: '/vue_property/watch',
                title: 'watch',
                icon: 'fas fa-circle'
              },
              {
                href: '/vue_property/filter',
                title: 'filter',
                icon: 'fas fa-circle'
              },
          ]
        },
        {
          href: "/v-attribute/v-bind",
          title: "v-bind",
          icon: 'fas fa-circle'
        },
        {
          title: 'v-attribute',
          icon: 'fa fa-chart-area',
          child: [
              {
                href: "/v-attribute/v-bind",
                title: 'v-bind',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/validation',
                title: 'v-if/v-show',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'v-for',
                icon: 'fas fa-circle'
              },
              {
                // href: '/form/limit_character',
                title: 'v-model',
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
        {
          href: '/svg',
          title: 'SVG',
          icon: 'far fa-image'
        },
      ]
    }
  }
})
</script>
<style lang="scss">
.v-sidebar-menu{
  background-color: $main;
}
.v-sidebar-menu.vsm_expanded {
  max-width: 200px !important;
}
</style>
