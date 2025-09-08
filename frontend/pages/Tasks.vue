<template>
  <div class="tasks p-6">
    <h2 class="text-2xl font-bold mb-4">Tasks</h2>
    <div class="grid grid-cols-2 gap-4">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
    </div>
  </div>
</template>

<script>
import TaskCard from '../components/TaskCard.vue'

export default {
  components: { TaskCard },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Task One', description: 'Description One', status: 'Pending' },
        { id: 2, title: 'Task Two', description: 'Description Two', status: 'Completed' }
      ]
    }
  }
}
</script>
