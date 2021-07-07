module.exports = {
  // assumptions: {
  //   setPublicClassFields: true,
  // },
  plugins: [
    require.resolve('react-hot-loader/babel'),
    require.resolve("@babel/plugin-proposal-class-properties"),
  ]
}
