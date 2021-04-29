<script>
import NavBar from "../components/organisms/NavBar.vue";
import CreatePost from "../components/organisms/CreatePost.vue";
import Post from "../components/organisms/Post.vue";

export default {
  name: "NewsFeed",
  components: {
    NavBar,
    CreatePost,
    Post,
  },
};
</script>

<template>
  <div id="news-feed">
    <NavBar />
    <div class="news-feed__max-container">
      <CreatePost class="news-feed__create-post" />
      <div class="news-feed__spacer"></div>
      <Post class="news-feed__post" />
    </div>
  </div>
</template>

<style lang = "scss">
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


</style>