## Sandwich
Uses Vite https://vitejs.dev/ 
## Get Started

1. Run `npm install`
1. Run `npm run dev`
1. You should see a URL where your game shows up

```
{
  "scripts": {
    "dev": "vite", // start dev server
    "build": "vite build", // build for production
    "serve": "vite preview" // locally preview production build
  }
}
```

## Why this tech stack

Based on this template: https://github.com/ubershmekel/vite-phaser-ts-starter
I looked at quite a few web game frameworks. I settled on this setup because:

* Phaser is the most prominent web game framework, with a lot of examples for pretty much every scenario.
* Typescript lets me auto-complete everything and makes sure I avoid silly typo bugs.
* Vite is much faster and simpler than Rollup and Webpack. I practically didn't have to do anything to get Phaser to work here, there's no complicated config file. The development-build-refresh cycle seems instant. It's fast enough that I never felt the need to measure it. Vite was built by evanw@ the person that built Vue.js.