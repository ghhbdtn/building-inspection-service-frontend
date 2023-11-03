<template>
  <v-main>
    <v-container>

      <v-row justify="center">
        <v-card align-self="center" width="600">
          <v-toolbar color="#CD5E5E">
            <v-card-title>Вход</v-card-title>
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
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
            />
            <v-card-actions style="justify-content: center">
              <v-btn class="mt-4" color="#CD5E5E">
                Войти
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "LoginPage"
});
</script>

<style scoped>

</style>
