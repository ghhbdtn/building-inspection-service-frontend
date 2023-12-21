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
    <v-row>
    <v-item-group selected-class="bg-primary">
      <v-container>
        <v-row>
          <v-col
              v-for="(inspection) in inspections"
              :key="inspection.id"
              cols="12"
              :md="(inspections.length > 2) ? 4 : 6"
          >
            <v-item>
              <DashBoardItem
                  @click="onProjectItemClick(inspection)"
                  :inspection="inspection"
                  @onDeleteInspection="onDeleteInspection(inspection)"
              ></DashBoardItem>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    </v-row>
    <v-row justify="center">
      <v-pagination
          v-model="page"
          class="my-4"
          :length="pages"
          @click="onNextPage"
      ></v-pagination>
    </v-row>
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
    const pages = ref(computed(()=>store.getters['inspections/getPages']))
    const inspections = ref(computed(()=> store.getters["inspections/getAll"]))
    const newInspectionId = ref(computed(()=> store.getters['inspections/getNewInspectionId']))
    const page = ref(1);
    const size = ref(computed(()=>inspections.size))
    onMounted(() => {
      store.dispatch('inspections/allInspections', page.value - 1).then(()=>{
      });
    })
    const onNextPage = () => {
      store.dispatch('inspections/allInspections', page.value - 1).then(()=>{
      });
    }
    const onProjectItemClick = (inspection: Inspection) => {
      router.push({name: 'NewProject', params:{id: inspection.id}})
    };
    const onNewProjectItemClick = () => {
      store.dispatch('inspections/createNewInspection', {}).then(()=>
      router.push({name: 'NewProject', params:{id: newInspectionId.value.inspectionId}})
      )
    };
    const onDeleteInspection = (inspection) => {
      const data = {
        id: inspection.id
      }
      const result = confirm("Вы действительно хотите удалить проект " + inspection.name)
      if(result) {
        store.dispatch('inspections/deleteInspection', data).then(()=>{
          const index = inspections.value.indexOf(inspection)
          inspections.value.splice(index, 1)
          store.dispatch('inspections/allInspections', page.value - 1).then(()=>{
          });
        })
      }
    }

    return {
      inspections,
      onProjectItemClick,
      onNewProjectItemClick,
      store,
      pages,
      page,
      onNextPage,
      onDeleteInspection,
      size
    };
  },
  computed:{
    ...mapState('inspections', ['allInspections', 'inspection', 'totalPages']),
  }
});
</script>

<style scoped>

</style>
