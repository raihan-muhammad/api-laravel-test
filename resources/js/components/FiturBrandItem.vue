<template>
    <div class="col-md-auto col-sm-12 mx-custom">
        <img :src="images" :class="classGambar" />
        <p class="text-center mt-4 text-fitur-brand-item">{{ caption }}</p>
    </div>
</template>

<script>
export default {
    name: "FiturBrandItem",
    props: {
        images: String,
        caption: String,
        classGambar: String
    }
};
</script>
