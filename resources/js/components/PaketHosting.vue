<template>
    <section class="mx-custom text-center warna-text-custom-paket">
        <div class="container">
            <h1 class="text-paket-hosting">
                Paket Hosting Singapura yang tepat
            </h1>
            <p class="text-paket-hosting-summary">
                Diskon 40% + Domain dan SSL Gratis Untuk Anda
            </p>
            <section v-if="harga" class="row mt-custom-paket">
                <CardPaket
                    totalPengguna="938"
                    title="Bayi"
                    v-bind:hargaNormal="harga.data.data[0].harga_normal"
                    v-bind:hargaDiskon="harga.data.data[0].harga_discount"
                    fiturPower="0.5X RESOURCE POWER"
                    fiturJumlah1="500MB"
                    fiturType1="Disk Space"
                    fiturJumlah2="Unlimited"
                    fiturType2="Bandwidth"
                    fiturJumlah3="Unlimited"
                    fiturType3="Databases"
                    fiturJumlah4="1"
                    fiturType4="Domain"
                    fiturJumlah5="Instant"
                    fiturType5="Backup"
                    fiturJumlah6="Unlimited SSL"
                    fiturType6="Gratis Selamanya"
                />
                <CardPaket
                    totalPengguna="4.186"
                    title="Pelajar"
                    v-bind:hargaNormal="harga.data.data[1].harga_normal"
                    v-bind:hargaDiskon="harga.data.data[1].harga_discount"
                    fiturPower="1X RESOURCE POWER"
                    fiturJumlah1="Unlimited"
                    fiturType1="Disk Space"
                    fiturJumlah2="Unlimited"
                    fiturType2="Bandwidth"
                    fiturJumlah3="Unlimited"
                    fiturType3="POP3 Email"
                    fiturJumlah4="Unlimited"
                    fiturType4="Databases"
                    fiturJumlah5="10"
                    fiturType5="Addon Domains"
                    fiturJumlah6="Instant"
                    fiturType6="Backup"
                    fiturJumlah7="Domain Gratis"
                    fiturType7="Selamanya"
                    fiturJumlah8="Unlimited SSL"
                    fiturType8="Gratis Selamanya"
                />
                <CardPaket
                    totalPengguna="10.017"
                    title="Personal"
                    v-bind:hargaNormal="harga.data.data[2].harga_normal"
                    v-bind:hargaDiskon="harga.data.data[2].harga_discount"
                    idName="bg-biru"
                    idName2="bg-dark"
                    images="assets/images/pita.png"
                    fiturPower="2X RESOURCE POWER"
                    fiturJumlah1="Unlimited"
                    fiturType1="Disk Space"
                    fiturJumlah2="Unlimited"
                    fiturType2="Bandwidth"
                    fiturJumlah3="Unlimited"
                    fiturType3="POP3 Email"
                    fiturJumlah4="Unlimited"
                    fiturType4="Databases"
                    fiturJumlah5="Unlimited"
                    fiturType5="Addon Domains"
                    fiturJumlah6="Instant"
                    fiturType6="Backup"
                    fiturJumlah7="Domain Gratis"
                    fiturType7="Selamanya"
                    fiturJumlah8="Unlimited SSL"
                    fiturType8="Gratis Selamanya"
                    fiturJumlah9="Private"
                    fiturType9="Name Server"
                    fiturJumlah10="Spam Assassin"
                    fiturType10="Mail Protection"
                />
                <CardPaket
                    totalPengguna="3.522"
                    title="Bisnis"
                    v-bind:hargaNormal="harga.data.data[3].harga_normal"
                    v-bind:hargaDiskon="harga.data.data[3].harga_discount"
                    fiturPower="3X RESOURCE POWER"
                    fiturJumlah1="Unlimited"
                    fiturType1="Disk Space"
                    fiturJumlah2="Unlimited"
                    fiturType2="Bandwidth"
                    fiturJumlah3="Unlimited"
                    fiturType3="POP3 Email"
                    fiturJumlah4="Unlimited"
                    fiturType4="Databases"
                    fiturJumlah5="10"
                    fiturType5="Addon Domains"
                    fiturJumlah6="Magic Auto"
                    fiturType6="Backup & Restore"
                    fiturJumlah7="Domain Gratis"
                    fiturType7="Selamanya"
                    fiturJumlah8="Unlimited SSL"
                    fiturType8="Gratis Selamanya"
                    fiturJumlah9="Private"
                    fiturType9="Name Server"
                    fiturJumlah10="Prioritas"
                    fiturType10="Layanan Support"
                    imageStars="bintang"
                    fiturJumlah11="SpamExpert"
                    fiturType11="Pro Mail Protection"
                />
            </section>
            <section v-else>loading...</section>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import CardPaket from "./CardPaket.vue";
export default {
    name: "PaketHosting",
    data() {
        return {
            harga: null
        };
    },
    async mounted() {
        const res = await axios.get("http://localhost:8000/api/harga");

        this.harga = res;
    },
    components: {
        CardPaket
    }
};
</script>
