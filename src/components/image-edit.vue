<template>
  <div class="image-edit">
    <div class="profile-image-overlay d-flex justify-content-center align-items-center"
         @click="uploadImage">
      <div class="overlay-message">Editer l'image</div>
    </div>

    <img v-if="tmpImage !== undefined"
         :src="tmpImage"
         alt="new image"
         class="pp-img">
    <img v-else-if="profile.profilePicture === undefined"
         :alt="profile.nickname"
         class="pp-img"
         src="../assets/caravane.png">
    <img v-else
         :alt="profile.nickname"
         :src="profile.profilePicture"
         class="pp-img">

    <div class="d-none">
      <input ref="fileInput" type="file" @change="onFileChange">
    </div>
  </div>
</template>

<script>
export default {
  name: "image-edit",
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      d: null,
      tmpImage: undefined,
    }
  },
  watch: {},
  computed: {},
  created() {
  },
  mounted() {
  },
  methods: {
    uploadImage() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      console.log('onFileChange', event.target.files);
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        // encode file as base64
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64 = reader.result;
          this.$emit('update:modelValue', base64);
          this.tmpImage = base64;
          console.log('base64', base64);
        };

      }
    },
  },
  components: {},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>