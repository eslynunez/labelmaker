# Label Maker

### Description
In May of 2017 I needed to make some labels for an art show with the good folks at
 [Oaks and Spokes](https://oaksandspokes.com/). This is the fourth year I've helped with this event and it has been a 
wonderful experience working with so many creative and hardworking people. 
While I enjoyed organizing this event it kept me away from writing code for fun. On the weekend before the event I 
needed to make some artwork labels and out of frustration with LibreOffice (sorry Libre), I decided it would be easier 
to code this out and print the labels. So I did that and got to code for fun while doing something completely unrelated.
I'll be using this label maker again.


### Project Structure

```
labelmaker
|
└───/node_modules
|     ... installed dependencies
|
└───/public
|     os.png // Watermark Oaks and Spokes image used as label background.
|
└───/tests
|     labelmaker.test.js // Tests to assert that labelmaker works as it should.
|
└───/views 
|     label.ejs // Template file containing styles and layout for labels.
|      
 .gitignore // files that git should ignore
 artistinfo.json // An array of submitted artist works to be ingested by the 'label.ejs' template
 labelmaker.js  // This file serves as the entry point for this utility, server logic can be found here.
 package.json // Install dependecies, scripts, and useful information can be found here.
 pacakage-lock.json // Same as above for npm 5.X.X and above.
 README.md // you are here.

```
### Setup
```
# Assuming you've cloned down this repo it's pretty straight forward to get going with this utility.
npm i
```

```
# if you'd like to run some tests.
npm run test
```

```
# To get the labels served up, just start the node server and print what is served at localhost:3000
node .
```

### Getting Artist Info data
This part is not so straight forward but still pretty easy. Google Forms allows you to export form data as a CSV but not
 as a JSON file. Luckily, there are tons of resources online that can do this for us. I'm well aware that I could have 
 used or built a utility to ingest CSV and convert into a JSON file but it's too easy to use an existing online CSV to 
 JSON utility. Ingesting CSV data is a very obvious enhancement in the future.
 
Examples of CSV to JSON utilities
* [CSVJSON](https://www.csvjson.com/csv2json)
* [ConvertCSV](http://www.convertcsv.com/csv-to-json.htm)
* [Freeformatter](https://www.freeformatter.com/csv-to-json-converter.html)

There are tons of resources online, all that matters is that `artistinfo.json` is structured as the example provided in
 the repo. 




