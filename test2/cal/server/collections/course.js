Course.allow({
	insert: function (userId, doc) {
		return Course.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Course.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Course.userCanRemove(userId, doc);
	}
});

Course.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

Course.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Course.before.remove(function(userId, doc) {
	
});

Course.after.insert(function(userId, doc) {
	
});

Course.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Course.after.remove(function(userId, doc) {
	
});
