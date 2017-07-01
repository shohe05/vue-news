import fetchMock from 'fetch-mock';
import news from '@/models/news'; 

describe("NewsApi", () => {
  const json = {
    data: [
      {
        id: 1,
        title: 'title1',
        link: 'link1',
        thumnail_url: 'thum1',
      },
    ],
  };
  fetchMock.get('*', json);

  it ("should return NewsEntity", () => {
    const promise = news.getAll().then( (res) => {
      expect(res[0].id).to.equal(1);
      expect(res[0].title).to.equal('title1');
      expect(res[0].link).to.equal('link1');
      expect(res[0].thumnailUrl).to.equal('thum1');
    });
    promise.catch(function(reason) {
      console.info('sendNote failed with reason:', reason);
    });
  });
});
