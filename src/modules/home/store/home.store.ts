import { defineStore } from "pinia";
import { ref } from "vue";
import type { Book } from "../interfaces/book.interface";

export const useHomeStore = defineStore("home_store", () => {
  const carouselBooks = ref<Book[]>([
    {
      book_title: "book 1",
      book_description: "This book is so great, You have to read it too.",
      book_cover_url: "https://placehold.co/1600x2560/orange/white",
    },
    {
      book_title: "book 2",
      book_description: "This book is so great, You have to read it too.",
      book_cover_url: "https://placehold.co/1600x2560/7c86ff/black",
    },
    {
      book_title: "book 3",
      book_description: "This book is so great, You have to read it too.",
      book_cover_url: "https://placehold.co/1600x2560/00d3f2/black",
    },
  ]);

  return {
    // state
    carouselBooks,

    // getters
    // actions
  };
});
