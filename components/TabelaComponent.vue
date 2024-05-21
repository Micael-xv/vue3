<template>
  <v-container style="background-color: ">
    <v-row>
      <v-col cols="11">
        <h1 style="color: white">
          {{ titulo }}
        </h1>
      </v-col>

      <v-col>
        <v-btn
          icon="mdi-plus"
          size="default"
          color="green"
          @click="criar"
        />
      </v-col>

      <v-col>
        <v-data-table :headers="headers" :items="items" theme="dark">
          <template #item.actions="{ item }">
            <v-icon class="me-2" size="small" @click="editItem(item)">
              mdi-pencil
            </v-icon>

            <v-icon size="small" @click="deleteItem(item)">
              mdi-delete 
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TabelaComponent",
  props: {
    items: {
      type: Array,
    },
    headers: {
      type: Array,
    },
    titulo: {
      type: String,
    },
  },

  emits: ["excluir"],
  data() {
    return {
      dialog: false,
    };
  },

  data() {
    return {};
  },

  methods: {
    deleteItem(item) {
      this.$emit("excluir", item);
    },
    criar() {
      this.$emit("criar");
    },
    editItem(item) {
      this.$emit("editar", item);
    },
  },
};
</script>

<style>
.v-table tbody tr:nth-child(even) {
  background-color: rgb(3, 3, 36);
}

.v-table tbody tr:nth-child(odd) {
  background-color: rgb(47, 4, 63);
}
</style>
