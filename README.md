## pre-req; enable cli deployment to github pages
* `npm i -g angular-cli-ghpages`

## build for production; incl correct base href
* `ng build --prod --base-href https://mobelman.github.io/site/`
* `ng build --prod --base-href http://www.mobelman.com/site/`

## deploy to github pages
* `ngh`
* `ngh -S`

## access via
* https://mobelman.github.io
* https://mobelman.github.io/site
* http://mobelman.com
* http://mobelman.com/site
* http://www.mobelman.com
* http://www.mobelman.com/site

## misc
* https://pages.github.com/
* https://www.npmjs.com/package/gh-pages
* https://coursetro.com/posts/code/64/How-to-Deploy-an-Angular-App-(Angular-4)
* https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b
* https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/
* https://blog.thecodecampus.de/angular-2-include-google-analytics-event-tracking/
