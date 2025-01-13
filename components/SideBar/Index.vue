<template>
  <div>
    <!-- Fixed Header -->
    <header class="fixed top-0 left-0 w-full h-[70px] z-50 border-b-2 border-gray-400 bg-slate-50 flex px-14">
      <div class="flex flex-row items-center">
        <img src="../../assets/images/bmbastha-logo_PNG_bg.png" alt="Logo" class="h-20 mr-3">
        <span class="text-gray-950 text-2xl font-poppins">BmBastha</span>
      </div>
      <div class="flex items-center">
      <NuxtLink to="/admin/">
          <span class="fixed top-5 right-5 duration-300 rounded-lg px-4 py-3 bg-red-500 hover:bg-red-600 text-gray-50">Log out</span>
        </NuxtLink>
        </div>
    </header>
    <div class="flex pt-[70px] h-screen">
      <!-- Sidebar -->
      <div class="w-20 bg-[#4fc520] h-full">
        <img
          src="../../assets/images/overview.svg"
          @click="toggleOverVIewTab"
          class="cursor-pointer lg:p-5 transition-colors duration-300"
          :class="isOverVIewTabOpen ? 'bg-[#91D477]' : 'bg-transparent'"
          alt="OverVIew"
        />
        <img
          src="../../assets/images/home.svg"
          @click="toggleHomeTab"
          class="cursor-pointer lg:p-6 transition-colors duration-300"
          :class="isHomeTabOpen ? 'bg-[#91D477]' : 'bg-transparent'"
          alt="Home"
        />
        <img
          src="../../assets/images/Profile.svg"
          @click="toggleProfileTab"
          class="cursor-pointer lg:p-6 transition-colors duration-300"
          :class="isProfileTabOpen ? 'bg-[#91D477]' : 'bg-transparent'"
          alt="Profile"
        />
        <img
          src="../../assets/images/notifications.svg"
          @click="toggleNotificationTab"
          class="cursor-pointer lg:p-2 transition-colors duration-300"
          :class="isNotificationTabOpen ? 'bg-[#91D477]' : 'bg-transparent'"
          alt="Notification"
        />
        <img
          src="../../assets/images/delivery.svg"
          @click="toggleDeliveryTab"
          class="cursor-pointer lg:p-4 transition-colors duration-300"
          :class="isDeliveryTabOpen ? 'bg-[#91D477]' : 'bg-transparent'"
          alt="Delivery"
        />
      </div>

      <!-- Sidebar Menu -->
      <div class="w-[250px] h-full overflow-y-auto">
        <SideBarMenu 
          :isOverVIewTabOpen="isOverVIewTabOpen" 
          :isHomeTabOpen="isHomeTabOpen" 
          :isProfileTabOpen="isProfileTabOpen" 
          :isNotificationTabOpen="isNotificationTabOpen" 
          :isDeliveryTabOpen="isDeliveryTabOpen" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isOverVIewTabOpen = ref(true);
const isHomeTabOpen = ref(false);
const isProfileTabOpen = ref(false);
const isNotificationTabOpen = ref(false);
const isDeliveryTabOpen = ref(false);

const toggleOverVIewTab = () => {
  isOverVIewTabOpen.value = true;
  isHomeTabOpen.value = false;
  isProfileTabOpen.value = false;
  isNotificationTabOpen.value = false;
  isDeliveryTabOpen.value = false;
};

const toggleHomeTab = () => {
  isHomeTabOpen.value = true;
  isOverVIewTabOpen.value = false;
  isProfileTabOpen.value = false;
  isNotificationTabOpen.value = false;
  isDeliveryTabOpen.value = false;
};

const toggleProfileTab = () => {
  isHomeTabOpen.value = false;
  isOverVIewTabOpen.value = false;
  isProfileTabOpen.value = true;
  isNotificationTabOpen.value = false;
  isDeliveryTabOpen.value = false;
};

const toggleNotificationTab = () => {
  isHomeTabOpen.value = false;
  isOverVIewTabOpen.value = false;
  isProfileTabOpen.value = false;
  isNotificationTabOpen.value = true;
  isDeliveryTabOpen.value = false;
};

const toggleDeliveryTab = () => {
  isHomeTabOpen.value = false;
  isOverVIewTabOpen.value = false;
  isProfileTabOpen.value = false;
  isNotificationTabOpen.value = false;
  isDeliveryTabOpen.value = true;
};

onMounted(() => {
  if (route.path.startsWith("/admin/banners") || route.path.startsWith("/admin/brands") || route.path.startsWith("/admin/items") || route.path.startsWith("/layers")) {
    toggleHomeTab();
  } else if (route.path.startsWith("/admin/charts")) {
    toggleOverVIewTab();
  } else if (route.path.startsWith("/admin/promotional") || route.path.startsWith("/admin/helpcenter")) {
    toggleProfileTab();
  } else if (route.path.startsWith("/admin/notifications")) {
    toggleNotificationTab();
  } else if (route.path.startsWith("/admin/delivery")) {
    toggleDeliveryTab();
  }
});
</script>

<style scoped>
body {
  overflow: hidden;
}
</style>
