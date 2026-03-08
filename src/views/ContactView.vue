<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const formData = ref({
  name: '',
  email: '',
  company: '',
  message: '',
})

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'a4326a20-1c3a-4b41-8859-62b57a1c5077',
        subject: `New B2B Inquiry from ${formData.value.name}`,
        ...formData.value,
      }),
    })

    const result = await response.json()
    if (result.success) {
      submitStatus.value = 'success'
      formData.value = { name: '', email: '', company: '', message: '' }
    } else {
      submitStatus.value = 'error'
    }
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    if (submitStatus.value === 'success') {
      setTimeout(() => {
        submitStatus.value = 'idle'
      }, 5000)
    }
  }
}
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
    <section class="mb-12 animate-in" style="animation-delay: 0.1s">
      <h2 class="text-emerald-500 font-mono tracking-[0.3em] mb-4 uppercase text-sm">
        // Establish Connection
      </h2>
      <h1
        class="text-5xl md:text-7xl font-black text-white mb-6 hover-glitch"
        data-text="INITIATE PING"
      >
        INITIATE PING
      </h1>
      <p class="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
        Looking to clear a backlog, architect a new system, or discuss a freelance retainer? Open a
        secure channel below or ping me directly at
        <a
          href="mailto:samip.shrestha@sqmmi3.dev"
          class="text-emerald-400 hover:text-white transition-colors"
        >
          samip.shrestha@sqmmi3.dev
        </a>
      </p>
    </section>

    <section class="animate-in backdrop-blur-sm" style="animation-delay: 0.3s">
      <form
        @submit.prevent="submitForm"
        class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="flex flex-col gap-2">
            <label
              for="name"
              class="font-mono text-[10px] text-emerald-500 uppercase tracking-widest"
              >> Name_</label
            >
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label
              for="email"
              class="font-mono text-[10px] text-emerald-500 uppercase tracking-widest"
              >> Return_Address_</label
            >
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2 mb-6">
          <label
            for="company"
            class="font-mono text-[10px] text-emerald-500 uppercase tracking-widest"
            >> Agency / Entity_</label
          >
          <input
            id="company"
            v-model="formData.company"
            type="text"
            class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="Company (Optional)"
          />
        </div>

        <div class="flex flex-col gap-2 mb-8">
          <label
            for="message"
            class="font-mono text-[10px] text-emerald-500 uppercase tracking-widest"
            >> Payload_</label
          >
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="5"
            class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            placeholder="We need a freelance React dev for 20 hours a week..."
          ></textarea>
        </div>

        <div class="flex items-center justify-between border-t border-white/5 pt-8">
          <div class="font-mono text-[10px] md:text-xs tracking-widest w-1/2">
            <span v-if="submitStatus === 'idle'" class="text-gray-600">STATUS: AWAITING_INPUT</span>
            <span v-else-if="submitStatus === 'success'" class="text-emerald-400 animate-pulse"
              >STATUS: PACKET_DELIVERED</span
            >
            <span v-else-if="submitStatus === 'error'" class="text-red-500 animate-pulse"
              >STATUS: TRANSMISSION_FAILED</span
            >
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="group relative px-6 md:px-8 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg overflow-hidden transition-all hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div
              class="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
            ></div>
            <span
              class="relative font-mono text-emerald-400 group-hover:text-black font-bold uppercase tracking-widest transition-colors z-10 flex items-center gap-2"
            >
              <span
                v-if="isSubmitting"
                class="w-4 h-4 border-2 border-emerald-500 border-t-transparent group-hover:border-black group-hover:border-t-transparent rounded-full animate-spin"
              ></span>
              {{ isSubmitting ? 'Transmitting...' : 'Execute Ping' }}
            </span>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>
