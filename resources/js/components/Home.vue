<template>
    <div>
        <Navbar />
        <HeaderHome />
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HeaderHome from "./HeaderHome.vue";
export default {
    components: {
        Navbar,
        HeaderHome
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
