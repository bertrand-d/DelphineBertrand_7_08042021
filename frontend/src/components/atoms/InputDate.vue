<script>
export default {
  name: "InputDate",
  props: ["value"],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  mounted() {
    window.setValue = function (val) {
      document.querySelector("#placeholder-date").value = val;
    } //get value placeholder date of birth after completion
  },
};
</script>

<template>
  <div class="input-date-container">
    <!--This div contain hack for the input date of birth-->
    <input
      class="input-date"
      v-model="inputVal"
      type="date"
      name="date-of-birth"
      required
      onblur="window.setValue(this.value)"
    />
    <input
      class="input-date"
      id="placeholder-date"
      value="Date de naissance"
      type="text"
    />
  </div>
</template>

<style lang="scss">
.input-date {
  width: 100%;
  height: 40px;
  border: solid 2px #e6dede;
  padding-left: 20px;
  border-radius: 15px;

  &::placeholder {
    opacity: 100%;
  }
}

//========== hack for input date of birth ===========
.input-date-container {
  position: relative;
  height: 60px; //this height allow to align alert message to other messages
}
.input-date {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.input-date[type="date"],
.input-date[type="date"]:focus {
  z-index: 1;
  color: transparent;
  background: transparent;
  border: none;
}
.input-date[type="date"]:focus {
  z-index: 1;
  color: black;
}
.input-date[type="date"]:focus + #placeholder-date {
  display: none;
}
//===========end===========
</style>