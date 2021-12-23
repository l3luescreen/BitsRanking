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
            <font-awesome-icon icon="chevron-right" class="m-7" />
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
            <div class="flex flex-col w-96">
                <div class="flex justify-between">
                    <button
                        class="
                            text-twitch
                            hover:text-twitch-lighter
                            text-3xl
                            box-content
                        "
                        @click="toggleSidebar()"
                    >
                        <font-awesome-icon icon="chevron-left" class="m-7" />
                    </button>
                    <!-- <button
                        class="
                            text-twitch
                            hover:text-twitch-lighter
                            bg-white
                            text-3xl
                            box-content
                        "
                    >
                        <h1 class="m-7">mode</h1>
                    </button> -->
                </div>
                <div class="h-full px-2.5 flex flex-col">
                    <span
                        class="
                            w-full
                            rounded
                            text-twitch
                            hover:text-twitch-lighter hover:bg-stone-700
                            text-2xl
                            py-2.5
                            px-4
                        "
                        @click="toggleSidebar()"
                    >
                        Home
                    </span>
                    <span
                        class="
                            w-full
                            rounded
                            text-twitch
                            hover:text-twitch-lighter hover:bg-stone-700
                            text-2xl
                            py-2.5
                            px-4
                        "
                        @click="toggleSidebar()"
                    >
                        Stats
                    </span>
                </div>
                <div class="p-2.5">
                    <button
                        class="
                            self-end
                            w-full
                            rounded
                            text-blue-900
                            border-2 border-blue-900
                            hover:text-blue-500 hover:border-blue-500
                            text-2xl
                            py-2.5
                            px-4
                        "
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
