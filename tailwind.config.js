const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        './src/**/*.njk',
        './src/**/*.svg',
        './src/**/*.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                ...defaultTheme.fontFamily,
                sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Arial"]
            }
        }
    },
    variants: {},
    corePlugins: {
        container: false,
    },
    plugins: [
        require('tailwind-bootstrap-grid')({
            gridGutterWidth: '32px',
        }),
    ]
}