<template>
  <div class="container">
    <img :src="book.book_cover_url" :alt="book.book_title" class="h-1/3" />
  </div>
</template>

<script setup lang="ts">
import type { Book } from "@/modules/home/interfaces/book.interface";

interface Props {
  book: Book;
}

defineProps<Props>();
</script>
