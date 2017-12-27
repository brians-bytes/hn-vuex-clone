<template lang="pug">
  .story
    span.story-rank(
      v-if="storyRank"
      v-html="storyRank")
    .story-details
      a.story-title(
        target="_blank"
        :href="storyUrl"
        v-html="storyTitle")
      span.story-hostname(
        v-if="storyHostName !== null"
        v-html="'('+ storyHostName+')'")
      br
      span.meta(
        v-html="storyPoints+ ' points by '+ storyBy")
      timeago.story-time(
        :since="storyTimeMilliseconds")
      span.meta |
      span.meta.story-comments(
        v-html="storyComments + ' comments'"
        @click.prevent="openStory")

</template>

<script>
import { db } from '@/firebase';

export default {
  name: 'story-item',
  props: {
    storyId: {
      type: Number,
      required: true,
    },
    storyRank: {
      type: Number,
      required: false,
    },
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
    storyChildren() {
      return this.storyData.kids;
    },
  },
  methods: {
    openStory() {
      this.$router.push({
        name: 'story-item',
        params: {
          id: this.storyId
        },
      });
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
    position: relative;
    padding: 5px;
    border-bottom: 1px solid #eee;
  }

  a.story-title {
    font-size: 18px;
    color: #2c3e50;
  }

  span.story-rank {
    margin-right: 5px;
    color: #ff4500;
    position: absolute;
    width: 35px;
    font-size: 22px;
    text-align: right;
    font-weight: 400;
    top: 50%;
    transform: translateY(-50%);
  }

  div.story-details {
    position: relative;
    left: 45px;
  }

  span.story-rank:before {
    content: "#";
  }

  span.story-hostname {
    opacity: 0.5;
    padding-left: 5px;
  }

  span.story-comments {
    cursor: pointer;
  }

  span.meta, .story-time {
    padding-right: 5px;
    opacity: 0.8;
    font-size: 11px;
  }
</style>


