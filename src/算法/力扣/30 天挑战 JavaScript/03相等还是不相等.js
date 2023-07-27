/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
  return   {
    toBe：function (value) {
      if (val === value) {
        return true;
      } else {
        return "Not Equal";
      }
    }

  notToBe：function (value) {
      if (val !== value) {
        return true;
      } else {
        return "Equal";
      }
    }

  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
expect(5).; // true
