import NewsEntity from '@/entities/news_entity';
import axios from 'axios';

const API_URL = 'http://localhost:3000/news-list';

export default class News {
  /**
   * ニュース一覧を取得する
   * @return NewsEntityの配列
   */
  static getAll() {
    return new Promise((resolve) => {
      axios.get(API_URL).then((res) => {
        resolve(res.data.data.map(newsJson => new NewsEntity(newsJson)));
      });
    });
  }
}
