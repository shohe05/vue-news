export default class NewsEntity {
  constructor(source = {}) {
    this.articleId     = source.article_id;
    this.headLine      = source.head_line;
    this.clicks        = source.clicks;
    const newsLinkObj  = JSON.parse(source.news_link)[0];
    const key          = Object.keys(newsLinkObj)[0];
    this.newsLink      = newsLinkObj[key];
    this.thumnailUrl   = JSON.parse(source.thums_url);
    this.categoryId    = source.category_id;
    this.categoryName  = source.category_name;
    this.mediaName     = source.media.media_name;
    this.createTime    = source.create_time;
    this.batchNumber   = source.batch_number;
    this.createTime    = source.create_time;
    this.updateTime    = source.update_time;
    this.isAlreadyRead = false;
  }
}