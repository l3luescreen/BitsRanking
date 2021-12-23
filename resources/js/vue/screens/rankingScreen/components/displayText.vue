<template>
    <div class="m-7">
        <span
            :class="[type === 'main' ? 'text-9xl' : 'text-5xl', 'hover:text-twitch-lighter', 'hover:cursor-default', 'trasition', 'duration-200', 'ease-in-out', 'text-twitch', 'font-light', 'animate__animated', 'animate__bounce']"
            >{{ text }}</span
        >
    </div>
</template>

<script>
export default {
    props: {
        text: String,
        type: String,
    },
};
</script>
