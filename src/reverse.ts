export type CommonType = string | number;

export function reverse(str: CommonType): string
{
    if (typeof str === 'number') str = '' + str;
    return [...str].reverse().join('');
}

// Functions that reference internal types must not be exported...
function foo(a: InternalInterface)
{
    return a.stuff;
}

// ... but exported functions can use the types internally
export function bar()
{
    const a: NonAugmentingInternalType = 'foo';
    const b: InternalInterface = { stuff: [ a ], thing: 2 };
    return foo(b)[0];
}
