<template>
  <div>
    <h1 class="text-center">{{ data.content.title }}</h1>
    <p class="project-description-2">{{ data.content.description }}</p>
    <div class="text-center" v-show="data.content.displaySubHeadlineLink">
      <a :href="data.content.subLinkUrl" class="project-link">{{
        data.content.subLinkTitle
      }}</a>
    </div>
    <div class="_about-spacing-2">
      <h2 class="text-center">{{ data.content.subHeadline[0] }}</h2>
    </div>

    <p class="project-description" v-show="data.content.subHeadline[0]">
      {{ data.content.content }}
    </p>

    <div class="_about-spacing-2">
      <h2 class="text-center">{{ data.content.subHeadline[1] }}</h2>
    </div>

    <div class="card-deck _about-values-container row _about-spacing">
      <div class="col-sm-6" v-for="card in data.cards" :key="card.id">
        <div class="card bg-transparent border-0">
          <div class="card-body">
            <h3 class="text-center">{{ card.fields.title }}</h3>
            <p
              class="project-description-3 text-center"
              v-html="$md.render(card.fields.content)"
            />
          </div>
        </div>
      </div>
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
    return Promise.all([
      //This request, pulls the title and descript for the contact page
      client.getEntry('6SvTsvrISxNJgFiE5iaEXg')
    ])
      .then(entry => {
        return {
          data: {
            content: entry[0].fields,
            cards: entry[0].fields.cards2
          }
        }
      })
      .catch(e => console.log(e))
  }
}
</script>
