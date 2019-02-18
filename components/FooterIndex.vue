<template>
  <div>
    <div class="mb-5 align-items-center">
      <footer-socials
        v-for="social in socials"
        :key="social.id"
        :social-link="social.link"
        :social-image="social.image"
      />
    </div>
    <footer-copy/>
  </div>
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
          image: 'social/github.svg'
        },
        {
          id: 'Twitter',
          link: 'https://twitter.com/itraws',
          image: 'social/twitter.svg'
        }
      ]
    }
  }
}
</script>
