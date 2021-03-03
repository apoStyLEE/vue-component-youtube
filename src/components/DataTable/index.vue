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
            <date-cell
              v-if="field.dataType == 'date'"
              :value="item[field.field]"
              :format="field.format"
            />

            <number-cell
              v-else-if="field.dataType == 'number'"
              :value="item[field.field]"
              :prefix="field.prefix"
              :suffix="field.suffix"
            />

            <inline-edit-cell
              v-else-if="field.inlineEdit"
              :value="item[field.field]"
              :primaryKey="item[schema.primaryKey]"
              :type="field.type"
              :inputType="field.inputType"
              @onInlineEditChangeValue="
                (id, value) => {
                  handleInlineEditChangeValue(field, id, value);
                }
              "
            />

            <span v-else>{{ renderCell(field, item) }}</span>
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
import DateCell from "./cellTypes/date.js";
import NumberCell from "./cellTypes/number";
import InlineEditCell from "./cellTypes/inlineEdit";

export default {
  components: {
    DateCell,
    NumberCell,
    InlineEditCell,
  },
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
  methods: {
    renderCell(field, item) {
      const itemValue = item[field.field];

      if (Array.isArray(itemValue)) {
        return itemValue.join(field.sperator || ", ");
      } else {
        return itemValue;
      }
    },
    handleInlineEditChangeValue(item, id, value) {
      this.$emit("onTextEdit", item, id, value);
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item[this.schema.searchField].startsWith(this.searchText)
      );
    },
  },
  created() {
    setTimeout(() => {
      this.$emit("onDataLoaded", 10);
    }, 2000);
  },
};
</script>

<style>
</style>