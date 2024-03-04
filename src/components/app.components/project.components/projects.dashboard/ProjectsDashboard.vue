<template>
<v-main style="background: #F4F6F7">
  <v-container>
     <v-row justify="space-between" style="padding-top: 50px">
         <p style="color: #181D2B; font-size: 25px; font-family: TT Travels; font-weight: 700; line-height: 37.75px;
          word-wrap: break-word">
           Мои проекты
         </p>
       <button v-if="inspections.length !== 0" style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word"
               variant="text" color="#E03021" @click="onNewProjectItemClick">
         Создать проект
         <v-icon dark>
           mdi-plus
         </v-icon>
       </button>
     </v-row>
    <v-row justify="center">
      <v-card v-if="inspections.length === 0"
          style="width: 600.54px; height: 349px; padding-left: 50px; padding-right: 50px; padding-top: 60px; padding-bottom: 60px; background: white; box-shadow: 0px 14px 30px rgba(18, 30, 42, 0.10); border-radius: 25px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 35px; display: inline-flex">
        <div style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 25px; display: flex">
          <div style="width: 70px; height: 70px; padding-left: 12.40px; padding-right: 12.40px; padding-top: 2.92px; padding-bottom: 2.92px; justify-content: center; align-items: center; display: inline-flex">
            <img :src="getImageUrl1()" width="65" height="67">
          </div>
          <div style="width: 500.54px; text-align: center; color: #616161; font-size: 24px; font-family: TT Travels; font-weight: 600; line-height: 32.40px; word-wrap: break-word">У вас еще нет созданных проектов<br/>Создайте сейчас свой первый проект</div>
        </div>
        <button  @click="onNewProjectItemClick"
                 style="justify-content: flex-start; align-items: center; gap: 15px; display: inline-flex">
          <div
              style="background: #52596C; width: 35px; height: 35px; position: relative;
               border-radius: 999px; justify-items: center">
            <v-icon color="white" size="35">
              mdi-plus
            </v-icon>
          </div>
          <div style="color: #181D2B; font-size: 16px; font-family: TT Travels;
           font-weight: 600; word-wrap: break-word">
            Добавить проект
          </div>
        </button>
      </v-card>
    <v-item-group selected-class="bg-primary">
      <v-container fluid>
        <v-row>
          <v-col
              v-for="(inspection, index) in inspections"
              :key="inspection.id"
              cols="12"
              :md="(inspections.length > 2) ? 4 : 6"
              xs="12"
              :sm="(inspections.length > 2) ? 6 : 12"
              :lg="(inspections.length > 2) ? 4 : 6"
              :xl="(inspections.length > 2) ? ((inspections.length > 3) ? 3 : 4) : 6"
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
    const getColumns = (index) => {
      const columns = [12, 6, 4, 3]; // Define columns for 1 to 4 items
      return index > 4 ?  12 : columns[index] || columns[columns.length - 1];
    }
    const getImageUrl1 = () => {
      return new URL(`/src/assets/images/newprjct.svg`, import.meta.url).href
    }
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
      size,
      getColumns,
      getImageUrl1
    };
  },
  computed:{
    ...mapState('inspections', ['allInspections', 'inspection', 'totalPages']),
  }
});
</script>

<style scoped>

</style>
