<template>
  <div class="flex flex-row py-3 px-5 gap-5">
    <h1 class="flex-1 text-2xl font-light">LibrosLibres.com</h1>

    <div class="flex-5">
      <InputGroup class="w-125 m-auto">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>

    <div class="flex-1">
      <Button :variant="'ghost'"> Iniciar Sesión </Button>

      <Button variant="ghost"> Registrarse </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "@lucide/vue";
</script>
