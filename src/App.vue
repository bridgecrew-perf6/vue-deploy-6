<template>
  <div class="my-10 px-8 md:my-28 max-w-3xl mx-auto antialiased">
    <div class="flex flex-col space-y-10">
      <h1 class="text-6xl lg:text-[5.625rem] leading-snug">Vue deploy on Netlify and Vercel.</h1>
      <p class="text-xl font-normal leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque, in possimus impedit iusto facilis quas recusandae nemo at et commodi officiis repellat quo, porro laudantium accusamus tempore corrupti voluptatem.
      </p>
    </div>
    <div class="mt-20">
      <h2 class="text-[2.5rem] lg:text-6xl leading-[1.4] md:leading-normal">All new features and updates</h2>
      <div class="mt-5 font-normal leading-normal text-lg lg:text-xl lg:mt-8 space-y-5 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam iste vel quis numquam alias magnam voluptatum non, quisquam assumenda adipisci consequuntur atque tempora commodi obcaecati fugit deserunt quibusdam id?
        </p>
        <p>
          A new authorization may become necessary in the event of replacing essential hardware components (motherboard, hard drive, graphic card, etc.) or after an OS reinstallation.
          If you run out of available authorizations, you can
          <a href="" class="text-[#0000F5]">request more unlocks</a> provided you will only have Live installed on two machines in total.
          You can find all the details about your rights as a licensed owner of Live in our End User License Agreement.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Website Title',
  meta: [
    {
      name: `description`,
      content: `Website description.`,
    },
  ],
})
</script>