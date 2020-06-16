<template>
    <li class="nav-item">
        <a class="nav-link" href="#">{{ menu }}</a>
    </li>
</template>

<script>
export default {
    name: "LinkMenu",
    props: {
        menu: String
    }
};
</script>
