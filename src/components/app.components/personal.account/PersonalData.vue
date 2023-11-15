<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-card border elevation="10" style="justify-content: center; border-color: #E03021" width="900">
          <v-row>
            <v-col cols="3">
             <CustomAvatar/>
              <v-card-text style="margin-left: 20%;">Фото профиля</v-card-text>
            </v-col>
            <v-col cols="6" offset="50">
              <v-card-title>Данные пользователя</v-card-title>
              <v-text-field label="Фамилия"/>
              <v-text-field label="Имя"/>
              <v-text-field label="Отчество"/>
              <v-text-field label="Почта"/>
              <v-text-field label="Телефон"/>
              <v-card-actions>
                <v-btn text="Сменить пароль" @click="dialog = true" color="#E03021" variant="outlined"/>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
  <v-dialog
      v-model="dialog"
      max-width="500"
  >
    <v-card>
      <v-card-title>Сменить пароль аккаунта</v-card-title>
      <v-card-text>
        <v-card-item>
          <v-text-field label="Старый пароль" type="password"/>
        </v-card-item>
        <v-card-item>
          <v-text-field label="Новый пароль" type="password"/>
        </v-card-item>
        <v-card-item>
          <v-text-field label="Повторите новый пароль" type="password"/>
        </v-card-item>
      </v-card-text>
      <v-card-actions>
        <v-btn block @click="dialog = false" color="#E03021" variant="outlined">Сменить пароль</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
