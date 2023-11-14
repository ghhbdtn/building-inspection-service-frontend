<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-text-field
            v-model="category.name"
            label="Название категории"
            variant="underlined"
            density="compact"
        />
      </v-col>
      <v-col cols="6">
        <v-file-input
            v-model="category.pics"
            label="Загрузить фото"
            multiple
            variant="underlined"
        />
      </v-col>
      <v-col cols="1">
        <v-tooltip text="Посмотреть фото">
          <template v-slot:activator="{props}">
          <v-btn variant="text" v-bind="props" @click="$emit('view')">
            <v-icon>
              mdi-eye
            </v-icon>
          </v-btn>
          </template>
        </v-tooltip>
      </v-col>
      <v-col cols="1">
        <v-tooltip text="Удалить категорию">
          <template v-slot:activator="{props}">
            <v-btn variant="text" v-bind="props" @click="$emit('delete')">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {Interface} from "readline";
import {type} from "os";


export default defineComponent({
  name: "ComponentRow",
  props: ['category'],
  data() {
    return {

    }
  },
  setup() {
    type  PhotoCategory = {
      name: String,
      pics: String[]
    }
  }
});
</script>

<style scoped>

</style>
