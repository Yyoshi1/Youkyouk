<template>
  <div class="trip-list">
    <h2>Trips</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Rider</th>
          <th>Driver</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trip in trips" :key="trip.id">
          <td>{{ trip.id }}</td>
          <td>{{ trip.rider_name }}</td>
          <td>{{ trip.driver_name }}</td>
          <td>{{ trip.status }}</td>
          <td>
            <button @click="viewTrip(trip)">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TripList',
  data() {
    return { trips: [] }
  },
  mounted() {
    fetch('/api/trips')
      .then(res => res.json())
      .then(data => (this.trips = data))
  },
  methods: {
    viewTrip(trip) {
      alert('Trip details: ' + JSON.stringify(trip))
    },
  },
}
</script>

<style scoped>
.trip-list {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
