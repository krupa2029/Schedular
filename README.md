# WordCamp
React App for WordCamp Schedule Viewer. The application is built using HTML, CSS and React.js.
 
* Visit: **[Live Demo](https://wordcamp-ca343.web.app)**

## API Endpoint used to fetch data
* https://central.wordcamp.org/wp-json/wp/v2/wordcamps

## To start the application :

   ```bash 
   $ npm install
   $ npm run start
   ```
   
## The main components :

- `App` - The primary component that manages all underlying components. Send http request to the API endpoint and render content according to api response.
- `Header` - A component contains  application title and searchbar. 
- `PastEvents` - Accepts fetched event data as a props and filter 'Past Events' from it. And passes filtered events to the `EventContentLayout` component
- `UpcomingEvents` -  Accepts fetched event data as a props and filter 'Upcoming Events' from it. And passes filtered events to the `EventContentLayout` component
- `EventContentLayout`- Use the passed event data in the props and create layout for it
   - `MapView` - Render World Map with markers and tooltip of events
   - `CalendarView` - Render Calendar with past or upcoming events
   - `EventsList` - Render List of Events
   
## Test Results of App : 
![Test Results](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Test_Results.png)
## Screenshots:

### Desktop View : 

 Past WordCamp Events - Map View

![Past WordCamp Events - Map View](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Screenshot-1.png)

Past WordCamp Events - Calendar View

![Past WordCamp Events - Calendar View](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Screenshot-2.png)

Upcoming WordCamp Events - Map View

![ Upcoming WordCamp Events - Map View](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Screenshot-3.png)

Upcoming WordCamp Events - Calendar View

![ Upcoming WordCamp Events - Map View](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Screenshot-7.png)

### Mobile View:

Map View
![Mobile View:](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Screenshot-4.png)

![Mobile View:](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Screenshot-5.png)

Calendar View
![HomePage](https://github.com/krupa2029/WordCamp/blob/main/assets/screenshots/Screenshot-6.png)


