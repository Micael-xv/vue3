<template>
  <v-row>
    <v-col v-for="(item, x) in items" :key="x" cols="12" md="3">
      <div>
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto ma-5 ml-5 mr-5"
            color="grey-lighten-4"
            max-width="600"
            v-bind="props"
            dark
          >
            <v-img
              :aspect-ratio="16 / 9"
              src="https://img.freepik.com/fotos-premium/melhor-foto-aleatoria_865967-169321.jpg"
              cover
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                  style="height: 100%"
                >
                  <div v-if="item">
                    <div class="font-weight-light text-h6 mb-2">
                      {{ item.descricao }}
                    </div>
                  </div>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6">
              <h3 class="text-h4 font-weight-light text-orange mb-2" v-if="item">
                {{ item.name}}
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>
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

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
