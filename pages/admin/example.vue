<template>
    <div>
      <h1>Items Form</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="logo">Logo URL:</label>
          <input v-model="form.logo" type="url" id="logo" required />
        </div>
  
        <div>
          <label for="price">Price (₹):</label>
          <input v-model.number="form.price" type="number" id="price" min="0" required />
        </div>
  
        <div>
          <label for="discount">Discount (%):</label>
          <input v-model.number="form.discount" type="number" id="discount" min="0" max="100" />
        </div>
  
        <div>
          <label for="manufactureDate">Manufacturing Date:</label>
          <input v-model="form.manufactureDate" type="date" id="manufactureDate" required />
        </div>
  
        <div>
          <label for="expiryDate">Expiry Date:</label>
          <input v-model="form.expiryDate" type="date" id="expiryDate" required />
        </div>
  
        <div>
          <label for="netWeight">Net Weight (g):</label>
          <input v-model.number="form.netWeight" type="number" id="netWeight" min="1" required />
        </div>
  
        <div>
          <label for="pack">Pack:</label>
          <input v-model="form.pack" type="text" id="pack" />
        </div>
  
        <div>
          <label for="sellerId">Seller ID:</label>
          <input v-model="form.sellerId" type="text" id="sellerId" required />
        </div>
  
        <div>
          <label for="itemTags">Item Tags:</label>
          <input v-model="form.itemTags" type="text" id="itemTags" />
        </div>
  
        <div>
          <label for="pieces">No. of Pieces:</label>
          <input v-model.number="form.pieces" type="number" id="pieces" min="1" required />
        </div>
  
        <div>
          <label for="modelName">Model Name:</label>
          <input v-model="form.modelName" type="text" id="modelName" />
        </div>
  
        <div>
          <label for="type">Type:</label>
          <input v-model="form.type" type="text" id="type" />
        </div>
  
        <div>
          <label for="description">Description:</label>
          <textarea v-model="form.description" id="description" rows="4"></textarea>
        </div>
  
        <div>
          <label>Status:</label>
          <select v-model="form.status" required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
  
        <div>
          <label for="brandLinkage">Brand Linkage:</label>
          <input v-model="form.brandLinkage" type="text" id="brandLinkage" />
        </div>
  
        <div>
          <label for="categoriesLinkage">Categories Linkage:</label>
          <input v-model="form.categoriesLinkage" type="text" id="categoriesLinkage" />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
<script setup>
import { ref } from 'vue';

const form = ref({
  logo: '',
  price: 0,
  discount: 0,
  manufactureDate: '',
  expiryDate: '',
  netWeight: 0,
  pack: '',
  sellerId: '',
  itemTags: '',
  pieces: 1,
  modelName: '',
  type: '',
  description: '',
  status: 'active',
  brandLinkage: '',
  categoriesLinkage: ''
});

const validateForm = () => {
  if (form.value.price < 0) {
    alert('Price cannot be negative');
    return false;
  }

  if (form.value.discount < 0 || form.value.discount > 100) {
    alert('Discount must be between 0% and 100%');
    return false;
  }

  const manufactureDate = new Date(form.value.manufactureDate);
  const expiryDate = new Date(form.value.expiryDate);

  if (expiryDate < manufactureDate) {
    alert('Expiry Date cannot be before Manufacture Date');
    return false;
  }

  return true;
};

const handleSubmit = () => {
  if (!validateForm()) {
    return;
  }

  // Handle the data submission (e.g., API call)
  console.log('Form submitted:', form.value);
};
</script>
  