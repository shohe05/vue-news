<template>
  <div class="stream-component">
    <h2>Stream</h2>
    <Tab v-for="tab in tabs" :tab="tab" :key="tab.id" @onTabClicked="activateTab(tab)"></Tab>
    <List :newsList="newsList" @onScrolledBottom="loadNextPage"></List>
  </div>
</template>

<script>
import Tab from '@/components/Tab';
import List from '@/components/List';
import ApiConf from '@/models/api_conf';
import TabEntity from '@/entities/tab_entity';
import NewsListEntity from '@/entities/news_list_entity';
import News from '@/models/news';

export default {
  name: 'stream',
  components: { Tab, List },
  data() {
    return {
      tabs: [],
      newsList: [],
      newsListContainer: [],
    };
  },
  created() {
    this.tabs = ApiConf.ENDPOINTS.map((endpoint, i) => { return new TabEntity({id: i, name: endpoint.name}); });
    this.initNewsListContainer().then((newsListContainers) => {
      console.log(newsListContainers);
      this.newsListContainer = newsListContainers;
      this.activateTab(this.tabs[0]);
    });
  },
  methods: {
    fetch(endpoint, i) {
      return new Promise(resolve => {
        News.getList(endpoint).then(res => {
          resolve(new NewsListEntity({id: i, endpoint: endpoint, list: res}));
        });
      });
    },
    initNewsListContainer() {
      return new Promise((resolve) => {
        let newsListContainers = [];
        Promise.all(ApiConf.ENDPOINTS.map((endpoint, i) => { return this.fetch(endpoint.endpoint, i) })).then(newsListContainers => {
          this.newsListContainers = newsListContainers;
          resolve(newsListContainers);
        });
      });
    },
    activateTab(tab) {
      console.log('activate tab: ' + tab.name);
      for (let tab of this.tabs) {
        tab.isActive = false;
      }
      tab.isActive = true;
      this.newsList = this.newsListContainer[tab.id];
      this.$emit('onTabChange', tab.id);
    },
    loadNextPage(newsListEntity) {
      News.getList(newsListEntity.endpoint).then((res) => {
        newsListEntity.list = newsListEntity.list.concat(res);
        this.newsList = newsList;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
