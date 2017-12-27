<template lang="pug">
  div.content
    story(
      :story-id="storyId"
    )
    div
      span.comments-header comments
      comment(
        v-for="(commentId, index) in storyCommentsIds"
        :comment-id="commentId"
        :key="index")
</template>
<script>
import { db } from '@/firebase';
import Story from '@/components/Story';
import Comment from '@/components/Comment';

export default {
  components: {
    Story,
    Comment
  },
  data() {
    return {
      story: {},
    }
  },
  created() {
    let storyRef = this.$firebaseRefs.story.child(this.storyId);
    storyRef.on('value', snapshot => {
      this.story = snapshot.val();
    });
  },
  computed: {
    storyId() {
      return parseInt(this.$route.params.id);
    },
    storyCommentsIds() {
      return this.story.kids;
    },
  },
  firebase: {
    story: {
      source: db.ref('v0/item/'),
    }
  },
}
</script>

<style scoped>
  span.comments-header {
    font-size: 11pt;
    opacity: 0.7;
  }
</style>

