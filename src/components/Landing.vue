<template lang="pug">
  .hello
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      msg: 'Landing Page'
    }
  }
}
</script>

<style scoped>
</style>
