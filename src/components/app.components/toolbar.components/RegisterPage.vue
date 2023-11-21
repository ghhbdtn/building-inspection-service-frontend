<template>
  <v-main>
    <v-container>

      <v-row justify="center" style="padding-top: 65px; align-items: center">
        <v-card align-self="center" width="600" style="border-radius: 25px">
          <v-toolbar color="#E03021">
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
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Имя"
                v-model="userData.firstName"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Отчество"
                v-model="userData.patronymic"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Электронная почта"
                v-model="userData.email"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                v-model="userData.password"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Подтверждение пароля"
                placeholder="Повторите пароль"
                type="password"
            />
            </v-col>
            </v-row>
          </div>
          <v-card-actions style="justify-content: center">
            <v-btn class="text-fields" @click="onRegisterButtonClick" color="#E03021">
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent, nextTick, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {User} from "../../../source/interfaces";


export default  defineComponent({
  setup () {
    const store = useStore()
    const router = useRouter()
    const userData = ref({
      email: "",
      password: "",
      firstName: "",
      secondName: "",
      patronymic: ""
    } as User)
    return {
      userData,
      onRegisterButtonClick() {
        let data = {
          email: userData.value.email,
          password: userData.value.password,
          firstName: userData.value.firstName,
          secondName: userData.value.secondName,
          patronymic: userData.value.patronymic
        }
        store.dispatch('users/signUp', data).then(()=>{
          console.log("OK")
          store.dispatch('users/signIn', {email: userData.value.email,
            password: userData.value.password}).then(()=>
              nextTick(()=> {
                router.push({name: "PersonalAccount"})
              }))
        }).catch()
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
      }
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
