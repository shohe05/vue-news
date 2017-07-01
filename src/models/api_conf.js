export default class ApiConf {
  static get ENDPOINTS() {
    return [
      { name: '主要', endpoint: '/news-list' },
      { name: '社会', endpoint: '/news-list-society' },
      { name: '経済', endpoint: '/news-list-economy' },
      { name: '芸能', endpoint: '/news-list-entertainment' },
      { name: 'スポーツ', endpoint: '/news-list-sports' },
    ];
  }
}
