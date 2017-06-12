export default class NewsEntity {
  constructor(source = {}) {
    this.id = source.id;
    this.title = source.title;
    this.content = source.content;
    this.isAlreadyRead = false;
  }
}
