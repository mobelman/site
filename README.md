## pre-req installs for github pages deployment
* `npm i -g angular-cli-ghpages`

## build for production; incl correct base href
* `ng build --prod --base-href https://mobelman.github.io/site/`
* `ng build --prod --base-href http://www.screamingtitans.com/site/`

## deploy to github pages
* `ngh`
* `ngh -S`

## access via
* https://mobelman.github.io
* https://mobelman.github.io/site
* http://screamingtitans.com
* http://screamingtitans.com/site
* http://www.screamingtitans.com
* http://www.screamingtitans.com/site
