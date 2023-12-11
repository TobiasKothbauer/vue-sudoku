<script setup lang="ts">
import {useGameStore} from "@/store/useGameStore";

const props = defineProps<{
  sudokuBlockIndex: number
  numberBlockIndex: number
}>()

const game = useGameStore()
const number = game.board ? String(game.board[props.sudokuBlockIndex -1][props.numberBlockIndex -1] || '') : ''
</script>


<template>
  <div class="number-block">
    {{number}}
  </div>
</template>

<style scoped>
/** 
 * Even though styles are scoped, the class name here must be different than parent,
 * as class from parent would otherwise override styles.
 * This only goes one level from parent to child and only applies to the child's root element.
 **/
.number-block {
  border: 1px solid darkgray;
  width: 100%;
  height: 100%;
}
</style>
`
