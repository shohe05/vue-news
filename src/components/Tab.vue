<template>
  <td class="tab-component" v-bind:class="{ active: tab.isActive }" v-on:click="onTabClicked">
    <span>{{ tab.name }}</span>
  </td>
</template>

<script>

export default {
  name: 'tab',
  props: ['tab'],
  created() {
  },
  updated() {
    console.log(this.tab.name);
    if (this.tab.isActive) {
      window.scroll(0, this.tab.currentPositionY);
    }
  },
  methods: {
    onTabClicked() {
      this.$emit("onTabClicked");
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-component {
  background: black;
  z-index: 10000;
}
.tab-component span {
  color: white;
}
.active {
  background: red;
}
</style>
