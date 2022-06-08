<template>
  <div class="LoginView pt-2">
    <div class="row justify-content-center">
      <div class="col-6">
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login-form";

export default {
  name: "LoginView",
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
  components: {LoginForm},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>