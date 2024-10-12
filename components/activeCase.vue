<template>
  <div class="relative w-[420px]">
    <div
      class="border bg-slate-900 text-slate-300 h-[50px] rounded p-5 cursor-pointer"
      @click="toggleDropdown"
      :class="{'bg-gray-800': isDropdownOpen}"
    >
      {{ selectedStatus }} <span class="float-right">▼</span>
    </div>
    <ul v-if="isDropdownOpen" class="absolute z-10 w-full bg-gray-700 border border-gray-700 text-white rounded shadow-lg">
      <li
        v-for="status in statuses"
        :key="status"
        @click="selectStatus(status)"
        class="hover:bg-gray-500 p-4 cursor-pointer"
      >
        {{ status }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, emit } from 'vue';

const props = defineProps({
  statuses: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);
const isDropdownOpen = ref(false);
const selectedStatus = ref(props.modelValue || 'Select Status');

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectStatus = (status: string) => {
  selectedStatus.value = status;
  emit('update:modelValue', status);
  isDropdownOpen.value = false;
};
</script>

<style scoped>
ul {
  max-height: 200px;
  overflow-y: auto;
}
</style>
