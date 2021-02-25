<template>
  <div class="home">
    <data-table :schema="schema" :items="items"> </data-table>
    <!-- 
    <hr />

    <data-table :schema="schema2" :items="items" /> -->
  </div>
</template>

<script>
import DataTable from "@/components/DataTable";

export default {
  name: "Home",
  components: {
    DataTable,
  },

  data() {
    return {
      schema: {
        showSearch: true,
        searchField: "name",
        showFooter: true,
        fields: [
          {
            field: "id",
            title: "Id",
            width: "20px",
          },
          {
            field: "name",
            title: "Adı",
          },
          {
            field: "city",
            title: "Şehir",
          },
        ],
      },
      items: [
        {
          id: 1,
          name: "Tufan",
          city: "Ankara",
        },
        {
          id: 12,
          name: "Taramalı Tüfek",
          city: "Ankara",
        },
        {
          id: 2,
          name: "Ömer",
          city: "Trabzon",
        },
        {
          id: 3,
          name: "Nil",
          city: "İstanbul",
        },
      ],

      schema2: {
        showSearch: true,
        searchField: "name",
        fields: [
          {
            field: "id",
            title: "Id",
            width: "20px",
          },
          {
            field: "name",
            title: "Adı",
          },
          {
            field: "city",
            title: "Şehir",
          },
        ],
      },
    };
  },
};
</script>
