# Bus Route Algorithm Exercise

This repo with an ExpressJS app that is meant to act as an algorithm exercise to produce an API endpoint that returns an array of stop locations with stop times derived from the source data of a fictional bus/shuttle schedule.

## Get Started

`npm i` - install node dependencies

`npm run dev` - runs API with `nodemon`.

`npm run start` - runs API with `node`.

The app will run at `http://localhost:3000`.

## Goal

Create an endpoint that when given a `pickup` location, a `dropoff` location, and an `arriveBy` time, returns an array of objects from the schedule that represents the an actual route the rider will need to take to get to the `dropoff` location by time that is closest to the `arriveBy` time. It should start at the `pickup` location, and include every stop the route will pass through, ending at the `dropoff` location. The returned array should not include stops where the time is set to `"-"` as this indicates a loop through the route where the shuttle will not go to that stop.

You can see an example query and response in `/data/example.json`, or run the app and go to `http://localhost:3000/example`.

### Assumptions

- Assume the shuttle will loop through the route, that is, it should not be an issue if the rider wants to go from `BUILDING C` to `BUILDING A`; the shuttle will travel through the transit center, or parking lot depending on the time of day, and loop back around.

- Assume the endpoint will get the query data via query parameters in the URL.

- Assume the endpoint will return an empty array should there be bad query data or no good routes are found due something like the `arriveBy` time being out of bounds of the shuttle schedule.

- Assume that you can freely refactor the static source data to be a different structure and therefore more conducive to the desired algorithm to produce the intended route return data. This is because the source data is static and can be in whatever structure we so desire. It just so happens that it is in the current form but again, assume the static data can be stored differently.


## More Info About the Source Schedule Data

The source data is an object that represents a shuttle/bus schedule going through stops at various buildings (e.g. `BUILDING A`), a transit center (`TC`), and a parking lot (`PARKING`). The schedule throughout the day changes slightly in some respects and does not always stop at all the potential stops on the route (see table below).

`stops`: an array of potential stop names in the order the shuttle would actually travel through the route (note that it does not always travel through each stop on each loop).
`schedule`: an array of arrays of stops, each inner array represents one loop through the route.

Each stop on the route has a `name`, `stopTime`, and `utcTime`, which is a UTC representation of the `stopTime` (on some arbitrary date). All stop locations are listed in each loop, however in loops where the shuttle does not stop at a particular location, its `stopTime` and `utcTime` are set to `"-"`.

You can see the source data at `/data/route.json` or by running the app and going to `http://localhost:3000/source`


### Table Representation of Source Data

Here is a screenshot of a partial table view of the source schedule data.

![Table Representation of Source Data](/images/table.png)