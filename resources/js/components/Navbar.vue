<template>
    <section>
        <div class="border-bottom-1">
            <div class="container">
                <nav class="nav__top">
                    <section class="nav__top--kiri">
                        <img src="assets/svg/dics-logo.svg" class="disc-logo" />
                        <i class="ri-price-tag-3-fill icon-disc"></i>
                        <p>Gratis Ebook 9 Cara Cerdas Menggunakan Domain [x]</p>
                    </section>
                    <section class="nav__top--kanan justify-content-end">
                        <i class="ri-phone-fill"></i>
                        <p>0274-5305505</p>
                        <i class="ri-question-answer-fill"></i>
                        <p>Live Chat</p>
                        <i class="ri-account-circle-fill"></i>
                        <p>Member Area</p>
                    </section>
                </nav>
            </div>
        </div>
        <div class="border-bottom-1">
            <nav class="navbar navbar-expand-lg navbar-menu">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img
                            src="assets/images/niagahoster-logo.png"
                            alt="Logo Niagahoster"
                            class="img-responsive navbar-brand logo-niaga"
                        />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon">
                            <i class="ri-menu-line"></i>
                        </span>
                    </button>
                    <div
                        class="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <ul class="nav navbar-nav">
                            <LinkMenu menu="Hosting" />
                            <LinkMenu menu="Domain" />
                            <LinkMenu menu="Server" />
                            <LinkMenu menu="Website" />
                            <LinkMenu menu="Afiliasi" />
                            <LinkMenu menu="Promo" />
                            <LinkMenu menu="Pembayaran" />
                            <LinkMenu menu="Review" />
                            <LinkMenu menu="Kontak" />
                            <LinkMenu menu="Blog" />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
import LinkMenu from "./LinkMenu.vue";

export default {
    name: "Navbar",
    components: {
        LinkMenu
    }
};
</script>
