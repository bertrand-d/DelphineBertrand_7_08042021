<script>
  export default {
    name: 'Tooltip',
    props: ['text']
  }
</script>


<template>
    <div class= "tooltip">
        <div class= "tooltip__container">
            <p class="tooltip__text">{{ text }}</p>
            <div class= "tooltip__arrow"></div>
        </div>
    </div>

</template>

<style lang="scss">
    .tooltip {
        margin-top:20px;
        width: 160px;
    }

    .tooltip__container {
        position: relative;
        border-radius: 10px;
        height: 40px;
        background-color: $secondary-color;
    }

    .tooltip__text {
        color: white;
        text-align: center;
        line-height: 40px;
    }

    .tooltip__arrow {
        position: absolute;
        z-index: -1;
        top: -12.5px;
        left: calc(50% - 25px /2 );
        width: 25px;
        height: 25px;
        transform: rotate(45deg) ;
        background-color: $secondary-color;
        border: solid 1px white;
    }

</style>