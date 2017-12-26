<template lang="pug">
  div
    span story id:
    div(v-html="storyId")
</template>
<script>
export default {
  computed: {
    storyId() {
      return this.$route.params.id;
    }
  }
}
</script>
