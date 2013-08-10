(function(){
  "use strict";

  function showPageAction(details){
    chrome.pageAction.show(details.tabId);
  }

  chrome.webNavigation.onCompleted.addListener(
    showPageAction,
    {url:[{hostSuffix : ".mspaintadventures.com"}]});
}());
