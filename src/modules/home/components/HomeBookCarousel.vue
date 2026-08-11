<template>
  <div class="bg-cyan-400">Book text</div>
  <CustomBookPortait :book="book" />
</template>

<script setup lang="ts">
import CustomBookPortait from "@/modules/common/components/CustomBookPortait.vue";
import type { Book } from "../interfaces/book.interface";

interface Props {
  book: Book;
}

defineProps<Props>();
</script>
