<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const open = ref(true);
const name = "Bmbastha";

const isCategoriesTabOpen = ref(false);
const isProfileTabOpen = ref(false);

const toggleCategoriesTab = () => {
  isCategoriesTabOpen.value = true;
  isProfileTabOpen.value = false;
};

const toggleProfileTab = () => {
  isProfileTabOpen.value = true;
  isCategoriesTabOpen.value = false;
};

onMounted(() => {
  if (route.path.startsWith("/banners") || route.path.startsWith("/brands") || route.path.startsWith("/items")) {
    toggleProfileTab();
  } else {
    toggleCategoriesTab();
  }
});
</script>

<template>
  <div class="flex h-screen">
    <div class="w-20 bg-gray-950 h-full">
      <img src="../../assets/images/Logo.svg" class="lg:p-5 w-full bg-gray-900" alt="Logo" />
        <img
        src="../../assets/images/Categories.svg"
        @click="toggleCategoriesTab"
        class="cursor-pointer lg:p-5 transition-colors duration-300"
        :class="isCategoriesTabOpen ? 'bg-gray-800' : 'bg-transparent'"
        alt="Categories"
      />
      <img
        src="../../assets/images/Profile.svg"
        @click="toggleProfileTab"
        class="cursor-pointer lg:p-6 transition-colors duration-300"
        :class="isProfileTabOpen ? 'bg-gray-800' : 'bg-transparent'"
        alt="Profile"
      />
    </div>
    <div class="w-[250px] h-full">
      <SideBarMenu :isCategoriesTabOpen="isCategoriesTabOpen" :isProfileTabOpen="isProfileTabOpen" />
    </div>
  </div>
</template>
