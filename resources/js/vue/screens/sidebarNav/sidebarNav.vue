<template>
    <div>
        <button
            class="text-red-400 text-3xl box-content"
            @click="toggleSidebar()"
        >
            <font-awesome-icon icon="chevron-right" class="m-7" />
        </button>
        <div
            v-bind:class="[
                { '-translate-x-full': isShow },
                'absolute',
                'bg-stone-600',
                'inset-y-0',
                'left-0 ',
                'transform',
                'transition',
                'duration-200',
                'ease-in-out',
            ]"
        >
            <div class="w-64">
                <button
                    class="text-red-400 text-3xl box-content bg-stone-600"
                    @click="toggleSidebar()"
                >
                    <font-awesome-icon icon="chevron-left" class="m-7" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true,
        };
    },
    methods: {
        toggleSidebar() {
            this.isShow = !this.isShow;
        },
    },
};
</script>
