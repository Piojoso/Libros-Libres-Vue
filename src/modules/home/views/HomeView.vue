<template>
  <CustomHeader />

  <div class="text-2xl font-bold">
    Hola Mundo
  </div>

  <Button @click="console.log('Hola Mundo')">
    Hola Mundo
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import CustomHeader from '@/modules/common/components/CustomHeader.vue';

</script>