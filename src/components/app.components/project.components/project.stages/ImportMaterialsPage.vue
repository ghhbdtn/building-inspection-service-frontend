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
                <v-table v-if="categoriesList.length > 0">
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
                        <v-btn icon @click="uploadPhotoDialog = true" size="40">
                          <v-icon>mdi-paperclip</v-icon>
                        </v-btn>
                        ({{category.pics.length}})
                      </td>
                      <td>
                        <v-btn icon @click="viewCategoryPhoto(category)" size="40">
                          <v-icon>
                            mdi-eye
                          </v-icon>
                        </v-btn>
                      </td>
                      <td>
                        <v-btn icon @click="deleteCategory(index)" size="40">
                          <v-icon color="#E03021">
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
                    <v-btn icon v-bind="props" @click="addCategoryDialog = true" color="#181D2B" size="40">
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
            <v-carousel height="300" width="300" v-if="photos.length > 0"
                        show-arrows-on-hover
                        cover
            >
              <v-carousel-item  v-for="photo in photos"
                   :key="photo" :src="previewImage(photo)"
              >
              </v-carousel-item></v-carousel>
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
        <v-btn @click="addCategoryDialog = false">{{ editMode ? 'Отмена' : 'Закрыть' }}</v-btn>
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
                :files="editedCategory.pics"
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
import {defineComponent, ref} from "vue";
import ComponentRow from "./ComponentRow.vue";
import DragAndDrop from "../../../DragAndDrop.vue";

interface  PhotoCategory  {
  name: String,
  pics: String[]
}

export default defineComponent({
  name: "ImportMaterialsPage",
  components: {ComponentRow, DragAndDrop},
  emits: ['view', 'delete'],
  setup() {
    const getImageUrl = (name) => {
      return new URL(`/${name}`, import.meta.url).href
    }
    return { getImageUrl }
  },
  data() {
    return{
      categoriesList: [] as PhotoCategory[],
      photos: [] as string[],
      editedCategory: {
        name: "",
        pics: []
      } as PhotoCategory,
      addCategoryDialog: false,
      uploadPhotoDialog: false,
      editMode: false,
      editedIndex: false
    }
  },
  methods: {
    onAddCategoryButtonClick () {
      this.categoriesList.push({...this.editedCategory})
      this.addCategoryDialog = false
    },
     viewCategoryPhoto (value: PhotoCategory) {
      const urls = value.pics;
      this.photos = urls
    },
    deleteCategory (value: PhotoCategory)  {
      const index = this.categoriesList.indexOf(value)
      this.categoriesList.splice(index, 1)
    },
     previewImage (file)  {
      if (file) {
        return URL.createObjectURL(file);
      } else {
        // Возвращайте путь к заглушке или другому изображению по умолчанию
        return new URL(
            `/src/assets/photo-camera-black-tool_icon-icons.com_72960.svg`,
            import.meta.url
        ).href;
      }
    },
    fileAdded(file) {
      this.editedCategory.pics.push(file);
    },
    removeFile(file) {
      const index = this.editedCategory.pics.indexOf(file);
      this.editedCategory.pics.splice(index, 1)
    },
    uploadScan(item) {
      item.sro = this.editedCategory.pics;
      this.uploadPhotoDialog = false;
    },
    cancelUpload() {
      this.uploadPhotoDialog = false;
      this.editedCategory.pics = [];
    },
    editCategory(index) {
      this.editMode = true;
      this.editedIndex = index;
      const item = this.categoriesList[index];
      this.editedCategory = { ...item };
      this.addCategoryDialog = true;
    },
  }
});
</script>

<style scoped>
.v-btn{
  font-size: 12px
}
</style>
