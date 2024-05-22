<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        v-for="(item, x) in items"
        :key="x"
        class="ma-12"
        :title="item.name"
        :subtitle="item.descricao"
        text="Itens carregados com sucesso"
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
    await this.getItens();
  },
  methods: {
    async getItens() {
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
