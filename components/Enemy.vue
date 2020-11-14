<template>
  <Entity v-model="enemy" :position="position" :scaling="[0.1, 0.1, 0.1]">
  </Entity>
</template>
<script lang="ts">
import Vue from "vue";
import { createEnemy, moveEnemy } from "../utils/Enemy.helper";

export default Vue.extend({
  name: "Enemy",
  data() {
    return {
      position: [-0.2, -0.4, -7.5],
      enemy: null,
    };
  },
  watch: {
    enemy: createEnemy,
  },
  // Testing
  mounted() {
    setInterval(() => {
      requestAnimationFrame(this.moveEnemy);
    }, 100);
  },
  methods: {
    moveEnemy,
  },
});
</script>
