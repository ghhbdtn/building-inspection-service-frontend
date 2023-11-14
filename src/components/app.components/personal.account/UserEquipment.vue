<template>
  <v-main>
    <v-container>
      <v-dialog v-model="addEquipmentDialog" max-width="500px">
        <v-card>
          <v-card-title v-if="!editMode">Добавить оборудование</v-card-title>
          <v-card-title v-else>Редактировать оборудование</v-card-title>
          <v-card-text>
            <v-text-field v-model="editedEquipment.name" label="Наименование Си"></v-text-field>
            <v-text-field v-model="editedEquipment.serialNumber" label="Заводской номер"></v-text-field>
            <v-text-field v-model="editedEquipment.checkNumber" label="Номер проверки"></v-text-field>
            <v-text-field v-model="editedEquipment.checkDate" label="Дата проверки" type="date"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="saveEquipment">{{ editMode ? 'Сохранить' : 'Добавить' }}</v-btn>
            <v-btn @click="cancelEquipment">{{ editMode ? 'Отмена' : 'Закрыть' }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="uploadScanDialog" max-width="600px">
        <v-card>
          <v-card-title>Загрузить сканы проверок</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <DragAndDrop
                    :files="editedEquipment.scans"
                    @fileAdded="fileAdded"
                    @removeFile="removeFile"
                    :is-multiple="true"/>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="uploadScan">Загрузить</v-btn>
            <v-btn @click="cancelUpload">Отмена</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn @click="openAddDialog" text>
        Добавить оборудование
      </v-btn>

      <v-table class="table" :hide-no-data="true">
        <v-table class="table" :hide-no-data="true"
        >
          <thead>
          <tr>
            <th scope="col">Наименование Си</th>
            <th scope="col">Заводской номер</th>
            <th scope="col">Номер проверки</th>
            <th scope="col">Дата проверки</th>
            <th scope="col">Сканы проверок</th>
            <th scope="col">Действия</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in equipmentList" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.serialNumber }}</td>
            <td>{{ item.checkNumber }}</td>
            <td>{{ item.checkDate }}</td>
            <td>
              <v-btn @click="uploadScanDialog = true" icon>
                <v-icon>
                  mdi-paperclip
                </v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn @click="openEditDialog(index)" icon>
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn @click="removeItem(index)" icon>
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-table>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DragAndDrop from "../../DragAndDrop.vue";

export default defineComponent({
  name: "UserEquipment",
  components: { DragAndDrop },
  data() {
    return {
      addEquipmentDialog: false,
      uploadScanDialog: false,
      editMode: false,
      editedIndex: -1,
      editedEquipment: {
        name: "",
        serialNumber: "",
        checkNumber: "",
        checkDate: "",
        scans: []
      },
      equipmentList: [
        { name: "Оборудование 1", serialNumber: "SN001", checkNumber: "CN001", checkDate: "2023-01-01", scans: [] },
        { name: "Оборудование 2", serialNumber: "SN002", checkNumber: "CN002", checkDate: "2023-02-01", scans:[] },
      ],
    };
  },
  methods: {
    openAddDialog() {
      this.editMode = false;
      this.clearEditedEquipment();
      this.addEquipmentDialog = true;
    },
    openEditDialog(index) {
      this.editMode = true;
      this.editedIndex = index;
      const item = this.equipmentList[index];
      this.editedEquipment = { ...item };
      this.addEquipmentDialog = true;
    },
    saveEquipment() {
      if (this.editMode) {
        this.equipmentList.splice(this.editedIndex, 1, { ...this.editedEquipment });
      } else {
        this.equipmentList.push({ ...this.editedEquipment });
      }
      this.addEquipmentDialog = false;
      this.clearEditedEquipment();
    },
    cancelEquipment() {
      this.addEquipmentDialog = false;
      this.clearEditedEquipment();
    },
    clearEditedEquipment() {
      this.editedEquipment = {
        name: "",
        serialNumber: "",
        checkNumber: "",
        checkDate: "",
        scans: []
      };
      this.editMode = false;
      this.editedIndex = -1;
    },
    uploadScan(item) {
      item.scans = this.editedEquipment.scans;
      this.uploadScanDialog = false;
    },
    cancelUpload() {
      this.uploadScanDialog = false;
      this.editedEquipment.scans = [];
    },
    fileAdded(file) {
      this.editedEquipment.scans.push(file);
    },
    removeItem(index) {
      this.equipmentList.splice(index, 1);
    },
    removeFile(file) {
      const index = this.editedEquipment.scans.indexOf(file);
      this.editedEquipment.scans.splice(index, 1)
    },
  },
});
</script>

<style scoped>

</style>

