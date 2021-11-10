
# task description

Your task is to create a form that assists PM/PO in creating user story.

A good user story consists of 3 elements. Usertype, task and goal/result.

**As a < type of user >, I want < some goal> so that < some reason>.**

> type of user = WHO
> 
> some goal=WHAT
> 
> some reason=WHY

**User story example:**
As a PM I want to write good user stories, so that developers would love me.


**Form should have these fields**

 - Title - text input, string 
 - Type (select - bug, userstory) - radio/dropdown 
 - User story base  
	 - User type  
	 - Task 
	 - Goal 
 - Description - textarea, string 
 - Acceptance criteria (list of string) 
 - Additional information - textarea, string 
 - Tags (frontend, backend, ....) - checkboxes
 
 *If type is bug, additional fields should be present*
 - Browsers - array of browsers 
	 - title (eg. Safari, Chrome) 
	 - version (eg. 14.0)  
 - Devices - array of devices 
	 - title (eg. Macbook) 
	 - os version (eg. 10.15)

**Expected output.**

Upon filling the fields the user should be able see final formulation of the user story. If he wishes he needs to be able to copy and paste it to Forecast description. A copy button should be used.

**Title** 

Variations

 - Task type user story -> `{title}` Task type bug with 1 browser  -> `{title} -- {browser.title} {browser.version}` 
 - Task type bug with 1+ browser -> `{title} -- {browser.title[0]}{browser.title[1]}...` 
 - Task type bug with 1 device -> `{title} -- {device.title} os:{device.os}...` 
 - Task type device with 1+ browser -> `{title} -{device.title[0]} {device.title[1]}...`

Body

       <p>{userstory}</>
       <p>{description}</p>
       <p>Acceptance criteria:</p>
       <ul>
       <li>criteria...</li>
       ...
       </ul>
       <p>{additional_info}</p>
    
       Browsers:
       <ul>
       <li>{Browser name - Version}</li>
       ...
       </ul>
    
       Devices:
       <ul>
       <li>{Browser name - Version}</li>
       ...
       </ul>

![enter image description here](https://i.ibb.co/hVLQ8jN/ustorer.jpg)

# ustorer based on Brunch + Babel/ES6

This is a modern JS skeleton for [Brunch](http://brunch.io).

## Installation

Clone this repo manually or use `brunch new dir -s es6`

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## ES-next

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `brunch-config.js`, add the preset: `presets: ['latest', 'stage-0']`
>>>>>>> master
