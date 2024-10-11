<template>
  <div class="h-screen bg-slate-900 p-8">
    <div class="flex justify-between">
      <div class="flex flex-row text-white items-center gap gap-2">
        <div class="bg-slate-800 rounded-full p-4">
          <Icon size="35" name="game-icons:vertical-banner" />
        </div>
        <div class="flex flex-col gap gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Brands</span>
        </div>
      </div>
      <div class="bg-slate-300 p-4 rounded-full flex items-center w-16 h-16 hover:bg-slate-400 duration-500 cursor-pointer">
        <Correct />
      </div>
    </div>
    <div class="p-8 flex flex-row justify-evenly">
      <div class=" h-[90px] text-slate-200">
        <div class="p-4 gap-3 flex flex-col">
          <span class="text-[20px] font-inter">Brands Logo - URL</span>
          <div class="border w-[450px] border-slate-500 hover:shadow-sm rounded-md hover:border-slate-300 hover:shadow-blue-600 p-5">
            <input
              type="text"
              v-model="bannerUrl"
              placeholder="Enter Logo Brand URL"
              class="w-full bg-transparent  text-slate-200 outline-none"
              aria-label="Banner URL"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap gap-3">
        <label for="status" class="block mt-4 w-[450px] text-slate-200 text-[20px] font-inter">Status:</label>
        <Dropdown :statuses="['Active', 'Inactive']" v-model="status" />
      </div>
    </div>
    <div class="pb-10 text-slate-300">
      <brandTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from '../../components/activeCase.vue';

const loading = ref(false);
const bannerUrl = ref('');
const status = ref('Active');
</script>
