<template>
  <div class="news-link-component">
    <img :src="news.thumnailUrl">
    <h3>{{ news.title }}</h3>
  </div>
</template>

<script>
import List from '@/components/List';
import NewsEntity from '@/entities/news_entity';

export default {
  name: 'list',
  props: {
    news: {
      type: NewsEntity,
      required: true,
      validator(news) {
        return news.id != null && news.title.length > 0;
      },
    },
  },
  components: { List },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
