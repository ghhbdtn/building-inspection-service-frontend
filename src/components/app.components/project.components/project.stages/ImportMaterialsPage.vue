<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-btn-group>
          <v-btn>
            Синхронизировать
          </v-btn>
          <v-btn>
            Скачать фото с объекта
          </v-btn>
          <v-btn>
            Отправить фото на распознавание
          </v-btn>
          <v-btn>
            Отправить контекстную информацию
          </v-btn>
        </v-btn-group>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container fluid>
      <v-card elevation="0" border>
      <v-row>
        <v-col cols="7" offset="20">
            <v-container fluid>
              <v-row>
                <v-card-title>
                  Загрузка фото по категориям
                </v-card-title>
              </v-row>
              <v-col>
              <template v-for="value in categoriesList" v-if="categoriesList">
                <ComponentRow :category="value" @view="viewCategoryPhoto(value)" @delete="deleteCategory(value)"/>
              </template>
              </v-col>
              <v-row>
                <v-tooltip text="Добавить категорию">
                  <template v-slot:activator="{props}">
                    <v-btn icon v-bind="props" @click="onAddCategoryButtonClick">
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
            <v-carousel height="400" width="400">
              <v-carousel-item v-if="photos" v-for="photo in photos"
                   :key="photo">
                <v-img :src="previewImage(photo)" width="400" height="400" alt="photo" style="justify-self: center"/>
              </v-carousel-item>
              <v-carousel-item v-else></v-carousel-item>
            </v-carousel>
          </v-row>
          </v-container>
        </v-col>
      </v-row>
      </v-card>
    </v-container>
  </v-main>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import ComponentRow from "./ComponentRow.vue";

interface  PhotoCategory  {
  name: String,
  pics: String[]
}

export default defineComponent({
  name: "ImportMaterialsPage",
  components: {ComponentRow},
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
      photos: [] as string[]
    }
  },
  methods: {
    onAddCategoryButtonClick () {
      this.categoriesList.push({name: "", pics: []} as PhotoCategory)
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
    }
  }
});
</script>

<style scoped>
.v-btn{
  font-size: 12px
}
</style>
