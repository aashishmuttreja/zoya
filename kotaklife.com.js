var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance 
var url = "https://dc.oracleinfinity.io/v3/8f18b0c3da08493b195f72e2f165b96a?dcsverbose=true" 

window.addEventListener("dblclick", function() {

//generic settings
var email="madhukar.uniyal@gmail.com";
var cookie="Kotak Life";
var mobile="+919811789419";
var title = "ash";
var action = "calculator";



//product recs
	
		
return1 = document.querySelector("#yourReturn").innerText
invest1 = document.querySelector("#totalInvested").innerText
years1 = document.querySelector("#investment_calculator > div > div > div.col-lg-5.m-no-padding > div > div > div.investment_result > p.oneTimeResult > span.years_val").innerText


		var payload = {
			"static": {
				"wt.co_f": cookie,
				"wt.ti": title,
							},
			"events": [{
				

				"ora.z_yourreturn": return1,
				"ora.z_invest": invest1,
				"ora.z_years": years1,
				"ora.z_action": action,
				"ora.z_mobile": mobile,
				"ora.z_email": email,
		}]
        };


		xmlhttp.open("POST", url);
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(JSON.stringify(payload));
	
});

