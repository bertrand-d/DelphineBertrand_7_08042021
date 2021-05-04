<script>
const axios = require("axios").default;
import PictureProfile from "../atoms/PictureProfile.vue";
import Button from "../atoms/Button.vue";

export default {
  name: "CreatePost",
  props: ["value"],
  components: {
    PictureProfile,
    Button,
  },
  data: function () {
    return {
      uploadQuantity: 0,
      contenu: null,
      media_url: null,

      errors: {
        emptyContent: false,
      },
    };
  },
  methods: {
    previewFiles(event) {
      this.uploadQuantity = event.target.files.length;
    },
    notifyParent() {
      this.$emit('refresh'); //refresh get all post when add new post
    },
    sendPost() {
      if (!this.contenu) {
        this.errors.emptyContent = true;
        return console.log("content can't be empty");
      }
      const today = new Date().toISOString().slice(0, 10);
      const token = sessionStorage.getItem("token");
      const postData = {
        date: today,
        contenu: this.contenu,
        media_url: this.media_url,
        auteur: sessionStorage.getItem("userId"),
      };

      axios
        .post("http://localhost:3000/api/feed/post/", postData, {
          headers: { authorization: "Bearer " + token },
        })
        .then((response) => {
          this.contenu = null;
          this.media_url = null;
          this.notifyParent()
          console.log(response);          
        });
    },
  },
};
</script>

<template>
  <div class="create-post">
    <div class="create-post__body">
      <PictureProfile class="create-post__body__img" src="default-avatar.png" />
      <input
        class="create-post__body__input"
        type="text"
        name="create-post"
        placeholder="Partagez vos idées ici"
        required="required"
        v-model="contenu"
      />
      <p class="create-post__body__alert" v-if="this.errors.emptyContent">
        * Merci de compléter ce champ
      </p>
    </div>
    <div class="create-post__footer">
      <i class="create-post__footer__icon far fa-image"></i>
      <label class="create-post__footer__label" for="media"
        >Ajouter un média</label
      >
      <input
        class="create-post__footer__input"
        type="file"
        multiple
        accept="image/png, image/jpeg, image/jpg, image/png, video/mp4, video/mkv"
        name="media"
        id="media"
        @change="previewFiles"
      />
      <p
        v-if="this.uploadQuantity"
        class="create-post__footer__upload-quantity"
      >
        {{ this.uploadQuantity }} fichier<span v-if="this.uploadQuantity > 1"
          >s</span
        >
        ajouté<span v-if="this.uploadQuantity > 1">s</span>
      </p>

      <Button
        class="create-post__footer__button"
        text="Envoyer"
        @click="sendPost()"
      />
    </div>
  </div>
</template>

<style lang="scss">
.create-post {
  padding: 20px;
  background-color: white;
  border-radius: $border-radius-m;
  border: solid 2px #e6dede;

  &__body {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &__img {
      margin-right: 20px;
      //because of margin-right, picture isnt an exact circle, min and max size permit to keep correct picture sizes
      min-width: 60px;
      max-width: 60px;
      min-height: 60px;
      height: 60px;
      max-height: 60px;
    }

    &__input {
      width: 100%;
      min-width: 20%;
      height: 60px;
      background-color: #f5f5f5;
      border: solid 2px #b8b2b2;
      padding-left: 20px;
      border-radius: $border-radius-l;

      &::placeholder {
        opacity: 100%;
        font-size: 0.8rem;
      }
    }

    &__alert {
      @extend .alert-msg;
    }
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 80px;

    &__icon {
      margin-right: 20px;
      font-size: 2rem;
      color: $secondary-color;
    }

    &__label {
      cursor: pointer;
      font-weight: $font-weight-bold;
      padding: 1px 3px 1px 3px;
      transition: color ease-in-out 0.25s;

      &:hover {
        color: lighten($secondary-color, 15%);
      }
    }

    &__input {
      display: none;
    }

    &__upload-quantity {
      border-left: 1px solid black;
      margin-left: 20px;
      padding-left: 20px;
    }

    &__button {
      background-color: $secondary-color;
      border-radius: $border-radius-s;
      transition: background-color ease-in-out 0.25s;
      height: 50px;
      width: 250px;
      margin-left: auto;

      &:hover {
        background-color: lighten($secondary-color, 15%);
      }
    }
  }
}
</style>