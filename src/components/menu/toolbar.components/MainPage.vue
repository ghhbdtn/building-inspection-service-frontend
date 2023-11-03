<template>
  <v-main>

      <v-layout>
        <v-col>
        <v-row justify="center">
          <v-col>
          <v-card color="#CFCFCF" elevation="10" width="1500" height="200">
            <v-card-text>Баннер с оффером</v-card-text>
          </v-card>
          </v-col>
        </v-row>


        <v-row justify="center">
          <v-col>
          <v-card color="#CFCFCF" elevation="10" width="1500" height="200">
            <v-card-text>Краткое описание сути сервиса</v-card-text>
          </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col>
            <v-card color="#CFCFCF" elevation="10" width="1500" height="200">
              <v-card-text>Описание выгоды работы с нами</v-card-text>
            </v-card>
          </v-col>
        </v-row>

          <v-row justify="center">
            <v-col>
              <v-card color="#CFCFCF" elevation="10" width="1500" height="200">
                <v-card-text>Описания этапов работы</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col>
              <v-card color="#CFCFCF" elevation="10" width="1500" height="200">
                <v-card-text>Баннер с призывом зарегестрироваться</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-layout>

  </v-main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "InspectionForm",
});
</script>

<style scoped>

</style>
