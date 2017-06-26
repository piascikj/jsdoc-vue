var compiler = require('vue-template-compiler');

exports.handlers = {
  beforeParse: function (e) {
    if (/\.vue$/.test(e.filename)) {
      var output = compiler.parseComponent(e.source);

      e.source = output.script ? output.script.content : '';
    }
  }
};

exports.defineTags = function(dictionary) {
  dictionary.defineTag('component', {
    canHaveType: false,
    canHaveName: true,
    isNamespace: true,
    mustHaveValue: true
  })
}
