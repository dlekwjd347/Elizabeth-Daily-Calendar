# Elizabeth-Daily-Calendar

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

Date and time is driven by the [Moment.js](https://momentjs.com/) library to use in the browser. 

Using the daily planner to create a schedule for the standard business hours, this is executed with timeblocks for each day and hour with forms as a table data entry in each row hour.

Depending on the time of day, the time block will be either gray, red, or green indicating past, present, and future. This is controlled with if/if else/else flow statements which grab the current hour given by the Moment.js library. 

To add a new entry in a time block, a form is used. When the save button is clicked, the event entered is saved in local storage executed by setItem and getItem, and is permanently displayed in the designated time block, until otherwise noted. 

When the page is refreshed, the saved events persists driven by the getItem method. 

Deployed URLS:



