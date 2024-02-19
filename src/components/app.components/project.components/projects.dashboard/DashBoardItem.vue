<template>
  <v-card
      :class="'align-center'"
      class="cards"
      elevation="10"
      border
  >
    <img :src="getImageUrl()" class="card-img">
    <v-row justify="space-between">
      <v-col cols="6">
        <div style="vertical-align: center">
        <v-card-text style="width: 327.67px; color: #181D2B; font-size: 18px; font-family: TT Travels;
         font-weight: 600; line-height: 27px; word-wrap: break-word; vertical-align: center">
          {{inspection.name}}
        </v-card-text>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card-actions>
          <v-btn @click.stop="onDeleteInspection" >
            <v-icon>
              <img :src="(`/src/assets/images/icons/delete.svg`)">
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
.cards {
  width: clamp(100%, 370px, 470px);
  height: clamp(220px, 276px,300px);
  border-radius: 24px;
  background-color: #ffffff;
}

.card-img {
  background-color: white;
  height: clamp(120px, 176px,200px);
  width: 370px;
}

</style>
