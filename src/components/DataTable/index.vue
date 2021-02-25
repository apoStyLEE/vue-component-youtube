<template>
  <div>
    <div class="p-5" v-if="schema.showSearch">
      <input
        type="text"
        v-model="searchText"
        placeholder="aranacak kelime"
        class="form-control"
      />
    </div>

    <table class="table">
      <thead>
        <tr>
          <th
            v-for="(field, index) in schema.fields"
            :key="index"
            :width="field.width"
          >
            {{ field.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, rowIndex) in filteredItems" :key="rowIndex">
          <td v-for="(field, colmnIndex) in schema.fields" :key="colmnIndex">
            {{ item[field.field] }}
          </td>
        </tr>
      </tbody>

      <slot name="footer" :items="filteredItems">
        <tfoot v-if="schema.showFooter">
          <tr>
            <td :colspan="schema.fields.length">
              Toplam kayıt sayısı <strong>{{ items.length }}</strong>
            </td>
          </tr>
        </tfoot>
      </slot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    schema: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item[this.schema.searchField].startsWith(this.searchText)
      );
    },
  },
};
</script>

<style>
</style>