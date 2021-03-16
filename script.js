var historydata=[]
var expressiondata=""
var resultdata=""

//To display value
function dis(val){
	document.getElementById("result").value+=val
}

//To solve the calculation
function compute() {
	var a = document.getElementById("result").value
	expressiondata=a
	var b = eval(a)
	document.getElementById("result").value = b
	resultdata=document.getElementById("result").value
	historydata.push({"expression":expressiondata, "result":resultdata})
	showlog()
	resultdata=""
	expressiondata=""
}

//To clear the input text
function clr() {
	document.getElementById("result").value = " "
}

//To show the log data
function showlog() {
	var log=document.getElementById("history_log")
	var string=""
	for(var key in historydata){
		string+=""+historydata[key]["expression"]+"="+historydata[key]["result"]+"<br>"
	}
	log.innerHTML=string
}
