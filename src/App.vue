<template lang="pug">
  div
    .navbar-fixed
      nav.inner
        .nav-wrapper
          a.left.brand-logo HN
          ul.left.hide-on-med-and-down
            li
              a Top
            li
              a New
            li
              a Show
            li
              a Ask
    #app
      router-view
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    margin-left: 50px;
    margin-right: 50px;
  }

  nav.inner {
    padding: 0 50px;
  }

  .nav-wrapper .brand-logo {
    position: relative;
  }
</style>
