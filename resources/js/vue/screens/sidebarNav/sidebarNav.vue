<template>
    <div>
        <button
            class="
                absolute
                text-twitch
                hover:text-twitch-lighter
                text-3xl
                box-content
            "
            @click="toggleSidebar()"
        >
            <i class="fas fa-chevron-right m-7"></i>
        </button>
        <div
            v-bind:class="[
                { '-translate-x-full': !isShow },
                'absolute',
                'bg-stone-800',
                'inset-y-0',
                'left-0 ',
                'transform',
                'transition',
                'duration-200',
                'ease-in-out',
                'flex',
            ]"
        >
            <div class="flex flex-col w-64">
                <upperMenu :method="toggleSidebar" />
                <navMenus :method="toggleSidebar" />
                <div class="p-2.5">
                    <button
                        class="
                            self-end
                            w-full
                            rounded
                            text-twitch
                            border-2 border-twitch
                            hover:text-twitch-lighter hover:border-twitch-lighter
                            text-2xl
                            py-2.5
                            px-4
                        "
                    >
                        <span>
                            <i class="fab fa-twitch"></i>
                            Sign in
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import upperMenu from "./components/upperMenu";
import navMenus from "./components/navMenus";
export default {
    components: {
        upperMenu,
        navMenus,
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        toggleSidebar() {
            console.log(this.isShow);
            this.isShow = !this.isShow;
        },
    },
};
</script>
