Template.Map.rendered = function() {
	
};

Template.Map.events({
	
});

Template.Map.helpers({
	
});

Template.MapMap.rendered = function() {
	if (Meteor.isClient) {
    L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
    var map = L.map('map').setView([47.36865, 8.539183], 13);
     L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

     var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
    var marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
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

