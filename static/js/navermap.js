function loadNaverMap(lat, lng){
	// map
	var oPoint = new nhn.api.map.LatLng(lat, lng);
	oMap = new nhn.api.map.Map('naver_map', {
		point : oPoint,
		zoom : 10,
		enableWheelZoom : true,
		enableDragPan : true,
		enableDblClickZoom : false,
		mapMode : 0,
		minMaxLevel : [ 1, 14 ]
	});

	// marker
	var oSize = new nhn.api.map.Size(28, 37);
	var oOffset = new nhn.api.map.Size(14, 37);
	// TODO
	var oIcon = new nhn.api.map.Icon("../static/images/marker.png", oSize, oOffset);

	marker = new nhn.api.map.Marker(oIcon)
	marker.setPoint(oPoint);
	oMap.addOverlay(marker);
}