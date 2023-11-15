<template>
  <v-main>
    <v-container>

      <v-row justify="center">
        <v-card align-self="center" width="600">
          <v-toolbar color="#E03021">
            <v-card-title class="register-btn-text">Вход</v-card-title>
          </v-toolbar>
          <v-divider/>
          <div class="card-items text-fields">
            <v-row justify="center">
              <v-col cols="10">
            <v-text-field
                color="#181D2B"
                dense
                label="Электронная почта"
                type="email"
                placeholder="Email"
            />
            <v-text-field
                color="#181D2B"
                dense
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
            />
              </v-col>
            </v-row>
          </div>
          <v-card-actions style="justify-content: center">
            <v-btn class="mt-4 register-btn-text" color="#E03021">
              Войти
            </v-btn>
          </v-card-actions>
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
.card-items{
  padding-top: 5%;
}
</style>
