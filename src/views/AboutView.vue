<script setup>
  const skills = ['TypeScript', 'JavaScript', 'Java', 'Python', 'C#', 'C++', 'C', 'HTML/CSS', '(No)SQL', 'VueJS', 'NestJS', 'NextJS', 'NodeJS', 'ExpressJS', 'React (Native)', 'Flutter', 'IoT', 'Full-Stack (Back-end / Front-end)', 'Godot', 'Unity', 'UX/UI', 'Figma', 'VR/AR/XR']
  const artists = ['Jeremy Zucker', 'Ruel', 'Chelsea Cutler', 'brakence', 'EDEN', 'keshi']
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
    <section class="mb-20">
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
          
          <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl font-mono text-sm">
            <p class="text-red-400 font-bold mb-1">! SYSTEM_MAINTENANCE_REQUIRED</p>
            <p class="text-gray-400 italic">"Undergoing ACL recovery. Currently prioritizing health-sync. Responses may be delayed, but the grind never stops."</p>
          </div>
        </div>

        <div class="inline-flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl backdrop-blur-sm">
          <div class="p-3 bg-emerald-500/10 rounded-lg">
             <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div>
            <p class="text-[10px] text-emerald-500/60 font-mono uppercase tracking-widest">Education Level</p>
            <p class="text-white font-bold tracking-wide leading-tight">B.Sc. Computer Science (Year 3)</p>
            <p class="text-gray-500 text-[10px] font-mono hover-glitch" data-text="@ UCLL">@ UCLL (University College Leuven Limburg)</p>
          </div>
        </div>
      </div>

      <div class="mt-12 p-6 border-l-2 border-emerald-500/30 bg-white/5 backdrop-blur-sm max-w-md">
        <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-widest">Base Specs</h4>
        <ul class="text-gray-500 font-mono text-xs space-y-3">
          <li><span class="text-emerald-500">>></span> Role: Full-Stack Polymath</li>
          <li><span class="text-emerald-500">>></span> Languages: English / Dutch / Nepali / French</li>
          <li><span class="text-emerald-500">>></span> Experience: 4 Years Building</li>
        </ul>
      </div>
    </section>

    <h2 class="text-emerald-500 font-mono tracking-[0.3em] mb-8 uppercase text-sm">// Equipment & Arsenal</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div class="md:col-span-2 group relative bg-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all">
        <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black italic">TECH</div>
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

    <section class="mt-20 p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl border-dashed">
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