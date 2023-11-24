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
                <v-text-field label="Название проекта"></v-text-field>
              </v-card-item>
              <v-card-item>
                <v-select label="Компания"></v-select>
              </v-card-item>
              <v-card-item>
                <v-text-field label="Адрес"></v-text-field>
              </v-card-item>
              <v-card-item>
                <v-text-field label="Шифр проекта"></v-text-field>
              </v-card-item>
              <v-card-item>
                <v-select label="Ответственный исполнитель"></v-select>
              </v-card-item>
              <v-card-item>
                <v-text-field label="Сроки проведения работ"></v-text-field>
              </v-card-item>
              <v-card-item>
                <v-checkbox label="Объект культурного наследия"></v-checkbox>
              </v-card-item>
              <v-card-actions>
                <v-btn variant="outlined" color="#E03021">
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
                        size="230"
                        style="border-radius: 10%"
                    >
                        <img :src="avatarSrc" :width="230"  :height="230" style=" border: double #E03021; border-radius: 10%">
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
<!--              <v-row>-->
<!--                <v-textarea-->
<!--                    disabled="true"-->
<!--                    label="Контекстные данные из ТЗ"-->
<!--                    variant="outlined">-->
<!--                </v-textarea>-->
<!--              </v-row>-->
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "ProjectSettings",
  // setup() {
  //   const previewImageUrl = ref(new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href);
  //
  //   const previewImage = async (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       try {
  //         const imageUrl: string = await readFileAsDataURL(file) as string;
  //         previewImageUrl.value = imageUrl;
  //       } catch (error) {
  //         console.error('Ошибка при загрузке изображения:', error);
  //       }
  //     } else {
  //       previewImageUrl.value = ref(new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href);
  //     }
  //   };
  //
  //   const readFileAsDataURL = (file) => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         resolve(reader.result);
  //       };
  //       reader.onerror = (error) => {
  //         reject(error);
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   };
  //
  //   return {previewImageUrl, previewImage};
  // },
  data() {
    return {

      avatarSrc: new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href, // Заглушка для изображения
    };
  },
  methods: {
    openFilePicker() {
      // Открыть проводник при нажатии на аватар
      this.$refs.fileInput.click();
    },
    handleFileUpload: function (event: Event) {
      const input = event.target as HTMLInputElement;
      if (input != null && input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Обновить изображение аватара при загрузке нового файла
          if (e.target) {
            this.avatarSrc = e.target.result as string;
          }
        };
        reader.readAsDataURL(input.files[0]);
        let formData = new FormData();
        formData.append('file', input.files[0]);
        let data = {
          inspectionId: route.params.id,
          id: editedCategory.value.id,
          file: formData
        }
      }
    },
    deletePhoto() {
      // Удалить фотографию (можно добавить здесь логику удаления)
      this.avatarSrc = new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href; // Возвращаем заглушку
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
