<script lang="ts" setup>
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine)
}

const particlesOptions = {
  background: { color: { value: '#050505' } },
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 120 },
    color: { value: ['#ffffff', '#10b981', '#34d399'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.3, max: 0.8 },
      animation: { enable: true, speed: 1, sync: false },
    },
    size: { value: { min: 1, max: 4 } },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      straight: false,
    },
    shadow: {
      enable: true,
      color: '#10b981',
      blur: 5,
    },
  },
}

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/sqmmi3' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sqmmi3' },
  { name: 'SoundCloud', url: 'https://on.soundcloud.com/knvmLUE7mccEq1V0HC' },
  { name: 'Spotify', url: 'https://open.spotify.com/user/samipgaming?si=32c2880b94d44682' },
  { name: 'Instagram', url: 'https://instagram.com/sqmmi3' },
]
</script>

<template>
  <vue-particles id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" />
  <div
    class="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none -z-10"
  ></div>
  <div
    class="fixed bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10"
  ></div>

  <header class="relative z-10">
    <nav
      class="flex justify-center gap-20 p-5 bg-white/5 backdrop-blur-md border-b border-white/10 text-white sticky top-0 z-50"
    >
      <RouterLink
        to="/"
        class="hover:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0)] hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all"
        active-class="text-emerald-400 font-bold border-b-2 border-emerald-400"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/projects"
        class="hover:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0)] hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all"
        active-class="text-emerald-400 font-bold border-b-2 border-emerald-400"
      >
        Projects
      </RouterLink>

      <RouterLink
        to="/about"
        class="hover:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0)] hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all"
        active-class="text-emerald-400 font-bold border-b-2 border-emerald-400"
      >
        About Me
      </RouterLink>

      <RouterLink
        to="/contact"
        class="hover:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0)] hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all"
        active-class="text-emerald-400 font-bold border-b-2 border-emerald-400"
      >
        Contact
      </RouterLink>
    </nav>
  </header>

  <main class="relative z-10">
    <router-view v-slot="{ Component, route }">
      <transition name="cosmic-fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </main>

  <footer class="relative z-10 border-t border-white/5 bg-black/30 backdrop-blur-xl py-12 mt-20">
    <div class="max-w-6xl mx-auto px-6 flex flex-col gap-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="font-mono text-[10px] tracking-widest text-gray-500/70 flex items-center">
          <span class="text-emerald-500 animate-pulse mr-3 text-xs">●</span>
          <span>SYSTEM_READY // 2026_EDITION</span>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs uppercase tracking-widest text-gray-500 hover:text-emerald-400 transition-colors relative group"
          >
            <span class="group-hover:permanent-glitch" :data-text="link.name">{{ link.name }}</span>
          </a>
        </div>

        <div class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          SQMMI3_VOID <span class="text-emerald-500/40 ml-1">[BUILD_4.1.0]</span>
        </div>
      </div>

      <div class="pt-6 border-t border-white/5 flex justify-center">
        <div
          class="text-[10px] font-mono text-gray-600/50 hover:text-gray-500/80 transition-colors duration-500 uppercase tracking-widest flex items-center gap-4"
        >
          <span>© SQMMI3 STUDIOS</span>
          <span class="text-emerald-500/30">|</span>
          <span>BTW: BE 1035.139.260</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.cosmic-fade-enter-active {
  transition: all 0.7s ease-out;
  border-color: rgba(16, 185, 129, 0.2);
  box-shadow: 0 0 50px -10px rgba(16, 185, 129, 0.1);
}

.cosmic-fade-leave-active {
  transition: all 0.5s ease-in;
}

.cosmic-fade-enter-from {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(12px);
}

.cosmic-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  filter: blur(4px);
}
</style>
