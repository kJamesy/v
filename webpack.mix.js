const mix = require('laravel-mix');

require('dotenv').config();

const theme = process.env.WP_THEME;

mix.setResourceRoot('../');
mix.setPublicPath(path.normalize(`public/themes/${theme}/assets`));

mix.js('resources/assets/scripts/app.js', 'js');
mix.sass('resources/assets/styles/app.scss', 'css').sourceMaps();
mix.sass('resources/assets/styles/admin.scss', 'css').sourceMaps();

mix.version();
// mix.copy('resources/other-assets', `public/themes/${theme}/images`);

mix.browserSync({
    proxy: 'onano.jamesy',
    files: [
        `public/themes/${theme}/**/*.php`,
        `public/themes/${theme}/assets/**/*.js`,
        `public/themes/${theme}/assets/**/*.css`
    ]
});