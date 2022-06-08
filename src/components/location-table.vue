<template>

  <div class="location-table">
    <table>
      <tr>
        <td>ville</td>
        <td>address</td>
        <td>supr</td>
        <td>voir plus</td>
      </tr>
      <tr>
        <td>aurillac</td>
        <td>rue de moine</td>
        <td><input type="button" value="supr"></td>
        <td><input type="button" value="voir"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "location-table",
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
  components: {},
  beforeUnmount() {
  }
}

</script>

<style scoped>

</style>