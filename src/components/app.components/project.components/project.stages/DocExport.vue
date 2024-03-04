<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="6" offset="20">
          <v-card elevation="0" style="background: #F4F6F7; width: 100%" width="500">
            <v-container fluid>
              <v-row justify="start">
              <v-card-item>
                <div style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700;
                  word-wrap: break-word">
                  {{isReady ? `Загрузка завершена`: `Пожалуйста дождитесь завершения формирования отчета`}}
                </div>
              </v-card-item>
              <v-card-item>

                <v-progress-linear v-if="!isReady" :indeterminate="!isReady" :height="12" color="#52596C"
                                   style="width: 600px; height: 25px; position: relative; background: white;
                                    border-radius: 25px; overflow: hidden; border: 1px #52596C solid"/>
                <v-progress-linear v-else v-model="done" :height="12" color="#52596C"
                                   style="width: 600px; height: 25px; position: relative; background: white;
                                    border-radius: 25px; overflow: hidden; border: 1px #52596C solid"/>
              </v-card-item>
              <v-card-actions>
                <button class="download" :disabled="!isReady" @click="onDownload">
                  <div style="color: white; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
                  Скачать отчет
                  </div>
                </button>
                <button style="width: 215px; height: 40px; padding: 10px 10px 10px 10px;background: #52596C; border-radius: 25px;
                 justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                  <div style="color: white; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
                    Скачать dwg файлы
                  </div>
                </button>
              </v-card-actions>
              </v-row>

            </v-container>
            <v-divider class="divider-project-1"/>
            <v-container>
              <div style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700;
               line-height: 36.30px; word-wrap: break-word">Нужно ли что-то подправить?</div>
              <textarea style="width: 656px; height: 237px; padding-top: 25px; padding-bottom: 15px; padding-left: 20px;
               background: white; border-radius: 25px; border: 1px #C5C5C4 solid; justify-content: flex-start;
                align-items: flex-start; gap: 10px; display: inline-flex"></textarea>
              <v-card-actions>
                <button style="width: 150px; height: 40px; padding: 10px 10px 10px 10px;background: #52596C; border-radius: 25px;
                 justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                  <div style="color: white; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
                    Отправить
                  </div>
                </button>
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
.download {
  width: 180px;
  margin-right: 20px;
  height: 40px;
  padding: 10px 10px 10px 10px;
  background: #52596C;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex
}

.download:disabled {
  background: rgba(82, 89, 108, 0.73);
}

.divider-project-1{
  color: #52596C;
  border-width: 2px !important;
}
</style>
