YOC.viewController = function (spec, my) {
  'use strict';

  var that = {},
    outlets = {},

    add_outlet = function (spec) {
      outlets[spec.name] = spec.dest;
    },

    get_outlet = function (name) {
      return outlets[name];
    },

    track = function (category, action, opt_label, opt_value, opt_noninteraction) {
      _gaq.push(['_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);
      console.log('Tracking. Category = ' + category + ', action = ' + action);
    };

  my = my || {};

  that.add_outlet = add_outlet;
  that.get_outlet = get_outlet;
  that.track = track;

  return that;
};