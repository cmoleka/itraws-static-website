<template>
  <div class="container-fluid pages-bg px-0">
    <nav-bar />
    <side-bar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/Navbar.vue'
import SideBar from '~/components/SideBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    NavBar,
    SideBar,
    Footer
  }
}
</script>
