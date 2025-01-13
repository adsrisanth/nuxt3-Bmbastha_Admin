<template>
  <div class="admin-delivery-page">
    <!-- Page Header -->
    <header class="page-header">
      <h1>Manage Deliveries</h1>
    </header>

    <!-- Search Bar -->
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search orders..."
        class="search-input"
      />
    </div>

    <!-- Delivery Orders Table -->
    <div class="orders-table">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" v-model="selectAll" @change="toggleSelectAll" /></th>
            <th>Ordered By</th>
            <th>Delivery To</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in filteredOrders" :key="order.id">
            <td><input type="checkbox" v-model="selectedOrders" :value="order.id" /></td>
            <td>{{ order.orderedPerson }}</td>
            <td>{{ order.deliveryTo }}</td>
            <td>{{ order.date }}</td>
            <td>
              <button class="action-btn" @click="goToDetailPage(order.id)">></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// Reactive state
const searchQuery = ref('');
const selectAll = ref(false);
const selectedOrders = ref([]);
const router = useRouter();

const orders = ref([
  { id: 1, orderedPerson: 'John Doe', deliveryTo: '123 Main St', date: '2025-01-13' },
  { id: 2, orderedPerson: 'Jane Smith', deliveryTo: '456 Maple Ave', date: '2025-01-14' },
  { id: 3, orderedPerson: 'Samuel Lee', deliveryTo: '789 Oak Dr', date: '2025-01-15' },
]);

// Filtered orders
const filteredOrders = computed(() => {
  return orders.value.filter(order =>
    order.orderedPerson.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    order.deliveryTo.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Toggle select all checkboxes
const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedOrders.value = filteredOrders.value.map(order => order.id);
  } else {
    selectedOrders.value = [];
  }
};

// Navigate to the order detail page
const goToDetailPage = (orderId) => {
  router.push({ name: 'OrderDetail', params: { id: orderId } });
};
</script>

<style scoped>
.admin-delivery-page {
  padding: 20px;
}

.page-header h1 {
  margin-bottom: 20px;
  font-size: 24px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.orders-table table {
  width: 100%;
  border-collapse: collapse;
}

.orders-table th, .orders-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.orders-table th {
  background-color: #f9f9f9;
}

.action-btn {
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

.action-btn:hover {
  background-color: #0056b3;
}
</style>
