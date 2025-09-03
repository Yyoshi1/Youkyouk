<template>
  <AdminLayout>
    <template #default>
      <h1>Categories</h1>
      <button @click="showAdd = true">Add Category</button>

      <ul>
        <li v-for="cat in categories" :key="cat.id">
          {{ cat.name }}
          <button @click="editCategory(cat)">Edit</button>
          <button @click="deleteCategory(cat.id)">Delete</button>
          <ul v-if="cat.children">
            <li v-for="child in cat.children" :key="child.id">
              {{ child.name }}
              <button @click="editCategory(child)">Edit</button>
              <button @click="deleteCategory(child.id)">Delete</button>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Add/Edit Modal -->
