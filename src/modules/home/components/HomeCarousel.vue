<template>
  <Carousel
    class="mx-50"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
  >
    <CarouselContent>
      <CarouselItem v-for="book in store.carouselBooks" :key="book.book_title">
        <div class="p-3">
          <Card class="py-0">
            <CardContent class="flex items-center justify-center p-6">
              <HomeBookCarousel :book="book" />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <!-- <CarouselPrevious /> -->
    <!-- <CarouselNext /> -->
  </Carousel>
</template>

<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import HomeBookCarousel from "./HomeBookCarousel.vue";
import { useHomeStore } from "../store/home.store.ts";

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

const store = useHomeStore();
</script>
