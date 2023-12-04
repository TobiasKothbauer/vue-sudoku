import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useGameStore = defineStore('game', () => {
    const difficulty = ref(1)
    const getDifficultLabel = computed(() => {
        switch (difficulty.value) {
            case 1:
                return 'Easy'
            case 2:
            default:
                return 'Hard'
        }
    })

    function setDifficulty(value: 1|2) {
        difficulty.value = value
    }

    return { difficulty, getDifficultLabel, setDifficulty}
})