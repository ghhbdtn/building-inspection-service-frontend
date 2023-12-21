<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="5" offset="20">
          <v-card elevation="0" border style="border-color: #E03021" width="600">
            <v-container fluid>
              <v-card-item>
                <v-card-subtitle>
                  {{isReady ? `Загрузка завершена`: `Пожалуйста дождитесь завершения формирования отчета`}}
                </v-card-subtitle>
              </v-card-item>
              <v-card-item>

                <v-progress-linear v-if="!isReady" :indeterminate="!isReady" :height="12" color="#E03021"/>
                <v-progress-linear v-else v-model="done" :height="12" color="#E03021"/>
              </v-card-item>
              <v-card-actions>
              <v-row justify="center">
                  <v-btn variant="outlined" color="#E03021" :disabled="!isReady" @click="onDownload">
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
import {computed, defineComponent, onMounted, onUnmounted, ref} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "DocExport",
  setup() {
    const store = useStore();
    const route = useRoute();
    const status = ref(computed(()=>store.getters['inspections/getStatus']))
    const isReady = ref(computed(()=>status.value === 'READY'))
    const intervalId = ref(null);

    const startPolling = () => {
      intervalId.value = setInterval(checkStatus, 2000);
    };

    const stopPolling = () => {
      clearInterval(intervalId.value);
    };

    const checkStatus = () => {
      store.dispatch('inspections/pingStatus', route.params.id).then(()=>{
        if (status.value === 'READY') stopPolling();
      }).catch(()=>{
        stopPolling()
      })
    };

    const onDownload = () => {
      store.dispatch('inspections/downloadReport', route.params.id)
    };
    const done = ref(100)
    onMounted(() => {
      startPolling();
    });

    onUnmounted(() => {
      stopPolling();
    });
    return{
      status,
      isReady,
      onDownload,
      done
    }
  }
});
</script>

<style scoped>

</style>
