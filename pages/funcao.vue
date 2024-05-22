<template>
  <v-row>
    <v-col v-for="(item, x) in items" :key="x" cols="12" md="3">
      <v-card
        class="ma-3"
        :title="item.name"
        :subtitle="item.descricao"
        text="Em 2016 coloquei como uma das metas do ano Aprender a fazer um bom nhoque, mas foi só no final de 2018 que finalmente fiz um nhoque com cara e sabor de nhoque."
        theme="dark"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ElementosPage",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    await this.getItensAPI();
  },
  methods: {
    async getItensAPI() {
      try {
        const response = await this.$api.get("/elemento");
        this.items = response.data;
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    },
  },
};
</script>

<style></style>
