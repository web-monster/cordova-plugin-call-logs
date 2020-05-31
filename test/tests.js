exports.defineAutoTests = function() {
  
  var fail = function (done) {
    expect(true).toBe(false);
    done();
  },
  succeed = function (done) {
    expect(true).toBe(true);
    done();
  };

  describe('Plugin availability', function () {
    it("corodva.plugins.callLog should exist", function() {
      expect(corodva.plugins.callLog).toBeDefined();
    });
  });

  describe('API functions', function () {
    it("should define get", function() {
      expect(corodva.plugins.callLog.get).toBeDefined();
    });
  });
};
