<template>
  <v-main>
<!--    <v-container fluid>-->
<!--      <v-row justify="center">-->
<!--        <v-btn-group>-->
<!--          <v-btn color="#E03021" variant="outlined" style="border-color: #E03021">-->
<!--            Отправить данные-->
<!--          </v-btn>-->
<!--          <v-btn color="#E03021" variant="outlined" style="border-color: #E03021">-->
<!--              Загрузить ТЗ-->
<!--          </v-btn>-->
<!--          <v-btn color="#E03021" variant="outlined" style="border-color: #E03021">-->
<!--            Загрузить ТЗ с подписью-->
<!--          </v-btn>-->
<!--        </v-btn-group>-->
<!--      </v-row>-->
<!--    </v-container>-->
<!--    <v-divider class="divider-project"/>-->
    <v-container fluid>
      <v-card elevation="0" style="background: #F4F6F7">
        <v-row justify="center">
          <v-col cols="5" offset="20">
            <v-form>
              <v-card-title style="color: #181D2B; font-size: 25px; font-family: TT Travels; font-weight: 700; line-height: 41.25px; word-wrap: break-word">Заполните данные проекта</v-card-title>
              <v-card-item>
                <div class="container">
                  <p class="label">Название проекта</p>
                  <div class="spacer"></div>
                  <div class="input-container">
                    <input type="text" class="input-field" v-model="editedInspection.name">
                  </div>
                </div>
              </v-card-item>
              <v-card-item>
                <form class="container">
                  <label class="label" for="company-select">Компания</label>
                  <div class="spacer"></div>
                  <div class="input-container">
                    <select name="company" class="select-field" v-model="editedInspection.company" id="company-select">
                      <option disabled value="">-Выберите компанию-</option>
                      <option v-for="company in companies" :id="company.id">
                        {{company.name}}
                      </option>
                    </select>
                    <div class="arrow">&#9660;</div>
                  </div>
                </form>

              </v-card-item>
              <v-card-item v-if="editedInspection.company">
                <form class="container">
                  <label class="label" for="employee-select">Ответственный исполнитель</label>
                  <div class="spacer"></div>
                  <div class="input-container">
                    <select name="company" class="select-field" v-model="editedInspection.employer" id="employee-select">
                      <option disabled value="">-Выберите сотрудника-</option>
                      <option v-for="employee in editedInspection.company.employers" :id="employee.id">
                        {{employee.name}}
                      </option>
                    </select>
                    <div class="arrow">&#9660;</div>
                  </div>
                </form>
              </v-card-item>
              <v-card-item>
                <div class="container">
                  <p class="label">Адрес</p>
                  <div class="spacer"></div>
                  <div class="input-container">
                    <input type="text" class="input-field" v-model="editedInspection.address">
                  </div>
                </div>
              </v-card-item>
              <v-card-item>
                <div class="container">
                  <p class="label">Шифр проекта</p>
                  <div class="spacer"></div>
                  <div class="input-container">
                    <input type="text" class="input-field" v-model="editedInspection.script">
                  </div>
                </div>
              </v-card-item>
              <v-card-item>
                <div class="container">
                  <p class="label">Дата начала</p>
                  <div class="spacer"></div>
                  <div class="input-container">
                    <input type="date" class="input-field" v-model="editedInspection.startDate">
                  </div>
                </div>
              </v-card-item>
              <v-card-item>
                <div class="container">
                  <p class="label">Дата окончания</p>
                  <div class="spacer"></div>
                  <div class="input-container">
                    <input type="date" class="input-field" v-model="editedInspection.endDate">
                  </div>
                </div>
              </v-card-item>
              <v-card-item>
                <v-checkbox
                    class="text-fields"
                    label="Объект культурного наследия"
                    v-model="editedInspection.isCulture"
                ></v-checkbox>
              </v-card-item>
              <v-card-actions>
                <button class="button-container" @click="onSaveDataButtonClick">
                  <img class="icon-container" :src="(`/src/assets/images/icons/save.svg`)">
                  <p class="button-text">Сохранить данные</p>
                </button>
              </v-card-actions>
            </v-form>

          </v-col>
          <v-col cols="4" offset-sm="20">
            <v-container>
              <v-row justify="center">
                <v-card-title style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
                  Загрузите обложку проекта
                </v-card-title>
              </v-row>
              <v-row justify="end" style="padding-bottom: 50px">
                <v-menu
                    max-width="100"
                    rounded
                >
                  <template v-slot:activator="{ props }">
                    <v-btn
                        elevation="0"
                        v-bind="props"
                        height="215"
                        width="400"
                        style="border-radius: 25px"
                    >
                        <img v-if="!mainPhoto" :src="avatarSrc" :width="400"  :height="215" style=" border-radius: 25px; border: 1px rgba(97, 97, 97, 0.30) solid;">
                        <img :src="`data:image/png;base64,${mainPhoto}`" v-else :width="400"  :height="215" style=" border-radius: 25px; border: 1px rgba(97, 97, 97, 0.30) solid;">
                    </v-btn>
                  </template>
                  <v-card max-height="200">
                    <v-btn variant="text" color="#181D2B" rounded
                           @click="openFilePicker" >
                      Загрузить фото
                    </v-btn>
                    <v-divider/>
                    <v-btn rounded variant="text" v-show="avatarSrc !== 'src/assets/photo-camera-black-tool_icon-icons.com_72960.svg'"
                           @click="deletePhoto" color="#E03021">
                      Удалить фото
                    </v-btn>
                    <input ref="fileInput" style="display: none" type="file" @change="handleFileUpload">
                  </v-card>
                </v-menu>
              </v-row>
              <v-row justify="end">
                <div style="width: 400px; color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
                  Контекстные данные из из тех. задания
                </div>
                <textarea style="width: 400px; height: 432px; padding-top: 25px; padding-bottom: 15px;
                 padding-left: 20px; background: white; border-radius: 25px; border: 1px #C5C5C4 solid;
                 justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
                </textarea>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>

</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
interface Employer {
  id: number,
  name: string,
  positionName: string
}
interface Company {
  id: number,
  name: string,
  legalAddress: string,
  city: string,
  employers: Employer[],
}
export default defineComponent({
  name: "ProjectSettings",
  setup() {
    const route = useRoute();
    const store = useStore();
    const currentInspection = ref(computed(()=>store.getters['inspections/getInspectionData']))
    const mainPhoto = ref(computed(()=>store.getters['inspections/getMainPhoto']))
    const companies = ref(computed(() => store.getters['companies/getAll']) as Company[])
    const employers = ref(computed(()=>editedInspection.value.company.employers))
    const itemProps = (item) => {
      return {
        title: item.name
      }
    }
    onMounted(()=>{
      store.dispatch('inspections/inspectionMainData', route.params.id).then(()=>{
        editedInspection.value = currentInspection.value
        editedInspection.value.startDate = editedInspection.value.startDate.split('.').reverse().join('-');
        editedInspection.value.endDate = editedInspection.value.endDate.split('.').reverse().join('-');
      })
      store.dispatch('inspections/inspectionMainPhoto', route.params.id)
      store.dispatch('companies/allCompanies')
    });
    const editedInspection = ref({
       id: 0,
       name: "",
       address: "",
       script: "",
       isCulture: false,
       startDate: "",
       endDate: "",
       company: {
         id: 0,
         name: ""
       },
       employer: {
          id: 0,
         name: ""
       }
    });
    const onSaveDataButtonClick = () => {
      let data = {
        id: route.params.id,
        data: {
          id: editedInspection.value.id,
          name: editedInspection.value.name,
          address: editedInspection.value.address,
          script: editedInspection.value.script,
          isCulture: editedInspection.value.isCulture,
          startDate: (editedInspection.value.startDate) ? editedInspection.value.startDate.split('-').reverse().join('.') : '',
          endDate: (editedInspection.value.endDate) ? editedInspection.value.endDate.split('-').reverse().join('.') : '',
          companyId: (editedInspection.value.company) ? editedInspection.value.company.id : null,
          employerId: (editedInspection.value.employer) ? editedInspection.value.employer.id : null,
        }
      }
      store.dispatch('inspections/putInspectionData', data).then(()=>{
        store.dispatch('inspections/inspectionMainData', route.params.id)
      })
    };
    const file = ref<File | null>();
    const form = ref<HTMLFormElement>();
    const avatarSrc =
        ref(new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href)

    const handleFileUpload = async ($event: Event) => {
      const target = $event.target as HTMLInputElement;
      if (target && target.files) {
        file.value = target.files[0];
        let formData = new FormData();
        formData.append('file', file.value);
        let data = {
          id: route.params.id,
          file: formData
        }
        await store.dispatch('inspections/addMainPhoto', data).then(()=>{
          store.dispatch('inspections/inspectionMainPhoto', route.params.id)
        })
      } else {
        file.value = avatarSrc;
      }
    };
    const deletePhoto = () => {
      store.commit('inspections/DELETE_INSPECTION_PHOTO')
    }

    return {
       editedInspection,
      onSaveDataButtonClick,
      handleFileUpload,
      file,
      mainPhoto,
      deletePhoto,
      companies,
      itemProps,
      employers
    }
  },
  data() {
    return {
      inspectionPhoto: null,
      avatarSrc:
      new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href, // Заглушка для изображения
    };
  },
  methods: {
    openFilePicker() {
      // Открыть проводник при нажатии на аватар
      this.$refs.fileInput.click();
    },
  },
});
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Высота и ширина по вашему выбору */
}

.rounded-image {
  border: 2px solid #ccc; /* Цвет рамки и толщина по вашему выбору */
  border-radius: 10px; /* Радиус закругления углов */
}

.v-btn{
  font-size: 12px
}
.container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.label {
  width: 135px;
  text-align: right;
  color: #181D2B;
  font-size: 16px;
  font-family: TT Travels;
  font-weight: 600;
  word-wrap: break-word
}

.spacer {
  width: 25px;
}

.input-container {
  width: 500px;
  height: 49px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  background: white;
  border-radius: 25px;
  border-left: 5px #52596C solid;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex
}

.input-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: rgba(24, 29, 43, 1);
  margin: 0; /* Убираем внутренние отступы у <p> */
}

.input-field {
  color: #181D2B;
  font-size: 16px;
  font-family: TT Travels;
  font-weight: 500;
  word-wrap: break-word;
  border: none;
  outline: none;
  width: 100%;
}

.select-field {
  width: 90%;
  padding: 10px;
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
}

.button-container {
  width: 257px;
  height: 52px;
  padding: 15px 25px;
  background: #52596C;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.icon-container {
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-text {
  color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 16px;
  font-family: 'TT Travels', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
}

</style>
