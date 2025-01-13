<template>
  <div class="order-detail-page">
    <header class="page-header">
      <h1>Order Details</h1>
    </header>

    <p><strong>Order ID:</strong> {{ orderId }}</p>
    <div class="form-group">
      <label for="deliveryPerson">Assign Delivery Person:</label>
      <select v-model="assignedDeliveryPerson" class="form-control">
        <option v-for="person in deliveryPeople" :key="person.id" :value="person.name">
          {{ person.name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="status">Update Status:</label>
      <select v-model="status" class="form-control">
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
    <button @click="saveChanges" class="save-btn">Save Changes</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const orderId = route.params.id;
const deliveryPeople = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]);

const assignedDeliveryPerson = ref('');
const status = ref('pending');
const saveChanges = () => {
  console.log('Saved:', {
    orderId,
    assignedDeliveryPerson: assignedDeliveryPerson.value,
    status: status.value,
  });
};
</script>

<style scoped>
.order-detail-page {
  padding: 20px;
}

.page-header h1 {
  margin-bottom: 20px;
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.save-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.save-btn:hover {
  background-color: #218838;
}
</style>