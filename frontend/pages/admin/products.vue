<template>
  <AdminLayout>
    <template #default>
      <h1>Products</h1>
      <button @click="showAdd = true">Add Product</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.active ? 'Active' : 'Inactive' }}</td>
            <td>
              <button @click="editProduct(product)">Edit</button>
              <button @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add/Edit Modal -->
      <div v-if="showAdd" class="modal">
        <div class="modal-content">
          <h2>{{ editing ? 'Edit' : 'Add' }} Product</h2>
          <input v-model="form.name" placeholder="Name"/>
          <select v-model="form.category_id">
            <option v-for="cat in categories" :value="cat.id">{{ cat.name }}</option>
          </select>
          <input v-model="form.price" type="number" placeholder="Price"/>
          <input v-model="form.stock" type="number" placeholder="Stock"/>
          <label>
            Active
            <input type="checkbox" v-model="form.active"/>
          </label>
          <button @click="saveProduct">Save</button>
          <button @click="showAdd = false">Cancel</button>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue
