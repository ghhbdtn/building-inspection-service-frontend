<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-btn-group>
          <v-btn color="#E03021" style="border-color: #E03021" variant="outlined">
            Синхронизировать
          </v-btn>
          <v-btn color="#E03021" style="border-color: #E03021" variant="outlined">
            Скачать фото с объекта
          </v-btn>
          <v-btn color="#E03021" style="border-color: #E03021" variant="outlined">
            Отправить фото на распознавание
          </v-btn>
          <v-btn color="#E03021" style="border-color: #E03021" variant="outlined">
            Отправить контекстную информацию
          </v-btn>
        </v-btn-group>
      </v-row>
    </v-container>
    <v-divider class="divider-project"/>
    <v-container fluid>
      <v-card elevation="0" border style="border-color: #E03021">
      <v-row>
        <v-col cols="7" offset="20">
            <v-container fluid>
              <v-row>
                <v-card-title>
                  Загрузка фото по категориям
                </v-card-title>
              </v-row>
              <v-col>
                <v-table >
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th>Название категории</th>
                      <th>Загрузить фото</th>
                      <th>Просмотр фото</th>
                      <th>Удалить  категорию</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(category, index) in categoriesList" :key="index">
                      <td>{{ category.name }}
                        <v-btn icon @click="editCategory(index)" size="30" elevation="0">
                          <v-icon>
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </td>
                      <td>
                        <v-btn icon @click="onUploadDialog(category)" size="30" elevation="0">
                          <v-icon size="25">mdi-paperclip</v-icon>
                        </v-btn>
                        ({{category.photos.length}})
                      </td>
                      <td>
                        <v-btn icon @click="viewCategoryPhoto(category)" size="30" elevation="0">
                          <v-icon size="25">
                            mdi-eye
                          </v-icon>
                        </v-btn>
                      </td>
                      <td>
                        <v-btn icon @click="deleteCategory(category)" size="30" elevation="0">
                          <v-icon color="#E03021" size="25">
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-table>
              </v-col>
              <v-row>
                <v-tooltip text="Добавить категорию">
                  <template v-slot:activator="{props}">
                    <v-btn icon v-bind="props" @click="onPlusButtonClick" color="#181D2B" size="40">
                      <v-icon>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
              </v-row>
            </v-container>
        </v-col>

        <v-col cols="4" offset-sm="20">
          <v-container>
          <v-row>
            <v-card-title>Просмотр изображений</v-card-title>
          </v-row>
          <v-row>
            <v-carousel height="300" width="300" v-if="editedCategory.photos.length > 0"
                        show-arrows-on-hover
                        cover
            >
              <v-carousel-item v-for="(image, index) in loadedImages" :key="index">
                <img :width="500" :height="300" :src="`${image}`" alt="Изображение">
              </v-carousel-item>
            </v-carousel>
          </v-row>
          </v-container>
        </v-col>
      </v-row>
      </v-card>
    </v-container>
  </v-main>
  <v-dialog v-model="addCategoryDialog" max-width="500px">
    <v-card>
      <v-card-title v-if="!editMode">Добавить категорию</v-card-title>
      <v-card-title v-else>Редактировать название категории</v-card-title>
      <v-card-text>
        <v-text-field v-model="editedCategory.name" label="Название"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="onAddCategoryButtonClick">{{ editMode ? 'Сохранить' : 'Добавить' }}</v-btn>
        <v-btn @click="onCancel">{{ editMode ? 'Отмена' : 'Закрыть' }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="uploadPhotoDialog" max-width="600px">
    <v-card>
      <v-card-title>Загрузить фото категории "{{editedCategory.name}}"</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <DragAndDrop
                :files="editedCategory.photos"
                :is-multiple="true"
                @fileAdded="fileAdded"
                @removeFile="removeFile"/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="uploadScan">Загрузить</v-btn>
        <v-btn @click="cancelUpload">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import ComponentRow from "./ComponentRow.vue";
import DragAndDrop from "../../../DragAndDrop.vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import axios from "axios";
interface Photo {
  id: number,
  name: string
}
interface  PhotoCategory  {
  id: number,
  name: String,
  photos: Photo[]
}

export default defineComponent({
  name: "ImportMaterialsPage",
  components: {ComponentRow, DragAndDrop},
  emits: ['view', 'delete'],
  setup() {
    const store = useStore();
    const route = useRoute();
    let editMode = ref(false);
    let editedIndex = ref(false);
    let addCategoryDialog = ref(false);
    let categoriesList = ref(computed(()=>store.getters['categories/getAll']))
    let defaultCategory = ref({
      id: -1,
      name: "",
      photos: []
    } as PhotoCategory);
    let editedCategory = ref({
      id: -1,
          name: "",
          photos: []
    } as PhotoCategory);
    onMounted(() => {
      store.dispatch('categories/allCategories', route.params.id).then(()=>{
      });
    });
    const loadedImages = ref([]);

    const loadImages = async () => {
      for (const photo of editedCategory.value.photos) {
        await axios({
          url: `api/v1/inspections/${route.params.id}/categories/${editedCategory.value.id}/photos/${photo.id}`,
          responseType: 'arraybuffer',
          withCredentials: true
        })
            .then((response) => {
              const arrayBuffer = response.data;
              const base64String = btoa(
                  new Uint8Array(arrayBuffer)
                      .reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
              loadedImages.value.push(`data:image/jpeg;base64,${base64String}`);
            })
            .catch((error) => {
              console.error('Ошибка загрузки изображения:', error);
              loadedImages.value.push('');
            });
      }
    };
        const getImageUrl = (name) => {
      return new URL(`/${name}`, import.meta.url).href
    }
    let uploadPhotoDialog = ref(false);
    const onUploadDialog = (item) => {
      uploadPhotoDialog.value = true
      editedCategory.value = item;
    }
    const uploadScan = async () => {
      for (const file of editedCategory.value.photos) {
        if (!file.id) {
          let formData = new FormData();
          formData.append('file', file);
          let data = {
            inspectionId: route.params.id,
            id: editedCategory.value.id,
            file: formData
          }
          await store.dispatch('categories/addCategoryPhoto', data)
        }
      }
      uploadPhotoDialog.value = false;
      store.dispatch('categories/allCategories', route.params.id);
    };
    const fileAdded = (file)=> {
      editedCategory.value.photos.push(file);
    };
    const viewCategoryPhoto = (value: PhotoCategory) => {
      loadedImages.value = [];
      editedCategory.value = value;
      loadImages();
    };
    const onAddCategoryButtonClick = () => {
      if (editMode.value) {
        const data = {
          id: editedCategory.value.id,
          inspectionId: route.params.id,
          name: editedCategory.value.name
        };
        store.dispatch('categories/putCategory', data).then(() => {
          store.dispatch('categories/allCategories', route.params.id);
          addCategoryDialog.value = false;
          editedCategory.value = Object.assign({}, defaultCategory.value);
        })
      } else {
        const data = {
          inspectionId: route.params.id,
          name: editedCategory.value.name
        };
        store.dispatch('categories/createNewCategory', data).then(() => {
          store.dispatch('categories/allCategories', route.params.id);
          addCategoryDialog.value = false;
          editedCategory.value = Object.assign({}, defaultCategory.value);
        })
      }
    }
    const onPlusButtonClick = () => {
      editedCategory.value = Object.assign({}, defaultCategory.value);
      editMode.value = false;
      addCategoryDialog.value = true;
    }
    const editCategory = (index) => {
      editMode.value = true;
      editedIndex.value = index;
      const item = categoriesList.value[index];
      editedCategory.value = { ...item };
      addCategoryDialog.value = true;
    }
    const cancelUpload = () => {
      uploadPhotoDialog.value = false;
      editedCategory.value = Object.assign({}, defaultCategory.value);
    }
    const onCancel = () => {
      addCategoryDialog.value = false
      editedCategory.value = Object.assign({}, defaultCategory.value);
    }
    const deleteCategory = (value: PhotoCategory) => {
      const index = categoriesList.value.indexOf(value)
      categoriesList.value.splice(index, 1)
      const data = {
        id: route.params.id,
        categoryId: value.id
      }
      store.dispatch('categories/deleteCategory', data)
    }
    const removeFile = (file) => {
      const data = {
        id: editedCategory.value.id,
        inspectionId: route.params.id,
        fileId: file.id
      };
      const index = editedCategory.value.photos.indexOf(file);
      editedCategory.value.photos.splice(index, 1)
      if (file.id) store.dispatch('categories/deleteCategoryPhoto', data)
    }
    return {
      getImageUrl,
      categoriesList,
      route,
      onAddCategoryButtonClick,
      editedCategory,
      uploadScan,
      uploadPhotoDialog,
      fileAdded,
      onUploadDialog,
      viewCategoryPhoto,
      loadImages,
      loadedImages,
      addCategoryDialog,
      editCategory,
      cancelUpload,
      editMode,
      onCancel,
      onPlusButtonClick,
      deleteCategory,
      removeFile
    }
  },
  data() {
    return{
      photos: [] as Photo[],
    }
  },
  methods: {


  }
});
</script>

<style scoped>
.v-btn{
  font-size: 12px
}
</style>
