<template>
  <div style="width: 100%; height: 100%; margin-top: 3% ">
  <v-main>
    <v-container>
      <v-row justify="center" style="padding-top: 65px; align-items: center">
        <v-card align-self="center" width="600" style="border-radius: 25px">
          <v-toolbar color="#181D2B">
            <v-card-title class="register-btn-text">Регистрация</v-card-title>
          </v-toolbar>
          <v-divider/>
          <div class="text-fields card-items">
            <v-row justify="center">
            <v-col cols="10">
            <v-text-field
                color="#181D2B"
                dense
                label="Фамилия"
                v-model="userData.secondName"
                variant="outlined"
                :rules="[rules.required]"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Имя"
                v-model="userData.firstName"
                variant="outlined"
                :rules="[rules.required]"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Отчество"
                v-model="userData.patronymic"
                variant="outlined"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Электронная почта"
                v-model="userData.email"
                variant="outlined"
                :rules="[rules.required]"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                v-model="userData.password"
                variant="outlined"
                :rules="[rules.required]"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Подтверждение пароля"
                placeholder="Повторите пароль"
                type="password"
                v-model="userData.confirm"
                variant="outlined"
            />
              <p v-if="errorMessage" style="color: #E03021; text-align: center">{{errorMessage}}</p>
            </v-col>
            </v-row>
          </div>
          <v-card-actions style="justify-content: center">
            <v-btn
                class="text-fields"
                @click="onRegisterButtonClick"
                color="#E03021"
                variant="outlined"
                style="border-radius: 25px; border-color: #E03021;align-content: center"
            >
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
  </div>
</template>

<script lang="ts">
import {defineComponent, nextTick, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {User} from "../../../source/interfaces";
import {rules} from "../../../utils/rules";


export default  defineComponent({
  setup () {
    const store = useStore()
    const router = useRouter()
    const errorMessage = ref('')
    const userData = ref({
      email: "",
      password: "",
      firstName: "",
      secondName: "",
      patronymic: "",
      confirm: ""
    } as User)
    return {
      userData,
      errorMessage,
      onRegisterButtonClick() {
        let data = {
          email: userData.value.email,
          password: userData.value.password,
          firstName: userData.value.firstName,
          secondName: userData.value.secondName,
          patronymic: userData.value.patronymic
        }
        errorMessage.value = ''
        if (userData.value.password == userData.value.confirm) {
          store.dispatch('users/signUp', data).then(() => {
            store.dispatch('users/signIn', {
              email: userData.value.email,
              password: userData.value.password
            }).then(() =>
                nextTick(() => {
                  location.reload();
                }))
          }).catch(() => {
            errorMessage.value = 'Не удалось выполнить регистрацию'
          })
        } else {
          errorMessage.value = 'Пароли не совпадают'
        }
      }
    }
  },
  name: "RegisterPage",
  data(){
    return{
      isAdditional: false,
      userData: {
        email: "",
        password: "",
        firstName: "",
        secondName: "",
        patronymic: ""
      },
      rules: rules
    }
  },
  methods: {
  }
});
</script>

<style >
.card-items{
  padding-top: 5%;
}
</style>
