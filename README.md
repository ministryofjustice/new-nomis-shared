# NEW NOMIS shared components

# Install
yarn add --dev new-nomis-shared-components

# Jest config
The components haven't been transpiled so jest will complain unless we tell it to run the files through babel-jest. We can do this by adding the following to the jest config section in packages.json or the config.js file. 

 "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\](?!(new-nomis-shared-components)/).+\\.(js|jsx|mjs)$"
  ]
  
 # Development 
 To debug the components run yarn storybook
 https://github.com/storybooks/storybook
