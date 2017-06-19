# besidethepark

A responsive landing page using roots compiler and handlebars template engine.

to do:
- style mobile img to be well positioned on tablets and very large devices (now invisible between 480-1150px and above 1400px)
- add "x" instead "hamburger" icon when menu list is visible


### if you want to run this project in roots...

- make sure [node.js](http://nodejs.org) and [roots](http://roots.cx) are installed
- clone this repo down and `cd` into the folder
- run `npm install`
- run `roots watch`


### Deploying

- If you just want to compile the production build, run `roots compile -e production` and it will build to public.
- To deploy your site with a single command, run `roots deploy -to XXX` with `XXX` being whichever [ship](https://github.com/carrot/ship#usage) deployer you want to use.
