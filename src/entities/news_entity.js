export default class NewsEntity {
  constructor(source = {}) {
    this.id = source.id;
    this.title = source.title;
    this.link = source.link;
    this.thumnailUrl = source.thumnail_url;
    this.isAlreadyRead = false;
  }
}
