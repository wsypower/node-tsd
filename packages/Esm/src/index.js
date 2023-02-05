import pck from '../package.json' assert { type: 'json' }
import c from './c.cjs'
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const testPck = require('../package.json');
const testCjs = require('./c.cjs');
console.log(testCjs)
console.log(c)

console.log(pck)
