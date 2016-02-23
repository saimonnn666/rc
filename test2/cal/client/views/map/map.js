Template.Map.rendered = function() {
	Meteor.subscribe("courses");
};

Template.Map.events({
	
});

Template.Map.helpers({
	
});

Template.MapMap.rendered = function() {
	if (Meteor.isClient) {
		L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
    	var map = L.map('map').setView([47.36865, 8.539183], 10);
     	L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

     	for (var i = MyCourses.length - 1; i >= 0; i--) {
     		try{
     		var  pos = eval(MyCourses[i].comments);
     		var lat = pos.results[0].geometry.location.lat;
     		var lng = pos.results[0].geometry.location.lng;
     		var marker = L.marker([lat, lng]).addTo(map);
     	 	}
			catch(Exception){
     	  }
     }	
    
 }

};

Template.MapMap.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("courses", {});
	}
	
});

Template.MapMap.helpers({
	
});

