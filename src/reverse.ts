export type CommonType = string | number;

export function reverse(str: CommonType): string
{
    if (typeof str === 'number') str = '' + str;
    return [...str].reverse().join('');
}
