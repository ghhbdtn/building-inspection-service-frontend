<template>
  <div
      class="drop-zone"
      @dragover.prevent
      @drop="handleDrop"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @click="openFilePicker"
  >
    <input
        ref="fileInput"
        type="file"
        style="display: none;"
        @change="handleFileInput"
        :multiple="isMultiple"
    />
    <div v-if="isDragging" class="drop-zone-highlight">
      Перетащите сюда файлы
    </div>
    <div v-else>
      <slot name="preview" v-for="(file, index) in files" :key="index" :file="file" :removeFile="removeFile">
        <div class="file-preview">
          <v-icon v-if="isImage(file)" color="primary">mdi-file-image</v-icon>
          <v-icon v-else>mdi-file</v-icon>
          <span>{{ file.name }}</span>
          <v-icon @click.stop="removeFile(file)">mdi-close-circle</v-icon>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DragAndDrop',
  props: {
    files: Array,
    isMultiple: Boolean
  },
  emits: ['fileAdded'],
  setup(props, { emit }) {
    const isDragging = ref(false);

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      isDragging.value = false;
      const files = event.dataTransfer?.files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          emit('fileAdded', files[i]);
        }
      }
    };

    const dragEnter = () => {
      isDragging.value = true;
    };

    const dragLeave = () => {
      isDragging.value = false;
    };

    const handleFileInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          emit('fileAdded', files[i]);
        }
      }
    };

    const removeFile = (file: File) => {
      const updatedFiles = props.files.filter((f: File) => f !== file);
      emit('removeFile', file);
    };

    const isImage = (file: File) => {
      return file.type.endsWith('image/');
    };


    return {
      isDragging,
      handleDrop,
      dragEnter,
      dragLeave,
      handleFileInput,
      removeFile,
      isImage,
    };
  },
  methods: {
     openFilePicker() {
      this.$refs.fileInput.click();
      this.isDragging = false;
    }
  }
});
</script>

<style scoped>
.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.drop-zone-highlight {
  border-color: #2196f3;
}

.file-preview {
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.file-preview v-icon {
  margin-right: 8px;
  cursor: pointer;
}
</style>
