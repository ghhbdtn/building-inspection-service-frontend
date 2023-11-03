<template>
  <v-app>
      <v-layout>
        <v-main>
          <v-app-bar color="#777777" style="font-size: x-large">
            <v-toolbar-title>Сервис обселедования сооружений</v-toolbar-title>
            <v-spacer/>
            <template v-slot:append v-if="!isAuth">
              <v-btn @click="onRegisterButtonClick">
                Зарегистрироваться
              </v-btn>
              <v-btn @click="onLoginButtonClick">
                Войти
              </v-btn>
            </template>
            <template v-if="isAuth">
              <v-btn @click="onLogoutButtonClick">
                Выйти
              </v-btn>
            </template>
            <template #extension>
              <v-tabs align-with-title>
                <v-tab :to="{name: 'PersonalAccount'}" v-if="isAuth">
                  Личный кабинет
                </v-tab>
                <v-tab :to="{name: 'MainPage'}">
                  Главная страница
                </v-tab>
                <v-tab :to="{name: 'AboutPage'}">
                  О нас
                </v-tab>
                <!--          <v-tab :to="{name: 'FAQ'}" v-if="false">-->
                <!--            FAQ-->
                <!--          </v-tab>-->
                <v-tab :to="{name: 'ContactsPage'}">
                  Контакты
                </v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
          <v-navigation-drawer v-if="isAuth"
              :rail="rail"
              @click="rail = false"
          >
            <v-list-item
                title="Имя Пользователя"

            >
              <template v-slot:append>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                ></v-btn>
              </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-home-city" title="Элемент 1" ></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Элемент 2" ></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Элемент 3" ></v-list-item>
            </v-list>
          </v-navigation-drawer>

        </v-main>
      </v-layout>
    <RouterView/>
    <v-footer color="#333538">
      <v-toolbar-title>
        Footer
      </v-toolbar-title>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
export default defineComponent({
  setup(){
    const store = useStore();
    const router = useRouter()
    const isAuth = computed(()=>store.state.users.isAuthenticated)
    onMounted(()=>{
      router.push({name: 'MainPage'})
    })
    return{
      isAuth,
      onLogoutButtonClick(){
        store.commit('users/LOG_OUT')
      },
    }

  },
  name: "App",
  data(){
    return{
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
  // setup(){
  //   import { RouterView } from 'vue-router'
  //   onMounted(){
  //
  //   }
  // }
});

</script>

<style scoped>

</style>
