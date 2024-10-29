<template>
    <div class="h-screen bg-slate-100 p-8">
      <div class="flex justify-between">
        <!-- Title Section -->
        <div class="flex flex-row text-green-800 items-center gap-2">
          <div class="bg-green-900 rounded-full text-white p-4 flex">
            <Icon size="35" name="material-symbols-light:layers" />
          </div>
          <div class="flex flex-col gap-[1px]">
            <span class="text-sm">Main</span>
            <span class="text-[24px] font-inter">Layers</span>
            <input
              type="text"
              v-model="title"
              placeholder="Enter Title"
              class="text-[20px] font-inter text-green-800 bg-transparent outline-none"
              aria-label="Title"
            />
          </div>
        </div>
  
        <!-- Save or Correct Button -->
        <div class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer">
          <Correct />
        </div>
      </div>
  
      <!-- Layer Settings Section -->
      <div class="p-8 flex flex-row justify-evenly">
        <!-- Logo ID Input -->
        <div class="h-[90px] text-green-900">
          <div class="p-4 gap-3 flex flex-col">
            <span class="text-[20px] font-inter">Logo ID</span>
            <div class="border w-[450px] border-green-800 hover:shadow-sm rounded-md hover:border-green-500 p-5">
              <input
                type="text"
                v-model="logoId"
                placeholder="Logo ID"
                class="w-full bg-transparent text-green-800 outline-none"
                aria-label="Brand URL"
              />
            </div>
          </div>
        </div>
  
        <!-- Status Selection -->
        <div class="flex flex-col gap-3">
          <label for="status" class="block mt-4 w-[450px] text-green-900 text-[20px] font-inter">Status:</label>
          <ActiveCase :statuses="['Active', 'Inactive']" v-model="status" />
        </div>
      </div>
  
      <div class="p-8 flex flex-row justify-evenly">
        <div class="text-green-900 flex flex-col gap-3">
          <span class="text-[20px] font-inter">Background Color</span>
          <input
            type="color"
            v-model="bgColor"
            class="w-[450px] h-[40px] border border-green-800 rounded"
            aria-label="Background Color"
          />
        </div>
  
        <!-- Inner Stroke Color Picker -->
        <div class="text-green-900 flex flex-col gap-3">
          <span class="text-[20px] font-inter">Inner Stroke Color</span>
          <input
            type="color"
            v-model="innerStrokeColor"
            class="w-[100px] h-[40px] border border-green-800 rounded"
            aria-label="Inner Stroke Color"
          />
        </div>
  
        <!-- Inner Background Color Picker -->
        <div class="text-green-900 flex flex-col gap-3">
          <span class="text-[20px] font-inter">Inner Background Color</span>
          <input
            type="color"
            v-model="innerBgColor"
            class="w-[100px] h-[40px] border border-green-800 rounded"
            aria-label="Inner Background Color"
          />
        </div>
  
        <!-- Axis Style Dropdown -->
        <div class="text-green-900 flex flex-col gap-3">
          <span class="text-[20px] font-inter">Axis Style</span>
          <select v-model="axisStyle" class="w-[200px] border border-green-800 p-2 rounded">
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
          </select>
        </div>
      </div>
  
      <!-- Display Table -->
      <div class="pb-10 text-slate-300">
        <brandTable />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const loading = ref(false);
  const logoId = ref('');
  const status = ref('Active');
  const title = ref('');
  const bgColor = ref('#f8fafc');
  const innerStrokeColor = ref('#4b5563');
  const innerBgColor = ref('#9ca3af');
  const axisStyle = ref('solid');
  </script>
  
  <style scoped>
  /* Dynamic styles */
  .layer-bg {
    background-color: var(--bg-color);
    stroke: var(--stroke-color);
  }
  .layer-inner-bg {
    background-color: var(--inner-bg-color);
  }
  .axis-style {
    stroke-dasharray: var(--dash-array);
  }
  </style>
    