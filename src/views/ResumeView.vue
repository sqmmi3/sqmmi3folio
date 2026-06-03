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
      <header class="border-b-2 border-black pb-4 mb-4">
        <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-2">Samip Shrestha</h1>
        <h2 class="text-xl font-medium text-gray-600 mb-2">Freelance Creative Technologist & Full-Stack Architect</h2>

        <div class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 font-mono">
          <span>📍 Antwerp / Leuven / Ostend / Brussels, BE</span>
          <span>📞 +32 489 00 75 70</span>
          <span>✉️ samip.shrestha@sqmmi3.dev</span>
          <span>🏢 BE 1035.139.260</span>
          <a href="https://sqmmi3.dev" class="hover:underline text-black font-semibold">🔗 sqmmi3.dev</a>
        </div>
      </header>

      <!-- EXECUTIVE SUMMARY -->
      <section class="mb-4">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-2 pb-1">Executive Summary</h3>
        <p class="text-sm leading-relaxed text-gray-800">
          Full-Stack Java Developer specializing in secure, enterprise-grade applications. Proven expertise in building robust backends with Java (21+), Spring Boot, and Hibernate/JPA, seamlessly integrated with high-performance Angular and TypeScript frontends. Operating as a B2B IT consultant, I focus on delivering scalable, compliant systems with a strong emphasis on data integrity, REST API development, and CI/CD/Docker automation within Agile environments.
        </p>
      </section>

      <!-- PROFESSIONAL EXPERIENCE -->
      <section class="mb-4">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-2 pb-1">Professional Experience</h3>

        <div class="mb-4">
          <div class="flex justify-between items-baseline mb-1">
            <h4 class="font-bold text-sm text-black">Founder & Technical Architect | SQMMI3 STUDIOS</h4>
            <span class="text-xs font-mono text-gray-500">2026 – Present</span>
          </div>
          <ul class="list-disc list-inside text-sm leading-relaxed text-gray-800 space-y-1">
            <li>Provide B2B IT consultancy, designing and developing Full-Stack Java applications based on complex functional requirements.</li>
            <li>Build secure, performant REST/SOAP APIs using Spring Boot and Hibernate, backed by relational databases (SQL Server/PostgreSQL).</li>
            <li>Develop user-friendly, maintainable frontend platforms using ReactJS, Angular, and modern web technologies.</li>
          </ul>
        </div>

        <div class="mb-4">
          <div class="flex justify-between items-baseline mb-1">
            <h4 class="font-bold text-sm text-black">Software Engineer (Lead Developer) | Bevolve</h4>
            <span class="text-xs font-mono text-gray-500">2026 – Present</span>
          </div>
          <ul class="list-disc list-inside text-sm leading-relaxed text-gray-800 space-y-1">
            <li>Developed dynamic frontend interfaces and embedded IoT system, utilizing reactive programming principles to handle real-time MQTT telemetry data.</li>
            <li>Built an offline-first frontend architecture with complex session persistence and secure UI-level SSO (Okta) integration.</li>
            <li>Integrated secure, event-driven telemetry systems and REST APIs in a containerized Agile environment.</li>
            <li>Engineered and assembled a costum PCB for rebost hardware integration</li>
            <li>Developed dynamic versioning to orchestrate seamless Over-The-Air (OTA) firmware deployments</li>
          </ul>
        </div>
      </section>

      <!-- TECHNICAL ARSENAL -->
       <section class="mb-4">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-2 pb-1">Technical Arsenal</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 text-sm leading-relaxed text-gray-800 print:break-inside-avoid">
          <div>
            <p><strong class="text-black">Backend & Data:</strong> Java (21+), Spring Boot, Spring MVC, Hibernate / JPA, REST / SOAP APIs, Maven, Python Django</p>
            <p><strong class="text-black">Frontend:</strong> Angular, ReactJS, TypeScript, HTML5, CSS/SASS, JavaScript, Flutter, VueJS</p>
          </div>
          <div>
            <p><strong class="text-black">Databases:</strong> Microsoft SQL Server, PostgreSQL, MongoDB, Relational Data Modeling</p>
            <p><strong class="text-black">DevOps & Methodology:</strong> Docker, Kubernetes, CI/CD pipelines, GCP, Agile/Scrum</p>
          </div>
        </div>
      </section>

      <!-- EDUCATION & PERSONAL -->
      <div class="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 mb-4 print:break-inside-avoid print:break-before-page print:pt-[15mm]">
        <!-- EDUCATION -->
        <section>
          <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-2 pb-1">Education</h3>

          <div class="mb-4">
            <div class="flex justify-between items-baseline mb-1">
              <h4 class="font-bold text-sm text-black">BSc Computer Science</h4>
              <span class="text-xs font-mono text-gray-500">2023 – 2026</span>
            </div>
            <p class="text-sm text-gray-800 leading-relaxed">UCLL • <em>Digital Experience, Software Engineering/Architecture, UX/UI Engineering</em></p>
          </div>
        </section>

        <!-- PERSONAL & LANGUAGES -->
        <section>
          <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-2 pb-1">Personal & Languages</h3>

          <div class="mb-4">
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
      <section class="mb-4">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-2 pb-1">Key Engineering Projects</h3>

        <div class="space-y-4">
          <div>
            <div>
              <h4 class="font-bold text-sm text-black">MOBY <span class="font-normal text-gray-500">| Flutter, C++, MQTT, Node-RED, Linux, Angular, PlatformIO, Firebase, OAuth, Okta, HTML5, Linker</span></h4>
              <span class="text-xs font-mono text-gray-500">Apr 2025 – Jun 2025</span>
            </div>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Architected a fault-tolerant, cross-platform IoT controller in Flutter. Implemented real-time bidirectional MQTT hardware telemetry, enterprise SSO (Okta/Firebase), and a local session-persistence layer for seamless crash recovery in industrial environments. Engineered and assembled a custom PCB for robust hardware integration. Additionally, developed a proprietary versioning engine to orchestrate seamless Over-The-Air (OTA) firmware deployments</p>
          </div>

          <div>
            <div>
              <h4 class="font-bold text-sm text-black">JUK3D Distributed System (IoT Music Box) <span class="font-normal text-gray-500">| Java, Spring Boot, Python, TypeScript, React Native, WebSockets</span></h4>
              <span class="text-xs font-mono text-gray-500">Apr 2025 – Jun 2025</span>
            </div>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Architected a full-stack IoT hardware-software ecosystem. Built a robust Spring Boot backend communicating in real-time with physical hardware (Raspberry Pi/ESP32) via WebSockets and Python scripts, controlled via a cross-platform mobile interface.</p>
          </div>

          <div>
            <div>
              <h4 class="font-bold text-sm text-black">GlacKIT Flow Engine (Microservices) <span class="font-normal text-gray-500">| Vue.js, Java, Spring Boot, TypeScript, Microservices, MongoDB</span></h4>
              <span class="text-xs font-mono text-gray-500">Aug 2025 – Jan 2026</span>
            </div>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Architected a scalable, dynamic flow engine for complex B2B workflow management. Designed modular information flows and backend integrations to allow external platforms to upload, characteristize, and process dynamic datasets efficiently.</p>
          </div>

          <div>
            <div>
              <h4 class="font-bold text-sm text-black">ResQFood Mobile App <span class="font-normal text-gray-500">| Java, Spring Boot, Hibernate, JPA, SQL (psql), REST, Flutter</span></h4>
              <span class="text-xs font-mono text-gray-500">Aug 2025 – Jan 2026</span>
            </div>
            <p class="text-sm text-gray-800 leading-relaxed mt-1">Developed a robust Spring Boot backend for a high-traffic mobile application. Implemented complex SQL data models using persistence frameworks (Hibernate/JPA) to manage inventory lifecycles, integrating cloud notifications (Firebase) and secure user authentication protocols.</p>
          </div>
        </div>
      </section>

      <!-- ADDITIONAL INFORMATION-->
      <section class="mb-4">
        <h3 class="text-base font-bold uppercase tracking-wider text-black border-b border-gray-300 mb-2 pb-1">Additional Information</h3>
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 print:break-inside-avoid">
            <p class="text-sm text-gray-800 leading-relaxed mt-1"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sqmmi3">LinkedIn - SQMMI3</a></p>
            <p class="text-sm text-gray-800 leading-relaxed mt-1"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/sqmmi3-studios">LinkedIn - SQMMI3 STUDIOS</a></p>
            <p class="text-sm text-gray-800 leading-relaxed mt-1"><strong>GitHub:</strong> <a href="https://github.com/sqmmi3">Github - SQMMI3</a></p>
            <p class="text-sm text-gray-800 leading-relaxed mt-1"><strong>Portfolio:</strong> <a href="https://sqmmi3.dev">SQMMI3 // Creative Polymath</a></p>
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
