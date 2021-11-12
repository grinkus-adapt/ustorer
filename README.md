
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
