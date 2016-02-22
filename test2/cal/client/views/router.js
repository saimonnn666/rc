Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

var freeRoutes = [
	"home",
	"map",
	"courses",
	"courses.insert",
	"courses.details",
	"courses.edit"
];

Router.onBeforeAction(function() {
	// loading indicator here
	if(!this.ready()) {
		$("body").addClass("wait");
		this.render("loading");
	} else {
		$("body").removeClass("wait");
		this.next();
	}
});

Router.map(function () {

	this.route("home", {path: "/", controller: "HomeController"});
	this.route("map", {path: "/map", controller: "MapController"});
	this.route("courses", {path: "/courses", controller: "CoursesController"});
	this.route("courses.insert", {path: "/courses/insert", controller: "CoursesInsertController"});
	this.route("courses.details", {path: "/courses/details/:courseId", controller: "CoursesDetailsController"});
	this.route("courses.edit", {path: "/courses/edit/:courseId", controller: "CoursesEditController"});
});
