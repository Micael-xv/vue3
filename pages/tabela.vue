<template>
  <v-container style="justify-content: center; border-radius: 25px">
    <v-row>
      <v-col>
        <TabelaComponent
          :headers="headers"
          titulo="Elementos"
          :items="items"
          @criar="dialog = true"
          @excluir="deleteItem"
          @editar="editItem"
          @persist="persist"
        />
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="auto" @click:outside="resetDialog">
      <v-card max-width="100%" title="Colocar elementos" theme="dark">
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="elemento.name"
                  label="Nome do produto"
                  enable
                />
              </v-col>

              <v-col>
                <v-text-field v-model="elemento.descricao" label="Descrição" />
              </v-col>

              <v-col cols="12" sm="15">
                <v-text-field v-model="elemento.img" label="Imagem" />
              </v-col>

              <v-col>
                <v-switch
                  v-model="elemento.publico"
                  :label="`Switch: ${elemento.publico}`"
                  false-value="false"
                  true-value="true"
                  hide-details
                  :color="elemento.publico ? 'green' : 'red'"
                />
              </v-col>

              <v-col>
                <v-autocomplete
                  v-model="elemento.idUsuario"
                  :items="usuarios"
                  item-title="firstname"
                  item-value="id"
                />
                <v-col>
                  <v-btn
                    class="ms-auto justify-center d-flex align-center"
                    style="background-color: crimson"
                    text="Salvar"
                    @click="persist()"
                  />
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: "model",
      dialog: false,
      loading: true,
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
          title: "Identificação",
          key: "id",
        },
        {
          title: "Nome do produto",
          key: "name",
        },
        {
          title: "Descrição",
          key: "descricao",
        },
        {
          title: "Actions",
          key: "actions",
          sortable: false,
        },
      ],
      items: [],
      usuarios: [],
    };
  },
  watch: {
    ativo(valor) {
      if (valor == false) {
        this.resetElemento();
      }
    },
  },
  async created() {
    await this.getItens();
    await this.getUsuario();
  },
  methods: {
    resetElemento() {
      this.elemento = {
        id: null,
        name: null,
        descricao: null,
        img: null,
        publico: null,
        idUsuario: null,
      };
      this.ativo = false;
    },

    async getItens() {
      const response = await this.$api.get("/elemento");
      this.items = response.data.map(element => element);;
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
      await this.getItems();
    },
    editItem(item) {
      this.elemento = { ...item };
      this.dialog = true;
    },
    async persist() {
      if (this.elemento.id) {
        const response = await this.$api.post(
          `/elemento/persist/${this.elemento.id}`,
          this.elemento
        );
      } else {
        const response = await this.$api.post(
          "/elemento/persist",
          this.elemento
        );
      }
      this.resetElemento();
      await this.getItems();
    },
    async getUsuario() {
      const response = await this.$api.get("/usuario");
      this.usuarios = response.data;
      this.loading = false;
    },
    async getItems() {
      const response = await this.$api.get("/elemento");
      this.items = response.data;
      this.loading = false;
    },
    resetDialog() {
      this.dialog = false;
      this.elemento = {
        id: null,
        name: null,
        descricao: null,
        img: null,
        idUsuario: null,
      };
    },
  },
};
</script>
