<script>
const axios = require("axios").default;
import NavBar from "../components/organisms/NavBar.vue";
import CreatePost from "../components/organisms/CreatePost.vue";
import Post from "../components/organisms/Post.vue";

export default {
  name: "NewsFeed",
  components: {
    NavBar,
    CreatePost,
    Post
  },
  data: function () {
    return {
      allPosts: [],
    };
  },
  methods: {
    getPosts() {
      const token = sessionStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/feed/post/", {
          headers: { authorization: "Bearer " + token },
        })
        .then((response) => {
          this.allPosts = response.data.post;
          console.log(response);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<template>
  <div id="news-feed">
    <NavBar />
    <div class="news-feed__max-container">
      <CreatePost class="news-feed__create-post" @refresh="getPosts()" />
      <div class="news-feed__spacer"></div>  
      <Post class="news-feed__post" v-for="post in allPosts" :key="post.id" :postData="post"/>    
    </div>
  </div>
</template>

<style lang="scss">
.news-feed__max-container {
  @extend .max-container-news-feed;
}

.news-feed__create-post {
  margin-top: 40px;
  margin-bottom: 40px;
}

.news-feed__spacer {
  width: 100%;
  margin-bottom: 40px;
  border-bottom: solid 2px #b8b2b2;
}

.news-feed__post {
  margin-bottom: 40px;
}

</style>