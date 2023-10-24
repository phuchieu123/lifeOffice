module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          api: './app/api',
          app: './app',
          components: './app/components',
          containers: './app/containers',
          localization: './app/localization',
          utils: './app/utils',
          underscore: 'lodash',
        },
      },
    ],
  ],
};
