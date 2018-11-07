module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CollaboratorField',
      externals: {
        react: 'React'
      }
    }
  }
}
