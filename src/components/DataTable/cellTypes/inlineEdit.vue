<template>
  <span>
    <template v-if="type == 'input'">
      <input
        @keyup.enter="handleSave"
        v-model="internalValue"
        v-if="inlineEdit"
        :type="inputType"
        class="form-control"
      />
    </template>

    <template v-else-if="type == 'textarea'">
      <textarea
        @keyup.enter.shift="handleSave"
        v-model="internalValue"
        v-if="inlineEdit"
        class="form-control"
      ></textarea>
    </template>

    <template v-else>
      <p class="alert alert-danger">bilinmeyen type</p>
    </template>

    <span v-if="!inlineEdit" @click="handleToggleInlineEdit">{{
      internalValue
    }}</span>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    primaryKey: {},
    type: {
      type: String,
      default: "input",
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      inlineEdit: false,
      internalValue: this.value,
    };
  },
  methods: {
    handleToggleInlineEdit() {
      this.inlineEdit = !this.inlineEdit;
    },
    handleSave() {
      this.handleToggleInlineEdit();
      this.$emit(
        "onInlineEditChangeValue",
        this.primaryKey,
        this.internalValue
      );
    },
  },
};
</script>

<style>
</style>