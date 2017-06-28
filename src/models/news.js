import NewsEntity from '@/entities/news_entity';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default class News {
  /**
   * ニュース一覧を取得する
   * @return NewsEntityの配列
   */
  static getList(endpoint) {
    return new Promise((resolve) => {
      axios.get(API_URL + endpoint).then((res) => {
        let newsEntities = [];
        for (let newsJson of res.data.data) {
          if (newsJson.head_line === null || newsJson.news_link === null) {
            continue;
          }
          newsEntities.push(new NewsEntity(newsJson));
        };
        resolve(newsEntities);
      });
    });
  }
}
