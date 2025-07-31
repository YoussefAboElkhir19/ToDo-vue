<template>
    <li class="unstyled-list-item flex items-center justify-between bg-white rounded-lg shadow px-4 py-2 transition hover:bg-purple-50"
        :class="{ 'opacity-60': task.completed }">
        <div class="flex items-center gap-3 cursor-pointer select-none flex-1" @click="$emit('completed')">
            <span class="w-4 h-4 rounded-full border-2 border-purple-400 flex items-center justify-center mr-2"
                :class="{ 'bg-purple-400': task.completed }">
                <i v-if="task.completed" class="fa fa-check text-white text-xs"></i>
            </span>
            <span :class="{
                'toggle-completed text-gray-400': task.completed,
                'text-gray-700': !task.completed
            }" class="transition">
                {{ task.title }}
            </span>
        </div>
        <button @click.stop="$emit('remove')" class="ml-3 text-red-500 hover:text-red-700 transition" title="Delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </li>
</template>

<script>
export default {
    name: 'TaskItem',
    props: ['task'],
}
</script>