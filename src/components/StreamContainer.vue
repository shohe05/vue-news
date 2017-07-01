<template>
  <Stream :newsListContainer="newsListContainer" :activeTabId="activeTabId" @onTabChange="onTabChange"></Stream>
</template>

<script>
import ApiConf from '@/models/api_conf';
import NewsListEntity from '@/entities/news_list_entity';
import News from '@/models/news';
import Stream from '@/components/Stream';

export default {
  name: 'stream_container',
  components: { Stream },
  data() {
    return {
      newsListContainer: [],
      activeTabId: 0,
    };
  },
  created() {
    this.initNewsListContainer();
  },
  methods: {
    initNewsListContainer() {
      ApiConf.ENDPOINTS.forEach((endpoint, i) => {
        News.getList(endpoint.endpoint).then(res => {
          this.newsListContainer[i] = new NewsListEntity({id: i, endpoint: endpoint.endpoint, list: res});
        });
      });
    },
    onTabChange(tabId) {
      this.activeTabId = tabId;
    },
    loadNextPage(newsListEntity) {
      News.getList(newsListEntity.endpoint).then((res) => {
        // this.newsList = new NewsListEntity({id: newsListEntity.id, endpoint: newsListEntity.endpoint, list: res.data});
        newsList.list = newsList.list.concat(res);
        this.newsList =newsList;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
