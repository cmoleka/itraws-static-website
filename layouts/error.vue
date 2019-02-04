<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="text-center">Page not found</h1>
    <p v-else class="project-description-2">An error occurred</p>
    <p class="project-description-2">
      Please return to
      <nuxt-link to="/">Home page</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'page'
}
</script>

<style lang="scss" scoped>
a {
  color: #f8ce51;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #f8ce51;
  }
}
</style>
