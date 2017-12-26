<template lang="pug">
  div
    story(
      :story-id="storyId"
    )
</template>
<script>
import { db } from '@/firebase';
import Story from '@/components/Story';

export default {
  components: {
    Story,
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
      return this.$route.params.id;
    },
    storyKids() {
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
