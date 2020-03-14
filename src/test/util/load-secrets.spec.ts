import test from 'ava'
import {
  join
} from 'path'
import {
  promises as fs
} from 'fs'

import {
  loadSecrets
} from '../../lib/util/load-secrets'

test('returns the secret file data', async (t) => {
  const x = loadSecrets(join(__dirname, '../resources/secrets'))

  const expected = await fs.readFile(
    join(__dirname, '../resources/secrets/test'),
    'utf-8'
  )

  t.is(x.test, expected)
  t.is(x.no, undefined)
})
