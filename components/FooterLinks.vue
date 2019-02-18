<template>
  <li class="list-inline-item px-2">
    <nuxt-link
      :to="linkPage"
      :id="linkId"
      class="text-decoration-none _blog-featured-date text-uppercase text-reset font-weight-bold"
      >{{ linkLabel }}</nuxt-link
    >
  </li>
</template>

<script>
export default {
  props: {
    linkId: {
      type: Number,
      required: false
    },
    linkPage: {
      type: String,
      required: true
    },
    linkLabel: {
      type: String,
      required: true
    }
  }
}
</script>
