<script>
import NavBar from "../components/organisms/NavBar.vue";
import CreatePost from "../components/organisms/CreatePost.vue";

export default {
  name: "NewsFeed",
  components: {
    NavBar,
    CreatePost
  },
};
</script>

<template>
  <div id="news-feed">
    <NavBar/>
    <CreatePost/>

  </div>
</template>

<style lang = "scss">
</style>