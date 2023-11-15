<template>
  <v-card border elevation="10" style="border-color: #E03021">
    <v-row>
      <v-col cols="3">
        <CustomAvatar/>
        <v-card-text style="margin-left: 20%;">Логотип компании</v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-title>Компания</v-card-title>
        <v-card-item>
          <v-text-field v-model="editedCompany.name" label="Название компании"></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="editedCompany.city" label="Город"></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-textarea v-model="editedCompany.requisites" label="Реквизиты компании"></v-textarea>
        </v-card-item>
          <v-card-text>Загрузить СРО (.jpg)
            <v-btn icon @click="uploadScanDialog = true" size="40">
              <v-icon>
                mdi-paperclip
              </v-icon>
            </v-btn>
          </v-card-text>
        <v-card-actions>
          <v-btn color="#E03021" variant="outlined">Сохранить</v-btn>
        </v-card-actions>
        <v-divider class="divider"/>
        <v-card-title>Список лицензий</v-card-title>
        <v-card-actions>
          <v-btn
              @click="addLicenseDialog = true"
              variant="text"
              color="#E03021">
            Добавить лицензию
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card-actions>
        <v-table v-if="editedCompany.licenses.length > 0">
          <template v-slot:default>
            <thead>
            <tr>
              <th>Название</th>
              <th>Сканы лицензии</th>
              <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(license, index) in editedCompany.licenses" :key="index">
              <td>{{ license.name }}</td>
              <td>
                <v-btn icon @click="uploadLicenseScanDialog = true" size="40">
                  <v-icon>mdi-paperclip</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn icon @click="editLicense(index)" size="40">
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn icon @click="deleteLicense(index)" size="40">
                  <v-icon color="#E03021">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-table>
        <v-divider class="divider"/>
        <v-card-title>Список сотрудников компании</v-card-title>
        <v-card-actions>
          <v-btn
              @click="addEmployeeDialog = true"
              variant="text"
              color="#E03021">
            Добавить сотрудника
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card-actions>
        <v-table v-if="editedCompany.employees.length > 0">
          <template v-slot:default>
            <thead>
            <tr>
              <th>ФИО</th>
              <th>Должность</th>
              <th>Подпись</th>
              <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            <!-- Здесь будут данные о сотрудниках -->
            <tr v-for="(employee, index) in editedCompany.employees" :key="index">
              <td>{{ employee.fullName }}</td>
              <td>{{ employee.position }}</td>
              <td>{{ employee.signature }}</td>
              <td>
                <v-btn @click="editEmployee(index)" icon size="40">
                  <v-icon>
                    mdi-pencil

                  </v-icon>
                </v-btn>
                <v-btn @click="deleteEmployee(index)" icon size="40">
                  <v-icon color="#E03021">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-table>
        <v-card-actions>
          <v-btn color="#E03021" variant="outlined">
            Удалить компанию
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-dialog v-model="uploadScanDialog" max-width="600px">
      <v-card>
        <v-card-title>Загрузить скан СРО</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <DragAndDrop
                  :files="editedCompany.sro"
                  :is-multiple="false"
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

    <v-dialog v-model="uploadLicenseScanDialog" max-width="600px">
      <v-card>
        <v-card-title>Загрузить сканы лицензии</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <DragAndDrop
                  :files="newLicense.scans"
                  :is-multiple="true"
                  @fileAdded="onUploadLicenses"
                  @removeFile="onRemoveLicenses"/>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="uploadLicenseScan">Загрузить</v-btn>
          <v-btn @click="cancelLicenseUpload">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Диалоговое окно для добавления сотрудника -->
    <v-dialog v-model="addEmployeeDialog" max-width="500px">
      <v-card>
        <v-card-title>Добавить сотрудника</v-card-title>
        <v-card-text>
          <v-text-field v-model="newEmployee.fullName" label="ФИО"></v-text-field>
          <v-text-field v-model="newEmployee.position" label="Должность"></v-text-field>
          <v-file-input v-model="newEmployee.signature" label="Добавить подпись (.jpg)"></v-file-input>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addEmployee">Добавить</v-btn>
          <v-btn @click="addEmployeeDialog = false">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
  <v-dialog v-model="addLicenseDialog" max-width="500px">
    <v-card>
      <v-card-title>Добавить лицензию</v-card-title>
      <v-card-text>
        <v-text-field v-model="newLicense.name" label="Название"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="addLicense">Добавить</v-btn>
        <v-btn @click="cancelLicense">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CustomAvatar from "./CustomAvatar.vue";
import DragAndDrop from "../../DragAndDrop.vue";

interface License {
  name: string,
  scans: []
}

interface Employee {
  fullName: string,
  position: string,
  signature: null | File
}

export default defineComponent({
  name: "CompanyCard",
  components: {DragAndDrop, CustomAvatar},
  data() {
    return {
      addEmployeeDialog: false,
      uploadScanDialog: false,
      uploadLicenseScanDialog: false,
      editedCompany: {
        name: "",
        city: "",
        requisites: "",
        sro: [],
        licenses: [] as License[],
        employees: [] as Employee[]
      },
      newEmployee: {
        fullName: "",
        position: "",
        signature: null, // Подпись может быть файлом
      },
      addLicenseDialog: false,
      editedLicenseIndex: -1,
      newLicense: {
        name: "",
        scans: [],
      },
    };
  },
  methods: {
    addEmployee() {
      // Добавление нового сотрудника в массив
      this.editedCompany.employees.push({...this.newEmployee});
      // Сброс значений после добавления
      this.newEmployee.fullName = "";
      this.newEmployee.position = "";
      this.newEmployee.signature = null;
      this.addEmployeeDialog = false;
    },
    editEmployee(index) {
      // Логика редактирования сотрудника
      // Можно открыть диалог с предварительно заполненными данными
    },
    deleteEmployee(index) {
      // Логика удаления сотрудника
      this.editedCompany.employees.splice(index, 1);
    },
    fileAdded(file) {
      this.editedCompany.sro.push(file);
    },
    removeFile(file) {
      const index = this.editedCompany.sro.indexOf(file);
      this.editedCompany.sro.splice(index, 1)
    },
    uploadScan(item) {
      item.sro = this.editedCompany.sro;
      this.uploadScanDialog = false;
    },
    cancelUpload() {
      this.uploadScanDialog = false;
      this.editedCompany.sro = [];
    },
    addLicense() {
      this.editedCompany.licenses.push({...this.newLicense});
      this.newLicense.name = "";
      this.newLicense.scans = [];
      this.addLicenseDialog = false;
    },
    cancelLicense() {
      this.newLicense.name = "";
      this.newLicense.scans = [];
      this.addLicenseDialog = false;
    },
    showLicenseScans(index: number) {
      const license = this.editedCompany.licenses[index];
      // Отобразить сканы лицензии, например, в модальном окне или как-то еще.
      // Это можно сделать с помощью диалогового окна или другого компонента для отображения сканов.
    },

    editLicense(index: number) {
      this.editedLicenseIndex = index;
      const license = this.editedCompany.licenses[index];
      this.newLicense.name = license.name;
      this.newLicense.scans = license.scans;
      this.addLicenseDialog = true;
    },

    deleteLicense(index: number) {
      this.editedCompany.licenses.splice(index, 1);
    },

    onUploadLicenses(files) {
      this.newLicense.scans.push(files);
    },
    onRemoveLicenses(file) {
      const index =  this.newLicense.scans.indexOf(file);
      this.newLicense.scans.splice(index, 1)
    },
    uploadLicenseScan(item) {
      item.scans = this.newLicense.scans;
      this.uploadLicenseScanDialog = false;
    },
    cancelLicenseUpload() {
      this.uploadLicenseScanDialog = false;
      this.newLicense.scans = [];
    },
  },
});
</script>

<style scoped>
</style>
