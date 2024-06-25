# Weather App

Great, here is our hiring test. Chances are that if you're here, it means we want you in the team. Unfortunately, we can't hire everyone, so we have to take a decision. Thus, we have to make sure that you're the right person for the job. This test is designed to help us make that decision.
If you fork this repo, please keep yours private.

## Weather App

### Before You Start

You need to add a `.env` file in the `apps/web` folder. Here is the content of the `.env` file:

```text
API_BASE_URL=http://localhost:3000
OPEN_WEATHER_MAP_API_URL=https://api.openweathermap.org/data/2.5/group
OPEN_WEATHER_MAP_API_KEY=1dc7e8ab217b4828f5b43c6e497a02c4
```

Check that you have node version 20 (lts/iron) and yarn installed.

### 1. Set Up the Project:

Fork this repo. Everything has been already configured and you can start programming right away.
To start the project :

```console
foo@bar:~$ yarn
foo@bar:~$ yarn turbo dev
```

### 2. Create Components:

The file `apps/web/src/app/page.tsx` will serve as the starting point.
Inside this page, create a form component to input the temperature threshold.
Create a table component to display the list of cities and their key metrics.

### 3. Fetch Weather Data:

You can find in the file `apps/web/src/app/api/weather/route.ts` and `apps/web/src/actions/weather.ts`,
all the necessaries to fetch weather data for a selection of cities.

### 4. Display Data:

Render in a table, all the cities and their key metrics like the temperature, coordinate, etc.
Highlight the days with extreme heat by applying a red border or background.
Display "extreme heat" alongside the name of the that meet the criteria.

### 5. Implement Bonus Features:

For bonus point #1, make it possible to only display the cities which exceed the threshold. It should be dynamic.

For bonus point #2, make it possible to sort the data by columns.

For bonus point #3, make it possible to download the data as a CSV, with the same columns as in the table.

### 6. Style the App:

Apply CSS or use a CSS-in-JS solution (like styled-components) to style the components and make the app visually appealing.

We are not asking you to do something beautiful, but usable (but beautiful is better 🤡).

Tailwind has been is available in the project without any configuration from your side.

### 7. Testing:

Write tests using a testing library like Jest and React Testing Library to ensure the app works as expected.

### 8. Documentation:

Provide clear documentation on how to run the app, configure the temperature threshold
and any other valuable information you may choose to share with a fellow developer.

This is a Typescript project, please do not underestimate this point 🙂.

### Notes:

You'll be interviewed based on your own implementation and technical questions will be asked accordingly.
If you take some code from outside, mark it as is.
