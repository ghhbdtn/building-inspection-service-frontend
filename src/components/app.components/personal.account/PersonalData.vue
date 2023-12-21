<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center" style="padding-top: 2%">
        <v-card border elevation="10" style="justify-content: center; border-color: #E03021;" width="900">
          <v-row>
            <v-col cols="3">
             <CustomAvatar :logo="avatar" @onAvatarUpload="onAvatarUpload" @onDeletePhoto="onDeletePhoto"/>
              <v-card-text style="margin-left: 20%;">Фото профиля</v-card-text>
            </v-col>
            <v-col cols="6" offset="50">
              <v-card-title>Данные пользователя</v-card-title>
              <v-text-field
                  label="Фамилия"
                  v-model="editedUser.secondName"
              />
              <v-text-field
                  label="Имя"
                  v-model="editedUser.firstName"
              />
              <v-text-field
                  label="Отчество"
                  v-model="editedUser.patronymic"
              />
              <v-text-field
                  label="Почта"
                  v-model="editedUser.email"
              />
              <v-text-field
                  label="Телефон"
                  v-model="editedUser.number"
              />
              <v-card-actions>
                <v-btn @click="onSaveUserData">
                  Сохранить изменения
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn text="Сменить пароль" @click="dialog = true" color="#E03021" variant="outlined"/>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
  <v-dialog
      v-model="dialog"
      max-width="500"
  >
    <v-card>
      <v-card-title>Сменить пароль аккаунта</v-card-title>
      <v-card-text>
        <v-card-item>
          <v-text-field
              label="Старый пароль"
              type="password"
              v-model="passwordData.oldPassword"
          />
        </v-card-item>
        <v-card-item>
          <v-text-field
              label="Новый пароль"
              type="password"
              v-model="passwordData.newPassword"
          />
        </v-card-item>
        <v-card-item>
          <v-text-field
              label="Повторите новый пароль"
              type="password"
              v-model="passwordData.newPasswordConfirmation"
          />
        </v-card-item>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="onPasswordChange" color="#E03021" variant="outlined">Сменить пароль</v-btn>
        <v-btn @click="dialog = false" color="#E03021" variant="outlined">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import CustomAvatar from "./CustomAvatar.vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "PersonalData",
  components: {CustomAvatar},
  setup(){
    const dialog = ref(false)
    const store = useStore();
    const currentUser = ref(computed(()=>store.getters['users/getUserData']))
    const avatar = ref(computed(()=>store.getters['users/getAvatar']))
    const onAvatarUpload = (file) => {
      let formData = new FormData();
      formData.append('file', file)
      store.dispatch('users/addAvatar', formData).then(()=>{
        store.dispatch('users/userAvatar')
      })
    }
    const onDeletePhoto = () => {
      store.commit('users/DELETE_AVATAR')
    }
    onMounted(()=>{
      store.dispatch('users/userData').then(()=>{
        editedUser.value = currentUser.value
      })
      store.dispatch('users/userAvatar')
    })
    const passwordData = ref({
      oldPassword: "",
      newPassword: "",
      newPasswordConfirmation: ""
    })
    const onPasswordChange = () => {
      if (passwordData.value.newPassword === passwordData.value.newPasswordConfirmation) {
        const data = {
          oldPassword: passwordData.value.oldPassword,
          newPassword: passwordData.value.newPassword
        }
        store.dispatch('users/changePassword', data).then(()=>{
          dialog.value = false;
        })
      }
    }
    const editedUser = ref({
      email: "",
      firstName: "",
      secondName: "",
      patronymic: "",
      number: ""
    })
    const onSaveUserData = () => {
      store.dispatch('users/putUserData', editedUser.value)
    }
    return{
      dialog,
      editedUser,
      onSaveUserData,
      passwordData,
      onPasswordChange,
      avatar,
      onAvatarUpload,
      onDeletePhoto
    }
  },
  data(){
  }
});
</script>

<style scoped>
</style>
