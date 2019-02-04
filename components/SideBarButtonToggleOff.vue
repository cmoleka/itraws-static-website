<template>
  <button class="btn" @click="closeNav()" aria-label="Display Sidebar">
    <i class="fas fa-times"></i>
  </button>
</template>

<script>
export default {
  methods: {
    closeNav() {
      document.getElementById('drawer-holder').style.left = '-250px'
    }
  }
}
</script>
