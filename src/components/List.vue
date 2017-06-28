<template>
  <div class="list">
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
  data() {
    return {
       nowLoading: false,
    };
  },
  updated() {
    // alert("List updates");
    console.log(this.newsList);
    this.nowLoading = false;
  },
  methods: {
    onInfinite() {
      if (this.nowLoading) {
        return;
      }
      this.nowLoading = true;
      this.$emit('onScrolledBottom', this.newsList);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  position: absolute;
  top: 30px;
  z-index: 1;
}
</style>
