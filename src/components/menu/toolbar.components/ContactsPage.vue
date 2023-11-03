<template>
  <v-main>

    <v-layout>
      <v-col>
        <v-row justify="center">
          <v-col>
            <v-card color="#CFCFCF" elevation="10" width="1500" height="200">
              <v-card-text>Форма обратной связи</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col>
            <v-card color="#CFCFCF" elevation="10" width="1500" height="200">
              <v-card-text>Контакты</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-layout>

  </v-main>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent( {
  name: "ContactsPage"
})
</script>

<style scoped>

</style>
