<script>
import NavBar from "../components/organisms/NavBar.vue";
import CreatePost from "../components/organisms/CreatePost.vue";

export default {
  name: "NewsFeed",
  components: {
    NavBar,
    CreatePost,
  },
};
</script>

<template>
  <div id="news-feed">
    <NavBar />
    <CreatePost class="news-feed__create-post" />
  </div>
</template>

<style lang = "scss">
.news-feed__create-post {
  margin-top: 40px;
  @extend .max-container-news-feed;
}
</style>