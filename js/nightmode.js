function toggleNightModeIfNight() {
	var currentTime = new Date().getHours();

	if (currentTime >= 19 || currentTime <= 6) {
		setNightMode(true);
	}
}

toggleNightModeIfNight();

var nightModeCookie = localStorage.getItem('night-mode-enabled');
if (nightModeCookie) {
	setNightMode(nightModeCookie === "true" ? true : false, false);
}

function toggleNightMode() {
	setNightMode(document.body.className !== "night-mode", true)
}

function setNightMode(enable, shouldSave) {
	document.body.className = enable ? "night-mode" : "";
	if (shouldSave) {
		localStorage.setItem('night-mode-enabled', enable);
	}
}
