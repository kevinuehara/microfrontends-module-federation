const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  devServer: {
    port: 3000,
  },
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "pokemonList",
          filename: "remoteEntry.js",
          exposes: {
            "./PokemonList": "./src/components/PokemonList",
            "./Pokemon": "./src/atoms/Pokemon.ts",
          },
          shared: {
            ...deps,
            jotai: {
              singleton: true,
              requiredVersion: deps.jotai,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});
