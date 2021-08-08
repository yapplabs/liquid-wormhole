import sinon from 'sinon';
import { A } from '@ember/array';

function transitionMap(app) {
  return app.owner.lookup('service:liquid-fire-transitions');
}

function transitionName(name) {
  return sinon.match(function(value) {
    return value.animation ? value.animation.name === name : false;
  }, 'expected transition ' + name);
}

export function ranTransition(app, assert, name) {
  assert.ok(transitionMap(app).transitionFor.returned(transitionName(name)), `expected transition ${name}`);
}

export function noTransitionsYet(app, assert) {
  var tmap = transitionMap(app);
  var ranTransitions = A(tmap.transitionFor.returnValues);
  assert.ok(!ranTransitions.any((transition) => transition.animation !== tmap.defaultAction()), 'expected no transitions');
}

export function injectTransitionSpies(app) {
  var tmap = transitionMap(app);
  sinon.spy(tmap, 'transitionFor');
}
