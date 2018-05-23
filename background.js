'use strict';

// onAlarm event is fired when time is up
chrome.alarms.onAlarm.addListener(function() {
	chrome.browserAction.setBadgeText({text: ''})
	chrome.notifications.create({
		type: 'basic',
		iconUrl: 'kitten.jpg',
		title: 'Time to stretch',
		message: 'Let your energy flows!',
		button: [
			{title: 'Take a break'}
		],
		priority: 0
	});
});

chrome.notifications.onButtonClicked.addListener(function() {
	chrome.storage.sync.get(['minutes'], function(item) {
		chrome.browserAction.setBadgeText({text: 'yo'});
		chrome.alarms.create({delayInMinutes: item.minutes});
	});
});
