<template>
  <div class="container vh-100">
    <div class="row vh-100 align-items-center">
      <div class="col-12 text-center align-middle">
        <logo />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Footer from '~/components/FooterIndex.vue'

export default {
  layout: 'landing',
  components: {
    Logo,
    Footer
  }
}
</script>
