module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": false,
      "modules": true
    }
  },
  "rules": {
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single", {
      "allowTemplateLiterals": true
    }],
    "semi": ["error", "always"],
    "no-console": 0
  }
};
