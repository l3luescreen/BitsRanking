<template>
    <div class="flex justify-between">
        <button
            class="text-twitch hover:text-twitch-lighter text-3xl box-content"
            @click="closeNav()"
        >
            <i class="fas fa-chevron-left m-7"/>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        method: { type: Function },
    },
    methods: {
        closeNav() {
            this.method()
        },
    },
};
</script>
