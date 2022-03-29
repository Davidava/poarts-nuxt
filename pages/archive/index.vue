<template>
    <div class="c-archive">
        <div class="o-box">
            <div class="c-archive-heading">
                <h1 class="c-title">GET INSPIRED BY OUR ARCHIVE</h1>

                <p>
                    Explore our infinite archive,
                    full of inspiration and work we made for our clients.
                </p>
            </div>

            <div class="c-archive-list">
                <!-- <div v-for="picture in pictures" :key="picture.img" class="c-archive-list__item">
                    <picture
                        class="c-archive-list__picture"
                        :style="{
                            'padding-top': picture.height / picture.width*100 + '%'
                        }"
                    >
                        <source type="image/jpg" :srcset="`img/archive/${ picture.img }.jpg, img/archive/${ picture.img }@2x.jpg 2x`">
                        <img :src="`img/archive/${ picture.img }.jpg`" alt="">
                    </picture>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'default',
  })
</script>

