<template>
  <SellerLayout>
    <template #default>
      <h1>Promotions</h1>
      <button @click="addPromotion">Add Promotion</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Discount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in promotions" :key="p.id">
            <td>{{ p.title }}</td>
            <td>{{ p.discount }}%</td>
            <td>{{ p.start_date }}</td>
            <td
