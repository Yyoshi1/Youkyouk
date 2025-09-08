import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Projects from '../pages/Projects.vue';
import Tasks from '../pages/Tasks.vue';
import Teams from '../pages/Teams.vue';
import Users from '../pages/Users.vue';
import Notifications from '../pages/Notifications.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/tasks', name: 'Tasks', component: Tasks },
  { path: '/teams', name: 'Teams', component: Teams },
  { path: '/users', name: 'Users', component: Users },
  { path: '/notifications', name: 'Notifications', component: Notifications }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
