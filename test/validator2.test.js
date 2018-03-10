'use strict';

const mock = require('egg-mock');

describe('test/validator2.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/validator2-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, validator2')
      .expect(200);
  });
});
