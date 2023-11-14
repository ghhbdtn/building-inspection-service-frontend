<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-card border elevation="0" style="justify-content: center" width="900">
          <v-row>
            <v-col cols="3">
             <CustomAvatar/>
              <v-card-text style="margin-left: 20%;">Фото профиля</v-card-text>
            </v-col>
            <v-col cols="6" offset="50">
              <v-text-field label="Фамилия"/>
              <v-text-field label="Имя"/>
              <v-text-field label="Отчество"/>
              <v-text-field label="Почта"/>
              <v-text-field label="Телефон"/>
              <v-divider/>
              <v-card-actions>
                <v-btn text="Сменить пароль" @click="dialog = true"/>
              </v-card-actions>
              <v-dialog
                  v-model="dialog"
                  width="800"
              >
                <v-card>
                  <v-col align-self="center" cols="6">
                    <v-card-item>
                      <v-text-field label="Введите старый пароль" type="password"/>
                    </v-card-item>
                    <v-card-item>
                      <v-text-field label="Введите новый пароль" type="password"/>
                    </v-card-item>
                    <v-card-item>
                      <v-text-field label="Подтвердите новый пароль" type="password"/>
                    </v-card-item>
                    <v-card-actions>
                      <v-btn block @click="dialog = false">Сменить пароль</v-btn>
                    </v-card-actions>
                  </v-col>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CustomAvatar from "./CustomAvatar.vue";

export default defineComponent({
  name: "PersonalData",
  components: {CustomAvatar},
  data(){
    return{
      dialog: false
    }
  }
});
</script>

<style scoped>
</style>
