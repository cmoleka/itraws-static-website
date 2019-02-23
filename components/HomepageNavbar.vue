<template>
  <nav class="navbar navbar-light row justify-content-start fixed-top">
    <no-ssr placeholder="loading...">
      <sidebar-toggle />
    </no-ssr>
  </nav>
</template>

<script>
import SidebarToggle from '~/components/SideBarButtonToggle.vue'
export default {
  components: {
    SidebarToggle
  }
}
</script>
