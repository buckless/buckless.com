<template>
  <div class="part container">
    <div :class="row">
      <div :class="column" :style="paddingTop">
        <slot/>
      </div>
      <div class="image md-7" v-if="!full">
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

    full: {
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

    column () {
      return this.full ? '' : 'md-5'
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
    margin-top: 80px;
    padding-top: 60px;
  }
}
</style>
