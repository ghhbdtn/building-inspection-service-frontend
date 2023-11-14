<template>
  <v-card>
    <v-row>
      <v-col cols="3">
        <CustomAvatar/>
        <v-card-text style="margin-left: 20%;">Логотип компании</v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-title>Компания</v-card-title>
        <v-card-item>
          <v-text-field label="Название компании" v-model="editedCompany.name"></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field label="Город" v-model="editedCompany.city"></v-text-field>
        </v-card-item>
        <v-card-actions>
            <v-card-text>СРО (.jpg)
              <v-btn @click="uploadScanDialog = true" icon>
                <v-icon>
                  mdi-paperclip
                </v-icon>
              </v-btn>
            </v-card-text>

        </v-card-actions>
        <v-card-actions>
        <v-btn>
          Добавить лицензию
        </v-btn>
        </v-card-actions>
        <v-divider color="#E03021" style="font-size: 5rem"/>
        <v-card-title>Список сотрудников компании</v-card-title>
        <v-card-actions>
          <v-btn @click="addEmployeeDialog = true">
            Добавить сотрудника
          </v-btn>
        </v-card-actions>
        <v-table>
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
                <v-btn @click="editEmployee(index)">Редактировать</v-btn>
                <v-btn @click="deleteEmployee(index)">Удалить</v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-table>
        <v-card-actions>
          <v-btn>
            Удалить компанию
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-dialog v-model="uploadScanDialog" max-width="600px">
      <v-card>
        <v-card-title>Загрузить сканы проверок</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <DragAndDrop
                  :files="editedCompany.sro"
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
    <!-- Диалоговое окно для добавления сотрудника -->
    <v-dialog v-model="addEmployeeDialog" max-width="500px">
      <v-card>
        <v-card-title>Добавить сотрудника</v-card-title>
        <v-card-text>
          <v-text-field label="ФИО" v-model="newEmployee.fullName"></v-text-field>
          <v-text-field label="Должность" v-model="newEmployee.position"></v-text-field>
          <v-file-input label="Добавить подпись (.jpg)" v-model="newEmployee.signature"></v-file-input>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addEmployee">Добавить</v-btn>
          <v-btn @click="addEmployeeDialog = false">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
      editedCompany: {
        name: "",
        city: "",
        sro: [],
        licenses: [] as License[],
        employees: [] as Employee[]
      },
      newEmployee: {
        fullName: "",
        position: "",
        signature: null, // Подпись может быть файлом
      },
    };
  },
  methods: {
    addEmployee() {
      // Добавление нового сотрудника в массив
      this.editedCompany.employees.push({ ...this.newEmployee });
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
  },
});
</script>

<style scoped>
</style>
