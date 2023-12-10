<script setup lang="ts">
import SudokuBlock from './SudokuBlock.vue'
import {router} from "@/router";
import {useUserStore} from "@/store/useUserStore";

const user = useUserStore();

const submitGame = () => {
  router.push("/end");
};

</script>

<template>
  <div class="board">
    <SudokuBlock v-for="n in 9" :key="n" />
  </div>
</template>

<style scoped>
.board {
  display: grid;
  width: calc(100vmin - 4rem);
  height: calc(100vmin - 4rem);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
