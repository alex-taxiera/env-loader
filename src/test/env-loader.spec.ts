import test from 'ava'
import sinon from 'sinon'

import * as secrets from '../lib/util/load-secrets'

import {
  load
} from '../lib'

test('loads secrets into env', (t) => {
  const SECRET = 'secret'
  const secretStub = sinon.stub(secrets, 'loadSecrets')
    .callsFake(() => ({ SECRET }))
  const OTHER = 'ONE'
  process.env = {
    ...process.env,
    OTHER
  }

  load()

  t.is(process.env.OTHER, OTHER)
  t.is(process.env.SECRET, SECRET)
  t.true(secretStub.calledOnceWithExactly())
})
