import commonjs from '@rollup/plugin-commonjs';
import watch from 'rollup-plugin-watch';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import eslint from '@rollup/plugin-eslint';
import inputConfig from './input-config';
import fs from 'fs';

const config = {
    input: {
        wcui: 'src/index.js',
        ...inputConfig,
    },
    output: [
        {
            dir: 'dist',
            sourcemap: true,
            entryFileNames: `[name].js`,
            chunkFileNames: `[name].js`,
            assetFileNames: `[name].js`,
        },
    ],
    plugins: [
        eslint(),
        sass({
            output(styles) {
                fs.stat('../dist', (err, stats) => {
                    if (!stats) {
                        fs.mkdirSync('../dist');
                    }

                    fs.writeFileSync(`dist/wcui.css`, styles);
                });
            },
        }),
        commonjs({
            sourceMap: true,
            name: `wwww.js`,
        }),
        nodeResolve(),
        watch({dir: 'src'}),
    ],
};

export default config;
