chrome.alarms.create( { periodInMinutes: 1 } );

chrome.alarms.onAlarm.addListener( () => {
  const counter = Math.floor( Math.random() * ( 100 - 0 ) );
  chrome.action.setBadgeText( { text: `${counter}` } );
} );
