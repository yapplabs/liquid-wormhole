"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("dummy/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('dummy/components/liquid-append', ['exports', 'liquid-wormhole/components/liquid-append'], function (exports, _liquidWormholeComponentsLiquidAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidAppend['default'];
    }
  });
});
define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define('dummy/components/liquid-destination', ['exports', 'liquid-wormhole/components/liquid-destination'], function (exports, _liquidWormholeComponentsLiquidDestination) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidDestination['default'];
    }
  });
});
define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('dummy/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('dummy/components/liquid-wormhole', ['exports', 'liquid-wormhole/components/liquid-wormhole'], function (exports, _liquidWormholeComponentsLiquidWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidWormhole['default'];
    }
  });
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('dummy/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/fastboot/ajax', ['exports'], function (exports) {
  /* globals najax */

  var nodeAjax = function nodeAjax(options) {
    najax(options);
  };

  exports['default'] = {
    name: 'ajax-service',

    initialize: function initialize(application) {
      application.register('ajax:node', nodeAjax, { instantiate: false });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
    }
  };
});
define("dummy/initializers/fastboot/dom-helper-patches", ["exports"], function (exports) {
  /*globals Ember, URL*/
  exports["default"] = {
    name: "dom-helper-patches",

    initialize: function initialize(App) {
      // TODO: remove me
      Ember.HTMLBars.DOMHelper.prototype.protocolForURL = function (url) {
        var protocol = URL.parse(url).protocol;
        return protocol == null ? ':' : protocol;
      };

      // TODO: remove me https://github.com/tildeio/htmlbars/pull/425
      Ember.HTMLBars.DOMHelper.prototype.parseHTML = function (html) {
        return this.document.createRawHTMLSection(html);
      };
    }
  };
});
define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define("dummy/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Kew7nsPU", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"main-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    \"],[1,[26,[\"main-nav\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/application/template.hbs" } });
});
define('dummy/pods/components/hello-component/component', ['exports', 'ember', 'dummy/pods/components/hello-component/template'], function (exports, _ember, _dummyPodsComponentsHelloComponentTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyPodsComponentsHelloComponentTemplate['default']
  });
});
define("dummy/pods/components/hello-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MWJptzQ/", "block": "{\"statements\":[[0,\"Hello, World!\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/components/hello-component/template.hbs" } });
});
define('dummy/pods/components/main-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'nav',
    classNames: ['main-nav'],

    click: function click(event) {
      var $target = _ember['default'].$(event.target);
      var $c = this.$();

      if ($target !== $c) {
        if ($target.closest($c.find('a.nav-item')).length) {
          this.set('navOpen', false);
        }
      }
    },

    actions: {
      toggleNav: function toggleNav() {
        this.toggleProperty('navOpen');
      }
    }
  });
});
define("dummy/pods/components/main-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "gCq/MoQZ", "block": "{\"statements\":[[11,\"nav\",[]],[15,\"class\",\"navbar navbar-inverse navbar-embossed\"],[15,\"role\",\"navigation\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"navbar-header\"],[13],[0,\"\\n    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"navbar-toggle fa fa-bars\"],[5,[\"action\"],[[28,[null]],\"toggleNav\"]],[13],[0,\"\\n      \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[0,\"Toggle navigation\"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"span\",[]],[15,\"class\",\"navbar-brand\"],[13],[0,\"Liquid Wormhole\"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[16,\"class\",[34,[\"navbar-collapse \",[33,[\"unless\"],[[28,[\"navOpen\"]],\"collapse\"],null]]]],[13],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav navbar-left\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"nav-item\",\"li\"]],{\"statements\":[[0,\"        \"],[11,\"a\",[]],[13],[0,\"Intro\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"link-to\"],[\"docs\"],[[\"class\",\"tagName\"],[\"nav-item\",\"li\"]],{\"statements\":[[0,\"        \"],[11,\"a\",[]],[13],[0,\"Docs\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"link-to\"],[\"upgrading\"],[[\"class\",\"tagName\"],[\"nav-item\",\"li\"]],{\"statements\":[[0,\"        \"],[11,\"a\",[]],[13],[0,\"Upgrading\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav navbar-right navbar-break\"],[13],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"class\",\"nav-item\"],[15,\"href\",\"https://github.com/pzuraq/liquid-wormhole\"],[13],[0,\"\\n          GitHub\\n          \"],[11,\"span\",[]],[15,\"class\",\"fa fa-github\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[4,\" /.navbar-collapse \"],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/components/main-nav/template.hbs" } });
});
define('dummy/pods/components/test-component/component', ['exports', 'ember', 'dummy/pods/components/test-component/template'], function (exports, _ember, _dummyPodsComponentsTestComponentTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyPodsComponentsTestComponentTemplate['default'],

    actions: {
      sendAction: function sendAction() {
        var action = this.get('action');
        if (action) {
          return action.apply(undefined, arguments);
        }
      }
    }
  });
});
define("dummy/pods/components/test-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "na0cWyB1", "block": "{\"statements\":[[18,\"default\",[[33,[\"action\"],[[28,[null]],\"sendAction\"],null]]],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/components/test-component/template.hbs" } });
});
define('dummy/pods/docs/components/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleHello: function toggleHello() {
        this.toggleProperty('showHello');
      }
    }
  });
});
define("dummy/pods/docs/components/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yreok8Ap", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"If you'd rather send a component than use a block template, you can set the\\n\"],[11,\"code\",[]],[13],[0,\"send\"],[14],[0,\" property to either a component name or helper:\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"example-button-container\"],[13],[0,\"\\n  \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary btn-embossed\"],[5,[\"action\"],[[28,[null]],\"toggleHello\"]],[13],[0,\"\\n    Press Me\\n  \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showHello\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"liquid-wormhole\"],null,[[\"send\",\"class\"],[\"hello-component\",\"hello-world notification top-right\"]]],false],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[13],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\"<\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"button\"],[14],[0,\" \"],[14],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{\"],[11,\"span\",[]],[15,\"class\",\"hljs-built_in\"],[13],[0,\"action\"],[14],[0,\" 'toggleHello'}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\">\"],[14],[0,\"\\n  Press Me\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\"</\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"button\"],[14],[0,\">\"],[14],[0,\"\\n\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\" showHello}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n  \"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{liquid-wormhole send=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"hello-component\\\"\"],[14],[0,\" class=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"hello-world\\\"\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[0,\"\\n\"],[14],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/components/template.hbs" } });
});
define("dummy/pods/docs/destinations/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qSSLfysZ", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"If you don't want to use Liquid Wormhole for modals, or need to have more fine\\ngrained control of your wormholes, you can create a custom \"],[11,\"code\",[]],[13],[0,\"liquid-destination\"],[14],[0,\". By\\ndefault all \"],[11,\"code\",[]],[13],[0,\"liquid-wormhole\"],[14],[0,\"s are rendered to the \"],[11,\"code\",[]],[13],[0,\"default\"],[14],[0,\" destination. You can\\nreplace this destination, or create a new one and send wormholes to it using the \"],[11,\"code\",[]],[13],[0,\"to\"],[14],[0,\"\\nproperty:\"],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[13],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-comment\"],[13],[0,\"<!-- Replaces the default liquid-destination -->\"],[14],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{liquid-destination}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-comment\"],[13],[0,\"<!-- Adds a new liquid-destination named \\\"my-destination\\\" -->\"],[14],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{liquid-destination name=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"my-destination\\\"\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\\n...\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-comment\"],[13],[0,\"<!-- Appends to the default destination above -->\"],[14],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{liquid-wormhole}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-comment\"],[13],[0,\"<!-- Appends to the named destination above -->\"],[14],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{liquid-wormhole to=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"my-destination\\\"\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[0,\"\\n\"],[14],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/destinations/template.hbs" } });
});
define('dummy/pods/docs/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleHello: function toggleHello() {
        this.toggleProperty('showHello');
      }
    }
  });
});
define("dummy/pods/docs/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fP2S+fb4", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"Liquid Wormhole v2 allows you to animate your components using the standard\\nLiquid Fire DSL. Just add a \"],[11,\"code\",[]],[13],[0,\"liquid-wormhole\"],[14],[0,\" component to your app, give it a\\nclass, and add animations in your \"],[11,\"code\",[]],[13],[0,\"transitions.js\"],[14],[0,\" file.\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"By default, \"],[11,\"code\",[]],[13],[0,\"liquid-wormhole\"],[14],[0,\" components will render near the root of the\\ndocument, in a container that is positioned absolutely and that has the width\\nand height of the window. This container is meant to be used for UI components\\nsuch as popups, modals, tooltips - things that do not work in the normal\\ndocument flow. When choosing and building your animations, it's helpful to\\nthink as though you are animating the entire window frame at once.\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"If you want to warp elements somewhere else, consider\\n\"],[6,[\"link-to\"],[\"docs.destinations\"],null,{\"statements\":[[0,\"creating a custom liquid-destination\"]],\"locals\":[]},null],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"example-button-container\"],[13],[0,\"\\n  \"],[11,\"button\",[]],[15,\"id\",\"hello-world-button\"],[15,\"class\",\"btn btn-primary btn-embossed\"],[5,[\"action\"],[[28,[null]],\"toggleHello\"]],[13],[0,\"\\n    Give it a shot!\\n  \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showHello\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"hello-world notification top-right\"]],{\"statements\":[[0,\"      Hello, World!\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-hbs\"],[13],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\"<\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"button\"],[14],[0,\" \"],[14],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{\"],[11,\"span\",[]],[15,\"class\",\"hljs-built_in\"],[13],[0,\"action\"],[14],[0,\" 'toggleHello'}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\">\"],[14],[0,\"\\n  Give it a shot!\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\"</\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"button\"],[14],[0,\">\"],[14],[0,\"\\n\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\" showHello}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n  \"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"hljs-attr\"],[13],[0,\"class\"],[14],[0,\"=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"hello-world top-right\\\"\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n    Hello, World!\\n  \"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[0,\"\\n\"],[14],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-scss\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-selector-class\"],[13],[0,\".top-right\"],[14],[0,\" {\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-attribute\"],[13],[0,\"position\"],[14],[0,\": fixed;\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-attribute\"],[13],[0,\"top\"],[14],[0,\": \"],[11,\"span\",[]],[15,\"class\",\"hljs-number\"],[13],[0,\"10px\"],[14],[0,\";\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-attribute\"],[13],[0,\"right\"],[14],[0,\": \"],[11,\"span\",[]],[15,\"class\",\"hljs-number\"],[13],[0,\"10px\"],[14],[0,\";\\n}\\n\"],[14],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-js\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".hasClass(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'hello-world'\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue(\"],[11,\"span\",[]],[15,\"class\",\"hljs-literal\"],[13],[0,\"true\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".use(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'to-down'\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".reverse(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'to-up'\"],[14],[0,\")\\n);\\n\"],[14],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/index/template.hbs" } });
});
define("dummy/pods/docs/parameters/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ky9vHn86", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"Below is a listing of all of the parameters that the liquid-wormhole components\\nwill accept as attributes.\"],[14],[0,\"\\n\"],[11,\"h2\",[]],[15,\"id\",\"-liquid-wormhole-parameters\"],[13],[11,\"code\",[]],[13],[0,\"liquid-wormhole\"],[14],[0,\" Parameters\"],[14],[0,\"\\n\"],[11,\"table\",[]],[15,\"class\",\"table\"],[13],[0,\"\\n  \"],[11,\"thead\",[]],[13],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"key\"],[14],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"type\"],[14],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"value\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"tbody\",[]],[13],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"code\",[]],[13],[0,\"stack\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"String\"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"\\n        The name of the stack that the wormhole will be a part of. Defaults to a\\n        unique ID.\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"code\",[]],[13],[0,\"value\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"Any\"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"\\n        The value that will be passed on to the Liquid Fire transition matchers. Defaults to \"],[11,\"code\",[]],[13],[0,\"true\"],[14],[0,\".\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"code\",[]],[13],[0,\"send\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"Component Name or Helper\"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"\\n        A component that will be rendered and wormholed.\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"code\",[]],[13],[0,\"click\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"Action Name or Helper\"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"\\n        An action that will trigger when the wormhole is clicked.\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"code\",[]],[13],[0,\"to\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"String\"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"\\n        The name of the \"],[11,\"code\",[]],[13],[0,\"liquid-destination\"],[14],[0,\" that the component will be appended to.\\n        Defaults to 'default'.\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"h2\",[]],[15,\"id\",\"-liquid-destination-parameters\"],[13],[11,\"code\",[]],[13],[0,\"liquid-destination\"],[14],[0,\" Parameters\"],[14],[0,\"\\n\"],[11,\"table\",[]],[15,\"class\",\"table\"],[13],[0,\"\\n  \"],[11,\"thead\",[]],[13],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"key\"],[14],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"type\"],[14],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"value\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"tbody\",[]],[13],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"code\",[]],[13],[0,\"name\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"String\"],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[0,\"\\n        The name of the destination. Defaults to 'default'.\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/parameters/template.hbs" } });
});
define('dummy/pods/docs/stacks/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      showFirstStep: function showFirstStep() {
        this.toggleProperty('showFirstStep');
      },

      showSecondStep: function showSecondStep() {
        this.toggleProperty('showSecondStep');
      },

      closeModal: function closeModal() {
        this.toggleProperty('showFirstStep');
        this.toggleProperty('showSecondStep');
      },

      testing: function testing() {
        console.log('test');
      }
    }
  });
});
define("dummy/pods/docs/stacks/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "J54hlwnb", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"At times you may want to animate between different wormholes - for a complicated\\nmodal flow, or an onboarding flow, or something else. You can do this by\\nspecifying a stack name with the \"],[11,\"code\",[]],[13],[0,\"stack\"],[14],[0,\" property. New wormholes will be pushed\\nonto an existing stack, and only the most recent wormhole will be showing. When\\nmatching in \"],[11,\"code\",[]],[13],[0,\"toValue\"],[14],[0,\", \"],[11,\"code\",[]],[13],[0,\"fromValue\"],[14],[0,\", or \"],[11,\"code\",[]],[13],[0,\"betweenValues\"],[14],[0,\", the \"],[11,\"code\",[]],[13],[0,\"value\"],[14],[0,\" parameter\\nfor both the previous wormhole on the stack and the next one will be passed in.\\nYou can pass in any value you want in the property and match based on that.\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"The stack name will be applied as the id of the wormhole, allow you to match them using\\nthe \"],[11,\"code\",[]],[13],[0,\"matchSelector\"],[14],[0,\" helper from liquid-fire.\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"example-button-container\"],[13],[0,\"\\n  \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary btn-embossed\"],[5,[\"action\"],[[28,[null]],\"showFirstStep\"]],[13],[0,\"\\n    Open Dialogue\\n  \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showFirstStep\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"stack\",\"value\",\"class\"],[\"modal-dialog\",1,\"modal-content top-right\"]],{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n        Step One\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary btn-embossed\"],[5,[\"action\"],[[28,[null]],\"showSecondStep\"]],[13],[0,\"\\n          Go on\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"showSecondStep\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"stack\",\"value\",\"class\"],[\"modal-dialog\",2,\"modal-content top-right\"]],{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n        Step Two\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary btn-embossed\"],[5,[\"action\"],[[28,[null]],\"closeModal\"]],[13],[0,\"\\n          Done\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[13],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\"<\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"button\"],[14],[0,\" \"],[14],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{\"],[11,\"span\",[]],[15,\"class\",\"hljs-built_in\"],[13],[0,\"action\"],[14],[0,\" 'showFirstStep'}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\">\"],[14],[0,\"\\n  Open Dialogue\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-tag\"],[13],[0,\"</\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"button\"],[14],[0,\">\"],[14],[0,\"\\n\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\" showFirstStep}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n  \"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"hljs-attr\"],[13],[0,\"stack\"],[14],[0,\"=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"modal-dialog\\\"\"],[14],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"hljs-attr\"],[13],[0,\"value\"],[14],[0,\"=\"],[11,\"span\",[]],[15,\"class\",\"hljs-number\"],[13],[0,\"1\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n    ...\\n  \"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\" showSecondStep}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n  \"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"hljs-attr\"],[13],[0,\"stack\"],[14],[0,\"=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"modal-dialog\\\"\"],[14],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"hljs-attr\"],[13],[0,\"value\"],[14],[0,\"=\"],[11,\"span\",[]],[15,\"class\",\"hljs-number\"],[13],[0,\"2\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n    ...\\n  \"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"if\"],[14],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[0,\"\\n\"],[14],[14],[11,\"pre\",[]],[13],[11,\"code\",[]],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".hasClass(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'modal-dialog'\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue(\"],[11,\"span\",[]],[15,\"class\",\"hljs-literal\"],[13],[0,\"true\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".use(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'to-up'\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".reverse(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'fade'\"],[14],[0,\")\\n);\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".hasClass(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'modal-dialog'\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue((toValue, fromValue) => toValue > fromValue),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".use(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'to-right'\"],[14],[0,\")\\n);\\n\"],[14],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/stacks/template.hbs" } });
});
define("dummy/pods/docs/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lafW5mLl", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-3\"],[13],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"nav nav-pills nav-stacked\"],[13],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"The Basics\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.parameters\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Parameters\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.stacks\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Stacks\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.destinations\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Custom Destinations\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.components\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Sending Components\"],[14]],\"locals\":[]},null],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-9\"],[13],[0,\"\\n    \"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/template.hbs" } });
});
define("dummy/pods/examples/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hQLzHNFY", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-3\"],[13],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"nav nav-pills nav-stacked\"],[13],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"The Basics\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.parameters\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Parameters\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.stacks\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Stacks\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.destinations\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Custom Destinations\"],[14]],\"locals\":[]},null],[0,\"\\n      \"],[6,[\"link-to\"],[\"docs.components\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[13],[0,\"Sending Components\"],[14]],\"locals\":[]},null],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-9\"],[13],[0,\"\\n    \"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/examples/template.hbs" } });
});
define('dummy/pods/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleHello: function toggleHello() {
        this.toggleProperty('showHello');
      }
    }
  });
});
define("dummy/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uOTj8L+2", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"front-page-container-1\"],[13],[0,\"\\n  \"],[11,\"span\",[]],[15,\"class\",\"lead\"],[13],[0,\"\\n    Liquid-Fire meets Ember-Wormhole\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"front-page-container-2\"],[13],[0,\"\\n  \"],[11,\"button\",[]],[15,\"id\",\"hello-world-button\"],[15,\"class\",\"btn btn-primary btn-embossed\"],[5,[\"action\"],[[28,[null]],\"toggleHello\"]],[13],[0,\"\\n    Give it a shot!\\n  \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showHello\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"hello-world notification\"]],{\"statements\":[[0,\"      Hello, World!\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[13],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{#\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"hljs-attr\"],[13],[0,\"class\"],[14],[0,\"=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"hello-world\\\"\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n  Hello, World!\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-tag\"],[13],[0,\"{{/\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[0,\"liquid-wormhole\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[0,\"\\n\"],[14],[14],[11,\"pre\",[]],[13],[11,\"code\",[]],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".hasClass(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'hello-world'\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue(\"],[11,\"span\",[]],[15,\"class\",\"hljs-literal\"],[13],[0,\"true\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".use(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'to-down'\"],[14],[0,\"),\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".reverse(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'to-right'\"],[14],[0,\")\\n);\\n\"],[14],[14],[11,\"p\",[]],[13],[0,\"Liquid Wormhole combines the ideas behind\\n\"],[11,\"a\",[]],[15,\"href\",\"https://github.com/yapplabs/ember-wormhole.git\"],[13],[0,\"Ember Wormhole\"],[14],[0,\" with\\nthe power of \"],[11,\"a\",[]],[15,\"href\",\"http://ef4.github.io/liquid-fire/\"],[13],[0,\"Liquid Fire\"],[14],[0,\" to provide an\\naccessible, easy-to-use toolkit for animating elements on a layer above your\\ntemplates, making positioning and rendering simple.\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/index/template.hbs" } });
});
define('dummy/pods/scenarios/actions-in-wormhole/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleWormhole: function toggleWormhole() {
        this.toggleProperty('hideWormhole');
      }
    }
  });
});
define("dummy/pods/scenarios/actions-in-wormhole/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cfig0jpu", "block": "{\"statements\":[[6,[\"unless\"],[[28,[\"hideWormhole\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],{\"statements\":[[6,[\"test-component\"],null,[[\"action\"],[[33,[\"action\"],[[28,[null]],\"toggleWormhole\"],null]]],{\"statements\":[[0,\"      \"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],[28,[\"someAction\"]]]],[13],[0,\"Toggle Wormhole\"],[14],[0,\"\\n\"]],\"locals\":[\"someAction\"]},null]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/actions-in-wormhole/template.hbs" } });
});
define('dummy/pods/scenarios/component-in-wormhole/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleWormhole: function toggleWormhole() {
        this.toggleProperty('hideWormhole');
      }
    }
  });
});
define("dummy/pods/scenarios/component-in-wormhole/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ji+xolWl", "block": "{\"statements\":[[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"toggleWormhole\"]],[13],[0,\"Toggle Wormhole\"],[14],[0,\"\\n\\n\"],[6,[\"unless\"],[[28,[\"hideWormhole\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],{\"statements\":[[6,[\"test-component\"],null,null,{\"statements\":[[0,\"      testing123\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/component-in-wormhole/template.hbs" } });
});
define('dummy/pods/scenarios/liquid-fire-in-wormhole/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    showingOther: true,
    actions: {
      toggleContent: function toggleContent() {
        this.toggleProperty('showingOther');
      }
    }
  });
});
define("dummy/pods/scenarios/liquid-fire-in-wormhole/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "HkXjd6fP", "block": "{\"statements\":[[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"toggleContent\"]],[13],[0,\"\\n  Toggle Inner Content\\n\"],[14],[0,\"\\n\\n\"],[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"id\",\"content-box\"],[13],[0,\"\\n\"],[6,[\"liquid-if\"],[[28,[\"showingOther\"]]],null,{\"statements\":[[0,\"      \"],[11,\"span\",[]],[15,\"id\",\"showing-other\"],[13],[0,\"Show Other\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      \"],[11,\"span\",[]],[15,\"id\",\"not-showing-other\"],[13],[0,\"Don't Show Other\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/liquid-fire-in-wormhole/template.hbs" } });
});
define('dummy/pods/scenarios/manual-destinations/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      showWormhole: function showWormhole() {
        this.toggleProperty('showWormhole');
      }
    }
  });
});
define("dummy/pods/scenarios/manual-destinations/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "gMLPNTBg", "block": "{\"statements\":[[1,[33,[\"liquid-target\"],null,[[\"name\"],[\"some-target\"]]],false],[0,\"\\n\\n\"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"showWormhole\"]],[13],[0,\"\\n  Show Wormhole\\n\"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"showWormhole\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"to\",\"class\"],[\"some-target\",\"blue-box\"]],{\"statements\":[[0,\"    Testing\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/manual-destinations/template.hbs" } });
});
define("dummy/pods/scenarios/manual-target/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+cmfe43e", "block": "{\"statements\":[[1,[33,[\"liquid-destination\"],null,[[\"name\"],[\"some-destination\"]]],false],[0,\"\\n\\n\"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"showWormhole\"]],[13],[0,\"\\n  Show Wormhole\\n\"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"showWormhole\"]]],null,{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"to\",\"class\"],[\"some-destination\",\"blue-box\"]],{\"statements\":[[0,\"    Testing\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/manual-target/template.hbs" } });
});
define('dummy/pods/scenarios/nested-wormholes/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      showInner: function showInner() {
        this.toggleProperty('showingInner');
      }
    }
  });
});
define("dummy/pods/scenarios/nested-wormholes/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wI3GeWLu", "block": "{\"statements\":[[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"green-box\"]],{\"statements\":[[0,\"  First Wormhole\\n\\n\"],[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],{\"statements\":[[0,\"    Second Wormhole\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"liquid-wormhole\"],null,[[\"class\"],[\"red-box\"]],{\"statements\":[[0,\"  Third Wormhole\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/nested-wormholes/template.hbs" } });
});
define("dummy/pods/scenarios/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pT4t8M/X", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/template.hbs" } });
});
define("dummy/pods/upgrading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "O+8RjVnw", "block": "{\"statements\":[[11,\"h1\",[]],[15,\"id\",\"upgrading-from-liquid-wormhole-v1\"],[13],[0,\"Upgrading from Liquid Wormhole v1\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"One of the overall goals of Liquid Wormhole v2 was to simplify the API and bring\\nit more inline with vanilla Liquid Fire. Several breaking changes have been\\nmade, and this article is meant as a guide to summarize them and describe an\\nupgrade path.\"],[14],[0,\"\\n\"],[11,\"h2\",[]],[15,\"id\",\"removing-the-to-attribute-and-target-helper\"],[13],[0,\"Removing the \"],[11,\"code\",[]],[13],[0,\"to\"],[14],[0,\" attribute and \"],[11,\"code\",[]],[13],[0,\"target\"],[14],[0,\" helper\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"In v2, the \"],[11,\"code\",[]],[13],[0,\"to\"],[14],[0,\" attribute is no longer needed by default, and \"],[11,\"code\",[]],[13],[0,\"target\"],[14],[0,\" is not\\nused to match transitions. You can either change \"],[11,\"code\",[]],[13],[0,\"to\"],[14],[0,\" to \"],[11,\"code\",[]],[13],[0,\"stack\"],[14],[0,\", or add it to\\nyour wormhole's classes. You'll then be able to match it in your transitions\\nfile using \"],[11,\"code\",[]],[13],[0,\"this.matchSelector\"],[14],[0,\" or \"],[11,\"code\",[]],[13],[0,\"this.hasClass\"],[14],[0,\" respectively.\"],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"id\",\"old-\"],[13],[0,\"Old:\"],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-hbs\"],[13],[0,\"{{liquid-wormhole to=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"popup\\\"\"],[14],[0,\"}}\\n\"],[14],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-js\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"target\"],[14],[0,\"(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'popup'\"],[14],[0,\")\\n);\\n\"],[14],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"id\",\"new-\"],[13],[0,\"New:\"],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-hbs\"],[13],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{liquid-wormhole class=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"popup\\\"\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[0,\"\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-comment\"],[13],[0,\"<!-- or -->\"],[14],[0,\"\\n\\n\"],[14],[11,\"span\",[]],[15,\"class\",\"hljs-template-variable\"],[13],[0,\"{{liquid-wormhole stack=\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"\\\"popup\\\"\"],[14],[0,\"}}\"],[14],[11,\"span\",[]],[15,\"class\",\"xml\"],[13],[14],[0,\"\\n\"],[14],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-js\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".hasClass(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'popup'\"],[14],[0,\")\\n);\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-comment\"],[13],[0,\"// or\"],[14],[0,\"\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".matchSelector(\"],[11,\"span\",[]],[15,\"class\",\"hljs-string\"],[13],[0,\"'#popup'\"],[14],[0,\")\\n);\\n\"],[14],[14],[0,\"\\n\"],[11,\"h2\",[]],[15,\"id\",\"replacing-the-onopenwormhole-and-onclosewormhole-helpers\"],[13],[0,\"Replacing the \"],[11,\"code\",[]],[13],[0,\"onOpenWormhole\"],[14],[0,\" and \"],[11,\"code\",[]],[13],[0,\"onCloseWormhole\"],[14],[0,\" helpers\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"The \"],[11,\"code\",[]],[13],[0,\"onOpenWormhole\"],[14],[0,\" and \"],[11,\"code\",[]],[13],[0,\"onCloseWormhole\"],[14],[0,\" helpers are deprecated in favor of\\nusing the standard \"],[11,\"code\",[]],[13],[0,\"toValue\"],[14],[0,\", \"],[11,\"code\",[]],[13],[0,\"fromValue\"],[14],[0,\", and \"],[11,\"code\",[]],[13],[0,\"betweenValues\"],[14],[0,\" matcher\\nfunctions. Whenever a wormhole is opening for the first time, the \"],[11,\"code\",[]],[13],[0,\"fromValue\"],[14],[0,\"\\nwill be \"],[11,\"code\",[]],[13],[0,\"null\"],[14],[0,\", and whenever a wormhole is closing, the so will the \"],[11,\"code\",[]],[13],[0,\"toValue\"],[14],[0,\".\"],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"id\",\"old-\"],[13],[0,\"Old:\"],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-js\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  onOpenWormhole()\\n);\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  onCloseWormhole()\\n);\\n\"],[14],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"id\",\"new-\"],[13],[0,\"New:\"],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-js\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue(\"],[11,\"span\",[]],[15,\"class\",\"hljs-literal\"],[13],[0,\"true\"],[14],[0,\")\\n);\\n\\n\"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue(\"],[11,\"span\",[]],[15,\"class\",\"hljs-literal\"],[13],[0,\"false\"],[14],[0,\")\\n);\\n\"],[14],[14],[0,\"\\n\"],[11,\"h2\",[]],[15,\"id\",\"replacing-tovalue-and-fromvalue-matchers\"],[13],[0,\"Replacing \"],[11,\"code\",[]],[13],[0,\"toValue\"],[14],[0,\" and \"],[11,\"code\",[]],[13],[0,\"fromValue\"],[14],[0,\" matchers\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"Wormholes are no longer directly passed in to their transition matchers.\\nInstead, the \"],[11,\"code\",[]],[13],[0,\"value\"],[14],[0,\" property for a wormhole is passed in. You can move any of\\nthe properties that you had into a \"],[11,\"code\",[]],[13],[0,\"hash\"],[14],[0,\" helper and everything should work.\\nRemember, you may need to perform null checking.\"],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"id\",\"old-\"],[13],[0,\"Old:\"],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-hbs\"],[13],[0,\"{{liquid-wormhole index=1}}\\n\"],[14],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-js\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue(\"],[11,\"span\",[]],[15,\"class\",\"hljs-function\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-params\"],[13],[0,\"(toValue, fromValue)\"],[14],[0,\" =>\"],[14],[0,\" toValue.index > oldValue.index)\\n);\\n\"],[14],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"id\",\"new-\"],[13],[0,\"New:\"],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-hbs\"],[13],[0,\"{{liquid-wormhole value=(\"],[11,\"span\",[]],[15,\"class\",\"hljs-name\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-builtin-name\"],[13],[0,\"hash\"],[14],[14],[0,\" index=1)}}\\n\"],[14],[14],[0,\"\\n\"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"lang-js\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".transition(\\n  \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"this\"],[14],[0,\".toValue(\"],[11,\"span\",[]],[15,\"class\",\"hljs-function\"],[13],[11,\"span\",[]],[15,\"class\",\"hljs-params\"],[13],[0,\"(toValue, fromValue)\"],[14],[0,\" =>\"],[14],[0,\" {\\n    \"],[11,\"span\",[]],[15,\"class\",\"hljs-keyword\"],[13],[0,\"return\"],[14],[0,\" toValue && fromValue && toValue.index > oldValue.index;\\n  })\\n);\\n\"],[14],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/upgrading/template.hbs" } });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('docs', function () {
      this.route('parameters');
      this.route('stacks');
      this.route('destinations');
      this.route('components');
    });
    this.route('upgrading');
    this.route('scenarios', function () {
      this.route('manual-destinations');
      this.route('nested-wormholes');
      this.route('component-in-wormhole');
      this.route('actions-in-wormhole');
      this.route('liquid-fire-in-wormhole');
    });
  });

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/fastboot', ['exports', 'ember'], function (exports, _ember) {

  var alias = _ember['default'].computed.alias;
  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Service.extend({
    cookies: alias('_fastbootInfo.cookies'),
    headers: alias('_fastbootInfo.headers'),
    host: computed(function () {
      return this._fastbootInfo.host();
    }),
    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    })
  });
});
/* global FastBoot */
define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/action", "liquid-fire/running-transition", "liquid-fire/transition-map", "ember-weakmap"], function (exports, _liquidFireAction, _liquidFireRunningTransition, _liquidFireTransitionMap, _emberWeakmap) {

  var wormholeActionMap = new _emberWeakmap["default"]();

  exports["default"] = _liquidFireTransitionMap["default"].extend({
    transitionFor: function transitionFor(conditions) {
      if (conditions.matchContext && conditions.matchContext.helperName === 'liquid-wormhole' || conditions.helperName === 'liquid-wormhole') {

        var versions = conditions.versions;

        conditions.versions = versions.map(function (version) {
          return version.value || version;
        });
        conditions.parentElement = conditions.parentElement.find('.liquid-wormhole-element');
        conditions.firstTime = 'no';

        var rule = this.constraintsFor(conditions).bestMatch(conditions);
        var action = undefined;

        if (rule) {
          if (wormholeActionMap.has(rule)) {
            action = wormholeActionMap.get(rule);
          } else {
            action = new _liquidFireAction["default"]('wormhole', [{ use: rule.use }]);
            action.validateHandler(this);

            wormholeActionMap.set(rule, action);
          }
        } else {
          action = this.defaultAction();
        }

        return new _liquidFireRunningTransition["default"](this, versions, action);
      } else {
        return this._super(conditions);
      }
    }
  });
});
define('dummy/services/liquid-wormhole', ['exports', 'liquid-wormhole/services/liquid-wormhole'], function (exports, _liquidWormholeServicesLiquidWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeServicesLiquidWormhole['default'];
    }
  });
});
define('dummy/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.hasClass('red-box'), this.use('fade'));

    this.transition(this.hasClass('hello-world'), this.toValue(true), this.use('to-down', { duration: 400, easing: [200, 22] }), this.reverse('to-right', { duration: 400, easing: [200, 22] }));

    this.transition(this.matchSelector('#modal-dialog'), this.toValue(false), this.use('to-up'), this.reverse('fade'));

    this.transition(this.matchSelector('#modal-dialog'), this.toValue(function (toValue, fromValue) {
      return toValue > fromValue;
    }), this.use('to-right'));

    this.transition(this.hasClass('fly-to'), this.toValue(true), this.use('to-left', { duration: 2000, easing: [200, 22] }), this.reverse('to-right', { duration: 2000, easing: [200, 22] }));

    this.transition(this.hasClass('modal-backdrop'), this.use('fade'));

    this.transition(this.hasClass('outer-wormhole'), this.use('to-down', { duration: 400, easing: [200, 22] }));

    this.transition(this.hasClass('middle-wormhole'), this.use('to-down', { duration: 400, easing: [200, 22] }));

    this.transition(this.hasClass('inner-wormhole'), this.use('to-down', { duration: 300, easing: [500, 22] }));

    this.transition(this.hasClass('blue-box'), this.use('to-down', { duration: 1500 }));
  };
});
define('dummy/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('dummy/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('dummy/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('dummy/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('dummy/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('dummy/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('dummy/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('dummy/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('dummy/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('dummy/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('dummy/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('dummy/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('dummy/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('dummy/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('dummy/transitions/wormhole', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = wormhole;

  function wormhole(_ref) {
    var _this = this;

    var use = _ref.use;

    var oldWormholeElement = undefined,
        newWormholeElement = undefined;

    if (this.oldElement) {
      oldWormholeElement = this.oldElement.find('.liquid-wormhole-element:last-child');

      this.oldElement = null;

      if (oldWormholeElement.length > 0) {
        var newChild = oldWormholeElement.clone();
        newChild.addClass('liquid-wormhole-temp-element');

        oldWormholeElement.css({ visibility: 'hidden' });
        oldWormholeElement.find('.liquid-child').css({ visibility: 'hidden' });

        var offset = oldWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(oldWormholeElement.parent());
        this.oldElement = newChild;
      }
    }

    if (this.newElement) {
      newWormholeElement = this.newElement.find('.liquid-wormhole-element:last-child');

      this.newElement = null;

      if (newWormholeElement.length > 0) {
        var newChild = newWormholeElement.clone();

        newWormholeElement.css({ visibility: 'hidden' });
        newWormholeElement.find('.liquid-child').css({ visibility: 'hidden' });

        var offset = newWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(newWormholeElement.parent());
        this.newElement = newChild;
      }
    }

    var animation;
    if (typeof use.handler === 'function') {
      animation = use.handler;
    } else {
      animation = context.lookup(use.name);
    }

    return animation.apply(this, use.args)['finally'](function () {
      if (_this.oldElement && oldWormholeElement) {
        _this.oldElement.remove();
        oldWormholeElement.css({ visibility: 'visible' });
        oldWormholeElement.find('.liquid-child').css({ visibility: 'visible' });
      }
      if (_this.newElement && newWormholeElement) {
        _this.newElement.remove();
        newWormholeElement.css({ visibility: 'visible' });
        newWormholeElement.find('.liquid-child').css({ visibility: 'visible' });
      }
    });
  }

  ;
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"dummy","podModulePrefix":"dummy/pods","environment":"production","rootURL":"/liquid-wormhole","locationType":"hash","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"contentSecurityPolicy":{"default-src":"'none'","script-src":"'self'","font-src":"'self' https://maxcdn.bootstrapcdn.com","connect-src":"'self'","img-src":"'self'","style-src":"'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com","media-src":"'self'"},"APP":{"name":"liquid-wormhole","version":"2.0.7+84372938","autoboot":false},"exportApplicationGlobal":false}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */


define('~fastboot/app-factory', ['dummy/app', 'dummy/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
