<style>
body {
  background: white none;
  text-align: center;
}

ul,
.editor {
  text-align: left;
}

body {
  background: transparent none 0 0 no-repeat;
  background-size: cover;
}

body:after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  display: block;
  content: '';
  z-index: 1;
  opacity: 0;
}


#impress {
  z-index: 2;
}

#impress,
#impress > div,
.step {
  -webkit-transition: none!important;
  -moz-transition: none!important;
  -ms-transition: none!important;
  -o-transition: none!important;
  transition: none!important;
}

.impress-on-step-1,
.impress-on-step-2 {
  color: #fff;
}

.impress-on-step-1 img {
  display: block;
  width: 150px;
  margin: 0 auto;
  border: 1px solid #eee;
  background-color: #fff;
  padding: 3px;
}

.impress-on-step-1 {
  background-image: url(/assets/images/pattern.jpg);
  /*text-shadow: 0 0 30px #000;*/
}

.impress-on-step-1:after {
  opacity: 0.4;
}

.impress-on-step-2 {
  background-image: url(/assets/images/code.png);
}

.impress-on-step-3 {
  background-image: url(/assets/images/journey.jpg);
  color: #fff;
  text-shadow: 0 0 15px #000;
}

.impress-on-step-13 {
  background-image: url(/assets/images/pexels-photo-137141.jpg);
  color: #fff;
  text-shadow: 0 0 55px #000;
  background-position: center 10%;
}

.impress-on-step-13:after {
  opacity: 0.3;
}

.impress-on-step-14 {
  background-image: url(/assets/images/train-wreck-steam-locomotive-locomotive-railway-73821.jpg);
  background-position: center bottom;
  color: #fff;
  text-shadow: 0 0 55px #000;
}


</style>

# Revitalising your frontend workflow with Pattern Libraries
<br><br>
## [@andymantell](https://twitter.com/andymantell)
## Tech Exeter 2016
![Andy Mantell](assets/images/andy.jpg)

------

# Hello!

Freelance frontend developer

Dabbles in Node.JS, Python, fun things

Doesn't normally take selfies

<br>

![Andy Mantell](assets/images/pi-cam.jpg)

------

# Anyway....
Let's go on a journey through frontend development.

My journey.
------


## You're given a set of Photoshop files for a site you've got to build. What do you do?

![Photoshop files](assets/images/psds.png)

------

# 2007

## Start at the top of the homepage and work down, writing HTML, CSS and JS in one big pile of spaghetti.

<!-- * Write some JavaScript to fix the rounded corners in IE6 -->

```js
// Fix bug where, in ie6, absolutely positioned corners
// do not align correctly with bottom right corner of
// parent container when the height/width is an odd number
case 'corner':
  if($bIE6) {
    if(divs[i].parentNode.clientHeight%2){
      divs[i].style.bottom = -2 + 'px';
    }
    if(divs[i].parentNode.clientWidth%2){
      divs[i].style.right = -2 + 'px';
    }
  }
break;
```

![Facepalm](assets/images/facepalm.png)

------

# 2008
## Write all the HTML and _then_ write the CSS because you want to nail the ultimate separation of concerns?

<img src="assets/images/html-first.png" width="40%" alt="Html first">

------

# 2009

OMG jQuery. Wouldn't it be great if everything bounced ridiculously when you clicked on it!

```
As a user
When I click this button
I want my eyes to bleed
```

<br><br>
![Transition all the things](assets/images/all-the-things.jpg)

------

# 2010

All classes *must* be "semantic". Deep cascade.

Death to presentational classes.

SASS `@extend` everything!

_Hellooo 1mb stylesheet_

```css
.featured-article {
  h2 {
    @extend %teaser-title;
    @extend %highlight;
  }

  p {
    @extend %lede;
  }

  footer {
    li {
      @extend %inline-link;
    }
  }
}

```

------

# 2011
* Bootstrap!
* Shoehorn it into Bootstrap because that'll save me time right?
* Except your designer is not really on board with it, and you spend all your time overriding bootstrap anyway...

------

# Whatever
## I picked an approach and ran with it.

------

# Perfection
## It was awesome to start with. It was the Right Way.

------

# Done
## A few weeks later I maaaay have had to do a bit of bodging.
## But that won't happen again. Next time will be different.

------
# :shipit:

## I send it to the backend team and move on.

## Life is good.

<img src="assets/images/pineapple.gif" alt="Tumblepineapple" width="100"><img src="assets/images/pineapple.gif" alt="Tumblepineapple" width="100"><img src="assets/images/pineapple.gif" alt="Tumblepineapple" width="100">
------

# Cue trainwreck!

------

# What happened?
## My work was great, where did it go wrong?

------

## I built what you saw, but not what was "meant"
## A snapshot
## A spaghetti monster
<br><br>
## And then you threw it over the wall and expect the backend team to reverse engineer it

------

# Step in: pattern libraries
- Style guides
- Component libraries
- Design systems

------

# So what is one? What's the point?

![Example pattern library](assets/images/lr-pattern-library.png)

------

# Self contained patterns promote abstraction, modularity, discipline and focus
## Favour small composable components over monolithic structures

![Form session storage pattern](assets/images/lr-form-session-storage-set.png)

------

# Self contained patterns promote re-use
## Re-use across projects, between teams. Don't reinvent the wheel with every project.

![Clientside form validation](assets/images/clientside-validation.png)
------

# Testable
## Small testable pieces with clear single purposes
## Provides confidence
## Isolated from your main application(s)

```js
client
  .url('http://localhost:3000/form-session-storage/set/')
  .setValue('#demo-field', value)
  .url('http://localhost:3000/form-session-storage/get/')
  .getValue('#demo-field')
  .then(function(text) {
    text.should.be.equal(value)
  })
  .getValue('#demo-field-2')
  .then(function(text) {
    text.should.be.equal("This is a prefilled value, it won't get blown away by the value in sessionStorage")
  })
  .getValue('#demo-field-3')
  .then(function(text) {
    text.should.be.equal(value)
  })
```

------

# Promotes documentation by default
## Handover to backend developers easier

![Documentation example](assets/images/tabs.png)

------

# Modularity enables parallel, scalable development

<div style="float:left;margin-right: 30px">

![Modular components](assets/images/components.png)

</div>

## Physically seperate on disk - no merge conflicts
## Less stepping on each others toes


------
# Modularity enables parallel, scalable development
## Modular JavaScript (E.g. ES6 or CommonJS modules via Browserify, Webpack)

```js
var validate = global.validate = require('validate.js'); // Expose validate as a global so that people can add custom validation routines easily
var extend = require('extend');
var domify = require('domify');
var closest = require('closest');
var delegate = require('delegate');

function Validator(element, config) {
  var options = {
    showSummary: true,
    showIndividualFormErrors: true,
    headingMessage: 'The following errors were found:',
    description: false,

    controlSelector: '.form-control, input[type="checkbox"], input[type="radio"]',

    // Note: Pre-compiled with hoganify browserify transform: @see https://www.npmjs.com/package/hoganify
    summaryTemplate: require('./clientside-templates/summary.hogan'),
    individualErrorTemplate: require('./clientside-templates/individualError.hogan'),

    // Form validation rules following the pattern
    rules: []
  };

  extend(options, config);
```

------
# Modularity enables parallel, scalable development
## Namespaced CSS scope (Consider adopting a naming convention which promotes this such as BEM)
(See [http://slides.andymantell.com/digpen-7-modular-and-maintainable-frontends/?full#17](http://slides.andymantell.com/digpen-7-modular-and-maintainable-frontends/?full#17))

```html
<div class="header">
  <img class="logo" src="..." />

  <ul class="nav nav--main">
    <li class="nav__item">
      <a class="nav__link" href="#">...</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">...</a>
    </li>
  </ul>

</div>
```

------

# Visual regression testing
- Nip issues in the bud by implementing visual regression testing in a stable environment (As opposed to your production app)
- Instant visibility of conflicts with other components
- Allows developers to work confidently without intimate knowledge of every component

------

# Visual regression testing
## Reference rendering

![Reference renderings](assets/images/reference-renderings.png)

------

# Visual regression testing
## Write some naughty code!

```css
ul > li span {
  border-bottom: 2px dotted #333;
}
```

------

# Visual regression testing
## TravisCI fails the build

![Travis fail](assets/images/travis-fail.png)

------

# Visual regression testing
## Resulting diff of the problem

![Diff fail](assets/images/diff-fail.png)

------

# Visual regression testing
## Acknowledge intentional changes by updating the reference renderings

<img src="assets/images/acknowledge-diff.png" width="70%" alt="Acknowledge intentional changes">

------

# Ok I'm in, how do I go about it?
A range of methods, some more radical than others.

The list is vast (See http://styleguides.io/tools.html and https://github.com/davidhund/styleguide-generators)

I'm just going to pick a few...

------

# Knyle Style Sheets
https://github.com/kneath/kss
Parses documentation embedded in your CSS / Sass in order to automatically generate a styleguide.
Relatively easy to integrate with an existing workflow.

```css
// Buttons
//
// A majority of buttons in the site are built from the same base class.
//
// Markup: buttons.hbs
//
// .primary   - Use this class to indicate that the button is the primary
//              feature of this form.
// .remove    - Use this class to indicate that the button will remove a
//              feature, or other negative connotations.
// :hover     - Highlight the button when hovered.
// :disabled  - Make the button change appearance to reflect it being disabled.
// :active    - "Press" the button down when clicked.
//
// Style guide: demo.components.buttons
.button {
  ...
}

```

------

# Knyle Style Sheets
![KSS demo](assets/images/kss-preview.png)

------

# Fractal
http://fractal.build/
Powerful pattern library generator that also has a built in build tool.
Good fit for new projects and the ability to generate your production assets _using your pattern library_ is a great feature.

![Fractal demo](assets/images/screenshot-demo-cl-large.png)
------

# Build your own!
There's a wide range of these tools, but not all of them are mature and only a small subset will likely fit the way you want to work.
It's a young enough ecosystem that building your own is not necessarily a sin.

```js
app.get('/components/*/:variant', function(req, res){
  Promise
    .all([
      handlebars(),
      components.getComponent(req.params[0])
    ])
    .spread(function(hbs, component) {
      var variant = component.variants[req.params.variant];
      var context = extend(variant.context, {component: component});

      renderPage(hbs, {
        title: variant.name,
        content: hbs.compile(variant.content)(variant.context),
        pageData: variant.context.pageData
      })
      .then(function(html) {
        res.send(html);
      });
    })
```

------

# Hang on
You've invested time and built some fancypants thing, but isn't the original problem still there? We're still throwing stuff over the fence...

------

# Living style guides
Requires a lot of discipline - but the key is to integrate the style guide into your build process somewhere
- A Grunt / Gulp build step?
- Custom npm script

The code which generates your pattern library must _be_ the code that generates your production assets.

------

## Show and tell: Land Registry Elements

![Land Registry Elements build](assets/images/lr-build.png)

------

## Show and tell: Land Registry Elements

```js
var path = require('path');
var landRegistryElements = require('land-registry-elements');

landRegistryElements({
  'mode': 'production',
  'destination': path.resolve(__dirname, 'service/ui/.land-registry-elements'),
  'components': [
    'pages/find-property-information/search-form',
    'pages/find-property-information/search-results',
    'pages/find-property-information/order-confirmation',
    'pages/find-property-information/summary',
    'pages/find-property-information/cookies',
    'pages/find-property-information/account/create',
    'pages/land-registry/error-page'
  ]
})
  .then(function(dest) {
    console.log('Done');
  })
  .catch(function(e) {
    console.error(e);
  });
```

------

## Land Registry Elements - possible future plans
- Currently in use on one Land Registry Gov.uk service - potential to be rolled out to more
- Decouple from Gov.uk to facilitate use on Land Registry internal systems
- Decouple the build tool from the components

------

## Land Registry Elements - learnings
- Complexity! Care needed when designing tooling - how long would it take you to remove the tooling entirely?
- Yet another thing for developers to learn
- Visual regression testing is hard! (But running it on a pattern library helps...)
- Process slows down the flow of patterns from HTML prototypes to production, but in a _good_ way! Prototypes rarely production ready.

------

## Land Registry Elements - learnings
- Pattern library sometimes falls behind - best intentions sometimes squashed by time constraints
- Paying off tech debt not always easy to justify, even to myself!

![Unofficial backlog](assets/images/unofficial-backlog.jpg)

------

# Where to go from here?
- Split components out into individual repositories? Complete modularity.
- Web Components? (Self contained "black boxes" of HTML/CSS/JS code) (One day..!)
- Provide templates from the pattern library - integrate these into the production app?

------

# Homework
- These slides: https://pattern-libraries-talk.herokuapp.com/#/step-1
- http://styleguides.io
- https://css-tricks.com/design-systems-building-future/
- http://danielmall.com/articles/content-display-patterns/

------

# Questions
