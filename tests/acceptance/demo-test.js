import { click, find, visit } from '@ember/test-helpers';
import {
  injectTransitionSpies,
  ranTransition,
  noTransitionsYet
} from '../helpers/integration';

import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance: Demos', function(hooks) {
  setupApplicationTest(hooks);
  hooks.beforeEach(function() {
    // Conceptually, integration tests shouldn't be digging around in
    // the container. But animations are slippery, and it's easier to
    // just spy on them to make sure they're being run than to try to
    // observe their behavior more directly.
    injectTransitionSpies(this);
  });

  hooks.afterEach(function() {
    let container = find('.liquid-target-container');
    container && container.remove();
  });

  test('destination container is cleaned when empty', async function(assert) {
    await visit('/docs');
    await click('#hello-world-button');
    await click('#hello-world-button');

    assert.dom('.default-liquid-destination .liquid-destination-stack').doesNotExist('it\'s empty');
  });

  test('basic liquid-wormhole works correctly and can determine context', async function(assert) {
    await visit('/docs');
    noTransitionsYet(this, assert);

    await click('#hello-world-button');
    await this.pauseTest();
    assert.dom('.default-liquid-destination .liquid-wormhole-element').exists({ count: 1 }, 'it exists');
    ranTransition(this, assert, 'wormhole');

    await click('#hello-world-button');
    assert.dom('.default-liquid-destination .liquid-wormhole-element').doesNotExist('it closed');
    ranTransition(this, assert, 'wormhole');
  });
});
