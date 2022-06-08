<template>
  <div class="ProfileView">
    <h1>My Profile</h1>
    <!-- your code here :) -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 fx">
        <profile-editor></profile-editor>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileEditor from "@/components/profile-editor";

export default {
  name: "ProfileView",
  props: {},
  data() {
    return {
      d: null,
    }
  },
  watch: {},
  computed: {},
  created() {
  },
  mounted() {
  },
  methods: {},
  components: {ProfileEditor},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>