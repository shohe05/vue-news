<template>
  <div class="stream-component">
      <table class="tabs"><tr>
      <Tab v-for="tab in tabs" :tab="tab" :key="tab.id" @onTabClicked="activateTab(tab)"></Tab>
      </tr></table>
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
import Swipe from 'vswipe';
import SwipeItem from 'vswipe';

export default {
  name: 'stream',
  components: { Tab, List, Swipe, SwipeItem },
  data() {
    return {
      tabs: [],
      activeTabId: 0,
      newsList: [],
      newsListContainer: [],
    };
  },
  created() {
    this.tabs = ApiConf.ENDPOINTS.map((endpoint, i) => { return new TabEntity({id: i, name: endpoint.name}); });
    this.initNewsListContainer().then((newsListContainers) => {
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
      this.tabs[this.activeTabId].currentPositionY = window.pageYOffset;
      this.activeTabId = tab.id;
      for (let tab of this.tabs) {
        tab.isActive = false;
      }
      tab.isActive = true;
      this.newsList = this.newsListContainer[this.activeTabId];
    },
    loadNextPage(newsListEntity) {
      News.getList(newsListEntity.endpoint).then((res) => {
        newsListEntity.list = newsListEntity.list.concat(res);
        this.newsList = newsListEntity;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs {
  position: fixed;
  z-index: 1000000000;
}
</style>
