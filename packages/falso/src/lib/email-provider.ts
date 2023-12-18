import { FakeOptions, fake } from './core/core';
import { data } from './email-provider.json';

/**
 * Generate a random email provider.
 *
 * @category Internet
 *
 * @example
 *
 * randEmailProvider()
 *
 * @example
 *
 * randEmailProvider({ length: 10 })
 *
 * @example
 * // using a single string
 * randEmailProvider({ providers: 'myprovider.com' })
 * // using an array
 * randEmailProvider({ providers: ['niceprovider.com', 'otherdomain.com'] })
 *
 */
export function randEmailProvider<Options extends FakeOptions = never>(
  providers?: string | string[],
  options?: Options
) {
  let providerList = data;

  if (providers) {
    if (!Array.isArray(providers)) return providers;
    providerList = providers;
  }

  return fake(providerList, options);
}
