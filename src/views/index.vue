<template>
  <div class="text-center p-8">
    <h1 class="text-3xl pb-5">
      {{ $t(`${localePath}.intro.title`, { siteName: $siteName }) }}
    </h1>
    <p>
      {{ $t(`${localePath}.intro.p-1`) }}
    </p>
    <p>
      <a
        :href="$siteDomain"
        class="hover:text-blue-500"
      >
        {{ $siteDomain }}
      </a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Index',
  components: {
  },
  data() {
    return {
      localePath: 'pages.index',
    };
  },
  metaInfo() {
    return {
      title: this.$t('meta.title', { siteName: this.$siteName }),
    };
  },
}
</script>
