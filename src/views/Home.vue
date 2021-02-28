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
          {
            field: "date",
            title: "Tarih",
            dataType: "date",
            format: "DD.MM.YYYY",
          },
          {
            field: "price",
            title: "Fiyat",
            dataType: "number",
            suffix: " TL",
          },
          {
            field: "tags",
            title: "Etiketler",
            sperator: "; ",
          },
        ],
      },
      items: [
        {
          id: 1,
          name: "Tufan",
          city: "Ankara",
          date: "2020.02.09",
          price: "100",
          tags: ["asp", "php", "ahmet"],
        },
        {
          id: 12,
          name: "Taramalı Tüfek",
          city: "Ankara",
          date: "2020.03.06",
          price: "130",
        },
        {
          id: 2,
          name: "Ömer",
          city: "Trabzon",
          date: "2021.01.01",
          price: "2000",
        },
        {
          id: 3,
          name: "Nil",
          city: "İstanbul",
          date: "2021.04.06",
          price: "160",
        },
      ],
    };
  },
};
</script>
