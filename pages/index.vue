<template>
  <v-container class="pa-4 text-center">
    <h1 style="color: white">{{ valor }}</h1>
    <BotaoPadraoComponent
      text="Contar"
      :dialog="dialog"
      @clicou-botao="abrirDialog"
      @excluir="deleteItem"
    />
    <v-btn class="ml-2" color="pink" @click="mudaPagina()">
      <v-icon> mdi-twitter </v-icon>
    </v-btn>

    <v-btn class="ml-2" color="green" @click="funcFor">
      <v-icon> mdi-bug-check-outline </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      ativo: false,
      dialog: false,
      valor: 0,
    };
  },

  watch: {
    dialog(evento) {
      this.valor++;
    },
  },

  created() {},

  methods: {
    async getItens() {
      const response = await this.$api.get("/elemento");
      this.items = response.data;
      this.loading = false;
    },
    async deleteItem(items) {
      if (confirm(`Deseja deletar o registro com id ${items.id}`)) {
        const response = await this.$api.post("/elemento/destroy", {
          id: items.id,
        });
        if (response.type == "error") {
          alert(response.message);
        }
      }
      await this.getItens();
    },
    async persist() {
      if (this.atividade.id) {
        const response = await this.$api.post(
          `/elemento/persist/${this.atividade.id}`,
          this.atividade
        );
      } else {
        const response = await this.$api.post(
          "/elemento/persist",
          this.atividade
        );
      }
      this.resetAtividade();
      await this.getItems();
    },
    mudaPagina() {
      this.$router.push({ path: "/x" });
    },
    funcFor() {
      this.$router.push({ path: "/funcao" });
    },
    abrirDialog() {
      this.dialog = true;
      this.valor++;
    },
  },
};
</script>