<template>
  <v-menu
      max-width="100"
      rounded
  >
    <template v-slot:activator="{ props }">
      <v-btn
          icon
          v-bind="props"
          style="margin-left: 20%; margin-top: 10%;" size="150"
      >
        <v-avatar size="150" style=" border: double #E03021;">
          <img :src="avatarSrc" style="border: #181D2B" :width="150"  :height="150">
        </v-avatar>
      </v-btn>
    </template>
    <v-card max-height="200">
      <v-btn variant="text" color="#181D2B" rounded
             @click="openFilePicker" >
        Загрузить фото
      </v-btn>
      <v-divider/>
      <v-btn rounded variant="text" v-show="avatarSrc !== 'src/assets/photo-camera-black-tool_icon-icons.com_72960.svg'"
             @click="deletePhoto" color="#E03021">
        Удалить фото
      </v-btn>
      <input ref="fileInput" style="display: none" type="file" @change="handleFileUpload">
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ref} from "vue/dist/vue";

export default defineComponent({
  name: "CustomAvatar",
  data() {
    return {

      avatarSrc: new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href, // Заглушка для изображения
    };
  },
  methods: {
    openFilePicker() {
      // Открыть проводник при нажатии на аватар
      this.$refs.fileInput.click();
    },
    handleFileUpload: function (event: Event) {
      const input = event.target as HTMLInputElement;
      if (input != null && input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Обновить изображение аватара при загрузке нового файла
          if (e.target) {
            this.avatarSrc = e.target.result as string;
          }
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    deletePhoto() {
      // Удалить фотографию (можно добавить здесь логику удаления)
      this.avatarSrc = new URL(`/src/assets/images/photo-camera-black-tool_icon-icons.com_72960.svg`, import.meta.url).href; // Возвращаем заглушку
    },
  },
});
</script>

<style scoped>

</style>
