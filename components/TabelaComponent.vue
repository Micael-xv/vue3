<template>
  <v-container  style="background-color:">
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
        style="background-color: rgb(14, 98, 6)"
        @click="dialog = true"
        />
      </v-col>

      <v-container>
        <v-dialog
          v-model="dialog"
          width="auto"
        >
        <v-card
          max-width="100%"
          title="Colocar elementos"
          theme="dark"
        >
          <template #actions>
            <v-form>
      <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="15"
        >
          <v-text-field
            label="Nome"
            model-value="Café"
            enable
          />
        </v-col>

        <v-col
          cols="12"
          sm="15"
        >
          <v-text-field
            label="Descrição"
            model-value="Café em capsula"
          />
        </v-col>

        <v-col
          cols="12"
          sm="15"
        >
          <v-text-field
            label="Imagem"
            model-value="link da imagem"
            variant="solo"
          />
        </v-col>
        <v-col>
          <v-btn
              class="ms-auto justify-center d-flex align-center"
              style="background-color: crimson;"
              text="Adicionar"
              @click="dialog = false"
          />
      </v-col>  
    </v-row>
  </v-container>
  
  </v-form>
    </template>
      </v-card>
        </v-dialog>
          </v-container>
      <v-col>
        
          <!-- <v-toolbar
            flat
            style="background-color: green;"
          >
            <v-toolbar-title class="font-weight-bold font-italic" >
                Elementos
            </v-toolbar-title>
            
            <v-col cols="auto" >
              <v-btn icon="mdi-plus" size="default" style="background-color: red"/>
            </v-col>
              
            <v-divider
              class="mx-4"
              inset
              vertical
            />
          </v-toolbar> -->
        
      <v-data-table
        :headers="headers"
        :items="items"
        theme="dark"
      >
        <template #item.actions="{ item }">
          <v-icon
            class="me-2"
            size="small"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
            
          <v-icon
            size="small"
            @click="deleteItem(item)"
          >
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
  
  name: 'TabelaComponent',
  props: {
    items: {
      type: Array,
    },
    headers: {
      type: Array
    },
    titulo: {
      type: String
    },
  },
emits: ['excluir'],
    data () {
      return {
        dialog: false,
    }
  },

  data() {
    return {
    }
  },

  methods: {
    deleteItem(item) {
      this.$emit('excluir', item)
    },
  },

}
</script>

<style>
  .v-table tbody tr:nth-child(even) {
      background-color: rgb(3, 3, 36);
  }

  .v-table tbody tr:nth-child(odd) {
      background-color: rgb(47, 4, 63);
  }
</style>