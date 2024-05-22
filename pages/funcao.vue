<template>
  <v-row>
    <!-- <v-col v-for="(item, x) in items" :key="x" cols="12" md="3">
      <v-card
        class="ma-3"
        :title="item.name"
        :subtitle="item.descricao"
        text="Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido."
        theme="dark"
      />
    </v-col> -->
    <v-col v-for="(item, x) in items" :key="x" cols="12" md="3">
      <v-card
        class="ma-3"
        :title="item.name"
        :subtitle="item.descricao"
        text="..."
        theme="dark"
      >
        <v-card-actions>
          <v-btn>Ver</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ElementoFuncao",
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
