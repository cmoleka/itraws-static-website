<template>
  <div class="container-fluid pages-bg">
    <nav-bar />
    <side-bar />
    <div class="container _content-container">
      <nuxt />
    </div>
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
