import {
  click,
  find,
  findAll,
  settled,
  visit
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import { module, test } from 'qunit';

function visibility(selector) {
  return window.getComputedStyle(find(selector)[0]).visibility;
}

module('Acceptance: Scenarios', function(hooks) {
  setupApplicationTest(hooks);

  test('components are not destroyed until animation has finished', async function(assert) {
    await visit('/scenarios/component-in-wormhole');

    await click('[data-test-toggle-wormhole]');
    assert.dom('.liquid-wormhole-element').hasText('testing123', 'component markup still exists');
  });

  test('components are visible during the transition', async function(assert) {
    await visit('/scenarios/component-in-wormhole');
    setTimeout(() => {
      assert.equal(visibility('.liquid-wormhole-element:first'), 'hidden');
      assert.equal(visibility('.liquid-wormhole-element:last'), 'visible');
    }, 100);

    await settled();
    await click('[data-test-toggle-wormhole]');
    setTimeout(() => {
      assert.equal(visibility('.liquid-wormhole-element:first'), 'hidden');
      assert.equal(visibility('.liquid-wormhole-element:last'), 'visible');
    }, 100);

    await settled();
  });

  test('templates still have action context once rendered', async function(assert) {
    await visit('/scenarios/actions-in-wormhole');

    assert.dom('.default-liquid-destination .liquid-wormhole-element').exists({ count: 1 }, 'it has a wormhole');

    await click('[data-test-toggle-wormhole]');

    assert.dom('.default-liquid-destination .liquid-wormhole-element').doesNotExist('it closed the wormhole');
  });

  test('nested wormholes work properly', async function(assert) {
    await visit('/scenarios/nested-wormholes');

    const wormholes = findAll('.liquid-wormhole-element');

    const firstWormhole = wormholes[0];
    const secondWormhole = wormholes[1];
    const thirdWormhole = wormholes[2];

    assert.dom(firstWormhole).hasClass('green-box', 'First wormhole renders in correct order');
    assert.dom(secondWormhole).hasClass('blue-box', 'Second wormhole renders in correct order');
    assert.dom(thirdWormhole).hasClass('red-box', 'Third wormhole renders in correct order');
  });

  test('destination container has correct class if wormholes are present', async function(assert) {
    assert.ok(findAll('.default-liquid-destination.has-wormholes').length === 0, 'No wormholes class');

    await visit('/scenarios/nested-wormholes');

    assert.ok(findAll('.default-liquid-destination.has-wormholes').length > 0, 'Has wormholes class');
  });

  test('other liquid fire functionality can exist in a wormhole in the default destination', async function(assert) {
    await visit('/scenarios/liquid-fire-in-wormhole');

    assert.dom('#content-box').exists('the content box is on screen');
    assert.equal(find('#showing-other').css('visibility'), 'visible', 'the other is visible');
    assert.ok(!findAll('#not-showing-other').length, 'the not other is hidden');

    await click('[data-test-toggle-inner]');

    assert.equal(find('#not-showing-other').css('visibility'), 'visible', 'the not other is visible');
    assert.ok(!findAll('#showing-other').length, 'the other is hidden');
  });

  // https://github.com/pzuraq/liquid-wormhole/issues/60
  test('wormhole does not contain duplicate child id\'s', async function(assert) {
    await visit('/scenarios/password-input-child');
    setTimeout(() => {
      let passwordInput1 = findAll('.liquid-wormhole-element:first #my-password-input').length;
      let textInput1 = findAll('.liquid-wormhole-element:first #my-text-input').length;
      let buttonInput1 = findAll('.liquid-wormhole-element:first #my-button').length;

      let passwordInput2 = findAll('.liquid-wormhole-element:last #my-password-input').length;
      let textInput2 = findAll('.liquid-wormhole-element:last #my-text-input').length;
      let buttonInput2 = findAll('.liquid-wormhole-element:last #my-button').length;

      assert.ok(passwordInput1, 'password input contains original id');
      assert.ok(textInput1, 'text input contains original id');
      assert.ok(buttonInput1, 'button contains original id');

      assert.notOk(passwordInput2, 'cloned password input does not contain duplicate id');
      assert.notOk(textInput2, 'cloned text input does not contain duplicate id');
      assert.notOk(buttonInput2, 'cloned button does not contain duplicate id');
    }, 100);

    await settled();
    await click('[data-test-toggle-wormhole]');
    setTimeout(() => {
      let passwordInput1 = findAll('.liquid-wormhole-element:first #my-password-input').length;
      let textInput1 = findAll('.liquid-wormhole-element:first #my-text-input').length;
      let buttonInput1 = findAll('.liquid-wormhole-element:first #my-button').length;

      let passwordInput2 = findAll('.liquid-wormhole-element:last #my-password-input').length;
      let textInput2 = findAll('.liquid-wormhole-element:last #my-text-input').length;
      let buttonInput2 = findAll('.liquid-wormhole-element:last #my-button').length;

      assert.ok(passwordInput1, 'password input contains original id');
      assert.ok(textInput1, 'text input contains original id');
      assert.ok(buttonInput1, 'button contains original id');

      assert.notOk(passwordInput2, 'cloned password input does not contain duplicate id');
      assert.notOk(textInput2, 'cloned text input does not contain duplicate id');
      assert.notOk(buttonInput2, 'cloned button does not contain duplicate id');

    }, 100);

    await settled();
  });
});
