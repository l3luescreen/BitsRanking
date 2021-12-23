module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],
    theme: {
      extend: {
        colors: {
          'twitch': '#6441a5',
          'twitch-darker': '#503484',
          'twitch-lighter': '#815fc0',
          'twitch-text': '#483d8b'
        }
      },
    },
    plugins: [],
  }