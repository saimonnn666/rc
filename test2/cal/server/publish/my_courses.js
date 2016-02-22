Meteor.publish("courses", function() {
	return MyCourses.find({}, {});
});

Meteor.publish("courses_empty", function() {
	return MyCourses.find({_id:null}, {});
});

Meteor.publish("course", function(courseId) {
	return MyCourses.find({_id:courseId}, {});
});

