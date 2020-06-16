<template>
    <div>
        <Navbar />
        <HeaderHome />
        <FiturBrand />
        <PaketHosting />
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HeaderHome from "./HeaderHome.vue";
import FiturBrand from "./FiturBrand.vue";
import PaketHosting from "./PaketHosting.vue";
export default {
    components: {
        Navbar,
        HeaderHome,
        FiturBrand,
        PaketHosting
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
