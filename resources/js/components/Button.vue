<template>
    <button v-bind:class="classNameBtn" v-bind:id="idBack" v-if="icon">
        <i class="ri-question-answer-fill" style="margin-right: 5px;"></i>
        {{ cekElement ? "Diskon 40%" : text }}
    </button>
    <button v-bind:class="classNameBtn" v-bind:id="idBack" v-else>
        {{ cekElement ? "Diskon 40%" : text }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        idBack: String,
        classNameBtn: String,
        text: String,
        cekElement: String,
        icon: String
    }
};
</script>
