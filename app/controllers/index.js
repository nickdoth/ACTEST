function btnClick(e) {
	var settingCtrl = Alloy.createController('settings');
	$.index.activeTab.open(settingCtrl.getView());
}

$.index.open();

function mapNotiBtnClick(e) {
	if (e.clicksource == 'rightButton') {
		alert('mapNotiBtnClick');
	}
}
