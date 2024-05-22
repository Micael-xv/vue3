<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        theme="dark"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://avatars.githubusercontent.com/u/75547915?v=4"
            subtitle="micael.trevisan@unochapeco.edu.br"
            title="Micael Trevisan"
          />
        </v-list>

        <v-divider/>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" to="/" title="Home" value="home"/>
          <v-list-item prepend-icon="mdi-table" to="/tabela" title="Tabela elementos" value="Tabela"/>
          <v-list-item prepend-icon="mdi-twitter" to="/x" title="Twitter" value="starred"/>
          <v-list-item prepend-icon="mdi-bug-check-outline" to="/funcao" title="Funcao for" value="funcao"/>

        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh; background-color: black">
        <slot/>
      </v-main>
    </v-layout>
  </v-card>
</template>