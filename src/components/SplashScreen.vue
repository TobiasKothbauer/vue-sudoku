<script setup lang="ts">
 import {useUserStore} from "@/store/useUserStore.js";
 import {useGameStore} from "@/store/useGameStore.js";

 const user = useUserStore();
 const game = useGameStore();
</script>

<template>
  <h1>welcome {{user.name}}</h1>
  <h2>Difficulty: {{game.difficulty}}</h2>
  <button @click="game.setDifficulty(1)">Easy</button>
  <button @click="game.setDifficulty(2)">Hard</button>
  <router-link to="Play">Play</router-link>
</template>