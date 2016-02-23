Template.Map.rendered = function() {

};

Template.Map.events({
	
});

Template.Map.helpers({
	
});

var localMap ;

Template.MapMap.rendered = function() {

	if (Meteor.isClient) {
		L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
		localMap = L.map('map').setView([47.36865, 8.539183], 10);
		L.tileLayer.provider('Thunderforest.Outdoors').addTo(localMap);


	};
};

Template.MapMap.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("courses", {});
	}
	
});

Template.MapMap.helpers({

	'otherHelperFunction': function(){
		Meteor.subscribe("courses");
		var courses = MyCourses.find({}, {});
		courses.count();
		console.log("MyCourses.find({}, {}).count()"+courses.count());
		var lastLat ;
		var lastLng ;
		courses.fetch().forEach(function (course){
			try {
				//console.log(course.comments);
				//console.log(course.nomCourse);
				var pos = JSON.parse(course.comments);
				var lat = pos.results[0].geometry.location.lat;
				var lng = pos.results[0].geometry.location.lng;
				var marker = L.marker([lat, lng]).bindPopup("<b style=\"{color : black;}\">"+course.nomCourse+"</b></br>"+course.lieu).addTo(localMap);
				lastLat = lat;
				lastLng = lng;
			}
			catch (Exception) {
				console.warn("error on "+course.nomCourse);
			}

		});

		localMap.setView([lastLat,lastLng], 8);

		return "OK";
	}

});

