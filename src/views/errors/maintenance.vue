<template>
  <div>
    <div class="container px-4 pt-20 text-center">
      <h1 class="text-3xl md:text-6xl font-bold text-gray-200">
        Down for maintenance
      </h1>
      <p class="max-w-md mx-auto">
        Sorry, we're down for scheduled maintenance. Please&nbsp;check&nbsp;back&nbsp;soon.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  components: {
  },
  metaInfo() {
    return {
      title: this.$siteName,
    };
  },
}
</script>
