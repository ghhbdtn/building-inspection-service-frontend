<template>
  <v-main>
    <v-container>

      <v-row justify="center">
        <v-card align-self="center" width="600">
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
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Имя"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Отчество"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Электронная почта"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
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
import {defineComponent, nextTick} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default  defineComponent({
  setup () {
    const store = useStore()
    const router = useRouter()
    return {
      onRegisterButtonClick() {
        store.commit('users/SET_USER')
        nextTick(()=> {
          router.push({name: "PersonalAccount"})
        })
      }
    }
  },
  name: "RegisterPage",
  data(){
    return{
      isAdditional: false,
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
