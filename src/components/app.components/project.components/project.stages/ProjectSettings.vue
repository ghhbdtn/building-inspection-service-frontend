<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-btn-group>
          <v-btn>
            Ввод данных
          </v-btn>
          <v-btn>
            Импорт ТЗ для анализа
          </v-btn>
          <v-btn>
            Скан с подписью
          </v-btn>
        </v-btn-group>
      </v-row>
    </v-container>
    <v-divider class="divider-project"/>
    <v-container fluid>
      <v-card border elevation="0">
        <v-row>
          <v-col cols="7" offset="20">
            <v-form>
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
            </v-form>

          </v-col>
          <v-col cols="4" offset-sm="20">
            <v-container>
              <v-row>
                <v-card-subtitle>Обложка проекта</v-card-subtitle>
              </v-row>
              <v-row>
                <div v-if="previewImageUrl" class="image-container">
                  <v-img :src="previewImageUrl" alt="Предварительный просмотр" class="rounded-image" height="200"
                         width="200"/>
                </div>
              </v-row>
              <v-row>
                <v-file-input
                    accept="image/*"
                    density="compact"
                    hide-input
                    @change="previewImage"
                ></v-file-input>
              </v-row>
              <v-row>
                <v-textarea
                    disabled="true"
                    label="Контекстные данные из ТЗ"
                    variant="outlined">
                </v-textarea>
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

export default defineComponent({
  name: "ProjectSettings",
  setup() {
    const previewImageUrl = ref(new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href);

    const previewImage = async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const imageUrl: string = await readFileAsDataURL(file) as string;
          previewImageUrl.value = imageUrl;
        } catch (error) {
          console.error('Ошибка при загрузке изображения:', error);
        }
      } else {
        previewImageUrl.value = ref(new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href);
      }
    };

    const readFileAsDataURL = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    };

    return {previewImageUrl, previewImage};
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

.v-btn {
  font-size: 12px
}
</style>
