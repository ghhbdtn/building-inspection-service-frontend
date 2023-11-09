<template>
  <v-card
      style="width: 250px; height: 250px; border-radius: 24px; background-color: #CFCFCF"
      :class="'align-center'"
      elevation="100"
  >
    <v-img :src="getImageUrl('maison2.svg')" height="170" style="background-color: white"/>
    <v-divider/>
    <v-card-title>Объект</v-card-title>
    <v-card-subtitle>Название</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DashBoardItem",
  setup() {
    const getImageUrl = (name) => {
      return new URL(`/src/assets/${name}`, import.meta.url).href
    }
    return { getImageUrl }
  },
  data() {
    return{
    }
  }

});
</script>

<style scoped>

</style>
