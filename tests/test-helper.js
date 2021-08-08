import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import setupSinon from 'ember-sinon-qunit';
import { setup } from 'qunit-dom';
import * as QUnit from 'qunit';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

setupSinon();

start();
