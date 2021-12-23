<template>
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
    >
        {{ textMenu }}
    </span>
</template>

<script>
export default {
    props: {
        textMenu: String,
    },
};
</script>
