this.Course = new Mongo.Collection("course");

this.Course.userCanInsert = function(userId, doc) {
	return true;
}

this.Course.userCanUpdate = function(userId, doc) {
	return true;
}

this.Course.userCanRemove = function(userId, doc) {
	return true;
}
