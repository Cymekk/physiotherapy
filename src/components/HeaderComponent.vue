<template>
  <header class="mx-2 my-[16px]">
    <div class="text-white p-2 rounded bg-linear-to-r from-teal-900 to-teal-700">
      <h1 class="text-[24px] font-semibold my-[32px]">Zdrowie i sprawność w dobrych rękach</h1>
      <div class="">
        <p class="text-[20px]">
          Profesjonalna fizjoterapia dostosowana do Twoich potrzeb. Pomagam redukować ból, poprawiać
          mobilność i wracać do pełnej sprawności. Umów wizytę i zadbaj o swoje zdrowie już dziś!
        </p>

        <RegisterButtonComponent />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import RegisterButtonComponent from './RegisterButtonComponent.vue'
</script>

<style scoped></style>
