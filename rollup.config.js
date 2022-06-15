import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'

export default [
	{
		input: 'src/main.js',
		output: {
			file: pkg.browser,
			format: 'umd',
			name: 'Gradient',
		},
		plugins: [
			resolve(),
			commonjs(),
		],
	},
	{
		input: 'src/main.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
			{
				file: pkg.unpkg,
				format: 'iife',
				name: 'Gradient',
				plugins: [
					terser(),
				],
				sourcemap: true,
			},
		],
	},
]
