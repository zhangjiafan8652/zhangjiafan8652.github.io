var obj = null;

var As = document.getElementById('nav').getElementsByTagName('a');

obj = As[0];

for (i = 1; i < As.length; i++) {
	if (window.location.href.indexOf(As[i].href) >= 0)
		obj = As[i];
}
/*obj.id = 'nav_current'*/
function seletitem(k) {
	/*alert("已经成功填入QHOPENSDK_PRIVATEKEY");
	if (k == 1) {
		window.location.replace("xiaoyuanlife.html");
	};*/

	switch (k) {
		case 0:

			window.location.replace("index.html");
			break;
		case 1:

			window.location.replace("xiaoyuanlife.html");
			break;
		case 2:
			window.location.replace("recalllife.html");
			break;
		case 3:
			window.location.replace("javaweb.html");
			break;
		case 4:
			window.location.replace("android.html");
			break;
		case 5:
			window.location.replace("html5.html");
			break;
		case 6:
			window.location.replace("mybook.html");
			break;
		case 7:
			window.location.replace("mylife.html");
			break;
		case 8:
			window.location.replace("zai.html");
			break;
		default:

	}

}