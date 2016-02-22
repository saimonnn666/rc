this.MyCourses = new Mongo.Collection("my_courses");

this.MyCourses.userCanInsert = function(userId, doc) {
	return true;
}

this.MyCourses.userCanUpdate = function(userId, doc) {
	return true;
}

this.MyCourses.userCanRemove = function(userId, doc) {
	return true;
}
