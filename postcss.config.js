import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
    plugins: {
        '@tailwindcss/postcss': {}, // الجديد في v4
        autoprefixer: {},
    },
};
