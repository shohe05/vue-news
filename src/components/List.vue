<template>
  <div class="list-component">
    <h2>News List</h2>
    <ul>
      <li v-for="news in newsList">
        <NewsLink :news="news"></NewsLink>
      </li>
    </ul>
  </div>
</template>

<script>
import News from '@/models/news';
import NewsLink from '@/components/NewsLink';

export default {
  name: 'list',
  components: { NewsLink },
  data() {
    return {
      newsList: null,
    };
  },
  created() {
    News.getAll().then((newsEntities) => {
      console.log(newsEntities[0].title);
      this.newsList = newsEntities;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
