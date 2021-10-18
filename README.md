# Chrome Extension Webpack+Svelte Boilerplate

I am starting a new project and had to create a boilerplate for Webpack and Svelte chrome extension, so I decided to share the boilerplate.

## Start Here

- [Installing Dependencies](#installing-dependencies)
- [Developing](#developing)
  - [Local Running](#local-running)
  - [Lint](#lint)
- [Building](#building)

## Installing Dependencies

`npm install`

## Developing

When developing you can start runnign the [Local Running](#local-running) command and any changes you make in the code will reflect on the dist folder.

There is also a pre configured lint, you can change the rules at .eslintre file. To run just run the proper command at [Lint](#lint) section.

### Local Running

`npm run start`

### Lint

`npm run lint`

## Building

The build will generate the production ready files, it has a few differences from dev, since it minifyes the files to make it more lightweight. Just run the following command and it will output to your dist folder, then you can just zip it and send to Chrome store.

`npm run dist`

# Have fun!
