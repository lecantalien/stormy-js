<template>
  <div class="login-form">
    <div v-if="userList !== undefined && userList.length > 0"
         class="login-profile-wrapper d-flex justify-content-between flex-wrap">
      <a v-for="profile in userList"
         :key="profile.id"
         class="d-block login-profilex mb-3"
         href="#"
         @click.prevent="loginAs(profile)">
        <div class="profile-image">
          <img v-if="profile.profilePicture === undefined"
               :alt="profile.nickname"
               src="../assets/caravane.png">
          <img v-else
               :alt="profile.nickname"
               :src="profile.profilePicture">
        </div>
        <div class="label-username">
          <span class="label-username-text">
            {{ profile.nickname }}
          </span>
        </div>
      </a>
    </div>
    <hr>
    <div class="mb-3">
      <label class="form-label" for="name_user">Nouveau profile</label>
      <input id="name_user" v-model="usernameInputValue"
             :disabled="loading"
             class="form-control"
             placeholder="ex : Macacos" type="text">
    </div>
    <div class="d-flex justify-content-around">
      <button :disabled="loading"
              class="btn  btn-primary"
              @click.prevent="addProfile">Create
      </button>
    </div>
  </div>
</template>

<script>
import {ToastService} from "@/mixins/ToastService";
import {User} from "@/classes/User";

export default {
  name: "login-form",
  mixins: [ToastService],
  props: {},
  data() {
    return {
      d: null,
      usernameInputValue: '',
      loading: false,
    }
  },
  watch: {},
  computed: {
    userList() {
      return this.$store.getters.getUserList;
    },
    currentUser() {
      return this.$store.getters.getUser;
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    loginAs(profile) {
      console.log('loginAs', profile);
      this.$store.commit('update_user', profile);
    },
    checkUsername(usernameStr) {
      return !(usernameStr === undefined || usernameStr === null
          || usernameStr.length < 3 || usernameStr.length > 20);
    },
    addProfile() {
      this.loading = true;
      let newUsername = this.usernameInputValue.trim();
      if (!this.checkUsername(newUsername)) {
        this.AppToast.error('Username must be between 3 and 20 characters');
        this.loading = false;
        return;
      }

      let exists = false;
      this.userList.find(user => {
        if (user.getNickname() === newUsername) {
          exists = true;
        }
      });

      if (exists) {
        this.AppToast.error('Username already exists');
        this.loading = false;
        return;
      }

      let newUser = new User(newUsername);
      this.$store.commit('add_userList', newUser);
      this.loading = false;
    }
  },
  components: {},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>