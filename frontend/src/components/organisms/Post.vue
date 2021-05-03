<script>
const axios = require("axios").default;
import PictureProfile from "../atoms/PictureProfile.vue";
import Button from "../atoms/Button";

export default {
  name: "Post",
  components: {
    PictureProfile,
    Button,
  },
  props: ["postData"],
  data: function () {
    return {
      modes: {
        commentMode: false,
      },
      emptyContent: false,
      contenu: null,
      allComments: [],
      userId: sessionStorage.getItem("userId"),
      role : sessionStorage.getItem("role"),
    };
  },
  methods: {
    notifyParent() {
      this.$emit("refresh"); //refresh get all post when add new post
    },
    deletePost() {
      const postId = this.postData.id;
      const token = sessionStorage.getItem("token");
      axios
        .delete("http://localhost:3000/api/feed/post/" + postId, {
          headers: { authorization: "Bearer " + token },
        })
        .then(() => {
          console.log("post supprimé");
          this.notifyParent();
        });
    },
    commentMode() {
      this.modes.commentMode = true;
    },
    sendComment() {
      if (!this.contenu) {
        this.emptyContent = true;
        return console.log("content can't be empty");
      }
      const today = new Date().toISOString().slice(0, 10);
      const token = sessionStorage.getItem("token");
      const commentData = {
        date: today,
        post: this.postData.id,
        contenu: this.contenu,
        auteur: sessionStorage.getItem("userId"),
      };

      axios
        .post("http://localhost:3000/api/feed/comment/", commentData, {
          headers: { authorization: "Bearer " + token },
        })
        .then(() => {
          this.contenu = null;
          this.getcomments();
        });
    },
    getcomments() {
      const postId = this.postData.id;
    const token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/feed/comment/" + postId, {
        headers: { authorization: "Bearer " + token },
      })
      .then((response) => {
        this.allComments = response.data.comments;
      });
    }
  },
  mounted() {
    this.getcomments();
  },
};
</script>

<template>
  <div class="post">
    <div class="post__header">
      <PictureProfile class="post__header__img" src="default-avatar.png" />
      <div>
        <p class="post__header__name">
          {{ postData.prenom }}
          <span class="post__header__name--uppercase">{{ postData.nom }}</span>
        </p>
        <p class="post__header__date">Le {{ postData.date }}</p>
      </div>
      <Button
        class="post__header__delete-button"
        text="supprimer le post"
        @click="deletePost()"
        v-if="postData.auteur == this.userId || this.role == 1"
      />
    </div>
    <div class="post__body">
      <p class="post__body__text">
        {{ postData.contenu }}
      </p>
      <div class="post__body__spacer"></div>
      <div class="post__body__comment" @click="commentMode()">
        <i class="post__body__comment__icon far fa-comment"></i>
        <p class="post__body__comment__text">Commenter</p>
      </div>
      <div class="post__body__spacer" v-if="this.modes.commentMode"></div>
    </div>
    <div class="post__footer">
      <div class="post__footer__create-comment" v-if="this.modes.commentMode">
        <input
          class="post__footer__create-comment__input"
          type="text"
          name="create-comment"
          placeholder="Ajoutez un commentaire"
          required="required"
          v-model="contenu"
        />
        <Button
          class="post__footer__create-comment__button"
          text="Envoyer"
          @click="sendComment()"
        />
      </div>
    </div>
    <div>
      <p v-for="comment in this.allComments" :key="comment.id">
        {{ comment.contenu }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.post {
  padding: 20px;
  background-color: white;
  border-radius: $border-radius-m;
  border: solid 2px #e6dede;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &__img {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    &__name {
      text-transform: capitalize;
      font-weight: $font-weight-bold;
      margin-bottom: 5px;
    }

    &__name--uppercase {
      text-transform: uppercase;
    }

    &__delete-button {
      height: 50px;
      border-radius: $border-radius-s;
      width: 150px;
      margin-left: auto;
    }
  }

  &__body {
    &__text {
      margin-bottom: 20px;
    }

    &__spacer {
      width: 100%;
      margin-bottom: 20px;
      border-bottom: solid 1px #e6dede;
    }

    &__comment {
      margin-bottom: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &__icon {
        text-align: center;
        margin-right: 10px;
        margin-left: auto;
        font-size: 1.5rem;
        color: $secondary-color;
      }

      &__text {
        margin-right: auto;
        text-align: center;
      }
    }
  }

  &__footer {
    &__create-comment {
      display: flex;

      &__input {
        width: 100%;
        min-width: 20%;
        height: 40px;
        background-color: #f5f5f5;
        border: solid 2px #b8b2b2;
        padding-left: 20px;
        border-radius: $border-radius-l;
      }

      &__button {
        height: 40px;
        background-color: $secondary-color;
        border-radius: $border-radius-s;
        transition: background-color ease-in-out 0.25s;
        width: 150px;
        margin-left: 20px;

        &:hover {
          background-color: lighten($secondary-color, 15%);
        }
      }
    }
  }
}
</style>
