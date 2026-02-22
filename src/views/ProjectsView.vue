<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '../projects/projects'

const selectedCategory = ref('All')
const categories = ['All', 'Engineering', 'Hardware', 'Studio', 'Creator']

const searchQuery = ref('')

const filteredProjects = computed(() => {
  let result = projects

  if (selectedCategory.value !== 'All') {
    result = result.filter((p) => p.category === selectedCategory.value)
  }

  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase()
    if (query === 'flux') {
      result = result.filter((p) => p.id === 11 || p.id === 12)
    } else {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }
  }

  return result
})
</script>
<template>
  <div class="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <div class="flex flex-wrap justify-center gap-8 mb-20">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="text-xs uppercase tracking-[0.4em] transition-all duration-300 hover-glitch"
        :class="
          selectedCategory === cat
            ? 'text-emerald-400 border-b-2 border-emerald-400 pb-2'
            : 'text-gray-500 pb-2'
        "
        :data-text="cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="flex justify-center mb-16">
      <div class="relative w-full max-w-md">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="> SEARCH_PROJECTS..."
          class="w-full bg-white/5 border border-white/10 text-white font-mono text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300 placeholder-gray-600 tracking-widest"
        />
        <span
          class="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] text-emerald-500/50 font-mono"
        >
          <span v-if="searchQuery">ACTIVE</span>
          <span v-else>IDLE</span>
        </span>
      </div>
    </div>

    <TransitionGroup
      name="project-list"
      tag="div"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-500 flex flex-col h-full"
      >
        <div class="text-[10px] text-emerald-500/50 font-mono uppercase tracking-widest mb-4">
          // {{ project.category }}
        </div>

        <h3
          class="text-2xl font-bold text-white mb-3 group-hover:permanent-glitch"
          :data-text="project.title"
        >
          {{ project.title }}
        </h3>

        <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 font-mono"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex justify-between items-center mt-auto">
          <a
            v-if="project.demoLink"
            :href="project.demoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-emerald-400 text-xs font-bold uppercase tracking-widest flex item-center gap-2 hover:text-white transition-colors"
          >
            Launch App <span class="text-emerald-500">↗</span>
          </a>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 text-[10px font-mono hover:text-white transition-colors]"
          >
            [Source Code]
          </a>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  filter: blur(10px);
}

.project-list-leave-active {
  position: absolute;
}
</style>
