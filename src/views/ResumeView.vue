<script setup lang="ts">
const printResume = () => {
  globalThis.print();
};
</script>

<template>
  <div class="min-h-screen py-10 print:bg-white print:py-0 font-sans text-gray-900 selection:bg-black selection:text-white">
    <!-- MAIN WRAPPER: Hidden on print -->
    <div class="max-w-[210mm] mx-auto mb-6 flex justify-end print:hidden px-4 sm:px-0">
    <button
      @click="printResume"
      class="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors shadow-md flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd" />
      </svg>
      Save as PDF
    </button>
    </div>

    <!-- The A4 Paper Container -->
    <div class="bg-white mx-auto w-full max-w-[210mm] min-h-[297mm] shadow-2xl print:shadow-none p-8 sm:p-[15mm] print:p-[15mm]">

      <!-- HEADER -->
      <header class="border-b-2 border-black pb-4 mb-8">
        <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-2">Samip Shrestha</h1>
        <h2 class="text-xl font-medium text-gray-600 mb-4">Freelance Creative Technologist & Full-Stack Architect</h2>

        <div class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 font-mono">
          <span>📍 Antwerp / Leuven, BE</span>
          <span>📞 +32 489 00 75 70</span>
          <span>✉️ samip.shrestha@sqmmi3.dev</span>
          <span>🏢 BE 1035.139.260</span>
          <a href="https://sqmmi3.dev" class="hover:underline text-black font-semibold">🔗 sqmmi3.dev</a>
        </div>
      </header>

      <!-- EXECUTIVE SUMMARY -->
      <section class="mb-8">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-3 pb-1">Executive Summary</h3>
        <p class="text-sm leading-relaxed text-gray-800">
          Creative Technologist and B2B IT Consultant operating as <strong>SQMMI3 STUDIOS</strong>. Specializing in the intersection of high-performance web architecture, immersive 3D/WebGL experiences, and physical IoT system integration. Proven ability to bridge rigid backend data structures with highly interactive front-ends. Currently finalizing a BSc in Computer Science with intent to pursue a Master's in Electronics-ICT Engineering Technology.
        </p>
      </section>

      <!-- PROFESSIONAL EXPERIENCE -->
      <section class="mb-8">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-3 pb-1">Professional Experience</h3>

        <div class="mb-4">
          <div class="flex justify-between items-baseline mb-1">
            <h4 class="font-bold text-sm text-black">Founder & Technical Architect | SQMMI3 STUDIOS</h4>
            <span class="text-xs font-mono text-gray-500">2026 – Present</span>
          </div>
          <ul class="list-disc list-inside text-sm leading-relaxed text-gray-800 space-y-1">
            <li>Provide B2B IT consultancy, custom software architecture, and full-stack development for digital agencies.</li>
            <li>Specialize in high-performance frontend architecture, 3D/WebGL design, and hardware/IoT integrations.</li>
          </ul>
        </div>

        <div class="mb-4">
          <div class="flex justify-between items-baseline mb-1">
            <h4 class="font-bold text-sm text-black">Customer Operations & Team Support | Colruyt Group</h4>
            <span class="text-xs font-mono text-gray-500">2022 – 2025</span>
          </div>
          <ul class="list-disc list-inside text-sm leading-relaxed text-gray-800 space-y-1">
            <li>Developed rapid decision-making and leadership skills by coordinating operations in a high-volume environment.</li>
            <li>Maintained rigorous standards of client communication, conflict resolution, and efficiency during peak hours.</li>
          </ul>
        </div>

        <div class="mb-4">
          <div class="flex justify-between items-baseline mb-1">
            <h4 class="font-bold text-sm text-black">Hardware Sales Consultant | ALTERNATE</h4>
            <span class="text-xs font-mono text-gray-500">2020</span>
          </div>
          <ul class="list-disc list-inside text-sm leading-relaxed text-gray-800 space-y-1">
            <li>Advised B2B/B2C customers on complex computer hardware architecture and IT network security upgrades.</li>
          </ul>
        </div>
      </section>

      <!-- TECHNICAL ARSENAL -->
      <section class="mb-8">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-3 pb-1">Technical Arsenal</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 text-sm leading-relaxed text-gray-800 print:break-inside-avoid">
          <div>
            <p><strong class="text-black">Core Languages:</strong> TypeScript, JavaScript, Python, Java, C#, C++, SQL</p>
            <p><strong class="text-black">Web & App:</strong> React (Native), Vue.js, Node.js, Next.js, NestJS, Springboot</p>
          </div>
          <div>
            <p><strong class="text-black">3D & Game Dev:</strong> Three.js, TresJS, Unity, Godot, WebGL, Custom Shaders</p>
            <p><strong class="text-black">Systems & IoT:</strong> Raspberry Pi, ESP32, WebSockets, Docker, Linux</p>
          </div>
        </div>
      </section>

      <!-- EDUCATION & PERSONAL -->
      <div class="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 mb-8 print:break-inside-avoid print:break-before-page print:pt-[15mm]">
        <!-- EDUCATION -->
        <section>
          <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-3 pb-1">Education</h3>

          <div class="mb-3">
            <div class="flex justify-between items-baseline mb-1">
              <h4 class="font-bold text-sm text-black">BSc Computer Science</h4>
              <span class="text-xs font-mono text-gray-500">Exp. 2026</span>
            </div>
            <p class="text-sm text-gray-800 leading-relaxed">UCLL • <em>Digital Experience, 3D Rendering, IoT</em></p>
          </div>

          <div>
            <div class="flex justify-between items-baseline mb-1">
              <h4 class="font-bold text-sm text-black">BSc Civil Engineering (1st Yr)</h4>
              <span class="text-xs font-mono text-gray-500">2021 – 2023</span>
            </div>
            <p class="text-sm text-gray-800 leading-relaxed">KU Leuven • <em>Advanced Math, Physics, Logic</em></p>
          </div>
        </section>

        <!-- PERSONAL & LANGUAGES -->
        <section>
          <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-3 pb-1">Personal & Languages</h3>

          <div class="mb-3">
            <h4 class="font-bold text-sm text-black mb-1">Languages</h4>
            <p class="text-sm text-gray-800 leading-relaxed">English (Native), Dutch (Native), Nepalese (Conversational), French (Basic)</p>
          </div>

          <div>
            <h4 class="font-bold text-sm text-black mb-1">Interests & Hobbies</h4>
            <p class="text-sm text-gray-800 leading-relaxed">Basketball, Football, Singer-Songwriter, Visual Design, Electrical Engineering.</p>
          </div>
        </section>
      </div>

      <!-- KEY ENGINEERING PROJECTS -->
      <section class="mb-8">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-3 pb-1">Key Engineering Projects</h3>

        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-sm text-black">Material Studio (B2B Configurator) <span class="font-normal text-gray-500">| Three.js, TypeScript, WebGL</span></h4>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Developed a high-performance B2B product configurator featuring dynamic geometry generation, real-time lighting transitions, and a custom spec-sheet export tool.</p>
          </div>

          <div>
            <h4 class="font-bold text-sm text-black">Grid Layout Planner (Spatial Tool) <span class="font-normal text-gray-500">| Three.js, Raycasting, 3D Math</span></h4>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Built a modular spatial planner demonstrating advanced raycasting, 3D math for grid-mapping, collision detection, and continuous interactive "paintbrush" placement.</p>
          </div>

          <div>
            <h4 class="font-bold text-sm text-black">GlacKIT Flow Engine (Microservices) <span class="font-normal text-gray-500">| Vue.js, Java Springboot, Agile (Scrum Master)</span></h4>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Engineered a scalable, microservice-based web app to handle dynamic workflows. Acted as Scrum Master while managing frontend state in Vue.js and routing in MongoDB.</p>
          </div>

          <div>
            <h4 class="font-bold text-sm text-black">JUK3D Music Box (IoT & WebSockets) <span class="font-normal text-gray-500">| Java, React Native, Raspberry Pi</span></h4>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Architected a full-stack IoT music ecosystem. Built a Java/Springboot backend communicating in real-time with physical hardware via WebSockets, controlled via mobile UI.</p>
          </div>

          <div>
            <h4 class="font-bold text-sm text-black">Procedural 3D Terrain Engine <span class="font-normal text-gray-500">| Unity, C#, Perlin Noise</span></h4>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Engineered an optimized, chunk-based 3D terrain system featuring advanced graphics pipelines, custom vertex displacements, and mesh optimization for high-framerate rendering.</p>
          </div>
        </div>
      </section>

      <!-- ADDITIONAL INFORMATION-->
      <section>
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-3 pb-1">Additional Information</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-sm text-black">Links</h4>
            <p class="text-sm text-gray-800 leading-relaxed mt-1"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sqmmi3">www.linkedin.com/in/sqmmi3</a></p>
            <p class="text-sm text-gray-800 leading-relaxed mt-1"><strong>GitHub:</strong> <a href="https://github.com/sqmmi3">https://github.com/sqmmi3</a></p>
          </div>

          <div>
            <h4 class="font-bold text-sm text-black">Licenses</h4>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Driving B, AM</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@media print {
  @page {
    margin: 0;
    size: A4 portrait;
  }
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  section {
    break-inside: avoid;
  }
}
</style>
