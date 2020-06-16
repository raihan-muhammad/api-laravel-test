<template>
    <section class="row bungkus-fitur-header">
        <div class="col-1">
            <i class="ri-check-fill bunder-check"></i>
        </div>
        <div class="col-11 pl-0" id="fitur-header">
            <p class="text-fitur-header">{{ text }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "FiturHeader",
    props: {
        text: String
    }
};
</script>
