chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.windows.create({
		url: tab.url,
		type: 'popup'
	});
	chrome.tabs.remove(tab.id);
});
