<template>
  <header class="header">
    <div class="title-container">
      <div class="title-content">
        <img class="icon" src="../../assets/images/logooooo.png"/>
        <div><span class="checkpoint">Checkpoint</span>
          <span class="custom-k">-K</span></div>
      </div>
      <div class="toolbar-items-container">
        <button class="toolbar-btn" @click="router.push('/about-us')">О нас</button>
        <!--        <button class="toolbar-btn">-->
        <!--          Контакты-->
        <!--        </button>-->
        <!--        <button class="toolbar-btn">-->
        <!--          FAQ-->
        <!--        </button>-->
        <!--        <button class="toolbar-btn">-->
        <!--          Техподдержка-->
        <!--        </button>-->
      </div>
    </div>
    <div class="toolbar-actions-container">
      <button class="login-btn" @click="onLoginButtonClick">
        <div class="login-btn-text-container">
          <div class="login-btn-title">
            Войти
          </div>
        </div>
      </button>
      <button class="register-btn" @click="onRegisterButtonClick">
        <div class="register-btn-text-container">
          <div class="register-btn-text">
            Начало работы
          </div>
          <img class="reg-btn-img" src="../../assets/images/Frame.svg">

        </div>
      </button>
    </div>
  </header>
  <body>
  <v-app style="background-color: #F4F6F7">
    <v-main>
      <v-layout>
        <RouterView/>
      </v-layout>
    </v-main>
  </v-app>
  </body>
  <footer
      style="width: 100%; height: 100%; padding: 60px 10px;background: #F4F6F7; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
    <div style="justify-content: flex-start; align-items: flex-start; gap: 486px; display: flex">
      <div
          style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 45px; display: inline-flex">
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
          <div style="justify-content: flex-start; align-items: center; gap: 15px; display: inline-flex">
            <div style="width: 61.98px; height: 63px; position: relative">
              <img :src="'/src/assets/images/logooooo.png'">
            </div>
            <div><span
                style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 600; text-transform: uppercase; word-wrap: break-word">Checkpoint</span><span
                style="color: #E03021; font-size: 20px; font-family: TT Travels; font-weight: 600; text-transform: uppercase; word-wrap: break-word">-K</span>
            </div>
          </div>
          <div
              style="width: 360px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
            Интеллектуальный помощник инженера <br/>по обследованию зданий
          </div>
        </div>
      </div>
      <div style="justify-content: flex-start; align-items: flex-start; gap: 120px; display: flex">
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
          <div
              style="color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; text-transform: uppercase; line-height: 26.40px; word-wrap: break-word">
            Основное
          </div>
          <div
              style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: flex">
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Как это работает
            </div>
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Контакты
            </div>
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Техподдержка
            </div>
            <div
                style="color: #E03021; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Сотрудничество и инвестиции
            </div>
          </div>
        </div>
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
          <div
              style="color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; text-transform: uppercase; line-height: 26.40px; word-wrap: break-word">
            Соцсети
          </div>
          <div
              style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: flex">
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Инстаграм
            </div>
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Твиттер
            </div>
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Ютуб
            </div>
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Телеграм
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "UnauthAppView",
  setup() {
    const store = useStore();
    const router = useRouter()
    const isAuth = computed(() => store.state.users.isAuthenticated)
    onMounted(() => {
      router.push('/about-us')
    })
    return {
      isAuth,
      router,
    }

  },
  data() {
    return {
      rail: false
    }
  },
  methods: {
    onRegisterButtonClick: function () {
      this.$router.push({name: 'RegisterPage'})
    },
    onLoginButtonClick: function () {
      this.$router.push({name: 'LoginPage'})
    }
  }
});
</script>

<style scoped>
</style>
