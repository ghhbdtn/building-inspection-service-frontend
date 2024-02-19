<template>
  <v-main>
    <v-container fluid>
  <v-card elevation="0">
    <v-row>
      <v-col cols="3">
        <CustomAvatar :logo="avatar" @onAvatarUpload="onAvatarUpload"/>
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
          <v-text-field v-model="editedCompany.legalAddress" label="Реквизиты компании"></v-text-field>
        </v-card-item>
        <v-card-actions>
          <v-btn color="#E03021" variant="outlined" @click="saveCompanyData">Сохранить</v-btn>
        </v-card-actions>
          <v-card-text>Загрузить СРО (.jpg)
            <v-btn @click="uploadScanDialog = true" icon size="30" elevation="0">
              <v-icon>
                mdi-paperclip
              </v-icon>
            </v-btn>
            ({{editedCompany.sro ? editedCompany.sro.length : 0}})
          </v-card-text>
        <v-divider class="divider"/>
        <v-card-title>Список лицензий</v-card-title>
        <v-card-actions>
          <v-btn
              @click="onAddLicDialog"
              variant="text"
              color="#E03021">
            Добавить лицензию
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card-actions>
        <v-table v-if="editedCompany.licenses">
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
                <v-btn @click="onLicDialog(license)" icon size="30" elevation="0">
                  <v-icon>mdi-paperclip</v-icon>
                </v-btn>
                ({{license.files.length}})
              </td>
              <td>
                <v-btn @click="editLicense(index)" icon size="30" elevation="0">
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn @click="deleteLicense(license)" icon size="30" elevation="0">
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
              @click="onAddEmployer"
              variant="text"
              color="#E03021">
            Добавить сотрудника
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card-actions>
        <v-table v-if="editedCompany.employers">
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
            <tr v-for="(employee, index) in editedCompany.employers" :key="index">
              <td>{{ employee.name }}</td>
              <td>{{ employee.positionName }}</td>
              <td>{{ employee.signatureName }}</td>
              <td>
                <v-btn @click="editEmployee(index)" icon size="30" elevation="0">
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn @click="deleteEmployee(index)" icon size="30" elevation="0">
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
          <v-btn color="#E03021" variant="outlined" @click="onRemoveCompany">
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

    <v-dialog v-model="uploadLicenseScanDialog" max-width="600px">
      <v-card>
        <v-card-title>Загрузить сканы лицензии</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <DragAndDrop
                  :files="newLicense.files"
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
        <v-card-title>{{editMode ? 'Редактировать данные сотрудника' : 'Добавить сотрудника'}}</v-card-title>
        <v-card-text>
          <v-text-field v-model="newEmployee.name" label="ФИО"></v-text-field>
          <v-text-field v-model="newEmployee.positionName" label="Должность"></v-text-field>
          <v-file-input v-model="newEmployee.signatureName" label="Добавить подпись (.jpg)"></v-file-input>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addEmployee">{{editMode ? 'Сохранить' : 'Добавить'}}</v-btn>
          <v-btn @click="onCancelEmployer">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
    </v-container>
  </v-main>
  <v-dialog v-model="addLicenseDialog" max-width="500px">
    <v-card>
      <v-card-title>{{editLicMode ? 'Редактировать лицензию' : 'Добавить лицензию'}}</v-card-title>
      <v-card-text>
        <v-text-field v-model="newLicense.name" label="Название"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="addLicense">{{editLicMode ? 'Сохранить' : 'Добавить'}}</v-btn>
        <v-btn @click="cancelLicense">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import CustomAvatar from "./CustomAvatar.vue";
import DragAndDrop from "../../DragAndDrop.vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {tr} from "vuetify/locale";

interface License {
  id: number,
  name: string,
  files: []
}

interface Employee {
  id: number,
  name: string,
  positionName: string
  signatureName: null | File
}

interface Sro {
  id: number,
  name: string
}

export default defineComponent({
  name: "CompanyCard",
  components: {DragAndDrop, CustomAvatar},
  setup() {
    const company = ref(computed(() => store.getters['companies/getCompany']));
    const store = useStore();
    const route = useRoute();
    const addEmployeeDialog = ref(false);
    const uploadScanDialog = ref(false);
    const uploadLicenseScanDialog = ref(false);
    const editLicMode = ref(false);
    const editedCompany = ref({
      name: company.value.name,
      city: company.value.city,
      legalAddress: company.value.legalAddress,
      sro: company.value.sro as Sro[],
      licenses: company.value.licenses as License[],
      employers: company.value.employers as Employee[],
    });
    onMounted(() => {
      store.dispatch('companies/getLogo', {id: route.params.id})
    })
    watch(company, (newCompany) => {
      editedCompany.value = {
        name: newCompany.name,
        city: newCompany.city,
        legalAddress: newCompany.legalAddress,
        sro: newCompany.sro as Sro[],
        licenses: newCompany.licenses,
        employers: newCompany.employers,
      };
    });
    const newEmployee = ref({
      id: -1,
      name: "",
      positionName: "",
      signatureName: null | File
    });
    const addLicenseDialog = ref(false);
    const editedLicenseIndex = ref(-1);
    const editMode = ref(false);
    const newLicense = ref({
      name: "",
      files: [] as File[],
    });

    const saveCompanyData = () => {
      let data = {
        data: {
          name: editedCompany.value.name,
          legalAddress: editedCompany.value.legalAddress,
          city: editedCompany.value.city
        },
        id: route.params.id
      }
      store.dispatch('companies/putCompany', data).then(() => {
        store.dispatch('companies/allCompanies')
        store.dispatch('companies/getCompanyData', route.params.id);
      })
    }

    const onAddEmployer = () => {
      addEmployeeDialog.value = true
      editMode.value = false
    }

    const onCancelEmployer = () => {
      addEmployeeDialog.value = false
      newEmployee.value = {
        id: -1,
        name: "",
        positionName: "",
        signatureName: null | File
      }
    }

    const addEmployee = () => {
      if (editMode.value) {
        let formData = new FormData();
        formData.append('signature', newEmployee.value.signatureName[0]);
        let data = {
          id: route.params.id,
          empId: newEmployee.value.id,
          file: formData,
          data: {
            name: newEmployee.value.name,
            positionName: newEmployee.value.positionName
          }
        }
        store.dispatch('companies/putEmployee', data).then(() => {
          store.dispatch('companies/getCompanyData', route.params.id);
          newEmployee.value.name = "";
          newEmployee.value.positionName = "";
          newEmployee.value.signatureName = null;
          addEmployeeDialog.value = false;
        })
      }else {
        editedCompany.value.employers.push({...newEmployee.value});
        let formData = new FormData();
        formData.append('signature', newEmployee.value.signatureName[0]);
        let data = {
          id: route.params.id,
          name: newEmployee.value.name,
          position: newEmployee.value.positionName,
          file: formData
        }
        store.dispatch('companies/addEmployee', data).then(() => {
          newEmployee.value.name = "";
          newEmployee.value.positionName = "";
          newEmployee.value.signatureName = null;
          addEmployeeDialog.value = false;
          store.dispatch('companies/getCompanyData', route.params.id);
        })
      }
    };

    const editEmployee = (index: number) => {
      editMode.value = true;
      const employeeToEdit = editedCompany.value.employers[index];

      const signatureBlob = new Blob([employeeToEdit.signatureName], { type: 'image/jpeg' });
      const signatureFile = new File([signatureBlob], employeeToEdit.signatureName, { type: 'image/jpeg' });

      // Загрузить данные сотрудника в форму редактирования
      newEmployee.value = {
        id: employeeToEdit.id,
        name: employeeToEdit.name,
        positionName: employeeToEdit.positionName,
        signatureName: signatureFile
      };

      // Отобразить диалог добавления сотрудника для редактирования
      addEmployeeDialog.value = true;
    };

    const deleteEmployee = (index: number) => {
          let data = {
            id: route.params.id,
            empId: editedCompany.value.employers[index].id,
          }
          store.dispatch('companies/deleteEmployee', data).then(() => {
            editedCompany.value.employers.splice(index, 1);
          })
    };

    const fileAdded = (file: File) => {
      editedCompany.value.sro.push(file);
    };

    const removeFile = (file: File) => {
      const index = editedCompany.value.sro.indexOf(file);
      if (editedCompany.value.sro[index].id) {
        let data = {
          id: route.params.id,
          sroId: editedCompany.value.sro[index].id
        }
        store.dispatch('companies/deleteSro', data).then(() => {
          editedCompany.value.sro.splice(index, 1);
        })
      } else {
        editedCompany.value.sro.splice(index, 1);
      }
    };

    const uploadScan = async (item: any) => {
      item.sro = editedCompany.value.sro;
      for (const file of editedCompany.value.sro) {
        if (file && !file.id) {
          let formData = new FormData();
          formData.append('picture', file);
          let data = {
            id: route.params.id,
            file: formData
          }
          await store.dispatch('companies/addSro', data)
        }
      }
      await store.dispatch('companies/getCompanyData', route.params.id);
      uploadScanDialog.value = false;
    };

    const cancelUpload = () => {
      uploadScanDialog.value = false;
      //editedCompany.value.sro = [];
    };

    const addLicense = () => {
      //editedCompany.value.licenses.push({ ...newLicense.value });
      if (editedLicenseIndex.value == -1) {
        let data = {
          data: {
            name: newLicense.value.name
          },
          id: route.params.id
        }
        store.dispatch('companies/addLicense', data).then(() => {
          store.dispatch('companies/getCompanyData', route.params.id)
        })
        newLicense.value.name = "";
        newLicense.value.files = [];
      } else {
        let data = {
          id: route.params.id,
          licId: newLicense.value.id,
          data: {
            name: newLicense.value.name
          }
        }
        store.dispatch('companies/putLicense', data).then(() => {
          editedLicenseIndex.value = -1;
          store.dispatch('companies/getCompanyData', route.params.id);
        })
      }
      addLicenseDialog.value = false;
    };
    const onLicDialog = (license) => {
      newLicense.value.name = "";
      newLicense.value.files = [];
      uploadLicenseScanDialog.value = true;
      newLicense.value = license
    }
    const cancelLicense = () => {
      addLicenseDialog.value = false;
    };

    const onAddLicDialog = () => {
      editLicMode.value = false;
      newLicense.value.name = "";
      newLicense.value.files = [];
      addLicenseDialog.value = true
    }

    const showLicenseScans = (index: number) => {
      const license = editedCompany.value.licenses[index];
      // Логика отображения сканов лицензии
    };

    const editLicense = (index: number) => {
      editLicMode.value = true;
      editedLicenseIndex.value = index;
      const license = editedCompany.value.licenses[index];
      newLicense.value = {...license};
      addLicenseDialog.value = true;
    };

    const deleteLicense = (item) => {
      let data = {
        id: route.params.id,
        licId: item.id
      }
      store.dispatch('companies/deleteLicense', data).then(() => {
        store.dispatch('companies/getCompanyData', route.params.id);
      })
    };

    const onUploadLicenses = (files: File[]) => {
      if (!newLicense.value.files) newLicense.value.files = [];
      newLicense.value.files.push(files)
    };

    const onRemoveLicenses = (file: File) => {
      const index = newLicense.value.files.indexOf(file);
      if (newLicense.value.files[index].id) {
        let data = {
          id: route.params.id,
          licId: newLicense.value.id,
          scanId: newLicense.value.files[index].id
        }
        store.dispatch('companies/deleteLicenseScan', data).then(() => {
          newLicense.value.files.splice(index, 1);
        })
      } else {
        newLicense.value.files.splice(index, 1);
      }
    };

    const uploadLicenseScan = async (item: any) => {
      item.files = newLicense.value.files;
      for (const file of newLicense.value.files) {
        if (file && !file.id) {
          let formData = new FormData();
          formData.append('scan', file);
          let data = {
            id: route.params.id,
            licId: newLicense.value.id,
            file: formData
          }
          await store.dispatch('companies/addLicenseScan', data)
        }
      }
      await store.dispatch('companies/getCompanyData', route.params.id);
      uploadLicenseScanDialog.value = false;
    };

    const cancelLicenseUpload = () => {
      uploadLicenseScanDialog.value = false;
      newLicense.value.files = [];
    };

    const onRemoveCompany = () => {
      store.dispatch('companies/deleteCompany', route.params.id)
    }

    const avatar = ref(computed(()=>store.getters['companies/getLogo']))
    const onAvatarUpload = (file) => {
      let formData = new FormData();
      formData.append('file', file)
      let data = {
        file: formData,
        id: route.params.id
      }
      store.dispatch('companies/addLogo', data).then(()=>{
        store.dispatch('companies/getLogo', {id: route.params.id})
      })
    }

    return {
      addEmployeeDialog,
      uploadScanDialog,
      uploadLicenseScanDialog,
      editedCompany,
      newEmployee,
      newLicense,
      addLicenseDialog,
      cancelLicenseUpload,
      uploadLicenseScan,
      onRemoveLicenses,
      onUploadLicenses,
      deleteLicense,
      editLicense,
      showLicenseScans,
      cancelLicense,
      addLicense,
      cancelUpload,
      uploadScan,
      removeFile,
      fileAdded,
      deleteEmployee,
      editEmployee,
      addEmployee,
      saveCompanyData,
      onLicDialog,
      onRemoveCompany,
      onAddEmployer,
      editMode,
      avatar,
      onAvatarUpload,
      onAddLicDialog,
      onCancelEmployer,
      editLicMode
    }
  },
});
</script>

<style scoped>
</style>
