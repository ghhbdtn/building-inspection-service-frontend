<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-infinite-scroll :height="800" :items="companies">
            <v-btn icon>
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
            <v-list-item v-for="company in companies" :key="company.id" :title="company.title" @click="onOpenCompany"/>
          </v-infinite-scroll>
        </v-col>
        <v-col>
          <CompanyCard v-if="isCompanyChosen"/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CustomAvatar from "./CustomAvatar.vue";
import CompanyCard from "./CompanyCard.vue";

export default defineComponent({
  name: "CompaniesData",
  components: {CompanyCard, CustomAvatar},
  data() {
    return {
      companies: [{title: "Компания 1", id: "#0"}, {title: "Компания 2", id: "#1"}, {title: "Компания 3", id: "#2"}
        , {title: "Компания 2", id: "#1"}, {title: "Компания 3", id: "#2"}, {
          title: "Компания 2",
          id: "#1"
        }, {title: "Компания 3", id: "#2"}
        , {title: "Компания 2", id: "#1"}, {title: "Компания 3", id: "#2"}, {
          title: "Компания 2",
          id: "#1"
        }, {title: "Компания 3", id: "#2"}
        , {title: "Компания 2", id: "#1"}, {title: "Компания 3", id: "#2"}, {
          title: "Компания 2",
          id: "#1"
        }, {title: "Компания 3", id: "#2"}
        , {title: "Компания 2", id: "#1"}, {title: "Компания 3", id: "#2"}, {
          title: "Компания 2",
          id: "#1"
        }, {title: "Компания 3", id: "#2"}
        , {title: "Компания 2", id: "#1"}, {title: "Компания 3", id: "#2"}, {
          title: "Компания 2",
          id: "#1"
        }, {title: "Компания 3", id: "#2"}
        , {title: "Компания 2", id: "#1"}, {title: "Компания 3", id: "#2"}, {
          title: "Компания 2",
          id: "#1"
        }, {title: "Компания 3", id: "#2"}],
      isCompanyChosen: false
    }
  },
  methods: {
    onOpenCompany(){
      this.isCompanyChosen = true
    }
  }
});
</script>

<style scoped>

</style>
