MyCourses.allow({
	insert: function (userId, doc) {
		return MyCourses.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return MyCourses.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return MyCourses.userCanRemove(userId, doc);
	}
});

MyCourses.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

MyCourses.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

MyCourses.before.remove(function(userId, doc) {
	
});

MyCourses.after.insert(function(userId, doc) {
	
});

MyCourses.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

MyCourses.after.remove(function(userId, doc) {
	
});
