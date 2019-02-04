<template>
  <div>
    <Featured
      :featured-image="isFeatured[0].feature_image"
      :featured-title="isFeatured[0].title"
      :featured-link="isFeatured[0].slug"
      :featured-tag="isFeatured[0].tags[0].name"
      :featured-date="isFeatured[0].published_at"
    />
    <div class="container">
      <div class="row">
        <!--Blog posts-->
        <div class="col-sm-8">
          <h3 class="text-uppercase pl-4 pt-5">recent posts</h3>

          <!--Blog post card start-->
          <div
            v-for="(post, index) in blogPosts"
            :key="index"
            class="card border-0 bg-transparent mb-5"
          >
            <div class="card-body">
              <div class="row">
                <div class="col-lg">
                  <img
                    class="img-thumbnail border-0 bg-transparent"
                    :src="post.feature_image"
                    alt="responsive"
                  />
                </div>
                <div class="col-lg">
                  <p
                    id="blog-card-type"
                    class="card-text text-primary text-uppercase"
                  >
                    {{ post.tags[0].name }}
                  </p>
                  <h3 id="blog-card-title" class="card-title m-0">
                    <nuxt-link
                      :to="'/blog/' + post.slug"
                      class="text-decoration-none text-reset"
                      >{{ post.title }}</nuxt-link
                    >
                  </h3>
                  <ul class="list-unstyled list-inline">
                    <li
                      id="blog-card-date"
                      class="list-inline-item card-text _blog-featured-date"
                    >
                      {{ post.published_at }}
                    </li>
                    <li class="list-inline-item card-text _blog-featured-date">
                      |
                    </li>
                    <li
                      id="blog-card-author"
                      class="list-inline-item card-text _blog-featured-date"
                    >
                      {{ post.authors[0].name }}
                    </li>
                  </ul>
                  <p
                    class="card-text _blog-featured-date"
                    v-html="post.excerpt"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--Blog post card end-->
        </div>
        <!--Blog Side bar-->
        <div class="col-sm-4">
          <h3 class="text-uppercase pl-4 pt-5">Categories</h3>
          <ul class="list-unstyled pl-4 pt-1">
            <li class="text-uppercase my-3">All</li>
            <li class="text-uppercase text-warning my-3">It crudes</li>
            <li class="text-uppercase text-danger my-3">hive bolt</li>
            <li class="text-uppercase text-primary my-3">victoria analytica</li>
            <li class="text-uppercase text-haze my-3">company</li>
            <li class="text-uppercase text-honey my-3">research</li>
          </ul>
          <h3 class="text-uppercase mt-4 d-none d-lg-block pl-4 pt-2">
            follow itraws
          </h3>
          <ul class="list-unstyled d-none d-lg-block pl-4 pt-1">
            <li>
              <div class="row my-3">
                <div class="col-sm-2">
                  <img
                    class="social-media-icons-60"
                    src="@/src/assets/img/GitHub  - 60x60.svg"
                    alt="Responsive"
                  />
                </div>
                <div class="col-sm-1">
                  <p class="text-capitalize">
                    <a href="#" class="project-link">github</a>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="row my-3">
                <div class="col-sm-2">
                  <img
                    class="social-media-icons-60"
                    src="@/src/assets/img/Twitter  - 60x60.svg"
                    alt="Responsive"
                  />
                </div>
                <div class="col-sm-1">
                  <p class="text-capitalize">
                    <a href="#" class="project-link">twitter</a>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="row my-3">
                <div class="col-sm-2">
                  <img
                    class="social-media-icons-60"
                    src="@/src/assets/img/Medium - 60x60.svg"
                    alt="Responsive"
                  />
                </div>
                <div class="col-sm-1">
                  <p class="text-capitalize">
                    <a href="#" class="project-link">medium</a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Featured from '~/components/BlogJumbotron.vue'
import Ghost from '~/plugins/ghost.js'

export default {
  layout: 'blog-layout',
  components: {
    Featured
  },
  asyncData() {
    return Promise.all([Ghost.getAllPosts(), Ghost.getAllTags()])
      .then(([posts, tags]) => {
        return {
          blogPosts: posts,
          blogTags: tags,
          featuredPost: {}
        }
      })
      .catch(err => {
        console.error(err)
      })
  },
  computed: {
    isFeatured() {
      return this.blogPosts
        .filter(obj => {
          return obj.featured != false
        })
        .map(obj => {
          return obj
        })
    }
  }
}
</script>
