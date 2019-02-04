<template>
  <div class="jumbotron-fluid">
    <div
      id="blog-featured"
      class="container-fluid d-flex flex-column"
      :style="{
        backgroundImage: 'url(' + featuredImage + ')'
      }"
    >
      <div
        id="blog-featured-card"
        class="card border-0 _blog-featured-card mx-auto mt-auto"
      >
        <div class="card-body m-1">
          <h2 id="blog-card-title" class="card-title m-0">
            <nuxt-link
              :to="featuredLink"
              class="text-decoration-none text-reset"
              >{{ featuredTitle }}</nuxt-link
            >
          </h2>
          <div class="row">
            <div class="col my-auto">
              <p
                id="blog-card-type"
                class="card-text my-1 _blog-featured-type text-warning"
              >
                {{ featuredTag }}
              </p>
              <p id="blog-card-date" class="card-text _blog-featured-date m-0">
                {{ featuredDate }}
              </p>
            </div>
            <div class="col text-right my-auto">
              <nuxt-link :to="'/blog/' + featuredLink" class="project-link"
                >read now</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featuredImage: String,
    featuredTitle: String,
    featuredLink: String,
    featuredTag: String,
    featuredDate: String
  }
}
</script>
