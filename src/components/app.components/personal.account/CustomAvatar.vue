<template>
  <v-menu
      max-width="100"
      rounded
  >
    <template v-slot:activator="{ props }">
      <v-btn
          icon
          size="150"
          style="margin-left: 20%; margin-top: 10%;" v-bind="props"
      >
        <v-avatar size="150" style=" border: double #E03021;">
          <img :height="80" :src="avatarSrc" :width="80" style=" border: #181D2B">
        </v-avatar>
      </v-btn>
    </template>
    <v-card max-height="200">
      <v-btn color="#181D2B" rounded variant="text"
             @click="openFilePicker">
        Загрузить фото
      </v-btn>
      <v-divider/>
      <v-btn v-show="avatarSrc !== 'src/assets/images/default_photo.svg'" color="#E03021" rounded
             variant="text" @click="deletePhoto">
        Удалить фото
      </v-btn>
      <input ref="fileInput" style="display: none" type="file" @change="handleFileUpload">
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import {computed, defineComponent, ref, toRefs} from "vue";

export default defineComponent({
  name: "CustomAvatar",
  props: ['logo'],
  emits:['onDeletePhoto', 'onAvatarUpload'],
  setup(props, {emit}) {
    const { logo } = toRefs(props);

    const avatarSrc = computed(() => {
      return logo.value
          ? `data:image/png;base64,${logo.value}`
          : new URL(`/src/assets/images/default_photo.svg`, import.meta.url).href;
    });
    const deletePhoto = () => {
      emit('onDeletePhoto')
    }
    return {
      avatarSrc,
      deletePhoto
    }

  },
  methods: {
    openFilePicker() {
      // Открыть проводник при нажатии на аватар
      this.$refs.fileInput.click();
    },
    handleFileUpload: function ($event: Event) {
      const input = $event.target as HTMLInputElement;
      if (input && input.files) {
        // Обновить изображение аватара при загрузке нового файла
        this.$emit('onAvatarUpload', input.files[0])
      }
    },
  },
});
</script>

<style scoped>

</style>
