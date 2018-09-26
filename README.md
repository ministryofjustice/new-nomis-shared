# NEW NOMIS shared components

# Run
yarn storybook

# Use
The package has been published to npm, install by running yarn add --dev new-nomis-shared-components

The components haven't been transpiled so jest will complain unless we tell it to run the files through babel-jest. We can do this by adding the following to the jest config section in packages.json or the config.js file. 

 "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\](?!(new-nomis-shared-components)/).+\\.(js|jsx|mjs)$"
  ]

