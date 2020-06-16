<template>
    <section class="border-bottom-1">
        <div class="container">
            <header class="row mt-custom mb-custom">
                <section class="col-md-6 col-sm-12 pt-4">
                    <h1 class="text-header">PHP Hosting</h1>
                    <p class="text-header-desc">
                        Cepat, Handal, Penuh dengan modul PHP yang anda butuhkan
                    </p>
                    <section>
                        <FiturHeader
                            text="Solusi PHP untuk performa query yang lebih cepat"
                        />
                        <FiturHeader text="Konsumsi memori lebih rendah" />
                        <FiturHeader
                            text="Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 5.7"
                        />
                        <FiturHeader
                            text="Fitur enkripsi IonCube dan Zend Guard Loaders"
                        />
                    </section>
                </section>
                <section class="col-md-6 col-sm-12" id="gambar-header">
                    <img
                        src="assets/svg/illustration banner PHP hosting-01.svg"
                    />
                </section>
            </header>
        </div>
    </section>
</template>

<script>
import FiturHeader from "./FiturHeader.vue";
export default {
    name: "HeaderHome",
    components: {
        FiturHeader
    }
};
</script>
