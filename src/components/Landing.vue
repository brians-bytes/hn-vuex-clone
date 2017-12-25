<template lang="pug">
  .hello
    h1 {{ msg }}
</template>

<script>
import { db } from "../firebase";

export default {
  name: 'Landing',
  data() {
    return {
      msg: 'Landing Page'
    };
  },
  firebase: {
    topStories: {
      source: db.ref('v0/topstories')
    },
  }
};
</script>
