<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>What are we doing? ¯\_(ツ)_/¯</p>
    <p>
      Check out the
      <router-link to="/about">About</router-link>
      link for more details.
    </p>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Blog Posts App",
    };
  },
  created: function () {},
  methods: {},
};
</script>
