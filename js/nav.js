"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

//when click the story display will show
function navSubmitStoryClick(e) {
  e.preventDefault();
  hidePageComponents();
  $("#submit-form").show();
  $allStoriesList.show();
}

$("#nav-submit-story").on("click", navSubmitStoryClick);

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);


// show favStories on clicking nav

function navMyStories(evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show()
}

$body.on("click", "#nav-my-stories", navMyStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $storiesContainer.hide();
}

$navLogin.on("click", navLoginClick);


// hide everything but profile on click

function navProfileClick(e) {
  console.debug("navProfileClick", e);
  hidePageComponents();
  $userProfile.show();
}

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}




// $(document).ready(function() {
//   $("#nav-submit-story").on("click", navSubmitStoryClick);
//   $body.on("click", "#nav-all", navAllStories);
//   $navLogin.on("click", navLoginClick);
//   getAndShowStoriesOnStart();
// })