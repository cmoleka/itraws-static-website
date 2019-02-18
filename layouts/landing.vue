<template>
  <div>
    <div class="index-gradient-bg-overlay-layer-2" />

    <no-ssr>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="index-particles-bg-overlay"
      />
    </no-ssr>
    <div class="index-gradient-bg-overlay" />
    <div class="container-fluid">
      <nav-bar />
      <side-bar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/HomepageNavbar.vue'
import SideBar from '~/components/SideBar.vue'

export default {
  head: {
    bodyAttrs: {
      class: 'index-graphic-bg min-vh-100'
    }
  },
  components: {
    NavBar,
    SideBar
  }
}
</script>
