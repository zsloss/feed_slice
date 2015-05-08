var twit = require('twit');
var T = new twit(require('./api_keys'));
// T.get('search/tweets', {q: 'ed balls', count: 10 }, function(err, data, response) {
// 	data.statuses.forEach(function(tweet) { console.log(tweet.user.name + ":\n\t" + tweet.text)});
// });

var user = { screen_name: 'ZacharySloss' }

T.get('statuses/home_timeline', {  }, function (err, data, response) {
	if (err) console.log(err.message);
	else
	console.log(data);
});