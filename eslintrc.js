module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": ["eslint:recommended", "next", "plugin:react/recommended"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [ "react", "import"],
    "rules": {
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "@next/next/no-img-element": "off",
        "react/no-unknown-property": "off",
        "no-unused-vars": "off",
        "react/prop-types": "off"
    } 
};
