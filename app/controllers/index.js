function btnClick(e) {
	var settingCtrl = Alloy.createController('settings');
	$.index.activeTab.open(settingCtrl.getView());
}

$.index.open();
