module.exports = function foo(context, options) {
  if (!options) {
    throw new Error(
        'You need to specify options in docusaurus.config.js',
    );
  }

  const {
    server,
    comentarioScriptUrl = server + '/comentario.js',
  } = options;

  if (!server) {
    throw new Error('You need to specify comentario server in docusaurus.config.js');
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-comentario',
    getClientModules() {
      return [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              defer: true,
              src: comentarioScriptUrl,
            },
          },
        ],
      };
    },
  };
};
