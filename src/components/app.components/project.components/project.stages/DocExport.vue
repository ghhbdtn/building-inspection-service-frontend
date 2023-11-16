<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4" offset="20">
          <v-card elevation="0" border style="border-color: #E03021" width="600">
            <v-container fluid>
              <v-card-item>
                <v-card-subtitle>Пожалуйста дождитесь завершения формирования отчета</v-card-subtitle>
              </v-card-item>
              <v-card-item>

                <v-progress-linear  indeterminate :height="12"/>

              </v-card-item>
              <v-card-actions>
              <v-row justify="center">
                  <v-btn variant="outlined" color="#E03021">
                    Скачать отчет
                  </v-btn>
              </v-row>
              </v-card-actions>
              <v-card-actions>
              <v-row justify="center">
                <v-btn variant="outlined" color="#E03021">
                  Скачать dwg файлы
                </v-btn>
              </v-row>
              </v-card-actions>
            </v-container>
            <v-divider class="divider-project"/>
            <v-container>
              <v-textarea label="Нужно ли что-то подправить?"></v-textarea>
              <v-card-actions>
                <v-btn variant="outlined" color="#E03021">
                  Отправить
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DocExport"
});
</script>

<style scoped>

</style>
