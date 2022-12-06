import { defineStore } from "pinia";
import Repository from "../services/Repository";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        loggedIn: localStorage.getItem("token") ? true : false,
        user: null,
    }),

    getters: {},

    actions: {
        async login(credentials) {
            await Repository.get("sanctum/csrf-cookie");

            const response = (await Repository.post("api/login", credentials)).data;

            if (response) {
                const token = `Bearer ${response.token}`;

                localStorage.setItem("token", token);
                Repository.defaults.headers.common["Authorization"] = token;

                await this.ftechUser();
            }
        },

        async logout() {
            const response = (await Repository.post("api/logout")).data;

            if (response) {
                localStorage.removeItem("token");

                this.$reset();
            }
        },

        async ftechUser() {
            this.user = (await Repository.get("api/me")).data;

            this.loggedIn = true;
        },
    },
});