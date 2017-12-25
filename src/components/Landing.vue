<template lang="pug">
  .hello
    h1 {{ msg }}
    div(v-for="story in topStories", v-html="story.rank + ': '+ story.id")
</template>

<script>
import { db } from "../firebase";

export default {
  name: 'top-stories',
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
      source: db.ref('v0/topstories').limitToFirst(25)
    },
  }
};
</script>
