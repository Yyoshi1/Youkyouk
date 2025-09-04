<template>
  <table class="basic-table">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="col in columns" :key="col">{{ row[col] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BasicTable",
  props: {
    columns: Array,
    rows: Array
  }
};
</script>

<style scoped>
.basic-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}

.basic-table th, .basic-table td {
  border: 1px solid var(--border-color);
  padding: 8px;
}

.basic-table th {
  background-color: var(--header-bg);
  text-align: left;
}
</style>
