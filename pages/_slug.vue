<template>
  <div class="project-mobile-pd">
    <div class="text-center">
      <img
        id="project-logo"
        :src="projects.fields.projectimage.fields.file.url"
        class="project-logo"
        alt="Responsive image"
      />
      <p
        v-if="projects.fields.content"
        class="project-description _about-spacing-2 text-justify"
        v-html="$md.render(projects.fields.content)"
      />
    </div>
    <div class="text-center">
      <a
        :href="projects.fields.linkUrl"
        class="project-link"
        v-show="projects.fields.linkDisplay"
        >{{ projects.fields.linkTitle }}</a
      >
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  layout: 'page',
  head: {
    title: 'Itraws - Projects',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Learn and follow our working and upcoming projects'
      }
    ]
  },
  asyncData({ params }) {
    //This request, pulls the title and descript for the contact page
    return Promise.all([
      client.getEntries({
        content_type: 'projectsPage',
        'fields.slug': params.slug
      })
    ])
      .then(([entries]) => {
        return {
          projects: entries.items[0]
        }
      })
      .catch(e => console.log(e))
  },
  async validate({ params }) {
    try {
      const res = await client.getEntries({
        content_type: 'projectsPage',
        'fields.slug': params.slug
      })
      return res.items[0].fields.slug === params.slug
    } catch (e) {
      console.log('Page not found')
    }
  }
}
</script>

<style lang="scss" scoped>
.project-logo {
  max-width: 50%;
  height: auto;
}
.project-mobile-pd {
  @media (max-width: 765px) {
    padding-top: 20px;
  }
}
</style>
