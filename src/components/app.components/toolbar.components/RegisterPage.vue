<template>
  <div style="width: 100%; height: 100%; margin-top: 3% ">
    <v-main>
      <v-container>
        <v-row justify="center" style="padding-top: 65px; align-items: center">
          <v-card align-self="center" style="border-radius: 25px" width="600">
            <v-toolbar color="#181D2B">
              <v-card-title class="register-btn-text">Регистрация</v-card-title>
            </v-toolbar>
            <v-divider/>
            <div class="text-fields card-items">
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                      v-model="userData.secondName"
                      :rules="[rules.required]"
                      color="#181D2B"
                      dense
                      label="Фамилия"
                      variant="outlined"
                  />
                  <v-text-field
                      v-model="userData.firstName"
                      :rules="[rules.required]"
                      color="#181D2B"
                      dense
                      label="Имя"
                      variant="outlined"
                  />
                  <v-text-field
                      v-model="userData.patronymic"
                      color="#181D2B"
                      dense
                      label="Отчество"
                      variant="outlined"
                  />
                  <v-text-field
                      v-model="userData.email"
                      :rules="[rules.required]"
                      color="#181D2B"
                      dense
                      label="Электронная почта"
                      variant="outlined"
                  />
                  <v-text-field
                      v-model="userData.password"
                      :rules="[rules.required]"
                      color="#181D2B"
                      dense
                      label="Пароль"
                      placeholder="Введите пароль"
                      type="password"
                      variant="outlined"
                  />
                  <v-text-field
                      v-model="userData.confirm"
                      color="#181D2B"
                      dense
                      label="Подтверждение пароля"
                      placeholder="Повторите пароль"
                      type="password"
                      variant="outlined"
                  />
                  <v-checkbox-btn v-model="politic1">
                    <template v-slot:label>
                      <div class="checkbox-container">
                        Согласен с <a href="https://disk.yandex.ru/i/5aH8S09dujSH0g">политикой обработки персональных данных</a>
                      </div>
                    </template>
                  </v-checkbox-btn>

                  <v-checkbox v-model="politic2">
                    <template v-slot:label>
                    <div class="checkbox-container">
                        Ознакомлен(а) с <a href="https://disk.yandex.ru/i/CSTqGSySZzjcew">пользовательским соглашением</a>
                    </div>
                    </template>
                  </v-checkbox>

                  <p v-if="errorMessage" style="color: #E03021; text-align: center">{{ errorMessage }}</p>
                </v-col>
              </v-row>
            </div>
            <v-card-actions style="justify-content: center">
              <v-btn
                  :disabled="!politic1 || !politic2"
                  class="text-fields"
                  color="#E03021"
                  style="border-radius: 25px; border-color: #E03021;align-content: center"
                  variant="outlined"
                  @click="onRegisterButtonClick"
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


export default defineComponent({
  setup() {
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
    const politic1 = ref(false)
    const politic2 = ref(false)
    return {
      politic1,
      politic2,
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
  data() {
    return {
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
  methods: {}
});
</script>

<style>
.card-items {
  padding-top: 5%;
}
.checkbox-container {
  font-size: 14px;
  line-height: 100%;
}

</style>
