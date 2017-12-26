<template lang="pug">
  div
    story(
      :story-id="storyId"
    )
</template>
<script>

import Story from '@/components/Story';

export default {
  components: {
    Story,
  },
  computed: {
    storyId() {
      return this.$route.params.id;
    }
  }
}
</script>
