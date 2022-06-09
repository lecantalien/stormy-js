<template>
  <div class="display-map">
    <l-map ref="map" v-model:zoom="zoom_inner"
           :center="compilatedCoordinates"
           style="height:30vh">
      <l-tile-layer
          layer-type="base"
          name="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-circle v-if="mode === 'area'"
                :lat-lng="compilatedCoordinates" :radius="areaSize" color="green"/>
      <l-marker :draggable="false" :lat-lng="compilatedCoordinates"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import {ToastService} from "@/mixins/ToastService";
import {LMap, LTileLayer, LMarker, LCircle} from "@vue-leaflet/vue-leaflet";

export default {
  name: "display-map",
  mixins: [ToastService],
  props: {
    lat: {},
    lon: {},
    zoom: {
      type: Number,
      default: 9,
    },
    mode: {
      type: String,
      default: 'marker', // marker|area
    },
    areaSize: {
      type: Number,
      default: 3000,
    }
  },
  data() {
    return {
      d: null,
      zoom_inner: 9,
    }
  },
  watch: {},
  computed: {
    compilatedCoordinates() {
      return [this.lon, this.lat];
    }
  },
  created() {
    this.zoom_inner = this.zoom;
  },
  mounted() {
  },
  methods: {},
  components: {
    LMap,
    LMarker,
    LCircle,
    LTileLayer,
  },
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>