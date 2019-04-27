import { describe, it } from 'mocha';
import { expect } from 'chai';

import { padRight, bar } from '../dist';

describe('pad right', () =>
{
    it('works for numbers', () =>
    {
        const a = 42;
        const b = padRight(a, 3, 0);
        expect(b).equals('420');
    });

    it('works for strings', () =>
    {
        const a = 'xD';
        const b = padRight(a, 6, 'D');
        expect(b).equals('xDDDDD');
    });
});

describe('internal types', () =>
{
    it('just works', () =>
    {
        expect(bar()).equals('foo');
    });
});
