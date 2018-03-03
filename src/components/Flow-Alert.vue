<template>
  <div class="b-alert">
    <div class="b-alert__modal">
      <h3 class="b-alert__modal__title">Alerte</h3>
      <div class="b-alert__modal__error">
        {{ content }}
      </div>
      <button class="b-alert__modal__close" v-if="timer > 0">J'ai compris ({{ timer }})</button>
      <button
        class="b-alert__modal__close b-alert__modal__close--active"
        @click="close"
        v-else>J'ai compris</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: 'Début du feu d\'artifice',
      timer: 5
    }
  },

  methods: {
    tickTimer () {
      this.timer = Math.max(0, this.timer - 1)

      if (this.timer > 0) {
        setTimeout(() => this.tickTimer(), 1000)
      }
    },

    close () {
      this.$el.style.opacity = 0
    }
  },

  mounted () {
    setTimeout(() => this.tickTimer(), 1000)
  }
}
</script>

<style scoped>
.b-alert {
  opacity: 1;
  transition: opacity .2s ease-out;
}

.b-alert__modal {
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
  align-items: flex-start;
  background-color: #fff;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: calc(100% - 20px);
  max-width: 350px;
  min-height: 100px;
  padding: 20px;
}

.b-alert__modal__title {
  margin-top: 0;
}

.b-alert__modal__close {
  background-color: #95a5a6;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  height: 36px;
  margin-top: 1em;
  padding: 0 16px;
  pointer-events: none;
  border-radius: 2px;
  font-size: 14px;
  text-transform: uppercase;
  width: 100%;
}

.b-alert__modal__close:active,
.b-alert__modal__close:focus,
.b-alert__modal__close:hover {
  background-color: rgba(231,76,60,.9);
}

.b-alert__modal__close--active {
  pointer-events: all;
  background-color: #e74c3c;
}
</style>
