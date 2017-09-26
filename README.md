Now that we have built a basic weather app, let's go ahead and make it our own! Inside of this repository is the starter code from the beginning of class, go ahead and paste in your own code when you are ready to submit it via pull request.

## Get an API Key
[Create an account for OpenWeatherMap](http://home.openweathermap.org/users/sign_in) and log in. There is an option when you create your account to decline being added to their mailing list. For "company", you can put your name and for "purpose" you can put "Education". You will find the API key in the "API keys" tab after logging in.

The API key is expected on all API requests as the `appid` parameter of the query string. For example:

```
http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=YOUR_API_KEY_GOES_HERE
```

## Display basic data

Update your JS so that when a user searches for a city with the form, the page updates to display the basic current weather for that city. Remember to include your API key in the call and make sure you request info for the right city.

## Convert to Fahrenheit
Right now the temperature is in kelvin units, using this existing API, make the JSON response give back the temperature in Fahrenheit.

Check out the API documentation, and scroll to the bottom under "Unit Format" to see how this is done.
http://openweathermap.org/current

## Include an icon representing the weather above the city
Let's make this app a little more visual by adding weather icons on the page representing the cities existing weather.

If you look at the JSON response, at `response.weather[0].icon` , we can see that the JSON gives us an icon ID such as `03n`. Let's look at the documentation to see how we can take that ID here:
http://openweathermap.org/weather-conditions

Using what we see on this page, how can we get icons on the screen?

## Make a city cannot be found error message
The API for this weather app is actually pretty stable when it comes to the cities you can provide. But occasionally if you provide a city name that it doesn't like, such as "zzzzzzzzz", the api will send back an error. Modify the JS to handle an error from the API, displaying an error message to the user like below. Make sure that this message goes away if the user makes another request which returns data successfully.

![error message](https://content.screencast.com/users/ddunn91/folders/Jing/media/2c0b4d62-333f-4a6c-a2a2-5725c04b6fd0/00000048.png)

jQuery `$.ajax()` documentation: https://api.jquery.com/jQuery.ajax/

## Add flags for city countries
Another thing that our API gives us is the country id of whichever country the given city is located in.

This is located at `response.sys.country`.

Using this CSS flags library below, how can we make it so our weathe app shows a flag symbol of whichever country the city is in?

https://github.com/lipis/flag-icon-css
http://flag-icon-css.lip.is/

**Example:**

![add flags](https://content.screencast.com/users/ddunn91/folders/Jing/media/8735906a-dbec-4137-b1d6-12488cde976f/00000050.png)

## Add some CSS
Time to slap some lipstick on this pig! So far we've created an app that has some functionality, but has no style. Go ahead and style it up and make it yours!
