function overview1() {
	$("#overview1").hide();
	$("#overview2").show();
}

function overview2() {
	$("#overview2").hide();
	$("#overview3").show();
}

function getCDN() {
	$("#cdn").show();
}

function syntax1() {
	$("#syntax1").hide();
	$("#syntax2").show();
	$("#syntaxCode").show();
}

function dom1() {
	$("#dom1").hide();
	$("#dom2").show();
	$("#smith").show();
	$("#traversal").show();
	$("#platform").show();
	$("#pLabel").show();
}

function traversal() {
	$("#neo").remove();
	$("#traversal").remove();
	$("#smith").remove();
	$("#attack").show();
	$("#platform").append("<img src='images/neo.png'>");
	$("#attack").append("<img src='images/smith.png'>");
	$("#dom2").hide();
	$("#dom3").show();
}

function event1() {
	$("#event1").hide();
	$("#event2").show();
	$("#event3").show();
  $("#cage").dblclick(function(){
  	$("#cage").css("border-style","solid");
  	event3();
  });
}

function event3() {
	$("#event2").hide();
	$("#event4").show();
}

function effects1() {
	$("#effects1").hide();
	$("#effects2").show();
	$("#effects4").show();
  $("#cage1").dblclick(function() {
		$("#smith1").animate({
  		opacity: 0.25,
  		height: "toggle"
		}, 5000, function() {
  	// Animation complete.
		});
		effects2();
	});
}

function effects2() {
	$("#effects2").hide();
	$("#effects3").show();
}

function AJAX1() {
	$("#AJAX1").hide();
	$("#AJAX2").show();
	$("#AJAX4").show();
}

function AJAX2() {
	$.ajax({
  url : "http://api.wunderground.com/api/904095f73048bf08/geolookup/conditions/q/IA/Cedar_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  $("#weather").html("<span>" + location + ": "+ temp_f + " degrees celcius</span>");
  $("#weather").show();
  $("#AJAX2").hide();
  $("#AJAX3").show();
  $("#portal").show();
  $("#pButton").show();
  }
  });
}