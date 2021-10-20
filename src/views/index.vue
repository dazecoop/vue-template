<template>
  <!-- eslint-disable max-len -->
  <div class="p-8">
    <div class="text-center">
      <h1>
        {{ $t(`${localePath}.intro.title`, { siteName: $siteName }) }}
      </h1>
      <p class="text-lg font-light">
        {{ $t(`${localePath}.intro.p-1`) }}
      </p>
      <p class="text-sm">
        <a
          :href="$siteDomain"
          class="hover:text-blue-500 p-2"
        >
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="mr-1"
          />
          {{ $siteDomain }}
        </a>
      </p>
    </div>

    <hr class="my-8" />

    <form class="max-w-md mx-auto">
      <h2>Form example</h2>

      <fieldset>
        <label for="example-1">
          Regular input
        </label>
        <t-input
          id="example-1"
          placeholder="Input placeholder"
        />
      </fieldset>

      <fieldset>
        <label for="example-2">
          Has an error
        </label>
        <t-input
          id="example-2"
          class="error"
          placeholder="Input placeholder"
        />
        <div class="alert error mt-1">
          Please enter a value
        </div>
      </fieldset>

      <fieldset>
        <label for="example-3">
          Input with prepend
        </label>
        <div class="prepend">
          <span>
            http://
          </span>
          <t-input
            id="example-3"
            placeholder="Input placeholder"
            class="rounded-l-none"
          />
        </div>
      </fieldset>

      <fieldset>
        <div class="grid sm:grid-cols-3 gap-4">
          <t-button>
            Submit
          </t-button>
          <t-button
            class="loading"
            disabled
          >
            Loading
          </t-button>
        </div>
      </fieldset>
    </form>

    <hr class="my-8" />

    <div class="max-w-md mx-auto">
      <h2>Table example</h2>
      <table class="table stripe">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Val 1</td>
            <td>Val 2</td>
          </tr>
          <tr>
            <td>Val 1.1</td>
            <td>Val 2.1</td>
          </tr>
        </tbody>
      </table>
    </div>
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
