<template>
  <header class="header">
    <div class="title-container">
      <div class="title-content">
        <img class="icon" src="../../assets/images/telegram-cloud-document-2-5276362809125387406%201.png" />
        <div><span class="checkpoint">Checkpoint</span>
          <span class="custom-k">-K</span></div>
      </div>
      <div class="toolbar-items-container">
        <button class="toolbar-btn" @click="router.push('/about-as')">О нас</button>
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
        <div  class="login-btn-text-container">
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
          <div class="reg-btn-img">
            <div class="reg-icon">
              <img src="../../assets/images/Frame.svg">
            </div>
          </div>
        </div>
      </button>
    </div>
  </header>
  <v-app>
    <v-main>
      <v-layout>
  <RouterView/>
      </v-layout>
    </v-main>
  </v-app>
  <footer color="#333538">

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
      router.push('/about-as')
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
