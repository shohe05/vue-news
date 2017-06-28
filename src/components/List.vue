<template>
  <div class="list-component">
    <h2>List</h2>
    <ul>
      <li v-for="news in newsList.list">
        <NewsLink :news="news"></NewsLink>
      </li>
      <span href="" v-on:click="onInfinite">INFINITE</span>
    </ul>
  </div>
</template>

<script>
import News from '@/models/news';
import NewsLink from '@/components/NewsLink';

export default {
  name: 'list',
  components: { NewsLink },
  props: ['newsList'],
  methods: {
    onInfinite() {
      this.$emit('onScrolledBottom', this.newsList);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
