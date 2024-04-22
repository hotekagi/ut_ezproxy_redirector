chrome.action.onClicked.addListener((tab) => {
  const origin_url = new URL(tab.url);
  const d = origin_url.hostname.replaceAll(".", "-") + ".utokyo.idm.oclc.org";
  const new_url = "https://" + d + origin_url.pathname + origin_url.search;
  chrome.tabs.update(tab.id, { url: new_url });
});
