<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
    <div class="w-full max-w-2xl">
      <TitleAnimation />

      <div class="card shadow-2xl rounded-3xl bg-white p-4 sm:p-6">
        <!-- title -->
        <div class="mb-4 text-center">
          <TestAnimation />
        </div>

        <div class="card-body p-2 sm:p-6">
          <!-- Form -->
          <div class="mb-6">
            <form class="flex flex-col sm:flex-row gap-2" @submit.prevent="addTask">
              <input v-model="newTask" type="text"
                class="flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Add new Task" required />
              <button
                class="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg sm:rounded-r-lg hover:bg-purple-700 transition"
                type="submit">+</button>
            </form>
          </div>

          <!-- Task List -->
          <div>
            <h3 class="text-lg font-bold text-gray-600 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-list-check"></i> Task Items
            </h3>
            <ul class="unstyled-list space-y-2">
              <task-item v-for="task in tasks" :key="task.id" :task="task" @remove="removeTask(task.id)"
                @completed="completed(task)" />
            </ul>
          </div>

          <!-- Two Buttons -->
          <div class="flex flex-col sm:flex-row sm:justify-between mt-6 gap-2">
            <button @click="clearAll"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto">
              Clear All Tasks
            </button>
            <button @click="clearCompleted"
              class="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto">
              Clear Completed Tasks
            </button>
          </div>

          <!-- Pending not completed -->
          <div class="mt-4 text-center sm:text-right text-gray-600">
            <span class="font-bold"><i class="fa-solid fa-hourglass-start"></i> Pending: </span>
            <span class="font-bold text-purple-700">{{ iscomplete }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestAnimation from './ui/TextAnimation.vue';
import TaskItem from './Task-item.vue';
import TitleAnimation from './ui/TitleAnimation.vue';

export default {
  name: 'ToDo',
  components: { TestAnimation, TaskItem, TitleAnimation },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Learn Vue.js', completed: true },
        { id: 2, title: 'Build a To-Do App', completed: false },
        { id: 3, title: 'Learn React.js', completed: false }
      ],
      newTask: ''
    }
  },
  computed: {
    iscomplete() {
      return this.tasks.filter(this.isProgress).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        const newId = this.tasks.length > 0
          ? Math.max(...this.tasks.map(t => t.id)) + 1
          : 1;
        this.tasks.push({ id: newId, title: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    clearAll() {
      this.tasks = [];
    },
    isProgress(task) {
      return !this.isCompleted(task);
    },
    isCompleted(task) {
      return task.completed;
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(this.isProgress);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    completed(task) {
      task.completed = !task.completed;
    }
  }
}
</script>
