
async function initMap(){
    
    
    let NewBrunswick = {lat: 40.48568217532147, lng: -74.44940654691226};
    let map = new google.maps.Map(
        //create default center map view
        document.getElementById('map'), {zoom: 12, center: NewBrunswick}
    );
    //trafic layer: potential slow downs
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    //remove marker cluster: redundant
    
    //populate markers
    const markers = [];
    let list = [[40.52197888927034, -74.4622192057468],[40.522605527613095, -74.46246860027018]
    ,[40.523550606437645, -74.4624309204648],[40.522360268100115, -74.46381093131544]
    ,[40.522540649191896, -74.46338205931745],[40.522946387004616, -74.46316747433531],[40.52278939196065, -74.46252643199293]
    ,[40.52242350526982, -74.46131718812914],[40.52161691456092, -74.46079077071474]
    ,[40.52353195579548, -74.4583087438647],[40.525854605765616, -74.4601819699031],[40.52374152328945, -74.46510631666067]
    ,[40.524780526811426, -74.4669130538845],[40.52444012720018, -74.46828098474316],[40.52267698761988, -74.47184069078814]
    ,[40.504440454324765, -74.44948615458878],[40.48388010024716, -74.43473837915063]
    ,[40.48434657146654, -74.43443657136848],[40.48673057701968, -74.43823184028616],[40.48769017556968, -74.43748150509428]
    ,[40.48015369761705, -74.42788013661645],[40.501848747878114, -74.44753953339513],[40.50334491115801, -74.45179762270548]
    ,[40.51982005976832, -74.43344027691164],[40.52157061285873, -74.43530215723074],[40.52300686261327, -74.43957732122568]
    ,[40.52230127813204, -74.43759334423493],[],[],[],[],[],[],[],[],[],[],[]]
   
    //add characteristics to bike rack markers
    for(let i = 0; i < list.length; i++){
        addMarker(list[i][0], list[i][1]);
    }

    //adjust marker characteristics
    function addMarker(x, y){
        markers.push([
			"Bike Rack",
			x, y,
			'RedDot.svg.png',
			22,22,
		],)
    }

    for(let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
            },
            animation: google.maps.Animation.DROP,
        });

        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    }
    
}





