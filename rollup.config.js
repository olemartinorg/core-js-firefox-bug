import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs-alternate';

export default {
    input: 'input.js',
    output: [{
        file: 'output.js',
        format: 'iife',
    }],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            include: ['input.js'],
            presets: [
                ['@babel/preset-env', {
                    useBuiltIns: 'usage',
                    corejs: {
                        version: 3,
                    },
                }],
            ],
        }),
        resolve(),
        commonjs(),
    ],
};
