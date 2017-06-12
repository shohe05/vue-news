<template>
  <div class="list-component">
    <h2>News List</h2>
    <ul>
      <li v-for="news in newsList">
        <router-link :to="{ name: 'Detail', params: { id: news.id }}">
          {{ news.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import News from '@/models/news';

export default {
  name: 'list',
  data() {
    return {
      newsList: News.getAll(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
