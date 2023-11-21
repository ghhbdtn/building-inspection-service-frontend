<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-btn-group>
          <v-btn color="#E03021" style="border-color: #E03021" variant="outlined">
             Отправить программу работ
          </v-btn>
          <v-btn color="#E03021" style="border-color: #E03021" variant="outlined">
            Экспорт чертежей
          </v-btn>
        </v-btn-group>
      </v-row>
    </v-container>
    <v-divider class="divider-project"/>
    <v-container fluid>
      <v-card elevation="0" border style="border-color: #E03021">
        <v-container fluid>
      <v-row>
        <v-col >
            <v-row justify="space-around">
              <v-col>
              <v-card-text>Загрузить обмерные чертежи или схемы здания</v-card-text>
              </v-col>
              <v-col>
                <v-btn icon @click="uploadMeasurementDrawings = true" color="#181D2B">
                  <v-icon size="25">
                    mdi-paperclip
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
              <v-card-text>Общие виды здания</v-card-text>
              </v-col>
              <v-col>
              <v-btn icon @click="uploadBuildingViewsDialog = true" color="#181D2B">
                <v-icon size="25">
                  mdi-paperclip
                </v-icon>
              </v-btn>
              </v-col>
            </v-row>
              <v-row>
                <v-col>
                  <v-card-text>Скан программы работ (с подписью)</v-card-text>
                </v-col>
                <v-col>
                  <v-btn icon @click="uploadWorkProgramScanDialog = true" color="#181D2B">
                    <v-icon size="25">
                      mdi-paperclip
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card-text>Файл программы работ (pdf)</v-card-text>
                </v-col>
                <v-col>
                  <v-btn icon @click="uploadProgramWorkDialog = true" color="#181D2B">
                    <v-icon size="25">
                      mdi-paperclip
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
        </v-col>
        <v-col >
          <v-row justify="space-around">
            <h4>Схема осей здания</h4>
          </v-row>
          <v-row justify="space-around">
            <v-menu
                max-width="100"
                rounded
            >
              <template v-slot:activator="{ props }">
                <v-btn
                    elevation="0"
                    v-bind="props"
                    height="300"
                    width="500"
                >

                  <img :src="avatarSrc" :width="500"  :height="300" style=" border: double #E03021;">
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
<!--          <v-row>-->
<!--            <v-textarea-->
<!--                variant="outlined"-->
<!--                label="Контекстные данные из программы работ"-->
<!--                disabled="true">-->
<!--            </v-textarea>-->
<!--          </v-row>-->
        </v-col>
      </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-main>

  <v-dialog v-model="uploadMeasurementDrawings" max-width="600px">
    <v-card>
      <v-card-title>Загрузить обмерные чертежи</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <DragAndDrop
                :files="measurementDrawings"
                @fileAdded="addMeasurementDrawings"
                @removeFile="removeMeasurementDrawings"
                :is-multiple="true"/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="onUploadMeasurementDrawings">Загрузить</v-btn>
        <v-btn @click="cancelMeasurementDrawings">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="uploadBuildingViewsDialog" max-width="600px">
    <v-card>
      <v-card-title>Загрузить общие виды здания</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <DragAndDrop
                :files="buildingViews"
                @fileAdded="addBuildingViews"
                @removeFile="removeBuildingViews"
                :is-multiple="true"/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="uploadBuildingViews">Загрузить</v-btn>
        <v-btn @click="cancelBuildingViews">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="uploadProgramWorkDialog" max-width="600px">
    <v-card>
      <v-card-title>Загрузить файл программы работ</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <DragAndDrop
                :files="programWork"
                @fileAdded="addProgramWork"
                @removeFile="removeProgramWork"
                :is-multiple="false"/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="uploadProgramWork">Загрузить</v-btn>
        <v-btn @click="cancelProgramWork">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="uploadWorkProgramScanDialog" max-width="600px">
    <v-card>
      <v-card-title>Загрузить скан программы работ</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <DragAndDrop
                :files="workProgramScan"
                @fileAdded="addWorkProgramScan"
                @removeFile="removeWorkProgramScan"
                :is-multiple="false"/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="uploadWorkProgramScan">Загрузить</v-btn>
        <v-btn @click="cancelWorkProgramScan">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DragAndDrop from "../../../DragAndDrop.vue";

export default defineComponent({
  name: "InspectionPreparation",
  components: {DragAndDrop},
  data() {
    return {
      uploadMeasurementDrawings: false,
      measurementDrawings: [],
      uploadBuildingViewsDialog: false,
      buildingViews: [],
      workProgramScan: [],
      uploadWorkProgramScanDialog: false,
      uploadProgramWorkDialog: false,
      programWork: [],
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
      }
    },
    deletePhoto() {
      // Удалить фотографию (можно добавить здесь логику удаления)
      this.avatarSrc = new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href; // Возвращаем заглушку
    },

    addMeasurementDrawings(files: File[]) {
      this.measurementDrawings.push(files);
    },
    onUploadMeasurementDrawings(item) {
      item = this.measurementDrawings;
      this.uploadMeasurementDrawings = false;
    },
    cancelMeasurementDrawings() {
      this.uploadMeasurementDrawings = false;
      this.measurementDrawings = [];
    },
    removeMeasurementDrawings(file) {
      const index = this.measurementDrawings.indexOf(file);
      this.measurementDrawings.splice(index, 1)
    },

    addBuildingViews(files: File[]) {
      this.buildingViews.push(files);
    },
    removeBuildingViews(file: File){
      const index = this.buildingViews.indexOf(file);
      this.buildingViews.splice(index, 1)
    },
    uploadBuildingViews(item){
      item=this.buildingViews;
      this.uploadBuildingViewsDialog = false;
    },
    cancelBuildingViews(){
      this.uploadBuildingViewsDialog = false;
      this.buildingViews = [];
    },

    addWorkProgramScan(file: File){
      this.workProgramScan.push(file);
    },
    removeWorkProgramScan(file: File){
      const index = this.workProgramScan.indexOf(file);
      this.workProgramScan.splice(index, 1)
    },
    uploadWorkProgramScan(item){
      item=this.workProgramScan;
      this.uploadWorkProgramScanDialog = false;
    },
    cancelWorkProgramScan(){
      this.uploadWorkProgramScanDialog = false;
      this.workProgramScan = [];
    },

    addProgramWork(file: File){
      this.programWork.push(file);
    },
    removeProgramWork(file: File){
      const index = this.programWork.indexOf(file);
      this.programWork.splice(index, 1)
    },
    uploadProgramWork(item){
      item=this.programWork;
      this.uploadProgramWorkDialog = false;
    },
    cancelProgramWork() {
      this.uploadProgramWorkDialog = false;
      this.programWork = [];
    }
  },
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
  height: 200px;
}

.rounded-image {
  border: 2px solid #ccc;
  border-radius: 10px;
}
</style>
