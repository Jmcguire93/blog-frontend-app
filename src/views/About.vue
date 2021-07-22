<template>
  <div class="about">
    <h1>About</h1>
    <p>{{ message }}</p>
    <p>
      Click
      <router-link to="/login">here</router-link>
      to begin using this application
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message:
        "Working on multi-page front-end with authentication. On this front end, we have added CRUD actions for blog posts.",
    };
  },
  created: function () {},
  methods: {},
};
</script>
