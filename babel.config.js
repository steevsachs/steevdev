module.exports = (api) => {
  const isTest = api.env('test')

  return {
    plugins: [].filter(Boolean),
    presets: [['react-app', { flow: false, typescript: true }]],
  }
}
