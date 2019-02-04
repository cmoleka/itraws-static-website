<template>
  <div>
    <h1 class="text-center">{{ data.content.title }}</h1>
    <p class="project-description-2">{{ data.content.description }}</p>

    <div class="card-deck _about-values-container row _about-spacing">
      <div class="col-sm-6" v-for="card in data.cards" :key="card.id">
        <div class="card bg-transparent border-0">
          <div class="card-body">
            <img
              id="contact-icons"
              :src="card.fields.icon.fields.file.url"
              class="img-fluid img-thumbnail _contact-icons-spacing bg-transparent border-0"
              :alt="card.fields.title"
            >
            <h3 class="text-center">{{ card.fields.title }}</h3>
            <p class="contact-description _contact-spacing-desc">{{ card.fields.content }}</p>

            <div class="_contact-spacing text-center" v-show="card.fields.display">
              <a :href="card.fields.linkUrl" class="project-link">
                {{
                card.fields.linkTitle
                }}
              </a>
            </div>
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
    title: 'Itraws - Get in contact with us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact Itraws and let us know how we can help'
      }
    ]
  },
  asyncData() {
    return Promise.all([
      //This request, pulls the title and descript for the contact page
      client.getEntry('6JTeUzgnHEhp76AkiPqnM1')
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
