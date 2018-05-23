'use strict';

function setAlarm(event) {
	let minutes = parseFloat(event.target.value);
	chrome.browserAction.setBadgeText({text: 'yo'});
	chrome.alarms.create({delayInMinutes: minutes});
	chrome.storage.sync.set({minutes: minutes});
	window.close();
}

function cancelAlarm() {
	chrome.browserAction.setBadgeText({text: ''});
	chrome.alarms.clearAll();
	window.close();
}

document.getElementById("15min").addEventListener("click", setAlarm);
document.getElementById("30min").addEventListener("click", setAlarm);
document.getElementById("60min").addEventListener("click", setAlarm);
document.getElementById("cancel").addEventListener("click", cancelAlarm);