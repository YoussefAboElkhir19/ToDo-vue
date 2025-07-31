<template>
  <div class="max-w-lg mx-auto mt-8 px-4">
    <!-- Card -->
    <div
      class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <!-- Header -->
      <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
        📝 My To-Do List
      </h2>

      <!-- Task input -->
      <div class="flex gap-3 mb-6">
        <input
          v-model="newTask"
          type="text"
          placeholder="Enter a new task..."
          class="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          @click="addTask"
          class="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>

      <!-- Tasks list -->
      <ul class="space-y-3">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="flex items-center justify-between bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <span
            :class="{ 'line-through text-gray-400 dark:text-gray-500': task.done }"
            @click="toggleTask(index)"
            class="cursor-pointer text-gray-700 dark:text-gray-200 font-medium select-none"
          >
            {{ task.text }}
          </span>
          <button
            @click="deleteTask(index)"
            class="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
          >
            ✕
          </button>
        </li>
      </ul>

      <!-- Empty state -->
      <p v-if="tasks.length === 0" class="text-center text-gray-500 dark:text-gray-400 mt-4">
        No tasks yet. Add one above! 🚀
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, done: false })
    newTask.value = ''
  }
}

const toggleTask = (index) => {
  tasks.value[index].done = !tasks.value[index].done
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>
