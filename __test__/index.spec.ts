import test from 'ava'

import { plus100, add } from '../index'

test('plus100 functions from native code', (t) => {
  const fixture = 42
  t.is(plus100(fixture), fixture + 100)
})

test('add function from native code', (t) => {
  t.is(add(42, 100), 142)
})
