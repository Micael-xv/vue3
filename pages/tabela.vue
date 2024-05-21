<template>
  <v-container style="justify-content: center; border-radius: 25px;"> 
    <!-- <h1 style="color: white;">Elementos</h1> -->
    <v-row>
      <v-col>
        <TabelaComponent titulo="Elementos" :headers="headers" :items="items" @excluir="deleteItem"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => {
    return {
      dialog: false,	
      valor: 0,
      ativo: true,
      loading: true,
      textoUsuario: null,
        valor: 0,
      atividade: {
        nome: null,
        descricao: null,
        img: null
      },
      headers: [
        {
          title: 'Identificação',
          key: 'id'
        },
        {
          title: 'Nome',
          key: 'name'
        },
        {
          title: 'Descrição',
          key: 'descricao'
        },
        {
          title: 'Imagem',
          key: 'img'
        },
        {
          title: 'Actions',
          key: 'actions',
          sortable: false,
        }
      ],
      items: [],
      eventos: [],
    }
  },
    async created(){
      await this.getItens();
    },

    methods: {   
      async getItens(){
        const response = await this.$api.get('/elemento')
        this.items = response.data
        this.loading = false;
      },
      async deleteItem(items) {
        if(confirm(`Deseja deletar o registro com id ${ items.id }`)) {
          const response = await this.$api.post('/elemento/destroy', { id: items.id});
          if(response.type == 'error') {
            alert(response.message);
          }
        }
        await this.getItens();
      },
      async criar() {
        const response = await this.$api.post('/atividade/persist', this.atividade);
        this.resetAtividade()
        await this.getItems();
      },
    },

  }
</script>