import {
  loadSecrets
} from './util/load-secrets'

export function load (): void {
  const secrets = loadSecrets()

  process.env = {
    ...process.env,
    ...secrets
  }
}
