<template>
    <section class="border-bottom-1">
        <p
            style="font-family: 'montserrat-light'"
            class="text-header-desc text-center mt-custom-tengah"
        >
            Mendukung penuh Framework Laravel
        </p>
        <div class="container">
            <header class="row mt-custom">
                <section class="col-md-6 col-sm-12 pt-4">
                    <p
                        style="font-size: 1.9rem; line-height: 3rem; font-family: 'montserrat-light'; color: #5b5b5b; "
                    >
                        Tak perlu menggunakan dedicated server ataupun VPS yang
                        mahal. Layanan PHP hosting murah kami mendukung penuh
                        framework favorite anda
                    </p>
                    <section style="font-size: 1rem !important;">
                        <section class="row bungkus-fitur-header">
                            <div class="col-1">
                                <i class="ri-check-fill bunder-check"></i>
                            </div>
                            <div class="col-11 pl-0">
                                <p class="text-fitur-header">
                                    Install Laravel
                                    <b style="font-weight: bold; color: #000"
                                        >1 klik</b
                                    >
                                    dengan softaculous Installer.
                                </p>
                            </div>
                        </section>
                        <section class="row bungkus-fitur-header">
                            <div class="col-1">
                                <i class="ri-check-fill bunder-check"></i>
                            </div>
                            <div class="col-11 pl-0">
                                <p class="text-fitur-header">
                                    Mendukung extensi PHP
                                    <b style="font-weight: bold; color: #000"
                                        >MYCrypt, phar, mbstring, json</b
                                    >
                                    dan
                                    <b style="font-weight: bold; color: #000"
                                        >fileinfo</b
                                    >
                                </p>
                            </div>
                        </section>
                        <section class="row bungkus-fitur-header">
                            <div class="col-1">
                                <i class="ri-check-fill bunder-check"></i>
                            </div>
                            <div class="col-11 pl-0">
                                <p class="text-fitur-header">
                                    Tersedia
                                    <b style="font-weight: bold; color: #000"
                                        >Composer</b
                                    >
                                    dan
                                    <b style="font-weight: bold; color: #000"
                                        >SSH</b
                                    >
                                    untuk menginstal packages pilihan anda
                                </p>
                            </div>
                        </section>
                        <p
                            style="margin-top: 1.5em; font-size: 1.3rem; color: #5b5b5b;"
                        >
                            Nb. Composer dan SSH hanya tersedia pada paket
                            Personal dan Bisnis
                        </p>
                        <Button
                            classNameBtn="btn-standard"
                            idBack="bg-biru"
                            text="Pilih Sekarang"
                        />
                    </section>
                </section>
                <section class="col-md-6 col-sm-12" id="img-laravel">
                    <img src="assets/svg/laravel-banner.svg" />
                </section>
            </header>
        </div>
    </section>
</template>

<script>
import Button from "./Button.vue";
export default {
    name: "FiturLaravel",
    components: {
        Button
    }
};
</script>
