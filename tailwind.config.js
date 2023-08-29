const config = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        'this-july': ['"This July"', 'sans-serif'],
        'jost' : ['"Jost"', 'sans-serif'],
        'archivo' : ['"Archivo"', 'sans-serif'],
        'space-grotesk' : ['"SpaceGrotesk"', 'sans-serif'],
        'loversQuarrel' : ['"Lovers Quarrel"', 'sans-serif']
      },
    },
  },
  "compilerOptions": {
    "skipLibCheck": true
  },
  plugins: [],
};

// eslint-disable-next-line no-undef
module.exports = config;
