Meteor.startup(function() {
	// read environment variables from Meteor.settings
	if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
		for(var variableName in Meteor.settings.env) {
			process.env[variableName] = Meteor.settings.env[variableName];
		}
	}

	
});

Meteor.methods({
	"sendMail": function(options) {
		this.unblock();
		Email.send(options);
	},

	"get_remote_lieu": function (id, param){
		if( param != undefined){
			if( param.indexOf("(")>0){
					param = param.substring(0, param.indexOf("("));
			}
			console.log("param "+param);
			var millisecondsToWait = 3000;
			setTimeout(function() {
				// Whatever you want to do after the wait
			}, millisecondsToWait);
			var url = "http://maps.googleapis.com/maps/api/geocode/json?address="+param;
				//synchronous GET
				var result = Meteor.http.get(url, {timeout:30000});
				if(result.statusCode==200) {
					var respJson = JSON.parse(result.content);
					//console.log("response received."+result.content);
					try {
						if ( respJson.results[0].geometry.location.lat != undefined) {
							MyCourses.update(id, {
								$set: {comments: result.content}
							});
							// Lists.update(doc._id, {$set: {slug: slug}});
							console.log("Response issue: ", result.statusCode);
						}
					}catch(Exception ) {
						MyCourses.update(id, {
							$set: {comments: undefined}
						});
						console.log("ignore: ", result.content);
					}

					return respJson;
				} else {
					console.log("Response issue: ", result.statusCode);
					var errorJson = JSON.parse(result.content);
					throw new Meteor.Error(result.statusCode, errorJson.error);
				}
			}
		}
	}
);


