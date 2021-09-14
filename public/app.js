(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    var val = aliases[name];
    return (val && name !== val) ? expandAlias(val) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("initialize.js", function(exports, require, module) {
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

document.addEventListener('DOMContentLoaded', function () {
  // do your setup here
  console.log('Initialized app');

  var userStory = {
    title: "Broken User Stories", // STRING MAX?
    type: 'bug',
    description: 'Descrition instead of base in some cases',
    base: {
      userType: 'PM',
      task: 'write good user stories',
      goal: 'developers would love me'
    }, //String
    acceptanceCriteria: ['One', 'Two', 'Three'], //String
    additionalInfo: '<p>Info</p>', //String html
    tags: ['frontend'],
    browsers: [{
      title: 'Safari',
      version: '14.0'
    }, {
      title: 'Chrome',
      version: '12.0'
    }],
    devices: [{
      title: 'Macbook',
      osVersion: '10.15'
    }]
  };

  var strings = {
    additionalInfo: 'Additional info',
    ac: 'Acceptance Criteria',
    browsers: 'Browsers',
    devices: 'Devices'
  };

  var userStoryContainer = document.querySelector('.ustorer-output');

  var story = '<article class=\'story\'>\n    <h2 class="story-title">' + prepTitle() + '</h2>\n    <div class=\'story-base\'>\n      ' + prepBase() + '\n      ' + prepDescription() + '\n    </div>\n    <div class="story-ac">\n      <h3 class="story-ac__title">' + strings.ac + '</h3>\n      ' + prepAcceptanceCriteria(userStory.acceptanceCriteria) + '\n    </ul>\n     <div class="story-info">\n      <h3 class="story-info__title">' + strings.additionalInfo + '</h3>\n      <div class="story-info__content">' + userStory.additionalInfo + '</div>\n    </div>\n     <div class="story-browsers">\n      <h3 class="story-browsers__title">' + strings.browsers + '</h3>\n      <div class="story-browsers__content">' + helperBuildListWithProps(userStory.browsers) + '</div>\n    </div>\n       <div class="story-devices">\n      <h3 class="story-devices__title">' + strings.devices + '</h3>\n      <div class="story-devices__content">' + helperBuildListWithProps(userStory.devices) + '</div>\n    </div>\n  </article>\n  ';

  function prepTitle() {
    var titleHTML = '' + userStory.title;

    //Rule: If specific browser show in title
    if (userStory.browsers.length = 1) {
      titleHTML += ' -- ' + userStory.browsers[0].title + ' ' + userStory.browsers[0].version;
    }

    //Rule: If two or more specific browsers show in title without version
    if (userStory.browsers.length > 1 && userStory.browsers.length < 3) {
      titleHTML += ' -- ' + userStory.browsers[0].title + ' | ' + userStory.browsers[1].title;
    }

    //Rule: If specific device show in title
    if (userStory.devices.length > 0) {
      titleHTML += ' -- ' + userStory.devices[0].title + ' os:' + userStory.devices[0].osVersion;
    }

    return titleHTML;
  }

  function prepDescription() {
    var descriptionHTML = '\n    <p>\n      ' + userStory.description + '\n    </p>\n    ';

    return descriptionHTML;
  }

  function prepBase() {
    var baseHTML = '<p>\n      As a ' + userStory.base.userType + ' I want to ' + userStory.base.task + ' so that ' + userStory.base.goal + '\n    </p>';

    return baseHTML;
  }

  function prepAcceptanceCriteria(criteria) {
    var acHTML = '<ul class="story-ac__list">';

    criteria.forEach(function (ac) {
      acHTML += '<li>' + ac + '</li>';
    });

    return acHTML + '</ul>';
    /*   for (const ac in userStory.acceptanceCriteria) {
        console.log(`obj.${prop} = ${obj[prop]}`);
      } */
  }

  function helperOutputProps(obj) {
    var output = '';

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        output += '\n          <b>' + key + ':</b> ' + value + '\n        ';
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return output;
  }

  function helperBuildListWithProps(array) {
    var html = '<ul">';

    array.forEach(function (item) {
      html += '<li>' + helperOutputProps(item) + '</li>';
    });

    return html;
  }

  function helperBuildList(array) {
    var html = '<ul">';

    array.forEach(function (item) {
      html += '<li>' + item + '</li>';
    });

    return html;
  }

  userStoryContainer.innerHTML = story;
});
});

require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map