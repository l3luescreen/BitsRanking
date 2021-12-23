<template>
    <div class="flex min-h-screen relative">
        <sidebarNav/>
        <div class="m-auto">
            <Main />
        </div>
    </div>
</template>

<script>

import Main from './screens/rankingScreen/main'
import sidebarNav from './screens/sidebarNav/sidebarNav'
export default {
    components: {
        Main,
        sidebarNav
    }
}
</script>
