<template>
  <aside id="drawer-holder">
    <div id="_sidebar-dismiss" class="text-right">
      <sidebar-toggle/>
    </div>
    <div class="_sidebar-header"></div>
    <ul class="list-unstyled _sidebar-components">
    <div v-show="display">
        <div class="_sidebar-section">
        <p class="_sidebar-title">Projects</p>
      </div>
      <ul class="list-unstyled">
        <li v-for="(project, index) in links" :key="index" class="text-capitalize">
          <nuxt-link :to="project.fields.slug">
            {{
            project.fields.projectTitle
            }}
          </nuxt-link>
        </li>
      </ul>
    </div>

      <div class="_sidebar-section">
        <p class="_sidebar-title">News</p>
      </div>
      <ul class="list-unstyled">
        <li>
          <a href="https://medium.com/itraws" target="_blank">Blog</a>
        </li>
      </ul>

      <div class="_sidebar-section">
        <p class="_sidebar-title">About</p>
      </div>
      <ul class="list-unstyled">
        <li>
          <nuxt-link to="/about">Itraws</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </ul>
  </aside>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

import SidebarToggle from '~/components/SideBarButtonToggleOff.vue'

export default {
  components: {
    SidebarToggle
  },
  data() {
    return {
      links: {},
      display: false
    }
  },
  created() {
    client
      .getEntries({
        content_type: 'projectsPage',
        order: '-sys.createdAt'
      })
      .then(projects => {
        this.links = projects.items
      })
      .catch(e => console.log(e))
  }
}
</script>
