<template>
  <div class="pt-4 pb-4">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="text-center">
            <p
              id="blog-card-type"
              class="card-text text-warning text-uppercase"
            >
              {{ blogPost.published_at }} / {{ blogPost.tags[0].name }}
            </p>
            <h1 id="blog-card-title" class="card-title text-capitalize">
              {{ blogPost.title }}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid px-0">
      <figure class="post-full-image">
        <img
          class="border-0 bg-transparent img-fluid"
          :src="blogPost.feature_image"
          alt="responsive"
          sizes="(max-width: 800px) 400px,
                            (max-width: 1170px) 700px,
                            1400px"
        />
      </figure>
    </div>
    <section class="container post-full-content">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item card-text _blog-featured-date">|</li>
        <li
          id="blog-card-author"
          class="list-inline-item card-text text-dark _blog-featured-date py-4"
        >
          <strong class="text-warning">By:</strong>
          {{ blogPost.authors[0].name }}
        </li>
      </ul>
      <div class="post-content text-dark pb-5" v-html="blogPost.html" />
    </section>
  </div>
</template>

<script>
import Ghost from '~/plugins/ghost.js'

export default {
  layout: 'blog-layout',
  asyncData({ params }) {
    return Promise.all([
      Ghost.getPost(
        { slug: params.slug, include: 'tags,authors' },
        { formats: ['html', 'plaintext'] }
      )
    ])
      .then(post => {
        return {
          blogPost: post[0]
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>
<style lang="scss">
body {
  padding-top: 56px;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
big,
blockquote,
canvas,
caption,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  line-height: 1.15;
  font-weight: 700;
  text-rendering: optimizeLegibility;
}

blockquote {
  margin: 0 0 1.5em;
  padding: 0 1.5em;
  border-left: 3px solid #3eb0ef;
}
.kg-image {
  max-width: 100%;
}
p {
  code {
    word-break: break-all;
  }
}

.post-full-content {
  position: relative;
  margin: 0 auto;
  padding: 70px 100px 0;
  min-height: 230px;
  background: #fff;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  dl,
  ol,
  p,
  pre,
  ul {
    min-width: 100%;
  }

  @media (max-width: 1170px) {
    padding: 5vw 7vw 0;
  }

  &::before {
    left: -5px;
    transform: rotate(-5deg);
  }

  &::after {
    left: -5px;
    transform: rotate(-5deg);
  }

  code {
    padding: 0 5px 2px;
    font-size: 0.8em;
    line-height: 1em;
    font-weight: 400 !important;
    background: #e5eff5;
    border-radius: 3px;
  }
  pre {
    overflow-x: auto;
    margin: 1.5em 0 3em;
    padding: 20px;
    max-width: 100%;
    border: 1px solid #000;
    color: #e5eff5;
    font-size: 0.8rem;
    line-height: 1.5em;
    background: #0e0f11;
    border-radius: 5px;

    code {
      padding: 0;
      font-size: inherit;
      line-height: inherit;
      background: transparent;
    }
  }
}
.post-content {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  max-width: 920px;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    z-index: -1;
    display: block;
    width: 20px;
    height: 200px;
    background: rgba(39, 44, 49, 0.15);
    filter: blur(5px);
  }
}
.post-full-image {
  width: 100%;
  margin: 0 0 -165px;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1170px) {
    margin: 0 0 -100px;
    border-radius: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 600px;

    @media (max-width: 1170px) {
      height: 600px;
    }
  }
}
.blog-content {
  line-height: 1.58;
  font-size: 1rem;
  text-justify: inter-character;

  img {
    max-width: 100%;
  }
}
.blog-content-divider {
  border-top: 2px solid #ffffff;
}
a {
  color: #343a40;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #f8ce51;
  }
}
</style>
