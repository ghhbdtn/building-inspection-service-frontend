<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-btn-group>
          <v-btn color="#E03021" variant="outlined" style="border-color: #E03021">
            Отправить данные
          </v-btn>
          <v-btn color="#E03021" variant="outlined" style="border-color: #E03021">
              Загрузить ТЗ
          </v-btn>
          <v-btn color="#E03021" variant="outlined" style="border-color: #E03021">
            Загрузить ТЗ с подписью
          </v-btn>
        </v-btn-group>
      </v-row>
    </v-container>
    <v-divider class="divider-project"/>
    <v-container fluid>
      <v-card elevation="0" border style="border-color: #E03021">
        <v-row justify="center">
          <v-col cols="6" offset="20">
            <v-form>
              <v-card-title>Заполните данные проекта</v-card-title>
              <v-card-item>
                <v-text-field
                    label="Название проекта"
                    v-model="editedInspection.name"
                />
              </v-card-item>
              <v-card-item>
                <v-select
                    label="Компания"
                    v-model="editedInspection.company"
                />
              </v-card-item>
              <v-card-item>
                <v-text-field
                    label="Адрес"
                    v-model="editedInspection.address"
                />
              </v-card-item>
              <v-card-item>
                <v-text-field
                    label="Шифр проекта"
                    v-model="editedInspection.script"
                />
              </v-card-item>
              <v-card-item>
                <v-select
                    label="Ответственный исполнитель"
                    v-model="editedInspection.employer"
                />
              </v-card-item>
              <v-card-item>
                <v-text-field
                    label="Дата начала"
                    type="date"
                    v-model="editedInspection.startDate"
                />
              </v-card-item>
              <v-card-item>
                <v-text-field
                    label="Дата окончания"
                    type="date"
                    v-model="editedInspection.endDate"
                />
              </v-card-item>
              <v-card-item>
                <v-checkbox
                    label="Объект культурного наследия"
                    v-model="editedInspection.isCulture"
                    :value="editedInspection.isCulture"
                />
              </v-card-item>
              <v-card-actions>
                <v-btn
                    variant="outlined"
                    color="#E03021"
                    @click="onSaveDataButtonClick"
                >
                  сохранить данные
                </v-btn>
              </v-card-actions>
            </v-form>

          </v-col>
          <v-col cols="4" offset-sm="20">
            <v-container>
              <v-row justify="center">
                <v-card-title>Обложка проекта</v-card-title>
              </v-row>
              <v-row justify="center">
                <v-menu
                    max-width="100"
                    rounded
                >
                  <template v-slot:activator="{ props }">
                    <v-btn
                        elevation="0"
                        v-bind="props"
                        size="300"
                    >
                        <img v-if="!mainPhoto" :src="avatarSrc" :width="300"  :height="300" style=" border: double #E03021; ">
                        <img :src="`data:image/png;base64,${mainPhoto}`" v-else :width="300"  :height="300" style=" border: double #E03021; ">
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

export default defineComponent({
  name: "ProjectSettings",
  setup() {
    const route = useRoute();
    const store = useStore();
    const currentInspection = ref(computed(()=>store.getters['inspections/getInspectionData']))
    const mainPhoto = ref(computed(()=>store.getters['inspections/getMainPhoto']))
    onMounted(()=>{
      store.dispatch('inspections/inspectionMainData', route.params.id).then(()=>{
        editedInspection.value = currentInspection.value
        editedInspection.value.startDate = editedInspection.value.startDate.split('.').reverse().join('-');
        editedInspection.value.endDate = editedInspection.value.endDate.split('.').reverse().join('-');

      })
      store.dispatch('inspections/inspectionMainPhoto', route.params.id)
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
      deletePhoto
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
</style>
