# TDF Staging Site
Staging area for The Data Factory Website

## Set Up
**You should have Git, Node, NPM and Gulp installed**
1. Run `sudo npm init` and agree with all the configurations.
2. Run `sudo npm install` to install the task dependencies.
3. You can run `sudo npm-check-updates -u` or `sudo ncu -u` to update any old packages.

## Gulp Tasks
Running `gulp` watches for changes to the .html, .scss, .js and image files in the 'src' folder and compiles them into the root folder.

*  `css-tasks` compiles the .scss into CSS and minifies it into the css folder.
*  `js-scripts` concatenates all the .js files in the js folder and minifies them into the js folder.
*  `image-minify` watches for changes to PNG, JPEG, GIF and SVG images and compresses them into the images folder.
*  `inlinesource` adds inline code to script, link and image tags that contain the 'inline' attribute .
*  `service-worker` generates a service worker and precaches static resources such as logos, images and embedded fonts.
