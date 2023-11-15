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
              v-for="n in 10"
              :key="n"
              cols="12"
              md="4"
          >
            <v-item>
              <DashBoardItem @click="onProjectItemClick"></DashBoardItem>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-container>
</v-main>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import DashBoardItem from "./DashBoardItem.vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "ProjectsDashboard",
  components: {DashBoardItem},
  setup() {
    const store = useStore();
    const router = useRouter();

    const onProjectItemClick = () => {
      router.push({path: '/personal-account/edit-project'})
    };
    const onNewProjectItemClick = () => {
      router.push('/personal-account/edit-project')
    };


    return {
      onProjectItemClick,
      onNewProjectItemClick
    };
  },
});
</script>

<style scoped>

</style>
