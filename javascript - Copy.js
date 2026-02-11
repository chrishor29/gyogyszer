const arrYears = [2026, 2025, 2024, 2023, 2022]
// gyógyszereket mikor mit szedtem
const medicationChanges = [
	{ date: "2025-12-10",
		meds: {
			Briviact: "50+50",
			Lamolep: "100+100"
		}
	},
	{ date: "2025-08-08",
		meds: {
			Briviact: "50+50",
			Lamolep: "75+75"
		}
	},
	{ date: "2025-07-06",
		meds: {
			Briviact: "50+50",
			Lamolep: "75+50"
		}
	},
	{ date: "2025-07-01",
		meds: {
			Briviact: "50+50",
			Lamolep: "50+50"
		}
	},
	{ date: "2025-06-04",
		meds: {
			Tegretol: "200",
			Briviact: "50+50",
			Lamolep: "50+50"
		}
	},
	{ date: "2025-04-22",
		meds: {
			Tegretol: "400",
			Briviact: "50+50",
			Lamolep: "50+50"
		}
	},
	{ date: "2025-04-17",
		meds: {
			Tegretol: "400+200+400",
			Briviact: "50+50",
			Lamolep: "50+50"
		}
	},
	{ date: "2025-04-03",
		meds: {
			Tegretol: "400+200+400",
			Briviact: "50+50",
			Lamolep: "25+25+25"
		}
	},
	{ date: "2025-03-19",
		meds: {
			Tegretol: "400+200+400",
			Briviact: "50+50",
			Lamolep: "25+25"
		}
	},
	{ date: "2025-03-02",
		meds: {
			Tegretol: "400+200+400",
			Briviact: "50+50",
			Lamolep: "25"
		}
	},
	{ date: "2024-07-18",
		meds: {
			Tegretol: "400+200+400",
			Briviact: "50+50",
		}
	},
	{ date: "2024-03-05",
		meds: {
			Tegretol: "400+200+400",
		}
	},
	{ date: "2024-02-27",
		meds: {
			Tegretol: "400+200+400",
			Convulex: "300",
		}
	},
	{ date: "2024-02-11",
		meds: {
			Tegretol: "400+200+400",
			Convulex: "300+300",
		}
	},
	{ date: "2023-09-27",
		meds: {
			Tegretol: "400+200+400",
			Convulex: "500+500",
		}
	},
	{ date: "2023-08-29",
		meds: {
			Tegretol: "400+200+400",
			Convulex: "300+300",
		}
	},
	{ date: "2022-07-27",
		meds: {
			Tegretol: "400+200+400",
		}
	},
	{ date: "2022-05-16",
		meds: {
			Tegretol: "400+400",
		}
	},
	{ date: "2022-03-06",
		meds: {
			Tegretol: "200+200+200",
		}
	},
	{ date: "2022-02-25",
		meds: {
			Tegretol: "200+200+200",
			Convulex: "150",
		}
	},
	{ date: "2022-02-14",
		meds: {
			Tegretol: "200+200+200",
			Convulex: "150+150",
		}
	},
	{ date: "2021-12-14",
		meds: {
			Tegretol: "200+200+200",
			Convulex: "150+150+150",
		}
	},
];

// gyógyszer & roham táblázatok
function tables() {
	var object = []
	
	// create Tables
	function F_createYear(year) {
		var details = document.createElement("details")
		details.id = "details."+year
		document.body.appendChild(details)
		var summary = document.createElement("summary")
		details.appendChild(summary)
		summary.classList.add("mainTitle")
		summary.style.cursor = "pointer"
		summary.innerHTML = year
		
		var table = document.createElement("table")
		table.id = "table."+year
		details.appendChild(table)
		<!-- table.style.maxWidth = "100%" -->
		var tr = document.createElement("tr")
		tr.id = "tr."+year+".months"
		table.appendChild(tr)
		
		var num = 0
		object[year] = []
		function F_month(month,count) {
			var th = document.createElement("th")
			document.getElementById("tr."+year+".months").appendChild(th)
			th.id = "th."+year+"."+month
			th.colSpan = "2"
			th.innerHTML = month
			
			for ( var i=1; i<32; i++ ) {
				var tr = document.getElementById("tr."+year+".day."+i)
				if ( tr == null ) { // csak 1x kell megcsinálni (első év oszlopban)
					tr = document.createElement("tr")
					tr.id = "tr."+year+".day."+i
					document.getElementById("table."+year).appendChild(tr)
				}
				
				var td = document.createElement("td")
				tr.appendChild(td)
				td.id = "td."+year+"."+month+"."+i+".day"
				td.innerHTML = i
				td.style.backgroundColor = "silver"
				
				var td = document.createElement("td")
				tr.appendChild(td)
				td.id = "td."+year+"."+month+"."+i+".hours"
				if ( i > count ) { 
					td.style.backgroundColor = "grey"
				} else {
					num = num +1
					td.dataset.num = num
					object[year][num] = "td."+year+"."+month+"."+i+".hours"
				}
			}
		}
		F_month("január",31)
		F_month("február",28)
		F_month("március",31)
		F_month("április",30)
		F_month("május",31)
		F_month("június",30)
		F_month("július",31)
		F_month("augusztus",31)
		F_month("szeptember",30)
		F_month("október",31)
		F_month("november",30)
		F_month("december",31)
		
	}
	for ( var year in arrYears ) { F_createYear(arrYears[year]) }
	
	// load Text
	function F_loadText(dataYear) {
		var originText = document.getElementById(dataYear).innerHTML
		var newText = originText.slice(1);
		var num = newText.split('\n').length
		for ( var i=1; i<num; i++ ) {
			var data = newText.slice(0,newText.indexOf("\n"));
			newText = newText.slice(newText.indexOf("\n")+1);
			//console.log(i+" : "+data)
			var year = data.slice(0,data.indexOf(","))
			data = data.slice(data.indexOf(",")+2)
			//console.log(i+" : "+year)
			var month = data.slice(0,data.indexOf(","))
			data = data.slice(data.indexOf(",")+2)
			//console.log(i+" : "+month)
			var day = data.slice(0,data.indexOf(","))
			data = data.slice(data.indexOf(",")+2)
			//console.log(i+" : "+day)
			var hour = data.slice(0,data.indexOf(","))
			data = data.slice(data.indexOf(",")+2)
			//console.log(i+" : "+hour)
			
			if ( month == "January" ) { month = "január" }
			if ( month == "February" ) { month = "február" }
			if ( month == "March" ) { month = "március" }
			if ( month == "April" ) { month = "április" }
			if ( month == "May" ) { month = "május" }
			if ( month == "June" ) { month = "június" }
			if ( month == "July" ) { month = "július" }
			if ( month == "August" ) { month = "augusztus" }
			if ( month == "September" ) { month = "szeptember" }
			if ( month == "October" ) { month = "október" }
			if ( month == "November" ) { month = "november" }
			if ( month == "December" ) { month = "december" }
			
			if ( hour.slice(0,1) == "[" ) { hour = '<span style="font-size: smaller;">'+hour+'</span>' }
			
			var td = document.getElementById("td."+year+"."+month+"."+day+".hours")
			var text = td.innerHTML
			if ( text.length != 0 ) { text = "," +text }
			text = hour + text 
			td.innerHTML = text
		}
	}
	for ( var year in arrYears ) { F_loadText("data_"+arrYears[year]) }
}
tables()

function abbrUpdate() {
	var ua = navigator.userAgent.toLowerCase()
	var isAndroid = ua.indexOf("android") > -1 
	
	function F_offsetXY(detElem,num) { // absolute x & y position-t lekéri!
		// azért kell, mert az offsetLeft nem elég, ha table-ban van egy element (akkor nem a body-hoz viszonyatva adja meg, hanem a table-hoz)
		/* alap pozíció lekérés kommandok:
			// var x = event.clientX
				// klikkelés/mouseover-kor az egér fixed x-pozíciója (tehát a képernyőn hol,scrollbartól független)
				// fixed position-re jó
			// var posX = this.offsetLeft 
				// ez a scrollt is beleszámítja --> absolute position-re jó
				// és element pozícióját kéri, de ez részlet kérdés szinte
				// table-ban magában nem jó, azért kell az F_offsetXY funkció
		*/
		
		if ( num == "1" ) {
			var rect = detElem.getBoundingClientRect(),
			scrollLeft = detElem.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		if ( num == "2" ) {
			var _x = 0;
			var _y = 0;
			while( detElem && !isNaN( detElem.offsetLeft ) && !isNaN( detElem.offsetTop ) ) {
				_x += detElem.offsetLeft - detElem.scrollLeft;
				_y += detElem.offsetTop - detElem.scrollTop;
				detElem = detElem.offsetParent;
			 }
			 return { top: _y, left: _x };
		}
		
		/*if(!detElem) detElem = this; // másik módszer, ha a fennti nem lesz jó valamiért  --> ez nem jó scroll-nál

		var x = detElem.offsetLeft;
		var y = detElem.offsetTop;

		while (detElem = detElem.offsetParent) {
			x += detElem.offsetLeft;
			y += detElem.offsetTop;
		}

		return { left: x, top: y };
		*/
	}

	function F_tooltipFuncs(){
		var span = document.createElement("span")
		span.id = "span_abbrTitle"
		document.body.appendChild(span)
		//document.body.appendChild(span)
		span.style.display = "none"
		span.style.border = "2px solid black"
		span.style.backgroundColor = "azure"
		span.style.position = "absolute"
		span.style.maxWidth = "300px"
		span.style.padding = "2px 2px 2px 5px"
		span.style.zIndex = "4"
		span.onclick = function() { event.stopPropagation() /* ne tűnjön el, mert a document.body-ra is klikkelek közben! */ }
	}
	F_tooltipFuncs()
	function F_titleVerChange(velement){
		function F_posTitle(detElem,mouseX) {
			
			var span = document.getElementById("span_abbrTitle")
			// title
			span.style.display = "block"
			if ( detElem.title != '' ) {
				detElem.dataset.title = detElem.title
				detElem.title = '' // ezzel akadályozom meg, hogy az eredeti ne jelenjen meg
			}
			span.innerHTML = detElem.dataset.title
			
			// Y pozíció
			var posY = F_offsetXY(detElem,"1").top
			posY = posY + detElem.offsetHeight +2
			span.style.top = posY +"px"
			  // ide kéne valami, hogy ha uccsó sorban van (midQ) a title, akkor ha nem fér ki, akkor felfele tolja.. (mint X-nél)
			
			// X pozíció
			var posX = F_offsetXY(detElem,"1").left
			if ( span.offsetWidth > document.body.offsetWidth - posX -10 ) {
				posX = document.body.offsetWidth - span.offsetWidth - 10
			} else {
				posX = mouseX
			}
			span.style.left = posX +"px"
		}
		var span = document.getElementById("span_abbrTitle")
		velement.onclick = function(event) {
			F_posTitle(this,event.clientX)
			span.dataset.status = 1 // ne tűnjön el, ha egeret lehúzom
			event.stopPropagation() // ne tűnjön el, mert a document.body-ra is klikkelek közben (azonban így csak az első klikk számít: lásd w3school)
		}
		velement.onmouseover = function(event) { F_posTitle(this,event.clientX) }
		velement.onmouseout = function() { if ( span.dataset.status != 1 ) { span.style.display = "none" } }
		velement.style.cursor = "pointer"
	}
	function F_titleChange(detElem){
		var abbrok = detElem.querySelectorAll("*[title]");
		for ( var i = 0; i < abbrok.length; i++ ) { F_titleVerChange(abbrok[i]) }
	}
	for ( var year in arrYears ) { F_titleChange(document.getElementById("details."+arrYears[year])) }
	
	document.body.onclick = function(){
		var span = document.getElementById("span_abbrTitle")
		span.dataset.status = span.dataset.status -1
		if ( span.dataset.status != 1 ) { span.style.display = "none" }
	}
}
abbrUpdate()

// rohamok dátuma
function seizures() {
	const MONTHS = {
		January: "01", February: "02", March: "03",
		April: "04", May: "05", June: "06",
		July: "07", August: "08", September: "09",
		October: "10", November: "11", December: "12"
	};

	function collectSeizures(year) {
		let container = document.getElementById(`data_${year}`);
		if (!container) return [];
		//console.log(year)
		//console.log(container)

		let lines = container.innerHTML.split("\n");
		let results = ""

		lines.forEach(line => {
			//console.log(line)
			if (!line.includes("<abbr")) return;

			let style = null
			//console.log(line +" - "+ line.indexOf("background-color:red"))
			if ( line.includes("background-color:red") != -1 ) style = "napközben"
			if ( line.includes("background-color:orange") != -1 ) style = "félálom / alvás"
			//console.log(style)
			if ( style == null ) return

			//console.log(line)
			let temp = line.slice(0,line.indexOf("<abbr"))
			// hónapnév → szám
			Object.keys(MONTHS).forEach(month => {
				temp = temp.replace(month, MONTHS[month])
			});
			temp = temp + style

			//console.log(temp)

			results = results + "<li>"+temp+"</li>\n"
			//console.log(results)
		});

		return results;
	}

	// ===== FUTTATÁS =====
	arrYears.forEach(year => {
		let data = collectSeizures(year);
		//console.log(data)
		//console.log(data.length)
		if (!data.length) return;
		
		let div = document.getElementById("seizureList");
		div.innerHTML = div.innerHTML + "<b>"+year+"</b>" + data
	});
}
seizures()

// gyógyszerváltás dátuma
function meds() {
	function formatDate(isoDate) {
		let d = new Date(isoDate);
		let y = d.getFullYear();
		let m = String(d.getMonth() + 1).padStart(2, "0");
		let day = String(d.getDate()).padStart(2, "0");
		return `${y}.${m}.${day}`;
	}

	function writeSzedes() {
		let div = document.getElementById("divSzedes");
		div.innerHTML = ""; // reset

		for (let change of medicationChanges) {
			let dateStr = formatDate(change.date);

			let medsStr = Object.entries(change.meds)
				.map(([name, dose]) => `${name}[${dose}mg]`)
				.join(", ");

			let li = document.createElement("li");
			li.textContent = `${dateStr} ➜ ${medsStr}`;

			div.appendChild(li);
		}
	}

	writeSzedes();

	function buildMedicationPeriods(changes) {
		function parseDose(doseStr) {
			return doseStr
				.split("+")
				.map(d => parseInt(d))
				.reduce((a, b) => a + b, 0);
		}
		
		let periods = [];

		for (let i = 0; i < changes.length; i++) {
			let current = changes[i];
			let next = changes[i - 1]; // mert időben visszafelé vannak
			
			let today = new Date();
			
			let period = {
				start: new Date(current.date),
				end: next ? new Date(next.date) : today,
				meds: {}
			};

			for (let [name, doseStr] of Object.entries(current.meds)) {
				period.meds[name] = parseDose(doseStr);
			}

			periods.push(period);
		}

		return periods;
	}
	const medicationPeriods = buildMedicationPeriods(medicationChanges)
	
	// később kellhet esetleg
	function getMedsForDate(dateStr, periods) {
		const date = new Date(dateStr);

		return periods.find(p =>
			date >= p.start && (!p.end || date < p.end)
		);
	}	
	// let testvar = getMedsForDate("2025-06-20", medicationPeriods);
	// console.log(testvar)
}
meds()

// grafikon rajzolása
function graphs() {
	let divGraphs = document.getElementById("divGraphs")
	
	// Gyógyszer színek
	const medColors = {
		Tegretol: "#3b82f6",    // kék
		Convulex: "#8b5cf6",    // lila
		Briviact: "#10b981",    // zöld
		Lamolep: "#f59e0b"      // narancs/arany
	}
	
	function parseDose(doseStr) {
		return doseStr.split("+").map(d => parseInt(d)).reduce((a, b) => a + b, 0)
	}
	
	function buildMedicationPeriods(changes) {
		let periods = []
		for (let i = 0; i < changes.length; i++) {
			let current = changes[i]
			let next = changes[i - 1]
			let today = new Date()
			
			let period = {
				start: new Date(current.date),
				end: next ? new Date(next.date) : today,
				meds: {}
			}
			
			for (let [name, doseStr] of Object.entries(current.meds)) {
				period.meds[name] = parseDose(doseStr)
			}
			periods.push(period)
		}
		return periods
	}
	
	function collectSeizures(year) {
		const MONTHS = {
			January: "01", February: "02", March: "03",
			April: "04", May: "05", June: "06",
			July: "07", August: "08", September: "09",
			October: "10", November: "11", December: "12"
		}
		
		let container = document.getElementById(`data_${year}`)
		if (!container) return []
		
		let lines = container.innerHTML.split("\n")
		let results = []
		
		lines.forEach(line => {
			if (!line.includes("<abbr")) return
			
			let style = null
			if (line.includes("background-color:red") != -1) style = "day"
			if (line.includes("background-color:orange") != -1) style = "sleep"
			if (style == null) return
			
			// Parse date from line: "year, month, day, hour"
			let parts = line.split(",").map(p => p.trim())
			if (parts.length < 4) return
			
			let monthNum = MONTHS[parts[1]]
			if (!monthNum) return
			
			let dateStr = `${parts[0]}-${monthNum}-${parts[2].padStart(2, '0')}`
			results.push({ date: new Date(dateStr), type: style })
		})
		
		return results
	}
	
	function yearlyGraph(year) {
		let canvas = document.createElement('canvas')
		canvas.width = 1000
		canvas.height = 400
		canvas.style.border = "1px solid #ccc"
		canvas.style.marginBottom = "20px"
		divGraphs.appendChild(canvas)
		
		let ctx = canvas.getContext('2d')
		
		// Dátum tartomány
		let startDate = new Date(`${year}-01-01`)
		let endDate = new Date(`${year}-12-31`)
		
		// Canvas méret paraméterek
		let padding = { left: 60, right: 20, top: 40, bottom: 40 }
		let graphWidth = canvas.width - padding.left - padding.right
		let graphHeight = canvas.height - padding.top - padding.bottom
		
		// Dátum -> X koordináta
		function dateToX(date) {
			let totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24)
			let daysSinceStart = (date - startDate) / (1000 * 60 * 60 * 24)
			return padding.left + (daysSinceStart / totalDays) * graphWidth
		}
		
		// Dózis -> Y koordináta (invertálva)
		let maxDose = 1200
		function doseToY(dose) {
			return padding.top + graphHeight - (dose / maxDose) * graphHeight
		}
		
		// Háttér
		ctx.fillStyle = "#ffffff"
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		
		// Cím
		ctx.fillStyle = "#000"
		ctx.font = "bold 18px Arial"
		ctx.textAlign = "center"
		ctx.fillText(year, canvas.width / 2, 25)
		
		// Y tengely skála
		ctx.fillStyle = "#666"
		ctx.font = "12px Arial"
		ctx.textAlign = "right"
		for (let dose = 0; dose <= maxDose; dose += 200) {
			let y = doseToY(dose)
			ctx.fillText(dose + "mg", padding.left - 10, y + 4)
			
			// Rács vonalak
			ctx.strokeStyle = "#e5e5e5"
			ctx.beginPath()
			ctx.moveTo(padding.left, y)
			ctx.lineTo(canvas.width - padding.right, y)
			ctx.stroke()
		}
		
		// X tengely hónapok
		ctx.textAlign = "center"
		const monthNames = ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"]
		for (let m = 0; m < 12; m++) {
			let date = new Date(year, m, 15)
			let x = dateToX(date)
			ctx.fillText(monthNames[m], x, canvas.height - 15)
		}
		
		// Gyógyszer vonalak rajzolása
		let periods = buildMedicationPeriods(medicationChanges)
		let medNames = Object.keys(medColors)
		
		medNames.forEach(medName => {
			ctx.strokeStyle = medColors[medName]
			ctx.lineWidth = 3
			
			periods.forEach(period => {
				if (!period.meds[medName]) return
				
				let dose = period.meds[medName]
				let x1 = Math.max(dateToX(period.start), padding.left)
				let x2 = Math.min(dateToX(period.end), canvas.width - padding.right)
				let y = doseToY(dose)
				
				// Csak akkor rajzolunk, ha az adott év tartományába esik
				if (period.start.getFullYear() <= year && period.end.getFullYear() >= year) {
					ctx.beginPath()
					ctx.moveTo(x1, y)
					ctx.lineTo(x2, y)
					ctx.stroke()
				}
			})
		})
		
		// Rohamok rajzolása
		let seizures = collectSeizures(year)
		let verticalOffset = 0 // váltakozó függőleges pozíció
		seizures.forEach(seizure => {
			let x = dateToX(seizure.date)
			let y = padding.top + 10 + verticalOffset
			
			ctx.fillStyle = seizure.type === "day" ? "#ef4444" : "#fbbf24" // világosabb sárga
			ctx.beginPath()
			ctx.arc(x, y, 6, 0, Math.PI * 2)
			ctx.fill()
			
			// Keret
			ctx.strokeStyle = "#000"
			ctx.lineWidth = 1
			ctx.stroke()
			
			// Váltakozó magasság: 0, 30, 60, majd vissza 0
			verticalOffset = (verticalOffset + 30) % 90
		})
		
		// Legenda
		let legendX = canvas.width - 150
		let legendY = padding.top + 20
		ctx.font = "12px Arial"
		ctx.textAlign = "left"
		
		// Gyógyszerek
		let yOffset = 0
		Object.entries(medColors).forEach(([name, color]) => {
			ctx.strokeStyle = color
			ctx.lineWidth = 3
			ctx.beginPath()
			ctx.moveTo(legendX, legendY + yOffset)
			ctx.lineTo(legendX + 20, legendY + yOffset)
			ctx.stroke()
			
			ctx.fillStyle = "#000"
			ctx.fillText(name, legendX + 25, legendY + yOffset + 4)
			yOffset += 20
		})
		
		// Rohamok
		yOffset += 10
		ctx.fillStyle = "#ef4444"
		ctx.beginPath()
		ctx.arc(legendX + 10, legendY + yOffset, 6, 0, Math.PI * 2)
		ctx.fill()
		ctx.fillStyle = "#000"
		ctx.fillText("Napközbeni", legendX + 25, legendY + yOffset + 4)
		
		yOffset += 20
		ctx.fillStyle = "#fbbf24" // világosabb sárga
		ctx.beginPath()
		ctx.arc(legendX + 10, legendY + yOffset, 6, 0, Math.PI * 2)
		ctx.fill()
		ctx.fillStyle = "#000"
		ctx.fillText("Félálom/alvás", legendX + 25, legendY + yOffset + 4)
	}
	
	arrYears.forEach(year => { yearlyGraph(year) })
}
graphs()


// [régi] ➜ gyógyszerszint kalkulátor fv-ek (alapja jó, csak szépíthetném)
function medLvl() {
	// #1: calcLvl
	var objGraph = []
	function F_calcLvl(year,month,day) {
		day = Number(day) +1
		for ( var d=1; d<day; d++ ) {
			objGraph[d] = []
			var td = document.getElementById("td."+year+"."+month+"."+d+".hours")
			var num = td.dataset.num
			// console.log(num)
			num = num.slice(num.indexOf(".")+1)
			num = num.slice(num.indexOf(".")+1)
			
			function F_calcHour(hour){
				var level = 0
				for ( var i=0; i<4; i++ ) {
					var newNum = num -i
					var id = object[year][newNum]
					var elem = document.getElementById(id)
					var text = elem.innerHTML
					// console.log(id)
					// console.log(text)
					
					var myArray = text.split(",");
					for ( var x in myArray ) {
						var hourData = myArray[x]
						if ( isNaN(hourData) ) { continue } // epilepszia, egyéb felírás
						// console.log(hourData)
						var hourData = Number(hourData) + 4 // felszivódást is beleveszem, amit 4 órának vettem wiki alapján bár 4-24et ír, de nem bonyolítom (vmennyi úgyis felszívódott már)
						// console.log(hourData)
						if ( i == 0  && hourData > hour ) { continue } // még be se vettem a gyógyszert
						
						var hourDiff = i*24
						hourDiff = Number(hour) + Number(hourDiff) - Number(hourData)
						// console.log(hourDiff)
						
						var hatvany = hourDiff /20
						var percent = Math.pow(0.5,hatvany)
						level = level + percent*200
						// console.log(level)
					}
					objGraph[d][hour] = level
				}
			}
			F_calcHour(0)
			F_calcHour(12)
		}
	}
	F_calcLvl("2022","február",28)
	F_calcLvl("2022","március",31)
	// #2: showLvl
	for ( var day in objGraph ) {
		for ( var hour in objGraph[day] ) {
			var level = objGraph[day][hour]
			console.log(day+" - "+hour+" - "+level)
		}
	}
}
//medLvl()

















