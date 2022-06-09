<template>

  <div class="location-listing-user">
    <div v-if="ready" class="location-listing">
      <ol class="list-group list-group-numbered">

        <li v-for="loc in locations"
            :key="loc.id"
            class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{{ loc.label }}</div>
            <div v-if="loc.data !== undefined"
                 class="content"></div>
            {{ loc.data.properties.context }}
          </div>
          <span class="badge bg-primary rounded-pill">
            {{ loc.latitude }}° - {{ loc.longitude }}°
          </span>
        </li>

      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "location-listing-user",
  props: {
    profile: {},
  },
  data() {
    return {
      d: null,
    }
  },
  watch: {},
  computed: {
    ready() {
      return this.profile !== undefined;
    },
    locations() {
      return this.profile.getLocations();
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