<template>
  <div class="posts-new">
    <img v-if="status" :src="`https://http.cat/${status}`" />
    <form v-on:submit.prevent="createPost()">
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
    </form>
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
      status: "",
    };
  },

  methods: {
    createPost: function () {
      console.log("Creating a post!");
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          this.$router.push("/posts");
          console.log("Success!", response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
