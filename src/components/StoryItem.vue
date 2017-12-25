<template lang="pug">
  div
    span.story-rank(v-html="storyRank")
    span(v-html="storyId")

</template>

<script>
export default {
  name: 'story-item',
  props: {
    story: {
      type: Object,
      required: true,
    }
  },
  computed: {
    storyId() {
      return this.story.id;
    },
    storyRank() {
      return this.story.rank;
    }
  }
}
</script>

<style scoped>
  span.story-rank {
    margin-right: 5px;
  }
</style>


