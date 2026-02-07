<script setup>
</script>

<template>
  <div>
    <div class="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">

      <h1 class="animate-reveal hover-glitch text-6xl md:text-8xl font-black text-white tracking-tighter mb-4" data-text="I AM SQMMI3">
        I AM <span class="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.7)]">SQMMI3</span>
      </h1>

      <p class="animate-reveal-delay text-lg md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
        Architecting
        <span class="text-emerald-400 font-mono">full-stack systems</span>,
        <span class="text-emerald-400 font-mono">IoT hardware</span>,
        and <span class="text-emerald-400 font-mono">indie-pop frequencies</span>.
        Building at the intersection of logic and <span class="permanent-glitch text-emerald-400 font-mono tracking-widest" data-text="glitch">glitch</span>.
      </p>

      <RouterLink
        to="/projects"
        class="animate-reveal-delay-long mt-15 px-8 py-4 bg-emerald-600 text-black rounded-full font-bold
              hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16, 185,129,0.6)]
              transition-all duration-500 transform hover:scale-105"
      >
        Initialise Viewport
      </RouterLink>
    </div>

    <section class="max-w-6xl mx-auto py-20 px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500">
          <div class="text-emerald-500 mb-4 text-3xl font-mono">01</div>
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:permanent-glitch" data-text="ARCHITECT">ARCHITECT</h3>
          <p class="text-gray-400 leading-relaxed">
            Building robust full-stack applications and mobile experiences with 
            <span class="text-emerald-400">Vue, Flutter, and TypeScript</span>.
          </p>
        </div>

        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500">
          <div class="text-emerald-500 mb-4 text-3xl font-mono">02</div>
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:permanent-glitch" data-text="CIRCUIT">CIRCUIT</h3>
          <p class="text-gray-400 leading-relaxed">
            Connecting the physical and digital worlds through 
            <span class="text-emerald-400">IoT, Embedded C++, and ESP32</span> systems.
          </p>
        </div>

        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500">
          <div class="text-emerald-500 mb-4 text-3xl font-mono">03</div>
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:permanent-glitch" data-text="STUDIO">STUDIO</h3>
          <p class="text-gray-400 leading-relaxed">
            Composing indie-pop and glitchcore frequencies using 
            <span class="text-emerald-400">FL Studio, Guitar, and Piano</span>.
          </p>
        </div>

        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500">
          <div class="text-emerald-500 mb-4 text-3xl font-mono">04</div>
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:permanent-glitch" data-text="CREATOR">CREATOR</h3>
          <p class="text-gray-400 leading-relaxed">
            Exploring visual storytelling through 
            <span class="text-emerald-400">Painting, Shaders, and Game Design</span>.
          </p>
        </div>

      </div>
    </section>

    <section class="max-w-4xl mx-auto py-32 px-6">
      <div class="bg-white/5 border border-emerald-500/20 rounded-lg p-6 backdrop-blur-xl relative overflow-hidden">
        <div class="flex gap-2 mb-4 border-b border-white/10 pb-2">
          <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div class="w-3 h-3 rounded-full bg-emerald-500/50"></div>
        </div>
        <div class="font-mono text-sm space-y-2">
          <p class="text-emerald-400">><span class="text-white"> CURRENT_LOCATION:</span> Emerald_Galaxy_v4.0</p>
          <p class="text-emerald-400">><span class="text-white"> RECENT_BEAT:</span> hyperpop_draft_09.wav</p>
          <p class="text-emerald-400">><span class="text-white"> HARDWARE_STATUS:</span> ESP32_Online</p>
          <p class="text-emerald-400 animate-pulse">> <span class="permanent-glitch"> SYSTEM_ACTIVE...</span></p>
        </div>
      </div>
    </section>

    <!-- <section class="max-w-4xl mx-auto py-20 px-6">
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl group hover:border-emerald-500/30 transition-all">
        <div class="flex items-center gap-6">
          <button class="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <svg class="w-8 h-8 text-black fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          
          <div class="flex-1">
            <h4 class="text-white font-bold text-lg mb-1 group-hover:permanent-glitch" data-text="LATEST_COMPOSITION.MP3">LATEST_COMPOSITION.MP3</h4>
            <p class="text-emerald-400/70 text-xs font-mono tracking-widest uppercase">Style: Glitchpop / Hyperpop</p>
            
            <div class="flex items-end gap-1 h-8 mt-4">
              <div v-for="n in 30" :key="n" 
                  class="w-1 bg-emerald-500/30 rounded-full animate-pulse"
                  :style="{ height: Math.random() * 100 + '%', animationDelay: n * 0.1 + 's' }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <div class="w-full bg-emerald-500/5 border-y border-emerald-500/10 py-4 overflow-hidden whitespace-nowrap">
      <div class="flex animate-marquee gap-10 text-emerald-400/50 font-black uppercase tracking-widest text-xl">
        <span>Brakence</span> <span>React</span> <span>IoT</span> <span>Jeremy Zucker</span> <span>C++</span> 
        <span>EDEN</span> <span>Flutter</span> <span>React Native</span> <span>Chelsea Cutler</span> <span>C#</span>
        <span>Keshi</span> <span>Full-Stack</span> <span>Java</span> <span>Guitar</span> <span>Ruel</span>
        <span>Figma</span> <span>VR/AR</span> <span>Indie/Alternative</span> <span>bixby</span> <span>Godot</span>
        <span>Singing</span> <span>Shaders</span> <span>Python</span> <span>JS/TS</span> <span>starfall</span>
        <span>VueJS</span> <span>HTML/CSS</span> <span>Arctic Monkeys</span> <span>(No)SQL</span> <span>Godot</span>
        <span>Unity</span> <span>50landing</span> <span>DJO</span> <span>Joji</span> <span>Cigarettes After Sex</span>
        <span>Brakence</span> <span>React</span> <span>IoT</span> <span>Jeremy Zucker</span> <span>C++</span> 
        <span>EDEN</span> <span>Flutter</span> <span>React Native</span> <span>Chelsea Cutler</span> <span>C#</span>
        <span>Keshi</span> <span>Full-Stack</span> <span>Java</span> <span>Guitar</span> <span>Ruel</span>
        <span>Figma</span> <span>VR/AR</span> <span>Indie/Alternative</span> <span>bixby</span> <span>Godot</span>
        <span>Singing</span> <span>Shaders</span> <span>Python</span> <span>JS/TS</span> <span>starfall</span>
        <span>VueJS</span> <span>HTML/CSS</span> <span>Arctic Monkeys</span> <span>(No)SQL</span> <span>Godot</span>
        <span>Unity</span> <span>50landing</span> <span>DJO</span> <span>Joji</span> <span>Cigarettes After Sex</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @keyframes reveal {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.9);
      filter: blur(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50.2%); }
  }

  .animate-reveal {
    animation: reveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  .animate-reveal-delay {
    opacity: 0;
    animation: reveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 0.5s;
  }

  .animate-reveal-delay-long {
    opacity: 0;
    animation: reveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 1s;
  }

  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
  }

  section {
    view-timeline-name: --section;
    view-timeline-axis: block;
    animation-timeline: --section;
    animation-name: show-section;
    animation-range: entry 10% cover 30%;
    animation-fill-mode: both;
  }

  @keyframes show-section {
    from { opacity: 0; transform: translateY(50px); filter: blur(10px); }
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
</style>