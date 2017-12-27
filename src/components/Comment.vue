<template lang="pug">
  .comment
    hr
    div.author
      span.hn-user(v-html="commentBy")
      timeago.age(
        :since="commentTimeMilliseconds"
      )
    div.text
      span.comment-text(v-html="commentText")
</template>

<script>
  import { db } from '@/firebase';

  export default {
    props: {
      commentId: {
        type: Number,
        required: true,
      }
    },
    data() {
      return {
        comment: {},
      }
    },
    created() {
      let commentRef = this.$firebaseRefs.comment.child(this.commentId);
      commentRef.on('value', snapshot => {
        this.comment = snapshot.val();
      });
    },
    computed: {
      commentBy() {
        return this.comment.by;
      },
      commentText() {
         return this.comment.text;
      },
      commentTimeMilliseconds() {
         return parseInt(this.comment.time) * 1000;
      },
    },
    firebase: {
      comment: {
        source: db.ref('v0/item/'),
      }
    },
  }
</script>

<style scoped>
    span.hn-user {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 9pt;
      opacity: 0.8;
    }

    .age {
      font-size: 9pt;
    }

    span.comment-text {
      font-size: 11pt;
    }

    div.text {
      margin-inline-start: 5px;
      margin-inline-end: 5px;
    }

    hr {
      opacity: 0.3;
    }
</style>

