<template>
  <button
    type="button"
    id="sidebarCollapse"
    class="btn text-white col-2"
    @click="openNav()"
    aria-label="Close Sidebar"
  >
    <i class="fas fa-align-left"></i>
    <span>Toggle</span>
  </button>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById('drawer-holder').style.left = '0'
    }
  }
}
</script>
