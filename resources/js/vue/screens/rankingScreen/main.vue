<template>
    <div class="relative">
        <display-text text="BitRanking!" type="main" />
        <div class="flex">
            <display-text text="Who is the best?" type="secondary" />
            <display-text text="🤔Hmm..." type="secondary" />
        </div>
    </div>
</template>

<script>
import displayText from "./components/displayText.vue";
export default {
    components: {
        displayText,
    },
    data() {
        return {
            name: "KanZ",
        };
    },
};
</script>
