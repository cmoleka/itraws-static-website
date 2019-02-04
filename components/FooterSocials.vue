<template>
  <a :href="socialLink" target="_blank" :id="socialId">
    <img
      class="social-media-icons-60 mx-4"
      :src="socialImage"
      alt="Responsive"
    />
  </a>
</template>

<script>
export default {
  props: {
    socialLink: {
      type: String,
      required: false
    },
    socialImage: {
      type: String,
      required: true
    },
    socialId: {
      type: String,
      required: false
    }
  }
}
</script>
