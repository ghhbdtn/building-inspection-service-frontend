<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-btn-group>
          <v-btn>
             Отправить программу работ
          </v-btn>
          <v-btn>
            Экспорт чертежей
          </v-btn>
          <v-btn>
            *Импорт результатов изысканий
          </v-btn>
          <v-btn>
            *Календарный график
          </v-btn>
          <v-btn>
            *Сформировать программу работ
          </v-btn>
          <v-btn>
            *Анализ корректности ТЗ
          </v-btn>
        </v-btn-group>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container fluid>
      <v-row>
        <v-col cols="6" offset="20">
          <v-card elevation="0" border>
            <v-container fluid>
            <v-row>
              <v-col>
              <v-card-text>Загрузить обмерные чертежи или схемы здания</v-card-text>
              </v-col>
              <v-col>
              <v-file-input variant="underlined" multiple></v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
              <v-card-text>Общие виды здания</v-card-text>
              </v-col>
              <v-col>
              <v-file-input variant="underlined" multiple></v-file-input>
              </v-col>
            </v-row>
              <v-row>
                <v-col>
                  <v-card-text>Скан программы работ (с подписью)</v-card-text>
                </v-col>
                <v-col>
                  <v-file-input variant="underlined"></v-file-input>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card-text>Файл программы работ (pdf)</v-card-text>
                </v-col>
                <v-col>
                  <v-file-input variant="underlined"></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="4" offset-sm="20">
          <v-row>
            <h4>Схема осей здания</h4>
          </v-row>
          <v-row>
            <div class="image-container">
              <img alt="Предварительный просмотр" height="200" width="200" class="rounded-image"/>
            </div>
            <v-file-input
                accept="image/*"
                density="compact"
                variant="underlined"
            ></v-file-input>
          </v-row>
          <v-row>
            <v-textarea
                variant="outlined"
                label="Контекстные данные из программы работ"
                disabled="true">
            </v-textarea>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "InspectionPreparation"
});
</script>

<style scoped>
.v-btn{
  font-size: 12px
}
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
</style>
