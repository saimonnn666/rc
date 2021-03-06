var pageSession = new ReactiveDict();

Template.CoursesInsert.rendered = function() {
	
};

Template.CoursesInsert.events({
	
});

Template.CoursesInsert.helpers({
	
});

Template.CoursesInsertInsertForm.rendered = function() {
	

	pageSession.set("coursesInsertInsertFormInfoMessage", "");
	pageSession.set("coursesInsertInsertFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
};

Template.CoursesInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("coursesInsertInsertFormInfoMessage", "");
		pageSession.set("coursesInsertInsertFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var coursesInsertInsertFormMode = "insert";
			if(!t.find("#form-cancel-button")) {
				switch(coursesInsertInsertFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("coursesInsertInsertFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("courses", {});
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("coursesInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				newId = MyCourses.insert(values, function(e) { if(e) errorAction(e); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("courses", {});
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.CoursesInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("coursesInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("coursesInsertInsertFormErrorMessage");
	}
	
});
