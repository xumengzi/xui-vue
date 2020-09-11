const bar = () => console.log('bar');

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 100)
  setImmediate(()=>{
    console.log('setImmediate')
  })
  process.nextTick(()=>{
    console.log('nexttick')
  })
  baz()
}

foo()

/*
foo
baz
应该在 baz 之后、bar 之前
bar
*/