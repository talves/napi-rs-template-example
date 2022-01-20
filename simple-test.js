const { plus100, getCwd, add } = require('./index')

console.assert(plus100(0) === 100, 'Simple test failed (plus100)')
console.assert(add(0, 20) === 20, 'Simple test failed (add)')

console.info('Simple test passed')

getCwd((result) => {
  console.info('calling from:', result)
})
