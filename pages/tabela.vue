<template>
  <v-container style="justify-content: center; border-radius: 25px;">
    <!-- <h1 style="color: white;">Elementos</h1> -->
    <v-row>
      <v-col>
        <TabelaComponent @criar="dialog = true" titulo="Elementos" :headers="headers" :items="items" @excluir="deleteItem"
          @editar="editItem" />
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="100%" title="Colocar elementos" theme="dark">
        <template #actions>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="15">
                  <v-text-field label="Nome do produto" v-model="elemento.name" enable />
                </v-col>

                <v-col cols="12" sm="15">
                  <v-text-field label="Descrição" v-model="elemento.descricao"  />
                </v-col>

                <v-col cols="12" sm="15">
                  <v-text-field label="Imagem" v-model="elemento.img" />
                </v-col>
                <v-col>
                  <v-autocomplete
                  v-model="elemento.idElemento"
                  :items="eventos"
                  item-title="usuario"
                  item-value="id"
                  />
                  <v-col>
                    <v-btn class="ms-auto justify-center d-flex align-center" style="background-color: crimson;"
                      text="Salvar" @click="dialog = false" />
                  </v-col>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </template>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false,
      ativo: true,
      loading: true,
      textoUsuario: null,
      valor: 0,
      elemento: {
        id: null,
        name: null,
        descricao: null,
        img: null,
        publico: null,
        idUsuario: null,
      },

      headers: [
        {
          title: 'Identificação',
          key: 'id'
        },
        {
          title: 'Nome do produto',
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
      idUsuario: [],
    }
  },
  async created() {
    await this.getItens();
  },

  methods: {
    async getItens() {
      const response = await this.$api.get('/elemento')
      this.items = response.data
      this.loading = false;
    },
    async deleteItem(items) {
      if (confirm(`Deseja deletar o registro com id ${items.id}`)) {
        const response = await this.$api.post('/elemento/destroy', { id: items.id });
        if (response.type == 'error') {
          alert(response.message);
        }
      }
      await this.getItens();
    },
    editItem(item) {
      this.elemento = { ...item }
      this.dialog = true;
    },
    async getElemento() {
      const response = await this.$api.get('/elemento');
      this.elemento = response.data;
    },

    async persist() {
      if (this.atividade.id) {
        const response = await this.$api.post(`/elemento/persist/${this.elemento.id}`, this.elemento);
      } else {
        const response = await this.$api.post('/elemento/persist', this.elemento);
      }
      this.resetelemento()
      await this.getItems();
    },
  },
}
</script>