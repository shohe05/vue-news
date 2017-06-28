<template>
  <span class="tab-component" v-bind:class="{ active: tab.isActive }" v-on:click="onTabClicked">
    <span>{{ tab.name }}</span>
  </span>
</template>

<script>

export default {
  name: 'tab',
  props: ['tab'],
  created() {
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
.active {
  background: red;
}
</style>
