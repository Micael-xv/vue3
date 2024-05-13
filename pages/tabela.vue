<template>
  <TabelaComponent
    :headers="headers"
    :items="items"
    />
</template>

<script>
  export default {
    data: () => {
      return {
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
          title: 'actions',
          key: 'actions'
        }
      ],
      items: []
      }
    },
    async created(){
      await this.getItens();
    },


    methods: {
      async getItens(){
        const response = await this.$api.get('/elemento')
        this.items = response.data
        console.log(this.items)
      },
    },
  }
</script>