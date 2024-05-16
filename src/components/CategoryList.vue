<template>
  <CategoryItem
    v-for="character in catalog"
    :key="character.id"
    :character="character"
  />
</template>

<script setup>
import {defineProps} from 'vue';
import CategoryItem from '@/components/CategoryItem.vue';

const props = defineProps({
  catalog: {
    type: Array,
    default: [],
  },
});
</script>

