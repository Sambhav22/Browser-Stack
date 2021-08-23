const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host
console.log(myUrl.host);

//Host Name => Does not get port
console.log(myUrl.hostname);

//Path Name
console.log(myUrl.pathname);

// Seralized query
console.log(myUrl.search)

//Params object
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc','123');
console.log(myUrl.toJSON());

// Loop through
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));
