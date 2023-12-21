<template>
  <div style="width: 100%; height: 100%; margin-top: 10% ">
  <v-main>
    <v-container>
      <v-row justify="center" style="padding-top: 65px; align-items: center">
        <v-card align-self="center" width="600" style="border-radius: 25px">
          <v-toolbar color="#181D2B">
            <v-card-title class="register-btn-text">Вход</v-card-title>
          </v-toolbar>
          <v-divider/>
          <div class="card-items text-fields">
            <v-row justify="center">
              <v-col cols="10">
            <v-text-field
                v-model="data.email"
                color="#181D2B"
                dense
                label="Электронная почта"
                type="email"
                placeholder="Email"
                variant="outlined"
                :rules="[rules.required]"
            />
            <v-text-field
                v-model="data.password"
                color="#181D2B"
                dense
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                variant="outlined"
                :rules="[rules.required]"
            />
                <p v-if="errorMessage" style="color: #E03021; text-align: center">{{errorMessage}}</p>
              </v-col>
            </v-row>
          </div>
          <v-card-actions style="justify-content: center">
            <v-btn
                class="mt-4 register-btn-text"
                color="#E03021"
                @click="onLoginButtonClick"
                variant="outlined"
                style="border-radius: 25px; border-color: #E03021;align-content: center"
            >
              Войти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";
import {rules} from "../../../utils/rules";
export default defineComponent({
  name: "LoginPage",
  setup(){
    const store = useStore()
    const errorMessage = ref('')
    const data = ref({
      email: "",
      password: ""
    });
    return{
      data,
      errorMessage,
      onLoginButtonClick(){
        if (data.value.email && data.value.password) {
          errorMessage.value = ''
          store.dispatch('users/signIn', data.value).then(() => {
            window.location.reload();
          }).catch(() => {
            errorMessage.value = 'Не удалось выполнить вход'
          })
        } else {
          errorMessage.value = 'Заполните все поля формы'
        }
      },
    }
  },
  data() {
    return{
      rules: rules
    }
  }
});
</script>

<style scoped>
.card-items{
  padding-top: 5%;
}
</style>
