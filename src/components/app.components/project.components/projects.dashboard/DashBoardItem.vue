<template>
  <v-card
      :class="'align-center'"
      elevation="10"
      border
      style="width: 250px; height: 250px; border-radius: 24px; background-color: #CFCFCF; border-color: #E03021"
  >
    <v-img :src="getImageUrl('maison2.svg')" height="170" style="background-color: white"/>
    <v-divider/>
    <v-row justify="space-between">
      <v-col cols="6">
        <v-card-title>Объект</v-card-title>
        <v-card-subtitle>{{inspection.name}}</v-card-subtitle>
      </v-col>
      <v-col cols="4">
        <v-card-actions>
          <v-btn @click.stop="onDeleteInspection" icon>
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DashBoardItem",
  props: ['inspection'],
  setup() {
    const getImageUrl = (name) => {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href
    }

    return {getImageUrl}
  },
  data() {
    return {}
  },
  methods: {
    onDeleteInspection()  {
      this.$emit('onDeleteInspection', this.inspection)
    }
  }

});
</script>

<style scoped>

</style>
