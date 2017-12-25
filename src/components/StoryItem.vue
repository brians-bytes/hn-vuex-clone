<template lang="pug">
  .story
    div
      span.story-rank(v-html="storyRank")
      span.story-title(v-html="storyTitle")
      span.story-hostname(v-html="storyHostName")
    div.sub-heading
      span(v-html="storyPoints+ ' points by '+ storyBy")
      timeago.story-time(:since="storyTimeMilliseconds")
      span |
      span(v-html="storyComments + ' comments'")

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
      let storyUrl = this.storyUrl;
      if (!storyUrl) return null;
      let matches = storyUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
      return matches && matches[1];
    },
    storyPoints() {
      return this.storyData.score;
    },
    storyBy() {
      return this.storyData.by;
    },
    storyTimeMilliseconds() {
      return parseInt(this.storyData.time) * 1000;
    },
    storyComments() {
      return this.storyData.descendants;
    },
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

  span.story-title {
    font-size: 18px;
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

  .sub-heading {
    margin-left: 20px;
  }

  .sub-heading > span, .story-time {
    padding-right: 5px;
    opacity: 0.8;
    font-size: 11px;
  }
</style>


