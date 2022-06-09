<template>
  <div class="dialog-map card mb-2">
    <!-- your code here :) -->
    <div class="card-body">
      <div class="w-100">
        <h3 class="bolder">{{ label }}</h3>
      </div>
      <div class="w-100">
        <span class="d-block latitude text-muted small">{{ lat }}°</span>
        <span class="d-block longitude text-muted small">{{ lon }}°</span>
      </div>
      <div class="w-100 d-flex justify-content-center">
        <div class="form-element">
          <select v-model="rangeValue"
                  class="form-control"
                  @change="changeRange">
            <option v-for="i in rangeOptions"
                    :key="'opt_map_' + i"
                    :value="i">{{ i }} km
            </option>
          </select>
        </div>
        <button class="btn btn-primary"
                @click="addToProfile">➕
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {Location} from "@/classes/Location";

export default {
  name: "dialog-map",
  props: {
    data: {},
    modelValue: {},
  },
  data() {
    return {
      d: null,
      rangeValue: 5,
      rangeOptions: undefined,
    }
  },
  watch: {},
  computed: {
    label() {
      return this.data?.properties?.label || '';
    },
    lat() {
      return this.data?.geometry?.coordinates[0] || '';
    },
    lon() {
      return this.data?.geometry?.coordinates[1] || '';
    },
  },
  created() {
    let options = [];
    for (let i = 5; i <= 50; i += 5) {
      options.push(i);
    }
    this.rangeOptions = options;
  },
  mounted() {
  },
  methods: {
    addToProfile() {
      let location = new Location(this.rangeValue, this.label,
          this.lat, this.lon, this.data);
      this.$emit('newLocation', location)
    },
    changeRange() {
      this.$emit('update:modelValue', this.rangeValue);
    },
  },
  components: {},
  beforeUnmount() {
  }
}
</script>
<style scoped>
</style>