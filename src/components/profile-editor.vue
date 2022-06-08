<template>
  <div class="profile-editor">
    <div class="image-editor-wrapper">
      <image-edit v-model="newProfilePicture"
                  :profile="currentUser"></image-edit>
    </div>
    <div class="custom-style-selector-wrapper">
      <style-selector v-model="tmpUserStyle"></style-selector>
    </div>
    <div class="profile-form-wrapper">
      <div class="profile-formx">
        <div class="mb-3">
          <label class="form-label" for="username_disabled">Email address</label>
          <input id="username_disabled" :value="currentUser.nickname"
                 aria-describedby="usernameHelp" class="form-control"
                 disabled type="text">
          <div id="usernameHelp" class="form-text">You can't change the username once you've created the account.</div>
        </div>
      </div>
      <div class="w-100 d-flex justify-content-center align-items-center mt-3">
        <button :disabled="loading"
                class="btn  btn-primary"
                @click.prevent="saveProfile">Update profile 🚀
        </button>
      </div>
    </div>
    <!-- your code here :) -->
  </div>
</template>

<script>
import ImageEdit from "@/components/image-edit";
import StyleSelector from "@/components/style-selector";

export default {
  name: "profile-editor",
  props: {},
  data() {
    return {
      d: null,
      loading: false,
      newProfilePicture: undefined,
      tmpUserStyle: undefined,
    }
  },
  watch: {},
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    }
  },
  created() {
    this.tmpUserStyle = this.currentUser.customStyle;
  },
  mounted() {

  },
  methods: {
    saveProfile() {
      this.loading = true;
      let hasChanged = false;
      if (this.newProfilePicture !== undefined) {
        this.currentUser.setProfilePicture(this.newProfilePicture);
        hasChanged = true;
      }

      if (this.tmpUserStyle !== this.currentUser.getCustomStyle()) {
        this.currentUser.setCustomStyle(this.tmpUserStyle);
        hasChanged = true;
      }

      if (hasChanged) {
        this.$store.commit('update_user_entity',
            this.currentUser);
      }

      this.loading = false;
    }
  },
  components: {StyleSelector, ImageEdit},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>