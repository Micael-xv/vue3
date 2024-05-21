<template>
  <v-container class="pa-4 text-center">
    <h1 style="color: white;">{{ valor }}</h1>
    <BotaoPadraoComponent
      text="Contar"
      :dialog="dialog"
      @clicou-botao="abrirDialog"
      @excluir="deleteItem"
    />
    <v-btn class="ml-2" color="pink" @click="mudaPagina()">
      <v-icon>
        mdi-check
      </v-icon>
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
    }
  },

  watch: {
    dialog(evento) {
      this.valor++
    }
  },

  created(){

  },

  methods: {
    async deleteItem(items) {
        if(confirm(`Deseja deletar o registro com id ${ items.id }`)) {
          const response = await this.$api.post('/elemento/destroy', { id: items.id});
          if(response.type == 'error') {
            alert(response.message);
          }
        }
        await this.getItens();
    },
      
    mudaPagina(){
      this.$router.push({ path: '/x' });
    },

    abrirDialog() {
      this.dialog = true;
      this.valor++;
    }
  }
}
</script>
