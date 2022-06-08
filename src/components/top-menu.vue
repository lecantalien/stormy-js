<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link v-if="currentUser === undefined" :to="{name: 'login'}"
                   class="navbar-brand">Login
      </router-link>
      <router-link v-if="currentUser !== undefined" :to="{name: 'profile'}"
                   class="navbar-brand">{{ currentUser.nickname }}
      </router-link>

      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'blog-listing-view'}" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "top-menu",
  props: {},
  data() {
    return {
      d: null,
    }
  },
  watch: {},
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {},
  components: {},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>