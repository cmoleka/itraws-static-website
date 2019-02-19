<template>
  <div>
    <h1 class="text-center">{{ data.title }}</h1>
    <p class="project-description-2">{{ data.description }}</p>
    <div class="text-center" v-show="data.displaySubHeadlineLink">
      <a :href="data.subLinkUrl" class="project-link">
        {{ data.subLinkTitle }}
      </a>
    </div>
    <div
      v-for="(section, index) in data.contentSection"
      :index="index"
      :key="index.id"
    >
      <div class="_about-spacing-2">
        <h2 class="text-center">{{ section.fields.sectionHeading }}</h2>
      </div>

      <p
        class="project-description"
        v-html="$md.render(section.fields.sectionContent)"
      />
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  layout: 'page',
  head: {
    title: 'Itraws - Learn more about us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Learn about Itraws, who we are and what we do'
      }
    ]
  },
  asyncData() {
    return Promise.all([client.getEntry('6SvTsvrISxNJgFiE5iaEXg')])
      .then(entry => {
        return {
          data: entry[0].fields
        }
      })
      .catch(e => console.log(e))
  }
}
</script>

<style lang="scss">
hr {
  border-color: rgba(255, 255, 255, 0.384) !important;
}
</style>
