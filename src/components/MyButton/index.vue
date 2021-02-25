<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "submit",
    },
  },
};
</script>