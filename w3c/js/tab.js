// Tab Content
function initTabMenu(tabContainerID) {
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tab")
			thismenu = tabAnchor.item(i);
		else
			continue;

		thismenu.container = tabContainer;
		thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
		if (thismenu.imgEl) {
			thismenu.onmouseover = function () {
				//this.onmouseover();
			}
			thismenu.onfocus = function () {
				//this.onfocus();
			}
		}
		thismenu.onmouseover = tabMenuClick;
		thismenu.onfocus = tabMenuClick;
		
		if (!thismenu.container.first)
			thismenu.container.first = thismenu;
	}
	tabContainer.first.onmouseover();
	tabContainer.first.onfocus();
}
function tabMenuClick() {
	currentmenu = this.container.current;
	if (currentmenu != this) {
		if (currentmenu) {
			currentmenu.targetEl.style.display = "none";
			if (currentmenu.imgEl) {
				currentmenu.imgEl.src = currentmenu.imgEl.src.replace("on.jpg",".jpg");
			} else {
				currentmenu.className = currentmenu.className.replace(" on", "");
			}
		}

		this.targetEl.style.display = "block";
		if (this.imgEl) {
			this.imgEl.src = this.imgEl.src.replace(".jpg","on.jpg");
		} else {
			this.className += " on";
		}
		this.container.current = this;
	}
	return false;
}


