<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>

    <div v-for="post in posts" :key="post.id">
      <h2>Title: {{ post.title }}</h2>
      <p>Body: {{ post.body }}</p>
      <img v-bind:src="post.image" alt="post.title" />
      <!-- <p><router-link to="`/show/${post.id}`">Link to this post</router-link></p> -->
      <p><router-link v-bind:to="`/posts/${post.id}`">Link to post</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Here are posts!",
      posts: [],
      newPostParams: {},
      currentPost: {},
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("http://localhost:3000/posts").then((response) => {
        this.posts = response.data;
        console.log("All posts:", this.posts);
      });
    },
  },
};
</script>
