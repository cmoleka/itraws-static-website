<template>
  <footer class="container">
    <div class="row align-items-center">
      <div class="col text-center align-middle">
        <!--Social and footer-->
        <footer-socials
          v-for="social in socials"
          :key="social.id"
          :social-link="social.link"
          :social-image="social.image"
        />
        <footer-copy />

        <!---->
      </div>
    </div>
  </footer>
</template>

<script>
import FooterSocials from '~/components/FooterSocials.vue'
import FooterCopy from '~/components/FooterCopy.vue'
export default {
  components: {
    FooterSocials,
    FooterCopy
  },
  data() {
    return {
      socials: [
        {
          id: 'Github',
          link: 'https://github.com/itraws',
          image: '/social/github.svg'
        },
        {
          id: 'Medium',
          link: 'https://medium.com/itraws',
          image: '/social/medium.svg'
        },
        {
          id: 'Twitter',
          link: 'https://twitter.com/itraws',
          image: '/social/twitter.svg'
        }
      ]
    }
  }
}
</script>
