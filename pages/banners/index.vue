<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);
const bannerUrl = ref('');
const status = ref('Active');
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectStatus = (value) => {
  status.value = value;
  isDropdownOpen.value = false;
};
</script>

<template>
  <div class="h-screen bg-slate-900 p-8">
    <div class="flex justify-between">
      <div class="flex flex-row text-white items-center gap gap-2">
        <div class="bg-slate-800 rounded-full p-4 ">
          <Icon size="35" name="game-icons:vertical-banner" />
        </div>
        <div class="flex flex-col gap gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Banners</span>
        </div>
      </div>
      <div class="bg-slate-300 p-4 rounded-full flex items-center w-16 h-16 hover:bg-slate-400 duration-500 cursor-pointer">
        <Correct />
      </div>
    </div>
    <div class="p-8 flex flex-row justify-evenly">
      <div class="w-[450px] h-[90px] text-slate-200">
        <div class="p-4 gap-3 flex flex-col">
          <span class="text-[20px] font-inter">Banner - URL</span>
          <div class="border border-slate-500 hover:shadow-sm rounded-md hover:border-slate-300 hover:shadow-blue-600 p-5">
            <input
              type="text"
              v-model="bannerUrl"
              placeholder="Enter banner URL"
              class="w-full bg-transparent text-slate-200 outline-none"
              aria-label="Banner URL"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap gap-3">
        <label for="status" class="block mt-4 text-slate-200 text-[20px] font-inter">Status:</label>
        <div class="relative w-[450px] h-[90px]">
          <div
            class="border bg-slate-900 text-slate-300 h-[50px] rounded p-5 cursor-pointer"
            @click="toggleDropdown"
            :class="{'bg-gray-800': isDropdownOpen}"
          >
            {{ status }} <span class="float-right">▼</span>
          </div>
          <ul v-if="isDropdownOpen" class="absolute z-10 w-full bg-gray-700 border border-gray-700 text-white rounded shadow-lg">
            <li @click="selectStatus('Active')" class="hover:bg-gray-500 p-4 cursor-pointer">Active</li>
            <li @click="selectStatus('Inactive')" class="hover:bg-gray-500 p-4 cursor-pointer">Inactive</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pb-10 text-slate-300">
      <Tables />
    </div>
  </div>
</template>

<style scoped>
ul {
  max-height: 200px;
  overflow-y: auto;
}
</style>
