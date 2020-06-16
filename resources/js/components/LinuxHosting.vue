<template>
    <div class="container">
        <header class="row align-items-end">
            <section class="col-md-6 col-sm-12 pt-4">
                <p
                    style="font-family: 'montserrat-light'"
                    class="text-header-desc"
                >
                    Linux Hosting yang Stabil dengan Teknologi LVE
                </p>
                <section style="font-size: 1rem !important;">
                    <section class="row bungkus-fitur-header">
                        <div class="col-12">
                            <p class="text-fitur-header">
                                SuperMicro
                                <b style="font-weight: bold; color: #000"
                                    >Intel Xeon 24-Cores</b
                                >
                                server dengan RAM
                                <b style="font-weight: bold; color: #000"
                                    >128 GB</b
                                >
                                dan teknologi
                                <b style="font-weight: bold; color: #000"
                                    >LVE CloudLinux</b
                                >
                                untuk stabilitas server Anda. Dilengkapi dengan
                                SSD untuk kecepatan
                                <b style="font-weight: bold; color: #000"
                                    >MySQL</b
                                >
                                dan caching, Apache load balancer berbasis
                                LiteSpeed Technologies,
                                <b style="font-weight: bold; color: #000"
                                    >CageFS</b
                                >
                                security,
                                <b style="font-weight: bold; color: #000"
                                    >Raid-10</b
                                >
                                protection dan auto backup untuk keamanan
                                website PHP anda
                            </p>
                        </div>
                    </section>

                    <p
                        style="margin-top: 1.5em; font-size: 1.3rem; color: #5b5b5b;"
                    >
                        Nb. Composer dan SSH hanya tersedia pada paket Personal
                        dan Bisnis
                    </p>
                    <Button
                        classNameBtn="btn-standard"
                        idBack="bg-biru"
                        text="Pilih Hosting Anda"
                    />
                </section>
            </section>
            <section class="col-md-6 col-sm-12" id="hosting-image-hidden">
                <img src="assets/images/Image support.png" />
            </section>
        </header>
    </div>
</template>

<script>
import Button from "./Button.vue";
export default {
    name: "LinuxHosting",
    components: {
        Button
    }
};
</script>
