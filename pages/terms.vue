<template>
  <div>
    <h1 class="text-center">{{ data.pageTitle }}</h1>
    <div class="container pt-4">
      <p class="page-description" v-html="$md.render(data.pageContent)" />
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  layout: 'page',
  async asyncData() {
    try {
      const res = await client.getEntry('4XnAoDy0foO67AcLa9uarc')
      return { data: res.fields }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-description {
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 765px) {
    width: 80%;
    padding: 10px 0 40px 0;
  }
}
</style>
