<template>
<v-main>
  <v-container>
     <v-row justify="start">
       <v-col cols="12">
       <v-btn variant="text" color="#E03021" @click="onNewProjectItemClick">
         Создать проект
         <v-icon dark>
           mdi-plus
         </v-icon>
       </v-btn>
       </v-col>
     </v-row>
    <v-item-group selected-class="bg-primary">
      <v-container>
        <v-row>
          <v-col
              v-for="(inspection) in allInspections"
              :key="inspection.id"
              cols="12"
              md="4"
          >
            <v-item>
              <DashBoardItem @click="onProjectItemClick" :inspection="inspection"></DashBoardItem>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-container>
</v-main>
</template>

<script lang="ts">
import {computed, defineComponent, nextTick, onMounted, ref} from "vue";
import DashBoardItem from "./DashBoardItem.vue";
import {mapState, useStore} from "vuex";
import {useRouter} from "vue-router";
interface Inspection {
  id: number,
  name: string
}

export default defineComponent({
  name: "ProjectsDashboard",
  components: {DashBoardItem},
  setup() {
    const store = useStore();
    const router = useRouter();
    const inspections = ref(computed(()=> store.getters["inspections/getAll"]))
    onMounted(() => {
      store.dispatch('inspections/allInspections').then(()=>{
      });
    })
    const onProjectItemClick = () => {
      router.push({path: '/personal-account/edit-project'})
    };
    const onNewProjectItemClick = () => {
      store.dispatch('inspections/createNewInspection', {}).then(()=>
      router.push('/personal-account/edit-project')
      )
    };


    return {
      inspections,
      onProjectItemClick,
      onNewProjectItemClick,
      store
    };
  },
  computed:{
    ...mapState('inspections', ['allInspections', 'inspection']),
  }
});
</script>

<style scoped>

</style>
