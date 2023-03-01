<template>
    <div class="div-perna"></div>
</template>

<script>
export default {
    data() {
        return {
            hover: false,
            color: "#012892",
            json: [1, 4, 2, 4, 4, 4, 4, 4, 4, 3, 4, 2, 2, 1, 1, 4, 4, 2, 2, 4, 4, 3, 4, 2, 2, 2, 4,
                2, 2, 1, 2, 2, 2, 4, 4, 3, 2, 2, 2, 4, 4, 2, 2, 4, 3, 4, 3, 3, 4, 3, 2, 3, 4, 1, 1, 4,
                4, 4, 1, 4, 3, 2, 1, 2, 3, 2, 3, 2, 4, 4, 4, 2, 3, 1, 3, 4, 4, 3, 2],

        }
    },
    props: {
        image: Number
    },
    methods: {
        changecolor() {
            if (this.json[this.image] == 1) {
                this.color = "#012892"

            } else if (this.json[this.image] == 2) {
                this.color = "#FFA519"

            } else if (this.json[this.image] == 3) {
                this.color = "#C3BD19"

            } else if (this.json[this.image] == 4) {
                this.color = "#C337B9"

            } else if (this.json[this.image] == 5) {
                this.color = "#c3a9ff"

            } else if (this.json[this.image] == 6) {
                this.color = "#c37537"

            } else {
                this.color = "#0192ae"

            }
            this.hover = !this.hover
        }

    },
    mounted() {
        this.changecolor()
    }
};
</script>

<style scoped>
.div-perna {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    background-color: v-bind(color);
    border-radius: 3px;
    min-width: 29px;
    min-height: 15px;
    border: solid 1px white;
    user-select: none;
}
</style>