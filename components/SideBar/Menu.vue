<script setup>
import { ref, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  isOverVIewTabOpen: Boolean,
  isHomeTabOpen: Boolean,
  isProfileTabOpen : Boolean,
  isNotificationTabOpen : Boolean,
  isDeliveryTabOpen : Boolean,
});

const route = useRoute();

const items = ref([
  {
    title: "Banners",
    path: "/admin/banners",
    icon: "game-icons:vertical-banner",
  },
  {
    title: "Brands",
    path: "/admin/brands",
    icon: "simple-icons:brandfolder",
  },
  {
    title: "Items",
    path: "/admin/items",
    icon: "mdi:invoice-line-items-outline",
  },
  {
    title: "Layers",
    path: "/admin/layers",
    icon: "material-symbols-light:layers",
  },
]);

const OverVIew = ref([
  {
    title: "OverView",
    path: "/admin/charts",
    icon: "material-symbols:dashboard-outline",
  },
]);

const profile = ref([
  {
    title: "Promotional",
    path: "/admin/promotion",
    icon: "gis:earth-network",
  },
  {
    title: "Help Center",
    path: "/admin/helpcenter",
    icon: "humbleicons:aid",
  },
]);

const notifications = ref([
  {
    title:"Notifications",
    path:"/admin/notifications",
    icon:"fa6-regular:bell",
  }
]);

const delivery = ref([
  {
    title:"Delivery",
    path:"/admin/deliveries",
    icon:"iconamoon:delivery-fast-bold",
  }
]);
</script>

<template>
  <div class="w-full h-full">
    <div v-if="props.isOverVIewTabOpen" class="bg-[#91D477] h-full transition-all duration-300">
      <div class="p-4">
        <NuxtLink v-for="(category, index) in OverVIew" :key="index" :to="category.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-green-900 hover:bg-[#4da32a] duration-300 text-xl',
              route.path === category.path ? 'bg-[#4fc520]' : ''
            ]"
          >
            <Icon size="20" :name="category.icon" color="white" class="mr-3" />
            <span>{{ category.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isHomeTabOpen" class="bg-[#91D477] h-full transition-all duration-300">
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in items" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-green-900 hover:bg-[#4da32a] duration-300 text-xl',
              route.path === item.path ? 'bg-[#4fc520]' : ''
            ]"
          >
            <Icon size="20" :name="item.icon" color="white" class="mr-3" />
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isProfileTabOpen" class="bg-[#91D477] h-full transition-all duration-300">
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in profile" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-green-900 hover:bg-[#4da32a] duration-300 text-xl',
              route.path === item.path ? 'bg-[#4fc520]' : ''
            ]"
          >
            <Icon size="20" :name="item.icon" color="white" class="mr-3" />
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isNotificationTabOpen" class="bg-[#91D477] h-full transition-all duration-300">
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in notifications" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-green-900 hover:bg-[#4da32a] duration-300 text-xl',
              route.path === item.path ? 'bg-[#4fc520]' : ''
            ]"
          >
            <Icon size="20" :name="item.icon" color="white" class="mr-3" />
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isDeliveryTabOpen" class="bg-[#91D477] h-full transition-all duration-300">
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in delivery" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-green-900 hover:bg-[#4da32a] duration-300 text-xl',
              route.path === item.path ? 'bg-[#4fc520]' : ''
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
