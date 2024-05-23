<template>
  <v-app>
    <body style="height: 100%; background-color: black">
      <v-container class="mt-9">
        <v-row style="width: 100%" no-gutters align="center">
          <v-col class="mr-12">
            <img
              src="https://s2-techtudo.glbimg.com/f5K6FXnCmZnRvij2SNsrZSn9Iso=/600x0/filters:quality(70)/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/e/D/6e24vbQSaRBG2ScINKIQ/imagem-6.jpg"
              alt="imagem X"
            />
          </v-col>

          <v-col class="mt-5">
            <v-container style="color: white">
              <h1
                style="
                  font-size: 4rem;
                  font-weight: 900;
                  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                "
              >
                Twitter
              </h1>
            </v-container>

            <v-container style="color: white" class="mt-2">
              <h1>inscrever-se hoje</h1>
            </v-container>

            <v-container class="mt-n1">
              <v-btn rounded="xl" width="280">
                <v-icon class="mr-2">mdi-google </v-icon>
                <p>inscreva-se pelo google</p>
              </v-btn>
            </v-container>

            <v-container class="mt-n4">
              <v-row class="mr-n7">
                <v-col class="mr-4 mb-n3">
                  <v-btn rounded="xl" width="280">
                    <v-icon class="mr-2"> mdi-apple </v-icon>
                    <p>inscreva-se com Apple</p>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="mt-n2">
              <v-row>
                <v-col style="color: white">
                  <p>------------------------ou------------------------</p>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="mt-n5">
              <v-row>
                <v-col>
                  <v-btn
                    rounded="xl"
                    width="280"
                    style="color"
                    class="bg-blue"
                    @click="dialog = true"
                  >
                    <p>Criar conta</p>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="mt-10">
              <v-row>
                <v-col style="color: white">
                  <h3>Já tem uma conta?</h3>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn
                    rounded="xl"
                    width="280"
                    height="37"
                    class="bg-black"
                    variant="outlined"
                  >
                    <p class="text-blue">Entrar</p>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog v-model="dialog" max-width="650">
        <v-card theme="dark" elevation="15" style="border-radius: 25px;  background-color: #000;">
          <v-btn
            class="ml-3 mt-3 mb-9 dark"
            density="compact"
            icon="mdi-close"
            @click="dialog = false"
          />
          <v-card-title class="headline mb-3" style="margin-left: 8%;"><h2>Criar sua conta</h2></v-card-title>
          <v-text-field
            clearable
            label="Nome"
            variant="outlined"
            style="width: 75%; margin-left: 10%"
          />
          
        </v-card>
      </v-dialog>
    </body>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    overlay: false,
  }),

  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 2000);
    },
  },
};
</script>
