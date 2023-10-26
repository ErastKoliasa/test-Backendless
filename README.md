## Description

A simple client-side app that works like a primitive CMS (content management system). The app, upon its start, downloads a JSON file from a well-known path. The JSON file contains a description of tabs that must be rendered in the app. 
When switching between the tabs, the current tab's id must be added to the URL of the app. 
The first tab must open by default.
If, at the time when the app is loaded, the URL already contains a tab id, that tab must open by default.
The file for the tab content (identified with the "path" property) should be loaded only when it is needed (the lazy loading approach). 
On the dummyTable page, sorting data in the table by columns has been added.

Technologies used:
* React
* React Router Dom
* React Google Charts
* CSS

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start
```