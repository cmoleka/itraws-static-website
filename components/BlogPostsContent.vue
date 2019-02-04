<template>
  <div v-html="$md.render(content)"/>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="scss">
hr {
  height: 0;
  margin: 0.5rem 0 !important;
  overflow: hidden;
  box-sizing: content-box;
  border-top: 1px solid rgba(237, 237, 237, 0.336);
}
.blog-content-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(237, 237, 237, 0.575);
}

pre {
  //margin: 0.5rem;
  color: #ffffff;
  background: #212529;
}

blockquote {
  background: rgba(237, 237, 237, 0.336);
  border-radius: 5px;
  margin: 1rem;

  p {
    padding: 1rem;
  }
}
</style>
