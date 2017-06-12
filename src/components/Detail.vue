<template>
  <div class="detail-component">
      <h2>{{ news.title }}</h2>
      <pre>{{ news.content }}</pre>
  </div>
</template>

<script>
import News from '@/models/news';

export default {
  name: 'detail',
  data() {
    return {
      news: News.getDetail(this.$route.params.id),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
