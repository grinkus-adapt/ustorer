document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');

  let userStory = {
    title: "Broken User Stories", // STRING MAX?
    type: 'bug',
    description: 'Descrition instead of base in some cases',
    base: {
      userType: 'PM',
      task: 'write good user stories',
      goal: 'developers would love me'
    }, //String
    acceptanceCriteria: ['One', 'Two', 'Three'], //String
    additionalInfo: '<p>Info</p>', //String html
    tags: ['frontend'],
    browsers: [{
      title: 'Safari',
      version: '14.0'
    }, {
      title: 'Chrome',
      version: '12.0'
    }],
    devices: [{
      title: 'Macbook',
      osVersion: '10.15'
    }],
  }

  let strings = {
    additionalInfo: 'Additional info',
    ac: 'Acceptance Criteria',
    browsers: 'Browsers',
    devices: 'Devices',
  }

  let userStoryContainer = document.querySelector('.ustorer-output');

  let story =
    `<article class='story'>
    <h2 class="story-title">${prepTitle()}</h2>
    <div class='story-base'>
      ${prepBase()}
      ${prepDescription()}
    </div>
    <div class="story-ac">
      <h3 class="story-ac__title">${strings.ac}</h3>
      ${prepAcceptanceCriteria(userStory.acceptanceCriteria)}
    </ul>
     <div class="story-info">
      <h3 class="story-info__title">${strings.additionalInfo}</h3>
      <div class="story-info__content">${userStory.additionalInfo}</div>
    </div>
     <div class="story-browsers">
      <h3 class="story-browsers__title">${strings.browsers}</h3>
      <div class="story-browsers__content">${helperBuildListWithProps(userStory.browsers)}</div>
    </div>
       <div class="story-devices">
      <h3 class="story-devices__title">${strings.devices}</h3>
      <div class="story-devices__content">${helperBuildListWithProps(userStory.devices)}</div>
    </div>
  </article>
  `;

  function prepTitle() {
    let titleHTML = `${userStory.title}`;

    //Rule: If specific browser show in title
    if (userStory.browsers.length = 1) {
      titleHTML += ` -- ${userStory.browsers[0].title} ${userStory.browsers[0].version}`
    }

    //Rule: If two or more specific browsers show in title without version
    if (userStory.browsers.length > 1 && userStory.browsers.length < 3) {
      titleHTML += ` -- ${userStory.browsers[0].title} | ${userStory.browsers[1].title}`
    }

    //Rule: If specific device show in title
    if (userStory.devices.length > 0) {
      titleHTML += ` -- ${userStory.devices[0].title} os:${userStory.devices[0].osVersion}`
    }

    return titleHTML;
  }

  function prepDescription() {
    let descriptionHTML =
      `
    <p>
      ${userStory.description}
    </p>
    `

    return descriptionHTML;
  }

  function prepBase() {
    let baseHTML =
      `<p>
      As a ${userStory.base.userType} I want to ${userStory.base.task} so that ${userStory.base.goal}
    </p>`;

    return baseHTML;
  }

  function prepAcceptanceCriteria(criteria) {
    let acHTML = '<ul class="story-ac__list">';

    criteria.forEach(function (ac) {
      acHTML += '<li>' + ac + '</li>';
    })

    return acHTML + '</ul>';
    /*   for (const ac in userStory.acceptanceCriteria) {
        console.log(`obj.${prop} = ${obj[prop]}`);
      } */
  }

  function helperOutputProps(obj) {
    let output = '';



    for (var [key, value] of Object.entries(obj)) {
      output +=
        `
          <b>${key}:</b> ${value}
        `;

    }

    return output;
  }

  function helperBuildListWithProps(array) {
    let html = '<ul">';

    array.forEach(function (item) {
      html += '<li>' + helperOutputProps(item) + '</li>';
    });

    return html;
  }

  function helperBuildList(array) {
    let html = '<ul">';

    array.forEach(function (item) {
      html += '<li>' + item + '</li>';
    });

    return html;
  }


  userStoryContainer.innerHTML = story;

});
