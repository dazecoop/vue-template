<template>
  <div>
    <div class="container px-4 pt-20 text-center">
      <h1 class="text-7xl md:text-9xl font-bold text-gray-200">
        404
      </h1>
      <h2 class="text-xl">
        Sorry, page not found!
      </h2>
      <p class="max-w-lg mx-auto">
        The page you are looking for might have been
        removed, had its name changed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        class="underline hover:text-blue-500"
      >Back to homepage</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  components: {
  },
  metaInfo() {
    return {
      title: `404 Not Found - ${this.$siteName}`,
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
      ],
    };
  },
}
</script>
