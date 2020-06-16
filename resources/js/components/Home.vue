<template>
    <div id="appp">
        <Navbar />
        <HeaderHome />
        <FiturBrand />
        <PaketHosting />
        <FiturPHP />
        <FiturDua />
        <FiturLaravel />
        <Module />
        <LinuxHosting />
        <Sosmed />
        <Bantuan />
        <Footer />
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HeaderHome from "./HeaderHome.vue";
import FiturBrand from "./FiturBrand.vue";
import PaketHosting from "./PaketHosting.vue";
import FiturPHP from "./FiturPHP.vue";
import FiturDua from "./FiturDua.vue";
import FiturLaravel from "./FiturLaravel.vue";
import Module from "./Module.vue";
import LinuxHosting from "./LinuxHosting.vue";
import Sosmed from "./Sosmed.vue";
import Bantuan from "./Bantuan.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        Navbar,
        HeaderHome,
        FiturBrand,
        PaketHosting,
        FiturPHP,
        FiturDua,
        FiturLaravel,
        Module,
        LinuxHosting,
        Sosmed,
        Bantuan,
        Footer
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
