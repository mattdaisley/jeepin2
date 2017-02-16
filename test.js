var merge = require('merge'), // npm install -g merge
    original, cloned;

console.log(

    merge({ one: 'hello', deep: { a: 'one', b: 'two' } }, { one: 'world' })

); // {"one": "hello", "two": "world"}

original = { x: { y: 1 } };

cloned = merge(true, original);

cloned.x.y++;

console.log(original.x.y, cloned.x.y); // 1, 2