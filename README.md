# Covid-Bulletin

A easy way to get daily covid statistics for each country.

  - View Covid statistics for a total of 180 countries!
  - Acquire useful information like confirmed cases, deaths, recovered people, active cases and fatality rates for various countries.


### Tech

I have avoided using frameworks like express for this projects in order to hone my basics of nodeJS. Open source projects used for Covid-Bulletin:

* [node.js] - Evented I/O for the backend
* [country-emoji] - Tool to get emojis of flags of different countries
* [axios] - Promise based HTTP client for the browser and node.js
* [covid-19_api] - COVID-19 Statistics API based on public data by Johns Hopkins CSSE
* html, css, js

And of course Interview Tracker itself is open source with a [public repository][repo]
on GitHub.


### Setting up

1. Install node.js
2. Open Interview Tracker using an editor like VS code.
3. Install the dependencies and devDependencies and start the server.
4. Run the website at http://localhost:8000/

```sh
$ npm install 
$ node index.js
```

### Home Page

![Home Page](https://imgur.com/V4UviEr.jpg)

![Search Feature](https://imgur.com/raUnkWk.jpg)

This is the first page you'll see when you open the website. Here you can browse for various countries. Click on "More Details" to get the statistics for the selected country. A handy search feature is also available to search for the desired country.

### Statistics Page

![Statistics Page](https://imgur.com/wui7Nrf.jpg)

This is the page you'll see when you click on "More Details" for any country. This page gives today's data of covid-19 statistics for the given country. 

  [node.js]: <http://nodejs.org>
  [country-emoji]: <https://www.npmjs.com/package/country-emoji>
  [axios]: <https://www.npmjs.com/package/axios>
  [covid-19_api]: <https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/>
