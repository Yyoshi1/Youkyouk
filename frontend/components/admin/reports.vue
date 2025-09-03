<template>
  <Layout :admin="admin" :addons="addons">
    <h2>Reports</h2>
    <table>
      <thead>
        <tr><th>ID</th><th>Title</th><th>Date</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr v-for="report in reports" :key="report.id">
          <td>{{ report.id }}</td>
          <
