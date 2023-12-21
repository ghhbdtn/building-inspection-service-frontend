<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-list :height="800" :items="companies" border style="background-color:rgba(48,50,52,0.06); border-color: #E03021">
            <v-btn @click="onAddCompany" variant="text" elevation="0" color="#E03021">
              Добавить компанию
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
            <v-list-item v-for="company in companies" :key="company.id" :title="company.name" @click="onOpenCompany(company)"/>
          </v-list>
        </v-col>
        <v-col>
          <v-window>
          <RouterView/>
          </v-window>
          <!--          <CompanyCard v-if="isCompanyChosen"/>-->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import CustomAvatar from "./CustomAvatar.vue";
import CompanyCard from "./CompanyCard.vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

interface Company {
  id: number,
  name: string,
  legalAddress: string,
  city: string,
  employers: Employer[],
  licenses: License[],
}

interface Employer {
  id: number,
  name: string,
  positionName: string
}

interface License {
  id: number,
  name: string,
  number: number
}

export default defineComponent({
  name: "CompaniesData",
  components: {CompanyCard, CustomAvatar},
  setup() {
    onMounted(() => {
      store.dispatch('companies/allCompanies')
    })
    const store = useStore();
    const router = useRouter();
    const companies = ref(computed(() => store.getters["companies/getAll"]))
    const isCompanyChosen = ref(false)

    const onOpenCompany = (company) => {
      isCompanyChosen.value = true;
      router.push({name: 'CompanyCard', params:{id: company.id}}).then(() => {
        store.dispatch('companies/getCompanyData', company.id)
      })
    }

    const onAddCompany = () => {
      store.dispatch('companies/createNewCompany').then(() => {
        const id = store.getters["companies/getID"]
        router.push({name: 'CompanyCard', params:{id: id}})
        store.dispatch('companies/getCompanyData', id)
        store.dispatch('companies/allCompanies')
      })
    }
    return {
      companies,
      isCompanyChosen,
      onOpenCompany,
      onAddCompany
    }
  },
});
</script>

<style scoped>

</style>
