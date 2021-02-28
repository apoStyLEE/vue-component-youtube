<template>
  <span>{{ formattedNumber }}</span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    suffix: {
      type: String,
      default: "",
    },
    prefix: {
      type: String,
      default: "",
    },
  },
  computed: {
    formattedNumber() {
      return this.prefix + this.value + this.suffix;
    },
  },
};
</script>