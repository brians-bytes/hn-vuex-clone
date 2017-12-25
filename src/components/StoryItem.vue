<template lang="pug">
  div.story
    span.story-rank(v-html="storyRank")
    span(v-html="storyTitle")
    span.story-hostname(v-html="storyHostName")

</template>

<script>
import { db } from '@/firebase';

export default {
  name: 'story-item',
  props: {
    story: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      storyData: {},
    }
  },
  created() {
    let storyRef = this.$firebaseRefs.storyRaw.child(this.storyId);
    storyRef.on('value', snapshot => {
      this.storyData = snapshot.val();
    });
  },
  computed: {
    storyId() {
      return this.story.id;
    },
    storyRank() {
      return this.story.rank;
    },
    storyTitle() {
      return this.storyData.title;
    },
    storyUrl() {
      return this.storyData.url;
    },
    storyHostName() {
      let matches = this.storyUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
      return matches && matches[1];
    }
  },
  firebase: {
    storyRaw: {
      source: db.ref('v0/item/'),
    }
  },
}
</script>

<style scoped>
  div.story {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  span.story-rank {
    margin-right: 5px;
    color: #ff4500;
  }

  span.story-rank:before {
    content: "#";
  }

  span.story-hostname {
    opacity: 0.5;
    padding-left: 5px;
  }

  span.story-hostname::before {
   content: "(" ;
  }

  span.story-hostname::after {
    content: ")" ;
  }
</style>


