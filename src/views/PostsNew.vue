<template>
  <div class="posts-new">
    <h1>New Post!</h1>
    <div>
      Title:
      <input type="text" v-model="newPostParams.title" />
      Body:
      <input type="text" v-model="newPostParams.body" />
      Image:
      <input type="text" v-model="newPostParams.image" />
    </div>
    <button v-on:click="createPost()">Create</button>
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

  methods: {
    createPost: function () {
      console.log("Creating a post!");
      axios
        .post("http://localhost:3000/posts", this.newPostParams)
        .then((response) => {
          console.log("Success!", response.data);
          this.posts.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
