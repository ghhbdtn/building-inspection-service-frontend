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
      </div>
      <div class="short-item">
        <button v-if="!isOnMenuButtonClick" class="short-menu" @click="isOnMenuButtonClick = !isOnMenuButtonClick">
          <img src="../../assets/images/toolbarbtn.svg">
        </button>
        <button v-if="isOnMenuButtonClick" class="short-menu" @click="isOnMenuButtonClick = !isOnMenuButtonClick">
          <img src="../../assets/images/opened_short_menu.svg">
        </button>
      </div>
    </div>
    <div class="toolbar-actions-container">
      <button class="login-btn" @click="onLoginButtonClick" v-if="!isAuth">
        <div class="login-btn-text-container">
          <div class="login-btn-title">
            Войти
          </div>
        </div>
      </button>
      <button class="register-btn" @click="onRegisterButtonClick" v-if="!isAuth">
        <div class="register-btn-text-container">
          <div class="register-btn-text">
            Начало работы
          </div>
          <img class="reg-btn-img" src="../../assets/images/Frame.svg">
        </div>
      </button>

      <button class="register-btn" @click="onOpenWorkspace" v-if="isAuth">
        <div class="register-btn-text-container">
          <div class="register-btn-text">
            Приступить к работе
          </div>
          <img class="reg-btn-img" src="../../assets/images/Frame.svg">
        </div>
      </button>
    </div>
  </header>
  <div v-if="isOnMenuButtonClick" class="compact-menu">
    <button class="toolbar-btn" @click="router.push('/about-us')">О нас</button>
    <div class="actions">
      <button class="login-btn" @click="onLoginButtonClick" v-if="!isAuth">
        <div class="login-btn-text-container">
          <div class="login-btn-title">
            Войти
          </div>
        </div>
      </button>
      <button class="register-btn" @click="onRegisterButtonClick" v-if="!isAuth">
        <div class="register-btn-text-container">
          <div class="register-btn-text">
            Начало работы
          </div>
          <img class="reg-btn-img" src="../../assets/images/Frame.svg">
        </div>
      </button>
      <button class="register-btn" @click="onOpenWorkspace" v-if="isAuth">
        <div class="register-btn-text-container">
          <div class="register-btn-text">
            Приступить к работе
          </div>
          <img class="reg-btn-img" src="../../assets/images/Frame.svg">
        </div>
      </button>
    </div>
  </div>
  <body style="background-color: #F4F6F7; background-repeat: repeat">
  <v-app style="background: #F4F6F7">
    <v-main>
      <v-container fluid>
        <RouterView @onOpenWorkspace1="onOpenWorkspace"/>
      </v-container>
    </v-main>
  </v-app>
  </body>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-text">
        <div class="title-container foo-text">
          <div class="title-content">
            <img class="icon" src="../../assets/images/logooooo.png"/>
            <div><span class="checkpoint">Checkpoint</span>
              <span class="custom-k">-K</span></div>
          </div>
        </div>
        <div class="desc-1">
          Интеллектуальный помощник инженера <br/>по обследованию зданий
        </div>
      </div>

      <div class="footer-items">
        <!--        <div-->
        <!--            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">-->
        <!--          <div-->
        <!--              style="color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; text-transform: uppercase; line-height: 26.40px; word-wrap: break-word">-->
        <!--            Основное-->
        <!--          </div>-->
        <!--          <div-->
        <!--              style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: flex">-->
        <!--            <div-->
        <!--                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">-->
        <!--              Как это работает-->
        <!--            </div>-->
        <!--            <div-->
        <!--                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">-->
        <!--              Контакты-->
        <!--            </div>-->
        <!--            <div-->
        <!--                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">-->
        <!--              Техподдержка-->
        <!--            </div>-->
        <!--            <div-->
        <!--                style="color: #E03021; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">-->
        <!--              Сотрудничество и инвестиции-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <div class="links">
          <div class="footer-titles">
            Соцсети
          </div>
          <div
              style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: flex">
            <div class="desc">
              Инстаграм
            </div>
            <div class="desc">
              Твиттер
            </div>
            <div class="desc">
              Ютуб
            </div>
            <div class="desc">
              Телеграм
            </div>
          </div>
        </div>
        <div
            style="flex-direction: column; justify-content: center; align-items: center; gap: 30px; text-align: center">
          <p class="footer-titles">
            Приложение</p>
          <div style="max-width: 200px; height: 200px; display: inline-flex;">
            <img src="../../assets/images/qrcode.png">
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, toRefs} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";


export default defineComponent({
  name: "UnauthAppView",
  props: {
    isAuth: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, {emit}) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const isAuth = ref(props.isAuth);
    const isOnMenuButtonClick = ref(false);
    onMounted(() => {
      router.push('/about-us')
    })
    return {
      isAuth,
      router,
      route,
      isOnMenuButtonClick
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
    },
    onOpenWorkspace: function () {
      this.$emit('onOpenWorkspace')
    }

  }
});
</script>

<style scoped>

</style>
