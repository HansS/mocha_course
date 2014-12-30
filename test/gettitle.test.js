var getTitle = require('../lib/gettitle');
var assert = require('chai').assert;


describe('Test should return title object',function () {
    it('should return title',function () {
      //console.log(getTitle());
      var title = getTitle().title;
      var titleEx = "Hansi";
      //console.log(title +":" + titleEx);
      //expect(title).tobe("{title: 'Hansi'}");
      //assert.deepEqual(title,titleEx);
      assert.equal(title,titleEx);
    })
})
