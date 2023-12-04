import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {
    const name = "Tobi"

    return { name }
})