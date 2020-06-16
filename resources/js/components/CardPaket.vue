<template>
    <div class="col-md-3 col-sm-12 pl-0 pr-0">
        <div class="card">
            <div class="card-atas">
                <div v-if="images">
                    <img v-bind:src="images" class="img-pita" />
                </div>
                <ul class="list-group list-group-flush">
                    <li
                        class="list-group-item"
                        v-bind:id="idName ? idName : null"
                    >
                        <h5 class="card-title-paket">{{ title }}</h5>
                    </li>
                    <li
                        class="list-group-item"
                        v-bind:id="idName ? idName : null"
                    >
                        <p
                            style="font-size: 1.5rem; font-family: 'montserrat' "
                        >
                            <s>Rp {{ hargaNormal }}</s>
                        </p>
                        <p
                            style="display: flex; align-items: center; justify-content: center; margin-top: -1em; font-size: 1.7rem;"
                        >
                            Rp
                            <span class="text-besar-dua ml-2">
                                {{ hargaDiskon.split(".")[0] }}</span
                            >
                            <span class="font-weight-bold"
                                >.{{ hargaDiskon.split(".")[1] }}</span
                            >
                            <span class="mr-2">/</span>bln
                        </p>
                    </li>

                    <li
                        class="list-group-item"
                        v-bind:id="idName2 ? idName2 : null"
                    >
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                totalPengguna
                            }}</span>
                            Pengguna Terdaftar
                        </p>
                    </li>
                    <li class="list-group-item">
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturPower
                            }}</span>
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah1 ? fiturJumlah1 : null
                            }}</span>
                            {{ fiturType1 ? fiturType1 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah2 ? fiturJumlah2 : null
                            }}</span>
                            {{ fiturType2 ? fiturType2 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah3 ? fiturJumlah3 : null
                            }}</span>
                            {{ fiturType3 ? fiturType3 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah4 ? fiturJumlah4 : null
                            }}</span>
                            {{ fiturType4 ? fiturType4 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah5 ? fiturJumlah5 : null
                            }}</span>
                            {{ fiturType5 ? fiturType5 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah6 ? fiturJumlah6 : null
                            }}</span>
                            {{ fiturType6 ? fiturType6 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah7 ? fiturJumlah7 : null
                            }}</span>
                            {{ fiturType7 ? fiturType7 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah8 ? fiturJumlah8 : null
                            }}</span>
                            {{ fiturType8 ? fiturType8 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah9 ? fiturJumlah9 : null
                            }}</span>
                            {{ fiturType9 ? fiturType9 : null }}
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah10 ? fiturJumlah10 : null
                            }}</span>
                            {{ fiturType10 ? fiturType10 : null }}
                        </p>
                        <p v-if="imageStars" class="card-text">
                            <i class="ri-star-fill bg-star"></i>
                            <i class="ri-star-fill bg-star"></i>
                            <i class="ri-star-fill bg-star"></i>
                            <i class="ri-star-fill bg-star"></i>
                            <i class="ri-star-fill bg-star"></i>
                        </p>
                        <p class="card-text">
                            <span class="font-weight-bold">{{
                                fiturJumlah11 ? fiturJumlah11 : null
                            }}</span>
                            {{ fiturType11 ? fiturType11 : null }}
                        </p>
                        <Button
                            classNameBtn="btn-standard"
                            v-bind:idBack="idName"
                            text="Pilih Sekarang"
                            v-bind:cekElement="imageStars"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "./Button.vue";
export default {
    name: "CardPaket",
    components: {
        Button
    },
    props: {
        title: String,
        hargaNormal: String,
        hargaDiskon: String,
        totalPengguna: String,
        idName: String,
        idName2: String,
        images: String,
        imageStars: String,
        fiturPower: String,
        fiturJumlah1: String,
        fiturType1: String,
        fiturJumlah2: String,
        fiturType2: String,
        fiturJumlah3: String,
        fiturType3: String,
        fiturJumlah4: String,
        fiturType4: String,
        fiturJumlah5: String,
        fiturType5: String,
        fiturJumlah6: String,
        fiturType6: String,
        fiturJumlah7: String,
        fiturType7: String,
        fiturJumlah8: String,
        fiturType8: String,
        fiturJumlah9: String,
        fiturType9: String,
        fiturJumlah10: String,
        fiturType10: String,
        fiturJumlah11: String,
        fiturType11: String
    }
};
</script>
