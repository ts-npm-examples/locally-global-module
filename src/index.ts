import padLeft from 'left-pad';
import { CommonType, reverse } from './reverse';

export { CommonType } from './reverse';

export function padRight(str: CommonType, len: number, ch?: CommonType)
{
    return reverse( padLeft(reverse(str), len, ch) );
}
