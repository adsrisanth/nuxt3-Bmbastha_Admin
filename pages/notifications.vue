<template>
    <div class="notification-page">
      <h1 class="text-2xl font-semibold mb-4">Notification Admin Panel</h1>
  
      <!-- Admin Panel Form -->
      <div class="mb-6 p-4 border rounded-md bg-slate-100">
        <h2 class="text-lg font-medium">Add New Notification</h2>
        <form @submit.prevent="addNotification">
          <div class="mb-4">
            <label for="logoUrl" class="block text-sm font-medium">Notification Logo URL:</label>
            <input
              v-model="newNotification.logoUrl"
              id="logoUrl"
              type="url"
              class="border p-2 w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium">Title:</label>
            <input
              v-model="newNotification.title"
              id="title"
              type="text"
              class="border p-2 w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium">Description:</label>
            <textarea
              v-model="newNotification.description"
              id="description"
              class="border p-2 w-full rounded-md"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="url" class="block text-sm font-medium">Notification URL:</label>
            <input
              v-model="newNotification.url"
              id="url"
              type="url"
              class="border p-2 w-full rounded-md"
              required
            />
          </div>
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md">Add Notification</button>
        </form>
      </div>
  
      <!-- Notifications Table -->
      <h2 class="text-xl font-semibold mt-8 mb-4">All Notifications</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-green-500 text-white">
          <tr>
            <th class="px-4 py-2">Logo</th>
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(notification, index) in notifications" :key="index" class="border-b">
            <td class="px-4 py-2">
              <img :src="notification.logoUrl" alt="Logo" class="w-8 h-8 object-cover rounded-full" />
            </td>
            <td class="px-4 py-2">{{ notification.title }}</td>
            <td class="px-4 py-2">{{ notification.description }}</td>
            <td class="px-4 py-2">
              <a :href="notification.url" target="_blank" class="text-blue-500 hover:underline">{{ notification.url }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State to store notifications
  const notifications = ref([
    {
      logoUrl: 'https://via.placeholder.com/50',
      title: 'Maintenance Update',
      description: 'Scheduled maintenance will occur on 15th December.',
      url: 'https://www.example.com/maintenance'
    },
    {
      logoUrl: 'https://via.placeholder.com/50',
      title: 'New Feature Announcement',
      description: 'We have introduced a new feature on our platform.',
      url: 'https://www.example.com/features'
    }
  ]);
  
  // State for the new notification form
  const newNotification = ref({
    logoUrl: '',
    title: '',
    description: '',
    url: ''
  });
  
  // Function to add a new notification
  const addNotification = () => {
    if (newNotification.value.logoUrl && newNotification.value.title && newNotification.value.description && newNotification.value.url) {
      notifications.value.push({
        logoUrl: newNotification.value.logoUrl,
        title: newNotification.value.title,
        description: newNotification.value.description,
        url: newNotification.value.url
      });
      
      // Reset the form
      newNotification.value = {
        logoUrl: '',
        title: '',
        description: '',
        url: ''
      };
    }
  };
  </script>
  
  <style scoped>
  .notification-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9fafb;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    text-align: left;
  }
  </style>
  