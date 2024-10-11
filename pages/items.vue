<script setup>
const loading = ref(false)
</script>

<template>
  <div class="h-screen bg-slate-900 p-8">
    <div class="flex justify-between">
      <div class="flex flex-row text-white items-center gap gap-2">
        <div class="bg-slate-800 rounded-full p-4 ">
          <Icon size="35" name="mdi:invoice-line-items-outline"/>
        </div>
        <div class="flex flex-col gap gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Items</span>
        </div>
      </div>
      <div class="bg-slate-300 p-4 rounded-full flex items-center w-16 h-16 hover:bg-slate-400 duration-500 cursor-pointer">
        <Correct />
      </div>
    </div>
  </div>
</template>