<template lang="pug">
  .hello
    h1 {{ msg }}
    story-item(
      v-for="(story, index) in topStories"
      :story="story"
      :key="index"
    )
</template>

<script>
import { db } from "@/firebase";
import StoryItem from '@/components/StoryItem';

export default {
  name: 'top-stories',
  components: {
    StoryItem,
  },
  data() {
    return {
      msg: 'Top Stories',
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
      source: db.ref('v0/topstories').limitToFirst(15)
    },
  }
};
</script>
