export default class TabEntity {
  constructor(source = {}) {
    this.id = source.id;
    this.name = source.name;
    this.isActive = false;
  }
}
