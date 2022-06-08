<template>
  <div class="style-selector">
    <select v-model="innerValue"
            aria-label="Default select example"
            class="form-select">
      <option v-for="option in options"
              :key="option.value"
              :value="option.value">{{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "style-selector",
  props: {
    modelValue: {}
  },
  data() {
    return {
      d: null,
      innerValue: undefined,
      options: [
        {
          value: undefined,
          label: "Default"
        },
        {
          value: "darcula",
          label: "Darcula"
        },
        {
          value: "malibu",
          label: "Malibu"
        },
        {
          value: "chrome",
          label: "Chrome"
        },
      ],
    }
  },
  watch: {
    innerValue(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  },
  computed: {},
  created() {
    this.innerValue = this.modelValue;
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