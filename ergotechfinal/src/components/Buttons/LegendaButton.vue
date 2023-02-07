<template>
    <button class="subtitle-button">{{ subtitle }}</button>
</template>

<script setup>
const props = defineProps({
    color: String,
    subtitle: String
})
</script>

<style>
.subtitle-button {
    text-indent: -1000em; 
    background-color: v-bind(color);
    border: 1px solid #d5d9d9;
    border-radius: 50%;
    box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: "Amazon Ember", sans-serif;
    font-size: 15px;
    line-height: 29px;
    padding: 0 15px 0 15px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation; 
}
</style>