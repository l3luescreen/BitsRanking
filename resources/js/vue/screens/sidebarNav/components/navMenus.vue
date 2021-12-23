<template>
    <div class="h-full px-2.5 flex flex-col">
        <Menu textMenu="Home" @click="closeNav()" />
        <Menu textMenu="Stats" @click="closeNav()" />
    </div>
</template>

<script>
import Menu from "./Menu";
export default {
    components: {
        Menu,
    },
    props: {
        method: { type: Function },
    },
    methods: {
        closeNav() {
            this.method();
        },
    },
};
</script>
