# Pokémon Micro Frontends Module Federation

This project was done to introduce the Micro Front-ends using the concept of Runtime Sharing Components and Module Federation with Webpack 5.

Also, the project is using `Jotai` to manage the state of MF.

The project contains two types of projects using React and the Module Federation. One of them is using `Vite` with `originjs/vite-plugin-federation` (vite plugin to configure module federation).

The other is using `Create React App (CRA)` and `Craco` to extends the Webpack default of CRA and configure the module federation.

## The Project

We have two packages, one of them using vite and other using CRA. Each of one contains two projects. The host and remote app.

The "host" is the `pokemons-home` will consume the micro front-end.

The "remote" is the `pokemon-list` where it contains the MF that will be exposed and the state using `jotai` to manage state of MF.

### The Micro Front-end

![dsd]('images/microfront.png')
