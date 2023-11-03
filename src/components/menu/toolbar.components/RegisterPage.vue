<template>
  <v-main>
    <v-container>

      <v-row justify="center">
        <v-card align-self="center" width="600">
          <v-toolbar color="#CD5E5E">
            <v-card-title>Регистрация</v-card-title>
          </v-toolbar>
          <v-divider/>
          <div class="card-items">
            <v-text-field
                dense
                label="Имя пользователя"
                placeholder="Имя пользователя"
            />
            <v-text-field
                dense
                label="Электронная почта"
                placeholder="Электронная почта"
            />
            <v-text-field
                dense
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
            />
            <v-text-field
                dense
                label="Повторите пароль"
                placeholder="Повторите пароль"
                type="password"
            />
          </div>
          <v-checkbox v-model="isAdditional"
            label="Заполнить дополнительные поля">
          </v-checkbox>
          <v-card-text>
            Для чего это нужно...
          </v-card-text>
          <div v-if="isAdditional" class="card-items">
            <v-text-field
                dense
                label="Дополнительное поле №1"
            />
            <v-text-field
                dense
                label="Дополнительное поле №2"
            />
            <v-text-field
                dense
                label="Дополнительное поле №2"
            />
          </div>
          <v-card-actions style="justify-content: center">
            <v-btn class="mt-4" @click="onRegisterButtonClick" color="#CD5E5E">
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
.card-items {
  margin-top: 1.5rem;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

.additional-items {
  background-color: rgba(128, 128, 128, 0.13);
}
</style>
