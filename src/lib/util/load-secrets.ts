import {
  readdirSync,
  readFileSync
} from 'fs'
import {
  join
} from 'path'

export function loadSecrets (dir = '/run/secrets'): {[s: string]: string} {
  const secrets = readdirSync(dir)
  const values = secrets.map((path) => readFileSync(join(dir, path), 'utf-8'))

  return secrets.reduce((ax, dx, cx) => {
    ax[dx] = values[cx]

    return ax
  }, {} as {[s: string]: string})
}
