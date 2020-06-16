<template>
    <div>
        <Navbar />
        <HeaderHome />
        <FiturBrand />
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HeaderHome from "./HeaderHome.vue";
import FiturBrand from "./FiturBrand.vue";
export default {
    components: {
        Navbar,
        HeaderHome,
        FiturBrand
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
