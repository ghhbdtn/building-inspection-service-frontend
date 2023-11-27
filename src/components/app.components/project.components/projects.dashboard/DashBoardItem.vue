<template>
  <v-card
      :class="'align-center'"
      elevation="10"
      border
      style="width: 350px; height: 300px; border-radius: 24px; background-color: #CFCFCF; border-color: #E03021"
  >
    <v-img :src="getImageUrl()" :height="220" :width="350" style="background-color: white"/>
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
import {computed, defineComponent, onMounted, ref, toRefs} from "vue";
import {useStore} from "vuex";
import { defineProps } from 'vue'

interface Inspection {
  id: number,
  name: string,
  photo: string
}
export default defineComponent({
  name: "DashBoardItem",
  props: {
    inspection: {
      type: Object as () => Inspection,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { inspection } = toRefs(props);
    onMounted(()=>{
      store.dispatch('inspections/inspectionMainPhoto', inspection.value.id).then(()=>{
        imgURL.value = store.getters['inspections/getMainPhoto']
      })
    })
    const imgURL = ref(null)
    const getImageUrl = () => {
      return imgURL.value ? `data:image/png;base64,${imgURL.value}`
          : new URL(`/src/assets/images/maison2.svg`, import.meta.url).href
    }

    return {getImageUrl, inspection}
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
