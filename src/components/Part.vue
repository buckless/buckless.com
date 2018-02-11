<template>
  <div class="part container">
    <div :class="row">
      <div class="md-5" :style="paddingTop">
        <slot/>
      </div>
      <div class="image md-7">
        <slot name="image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    },

    contentPadding: {
      type: Number,
      default: 75
    }
  },

  computed: {
    row () {
      return {
        row: true,
        reverse: this.reverse
      }
    },

    paddingTop () {
      return { paddingTop: `${this.contentPadding}px` }
    }
  }
}
</script>

<style>
.part .row.reverse {
  flex-direction: row-reverse;
}

@media (min-width: 992px) {
  .part {
    height: calc(100vh - 80px);
    margin-top: 80px;
  }
}
</style>
