// May 2025 a search drop down randomly appeared in the search bar
// Turn it off
user_pref("browser.urlbar.scotchBonnet.enableOverride", false);

// vertical tabs - good now
user_pref("sidebar.revamp", true);
user_pref("sidebar.visibility", "always-show");
user_pref("sidebar.verticalTabs", true);

// disable ai chatbot
user_pref("browser.ml.chat.enabled", false);

// don't warn when quitting with Cmd-Q
user_pref("browser.warnOnQuitShortcut", false);

// don't warn when going to about:config
user_pref("browser.aboutConfig.showWarning", false);

// if you close the last tab, the window stays open
user_pref("browser.tabs.closeWindowWithLastTab", false);

// tidy new tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// self-explanatory
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);
user_pref("browser.compactmode.show", true);

// === INACTIVE ===

// user_pref("mousewheel.with_meta.action", 1);
// The default behaviour is now to scroll normally
// see https://connect.mozilla.org/t5/discussions/ctrl-or-cmd-trackpad-or-mouse-wheel-on-firefox-109-macos/m-p/23108
// explanation of settings:
// 0: Nothing happens
// 1: Scrolling contents
// 2: Go back or go forward, in your history
// 3: Zoom in or out (reflowing zoom).
// 4: Treat vertical wheel as horizontal scroll
// 5: Zoom in or out (pinch zoom).
// see https://old.reddit.com/r/firefox/comments/wwktdy/comment/iln9at9/
