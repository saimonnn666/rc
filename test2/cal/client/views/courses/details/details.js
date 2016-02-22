var pageSession = new ReactiveDict();

Template.CoursesDetails.rendered = function() {
	
};

Template.CoursesDetails.events({
	
});

Template.CoursesDetails.helpers({
	
});

Template.CoursesDetailsDetailsForm.rendered = function() {
	

	pageSession.set("coursesDetailsDetailsFormInfoMessage", "");
	pageSession.set("coursesDetailsDetailsFormErrorMessage", "");

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

Template.CoursesDetailsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("coursesDetailsDetailsFormInfoMessage", "");
		pageSession.set("coursesDetailsDetailsFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var coursesDetailsDetailsFormMode = "read_only";
			if(!t.find("#form-cancel-button")) {
				switch(coursesDetailsDetailsFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("coursesDetailsDetailsFormInfoMessage", message);
					}; break;
				}
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("coursesDetailsDetailsFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		Router.go("courses", {});
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		Router.go("courses", {});
	}

	
});

Template.CoursesDetailsDetailsForm.helpers({
	"infoMessage": function() {
		return pageSession.get("coursesDetailsDetailsFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("coursesDetailsDetailsFormErrorMessage");
	}
	
});
