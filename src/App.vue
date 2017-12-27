<template lang="pug">
  div
    .navbar-fixed
      nav.inner
        .nav-wrapper
          a.left.brand-logo HN
          ul.nav-links.left.hide-on-med-and-down
            router-link(
              active-class="active"
              to="top-stories"
              tag="li") Top
            router-link(
              active-class="active"
              to="new-stories"
              tag="li") New
            router-link(
              active-class="active"
              to="new-stories"
              tag="li") Show
            router-link(
              active-class="active"
              to="new-stories"
              tag="li") Ask
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
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
  }

  nav.inner {
    padding: 0 50px;
  }

  nav ul li {
    padding: 0 15px;
  }

  nav ul.nav-links {
    padding: 0 10px;
  }

  .nav-wrapper .brand-logo {
    position: relative;
  }
</style>
