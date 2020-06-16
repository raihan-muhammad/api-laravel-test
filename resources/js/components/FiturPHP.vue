<template>
    <section>
        <section class="container">
            <p
                style="font-family: 'montserrat-light'"
                class="text-header-desc text-center mt-custom-tengah"
            >
                Powerful dengan limit PHP yang Lebih Besar
            </p>
            <div
                class="row align-items-end justify-content-md-center fitur-brand"
                id="text-fitur-php"
            >
                <section class="col-md-5 col-sm-12">
                    <div class="list-group">
                        <button
                            type="button"
                            class="list-group-item list-group-item-action"
                        >
                            <section class="row">
                                <div class="col-1">
                                    <i class="ri-check-fill bunder-check"></i>
                                </div>
                                <div class="col-11 text-center">
                                    max execution time 300s
                                </div>
                            </section>
                        </button>
                        <button
                            type="button"
                            class="list-group-item list-group-item-action active-light"
                        >
                            <section class="row">
                                <div class="col-1">
                                    <i class="ri-check-fill bunder-check"></i>
                                </div>
                                <div class="col-11 text-center">
                                    max execution time 300s
                                </div>
                            </section>
                        </button>
                        <button
                            type="button"
                            class="list-group-item list-group-item-action"
                        >
                            <section class="row">
                                <div class="col-1">
                                    <i class="ri-check-fill bunder-check"></i>
                                </div>
                                <div class="col-11 text-center">
                                    php memory limit 1024 MB
                                </div>
                            </section>
                        </button>
                    </div>
                </section>
                <section class="col-md-5 col-sm-12" id="text-fitur-php">
                    <div class="list-group">
                        <button
                            type="button"
                            class="list-group-item list-group-item-action"
                        >
                            <section class="row">
                                <div class="col-1">
                                    <i class="ri-check-fill bunder-check"></i>
                                </div>
                                <div class="col-11 text-center">
                                    post max size 128 MB
                                </div>
                            </section>
                        </button>
                        <button
                            type="button"
                            class="list-group-item list-group-item-action active-light"
                        >
                            <section class="row">
                                <div class="col-1">
                                    <i class="ri-check-fill bunder-check"></i>
                                </div>
                                <div class="col-11 text-center">
                                    upload max filesize 128 MB
                                </div>
                            </section>
                        </button>
                        <button
                            type="button"
                            class="list-group-item list-group-item-action"
                        >
                            <section class="row">
                                <div class="col-1">
                                    <i class="ri-check-fill bunder-check"></i>
                                </div>
                                <div class="col-11 text-center">
                                    max input vars 2500
                                </div>
                            </section>
                        </button>
                    </div>
                </section>
            </div>
        </section>
        <div
            style="width: 100px; height: 3px; background: #F1F1F1; margin: 5em auto;"
        ></div>
    </section>
</template>
<script>
export default {
    name: "FiturPHP"
};
</script>
