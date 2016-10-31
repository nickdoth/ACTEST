// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function btnClick(e) {
	var settingCtrl = Alloy.createController('settings');
	$.index.activeTab.open(settingCtrl.getView());
}

function mapNotiBtnClick(e) {
	if (e.clicksource == 'rightButton') {
		alert('mapNotiBtnClick');
	}
}
