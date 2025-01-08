# docusaurus-plugin-comentario-v3

Use [Comentario](https://gitlab.com/comentario/comentario) in your [Docusaurus](https://github.com/facebook/docusaurus) site.

Requires a running Comentario server.

Tested with Docusaurus v3.5.2 and latest version of Comentario

## Install

```zsh
yarn add docusaurus-plugin-comentario-v3
```

or

```zsh
npm install docusaurus-plugin-comentario-v3
```

## Usage

```javascript
// In your docusaurus.config.js
module.exports = {
  plugins: [
      [
          'docusaurus-plugin-comentario-v3',
          {
              server: 'https://comentario.example.com',
              autoNonInteractiveSSO: 'false',
              noFonts: 'false',
              cssOverride: 'false',
          },
      ],
  ],
};
```

## License

MIT
