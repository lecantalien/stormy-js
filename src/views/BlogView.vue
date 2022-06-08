<template>
  <div class="blog-view">
    <!-- your code here :) -->
    <div class="blog-listing-wrapper">
      <blog-listing></blog-listing>
    </div>
  </div>
</template>

<script>
import BlogListing from "@/components/blog-listing";

export default {
  name: "BlogView",
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
  components: {BlogListing},
}
</script>

<style scoped>

</style>