<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>
    Search by title:
    <input v-model="titleFilter" />
    <div
      v-for="post in filterBy(posts, titleFilter, 'title', 'body')"
      :key="post.id"
      v-bind:class="{ selected: post === currentPost }"
      v-on:click="currentPost = post"
    >
      <!-- {{ post.name }} -->
    </div>

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
import Vue2Filters from "vue2-filters";

import axios from "axios";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Posts",
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
