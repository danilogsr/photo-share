# Photo-share assignment

The project's goal was to create a family photo management application, where a family member can view photos in albums of another family member, while being able to create, update, and delete their own photos and albums.

## Table of contents

- [Usage](#usage)
- [Difficulties](#dificulties)
- [Unfinished Work](#unfinished-work)

# Usage

In order to run the app, download/clone project to your machine. On root folder, run "npm start" to trigger frontend and on another terminal access "backend" folder and run "npm start" to trigger backend part of application.

Once both parts are running, open your browser (in case it did not open automatically) on "localhost:3000" to navigate the frontend. The user can click directly on top of the user names to check each user albums and click the albums to check their photos.

If the user wants to check the backend apis, open a new window on "localhost:5000" and the following URLs can be accessed directly:

- {BASE_URL}/ => return all users
- {BASE_URL}/users/:userId/albums => returns all albums for a user
- {BASE_URL}/albums/:albumId/photos => returns all photos for an album

# Difficulties

### New language

This was my first time working with Node.js. My previous experiences on backend were with Python and C#, so not only I had to take some time to get used to typescript implementation for backend, I also had to get used to frontend again.

### Time limitation

The limit of 4 hours was initially not followed. The time taken to study the language, first time starting a project and building the code, deciding on architecture and naming had to be left aside otherwise there wouldn't be much to present.

# Unfinished Work

### "Admin" permission for own page

The user should only be able to see edit, add and delete buttons on his own pages, not for every page that he visits.

### CRUD functionalities are not finished

The items that are deleted should be removed from the page, the edit button should edit only one element at a time and not all elements that are clicked to edit and there is no save button to finish editing.

### Changes should be persistent

Once the user adds, removes or edit a record, that should remain. The app will currently restart every time once the page reloads because it is requesting data from jsonplaceholder and not storing it locally. This could be addressed with a local SQL data bank such as XAMPP.

### Testing

Since crud functionalities were not completed, testing would not make sense as there was nothing to test. I was planning on using Jest.
