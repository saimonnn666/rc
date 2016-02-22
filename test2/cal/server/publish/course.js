Meteor.publish("courses", function() {
	return Course.find({}, {});
});

Meteor.publish("courses_empty", function() {
	return Course.find({_id:null}, {});
});

Meteor.publish("course", function(courseId) {
	return Course.find({_id:courseId}, {});
});

