import { randEmailProvider } from '../lib/email-provider';
import { data as providers } from '../lib/email-provider.json';

describe('email provider', () => {
  it('should return a valid value from provider default array', () => {
    const result = randEmailProvider();
    expect(providers).toContain(result);
  });

  describe('provider is passed', () => {
    describe('value is a single string', () => {
      it('should return the passed provider', () => {
        const providers = 'someprodiver.com';
        const result = randEmailProvider({ providers });
        expect(result).toContain(providers);
      });
    });

    describe('value is an array of strings', () => {
      it('should return a value from the list', () => {
        const providers = [
          'someprodiver.com',
          'testdomain.net',
          'hitester.com',
        ];
        const result = randEmailProvider({ providers });
        expect(providers).toContain(result);
      });
    });
  });
});
