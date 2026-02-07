<script setup>
  import { computed, onMounted, ref } from 'vue';

  const skills = ['TypeScript', 'JavaScript', 'Java', 'Python', 'C#', 'C++', 'C', 'HTML/CSS', '(No)SQL', 'VueJS', 'NestJS', 'NextJS', 'NodeJS', 'ExpressJS', 'React (Native)', 'Flutter', 'IoT', 'Full-Stack (Back-end / Front-end)', 'Godot', 'Unity', 'UX/UI', 'Figma', 'VR/AR/XR']
  const artists = ['Jeremy Zucker', 'Ruel', 'Chelsea Cutler', 'brakence', 'EDEN', 'keshi']

  const bootTime = ref(Math.random().toFixed(3));
  const currentFrequency = ref(440);

  const email = 'samipshrestha2003@gmail.com';
  const isCopied = ref(false);

  const REHAB_START_DATE = new Date('2025-11-28');
  const TOTAL_REHAB_DAYS = 272;

  const aclProgress = computed(() => {
    const today = new Date();
    const diffTime = Math.abs(today - REHAB_START_DATE - 1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const percent = (diffDays / TOTAL_REHAB_DAYS) * 10;

    return {
      days: diffDays,
      value: Math.min(Math.max(Math.round(percent), 0), 10),
      rawPercent: Math.min(Math.round((diffDays / TOTAL_REHAB_DAYS) * 100), 100)
    };
  });

  const systemStats = computed(() => [
    {
      label: 'ACL_REHAB',
      value: aclProgress.value.value,
      display: `${aclProgress.value.rawPercent}%`,
      subText: `Day ${aclProgress.value.days} of ${TOTAL_REHAB_DAYS}`,
      color: 'bg-red-500',
      textColor: 'text-red-500'
    },
    { label: 'CS_DEGREE', value: 6.9, display: '69%', color: 'bg-emerald-500', textColor: 'text-emerald-500' },
    { label: 'FL_STUDIO', value: 5.3, display: '53%', color: 'bg-emerald-500', textColor: 'text-emerald-500' },
    { label: 'IOT_DEV', value: 3.4, display: '34%', color: 'bg-emerald-500', textColor: 'text-emerald-500' },
    { 
      label: 'SONIC_RESONANCE', 
      value: 10, 
      display: `${currentFrequency.value}Hz`, 
      subText: 'Tuning: A4 Standard',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500'
    }
  ]);

  const kernelLog = computed(() => {
    const now = new Date();
    const unixSeconds = Math.floor(now.getTime() / 1000);
    return `[ ${unixSeconds}.${bootTime.value} ] STATUS: SYNC_COMPLETE // SESSION_STABLE`;
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 3000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  onMounted(() => {
    setInterval(() => {
      currentFrequency.value = (440 + (Math.random() * 0.5 - 0.25)).toFixed(2);
    }, 3000);
  });
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
    <section class="mb-20 animate-in" style="animation-delay: 0.1s">
      <h2 class="text-emerald-500 font-mono tracking-[0.3em] mb-4 uppercase text-sm">// Biography</h2>
      <h1 class="text-5xl md:text-7xl font-black text-white mb-8 hover-glitch" data-text="THE CREATOR">
        THE CREATOR
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div class="lg:col-span-2 space-y-8">
          <p class="text-gray-400 text-lg md:text-xl leading-relaxed">
            A multi-disciplinary developer and artist operating at the intersection of
            <span class="text-white">logical systems</span> and <span class="text-white"> creative chaos</span>.
            Whether I'm debugging a kernel driver, soldering a custom IoT node, or layering vocal harmonies in a glitchpop track,
            my goal is to build things that feel alive.
          </p>
          
          <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl font-mono text-sm backdrop-blur-sm">
            <p class="text-red-400 font-bold mb-1">! SYSTEM_MAINTENANCE_REQUIRED</p>
            <p class="text-gray-400 italic">"Undergoing ACL recovery. Currently prioritizing health-sync. Responses may be delayed, but the grind never stops."</p>
          </div>
        </div>

        <div class="inline-flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl backdrop-blur-sm animate-in" style="animation-delay: 0.2s">
          <div class="p-3 bg-emerald-500/10 rounded-lg">
             <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div>
            <p class="text-[10px] text-emerald-500/60 font-mono uppercase tracking-widest">Education Level</p>
            <p class="text-white font-bold tracking-wide leading-tight pb-1">B.Sc. Computer Science (Year 3)</p>
            <p class="text-gray-500 text-[10px] font-mono hover-glitch" data-text="@ UCLL">@ UCLL (University College Leuven Limburg)</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div class="mt-12 p-6 border-l-2 border-emerald-500/30 bg-white/5 backdrop-blur-sm max-w-xl w-full animate-in" style="animation-delay: 0.3s">
          <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-[0.3em]">// Base Specs</h4>
          <ul class="text-gray-500 font-mono text-xs space-y-4">
            <li><span class="text-emerald-500">>></span> Role: <span class="text-white">Full-Stack Polymath</span></li>
            <li><span class="text-emerald-500">>></span> Languages: <span class="text-white">EN / NL / NP / FR</span></li>
            <li><span class="text-emerald-500">>></span> Experience: <span class="text-white">4 Years Building</span></li>
            <li class="flex items-center gap-2">
              <span class="text-emerald-500">>></span> Status:
              <span class="text-emerald-400 animate-pulse tracking-widest">ACTIVE_SIGNAL</span>
            </li>
          </ul>
          <div class="mt-8 pt-12 border-t border-white/5">
            <button
              @click="copyEmail"
              class="group relative w-full py-6 px-6 bg-emerald-500/50 border border-emerald-500/20 rounded-lg overflow-hidden transition-all hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] active:scale-[0.98] cursor-pointer"
            >
              <div class="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <div class="relative flex items-center justify-between">
                <div class="flex flex-col items-start">
                  <span class="text-[9px] text-emerald-500 font-mono uppercase tracking-[0.3em] mb-1">Establish_Connection</span>
                  <span
                    class="text-sm md:text-base font-mono text-white group-hover:text-emerald-400 transition-colors tracking-tight"
                    :class="{ 'animate-pulse': isCopied }"
                  >
                    {{ isCopied ? '>> MSG: DATA_COPIED_TO_BUFFER' : email }}
                  </span>
                </div>

                <div class="text-emerald-500 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover-scale-110">
                  <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div class="mt-12 p-6 border-l-2 border-emerald-500/30 bg-white/5 backdrop-blur-sm max-w-xl md:justify-self-end w-full animate-in" style="animation-delay: 0.4s">
          <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-[0.3em]">// System Status</h4>
          <ul class="space-y-6">
            <li v-for="stat in systemStats" :key="stat.label" class="flex flex-col gap-2">
              <div class="flex justify-between items-end font-mono">
                <div class="flex flex-col">
                  <span class="text-gray-400 text-[10px] uppercase tracking-tighter"><span class="text-emerald-500">>></span> {{ stat.label }}</span>
                  <span v-if="stat.subText" class="text-[9px] text-gray-600 mt-0.5 italic">{{ stat.subText }}</span>
                </div>
                <span :class="stat.textColor" class="text-[10px] font-bold">{{ stat.display }}</span>
              </div>
              <div class="flex gap-1">
                <div v-for="n in 10" :key="n"
                     class="h-1.5 w-full transition-all duration-700"
                     :class="[
                      n <= stat.value ? stat.color : 'bg-white/5',
                      stat.label === 'ACL_REHAB' && n <= stat.value ? 'animate-pulse' : ''
                     ]">
                </div>
              </div>
            </li>
          </ul>
          <div class="mt-8 pt-4 border-t border-white/5">
            <div class="flex items-center gap-3">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p class="font-mono text-[9px] text-gray-600 tracking-tighter uppercase italic">
                {{ kernelLog }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <h2 class="text-emerald-500 font-mono tracking-[0.3em] mb-8 uppercase text-sm animate-in" style="animation-delay: 0.5s">// Equipment & Arsenal</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in backdrop-blur-sm" style="animation-delay: 0.6s">
      
      <div class="md:col-span-2 group relative bg-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all">
        <div class="absolute top-0 right-0 p-4 mr-4 opacity-10 text-6xl font-black text-white italic">TECH</div>
        <h3 class="text-2xl font-bold text-white mb-6">Development Stack</h3>
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in skills" :key="skill"
                class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm rounded-lg hover:bg-emerald-500 hover:text-black transition-all">
            {{ skill }}
          </span>
        </div>
      </div>

      <div class="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-all">
        <h3 class="text-xl font-bold text-white mb-4">Studio Gear</h3>
        <ul class="text-gray-400 font-mono text-xs space-y-3 leading-relaxed">
          <li class="hover:text-emerald-400 transition-colors">> FL Studio</li>
          <li class="hover:text-emerald-400 transition-colors">> Fender Stratocaster</li>
          <li class="hover:text-emerald-400 transition-colors">> Fender Classic</li>
          <li class="hover:text-emerald-400 transition-colors">> DCE-S-NT Electro-Acoustic</li>
          <li class="hover:text-emerald-400 transition-colors">> Yamaha PSRE373</li>
          <li class="hover:text-emerald-400 transition-colors">> Audio-Technica AT2020</li>
          <li class="hover:text-emerald-400 transition-colors">> Focusrite Scarlett Solo</li>
        </ul>
      </div>

      <div class="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-all">
        <h3 class="text-xl font-bold text-white mb-4">Physical World</h3>
        <ul class="text-gray-400 font-mono text-sm space-y-2">
          <li>> Basketball (SM/PF)</li>
          <li>> Canvas Painting</li>
          <li>> Digital Art</li>
          <li>> Singer-Songwriter</li>
        </ul>
      </div>

      <div class="md:col-span-2 group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-all flex flex-col justify-center">
        <h3 class="text-xl font-bold text-white mb-2">Hardware Lab</h3>
        <p class="text-gray-400 text-sm mb-4 italic leading-relaxed">Custom IoT Nodes, ESP32, Sensors, and Embedded Systems.</p>
        <p class="text-emerald-500 text-sm font-bold tracking-tight px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md w-fit">
          Upcoming: Personal IoT Hub (Personal Project)
        </p>
      </div>
    </div>

    <section class="mt-20 p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl border-dashed animate-in backdrop-blur-sm" style="animation-delay: 0.7s">
      <h3 class="text-white font-bold mb-6 flex items-center gap-2">
        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
        Sonic Influence
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div v-for="artist in artists" :key="artist"
             class="text-gray-500 font-mono text-xs uppercase tracking-tighter hover:text-emerald-400 transition-colors cursor-crosshair">
          // {{ artist }}
        </div>
      </div>
    </section>
  </div>
</template>