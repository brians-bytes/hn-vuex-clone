<template lang="pug">
  div.content
    story(
      v-for="(story, index) in topStories"
      :story-id="story.id"
      :story-rank="story.rank"
      :key="index"
    )
</template>

<script>
import { db } from "@/firebase";
import Story from '@/components/Story';

export default {
  name: 'top-stories',
  components: {
    Story,
  },
  data() {
    return {
      topStoriesRaw: [],
    };
  },
  computed: {
    topStories() {
      return this.topStoriesRaw.map( (rawStory) => {
        return {
          rank: parseInt(rawStory['.key']) + 1,
          id: rawStory['.value'],
        };
      });
    }
  },
  firebase: {
    topStoriesRaw: {
      source: db.ref('v0/topstories').limitToFirst(25)
    },
  }
};
</script>

