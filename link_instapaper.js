jQuery(".pkiPost .postOptions a.lock").live("click", function(event) {
  var element = jQuery(this);
  var href = jQuery('.postBody > h3.title a', element.parents('.pkiPost')).attr('href');
  if(href) safari.self.tab.dispatchMessage("link", href);
});
