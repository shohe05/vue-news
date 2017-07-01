export default class NewsListEntity {
  constructor(source = {}) {
    this.id = source.id;
    this.endpoint = source.endpoint;
    this.list = source.list;
  }
}