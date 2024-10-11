<script setup>
import { ref, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  isCategoriesTabOpen: Boolean,
  isProfileTabOpen: Boolean,
});

const route = useRoute();

const items = ref([
  {
    title: "Banners",
    path: "/banners",
    icon: "game-icons:vertical-banner",
  },
  {
    title: "Brands",
    path: "/brands",
    icon: "simple-icons:brandfolder",
  },
  {
    title: "Items",
    path: "/items",
    icon: "mdi:invoice-line-items-outline",
  },
]);

const categories = ref([
  {
    title: "OverView",
    path: "/",
    icon: "material-symbols:dashboard-outline",
  },
]);
</script>

<template>
  <div class="w-full h-full">
    <div v-if="props.isCategoriesTabOpen" class="bg-gray-800 h-full transition-all duration-300">
      <div class="font-oswald text-gray-300 text-xl h-20 bg-gray-700 flex p-5 items-center text-center overflow-hidden">
        <span class="truncate">BmBastha</span>
      </div>
      <div class="p-4">
        <NuxtLink v-for="(category, index) in categories" :key="index" :to="category.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-gray-300 hover:bg-gray-700 duration-300 text-xl',
              route.path === category.path ? 'bg-gray-700' : ''
            ]"
          >
            <Icon size="20" :name="category.icon" color="white" class="mr-3" />
            <span>{{ category.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isProfileTabOpen" class="bg-gray-800 h-full transition-all duration-300">
      <div class="font-oswald text-gray-300 text-xl h-20 bg-gray-700 flex p-5 items-center text-center overflow-hidden">
        <span class="truncate">BmBastha</span>
      </div>
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in items" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-gray-300 hover:bg-gray-700 duration-300 text-xl',
              route.path === item.path ? 'bg-gray-700' : ''
            ]"
          >
            <Icon size="20" :name="item.icon" color="white" class="mr-3" />
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
