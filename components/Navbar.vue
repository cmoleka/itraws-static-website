<template>
  <nav class="navbar navbar-light row justify-content-start fixed-top _nav-bg">
    <no-ssr placeholder="loading...">
      <sidebar-toggle />
    </no-ssr>
    <a href="/" class="align-items-center text-center col-8">
      <img
        id="logo-icon"
        class="img-fluid navbar-brand"
        alt="Responsive image"
        src="@/src/assets/img/brand/logo-icon.svg"
      />
    </a>
    <span class="navbar-text col-2">&nbsp;</span>
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
