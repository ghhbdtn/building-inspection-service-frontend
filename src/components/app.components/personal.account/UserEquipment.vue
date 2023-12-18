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
            <v-text-field v-model="editedEquipment.verificationNumber" label="Номер поверки"></v-text-field>
            <v-text-field v-model="editedEquipment.verificationDate" label="Дата поверки" type="date"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="saveEquipment">{{ editMode ? 'Сохранить' : 'Добавить' }}</v-btn>
            <v-btn @click="cancelEquipment">{{ editMode ? 'Отмена' : 'Закрыть' }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="uploadScanDialog" max-width="600px">
        <v-card>
          <v-card-title>Загрузить сканы поверок</v-card-title>
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

      <v-btn @click="openAddDialog" variant="text" color="#E03021" elevation="0">
        Добавить оборудование
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <v-card elevation="10" border style="border-color: #E03021">
      <v-table class="table" :hide-no-data="true">
        <v-table class="table" :hide-no-data="true"
        >
          <thead>
          <tr>
            <th scope="col">Наименование Си</th>
            <th scope="col">Заводской номер</th>
            <th scope="col">Номер поверки</th>
            <th scope="col">Дата поверки</th>
            <th scope="col">Сканы поверок</th>
            <th scope="col">Действия</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in equipmentList" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.serialNumber }}</td>
            <td>{{ item.verificationNumber }}</td>
            <td>{{ item.verificationDate }}</td>
            <td>
              <v-btn @click="onUploadDialog(item)" icon size="40">
                <v-icon>
                  mdi-paperclip
                </v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn @click="openEditDialog(index)" icon size="40">
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn @click="removeItem(item)" icon size="40">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import DragAndDrop from '../../DragAndDrop.vue';
import {onMounted} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: 'UserEquipment',
  components: { DragAndDrop },
  setup() {
    const store = useStore();
    const addEquipmentDialog = ref(false);
    const uploadScanDialog = ref(false);
    const editMode = ref(false);
    const editedIndex = ref(-1);
    const editedEquipment = ref({
      id: -1,
      name: '',
      serialNumber: '',
      verificationNumber: '',
      verificationDate: '',
      scans: [],
    });
    const equipmentList = ref(computed(()=> store.getters['equipment/getAll']));

    onMounted(()=>{
      store.dispatch('equipment/allEquipments').then(()=>{})
    })

    const openAddDialog = () => {
      editMode.value = false;
      clearEditedEquipment();
      addEquipmentDialog.value = true;
    };

    const onUploadDialog = (item) => {
      uploadScanDialog.value = true;
      editedEquipment.value = { ...item };
      editedEquipment.value.scans = [];
    }

    const openEditDialog = (index) => {
      editMode.value = true;
      editedIndex.value = index;
      const item = equipmentList.value[index];
      editedEquipment.value = { ...item };
      editedEquipment.value.verificationDate = editedEquipment.value.verificationDate.split(".").reverse().join("-");
      addEquipmentDialog.value = true;
    };

    const saveEquipment = () => {
      if (editMode.value) {
        const data = {
          data: {
            name: editedEquipment.value.name,
            serialNumber: editedEquipment.value.serialNumber,
            verificationNumber: editedEquipment.value.verificationNumber,
            verificationDate: editedEquipment.value.verificationDate.split("-").reverse().join(".")
          },
          id: editedEquipment.value.id
        }
        store.dispatch('equipment/putEquipment', data).then(()=>{
          store.dispatch('equipment/allEquipments')
        })
      } else {
        const data = {
          name: editedEquipment.value.name,
          serialNumber: editedEquipment.value.serialNumber,
          verificationNumber: editedEquipment.value.verificationNumber,
          verificationDate: editedEquipment.value.verificationDate.split("-").reverse().join(".")
        }
        store.dispatch('equipment/createNewEquipment', data).then(()=>{
          store.dispatch('equipment/allEquipments')
        })
      }
      addEquipmentDialog.value = false;
      clearEditedEquipment();
    };

    const cancelEquipment = () => {
      addEquipmentDialog.value = false;
      clearEditedEquipment();
    };

    const clearEditedEquipment = () => {
      editedEquipment.value = {
        id: -1,
        name: '',
        serialNumber: '',
        verificationNumber: '',
        verificationDate: '',
        scans: [],
      };
      editMode.value = false;
      editedIndex.value = -1;
    };

    const uploadScan = async () => {
      for (const file of editedEquipment.value.scans) {
        if (file) {
          let formData = new FormData();
          formData.append('picture', file);
          let data = {
            id: editedEquipment.value.id,
            file: formData
          }
          await store.dispatch('equipment/addEquipmentScan', data)
        }
      }
      await store.dispatch('equipment/allEquipments');
      uploadScanDialog.value = false;
    };

    const cancelUpload = () => {
      uploadScanDialog.value = false;
      editedEquipment.value.scans = [];
    };

    const fileAdded = (file) => {
      editedEquipment.value.scans.push(file);
    };

    const removeItem = (item) => {
      editedEquipment.value = { ...item };
      let id = editedEquipment.value.id;
      store.dispatch('equipment/deleteEquipment', id).then(() => {
        store.dispatch('equipment/allEquipments')
      })
    };

    const removeFile = (file) => {
      const index = editedEquipment.value.scans.indexOf(file);
      editedEquipment.value.scans.splice(index, 1);
    };

    return {
      addEquipmentDialog,
      uploadScanDialog,
      editMode,
      editedIndex,
      editedEquipment,
      equipmentList,
      openAddDialog,
      openEditDialog,
      saveEquipment,
      cancelEquipment,
      uploadScan,
      cancelUpload,
      fileAdded,
      removeItem,
      removeFile,
      onUploadDialog
    };
  },
});
</script>

<style scoped>

</style>
