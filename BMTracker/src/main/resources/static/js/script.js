window.addEventListener('load', function() {
	console.log('script.js loaded');
	init();
});

function init() {
	getBM();
	getPersons();
	document.addBm.addBmButton.addEventListener('click', function(e) {
		e.preventDefault();

		let bm = {
			color: document.addBm.color.value,
			consistency: document.addBm.consistency.value,
			date: document.addBm.date.value,
			person: { id: document.addBm.personId.value }

		};
		addBm(bm);
	})
	document.deleteBm.deleteBtn.addEventListener('click', function(e) {
		e.preventDefault();
		deleteBm(document.deleteBm.bmId.value);
	})
	document.updateBm.update.addEventListener('click', function(e) {
		e.preventDefault();
		updateBm(document.updateBm.bmId.value);
	})
}

function getBM() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/bms');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				//let bmJson = xhr.responseText;
				let bm = JSON.parse(xhr.responseText);
				displayBMs(bm);
			}
		}
	};
	xhr.send();
}


function getPersons() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/persons');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				//let bmJson = xhr.responseText;
				let person = JSON.parse(xhr.responseText);
				displayPersons(person);
			}
		}
	};
	xhr.send();
}
function displayBMs(bms) {

	let tbody = document.getElementById('bmTableBody');
	tbody.textContent = '';
	if (bms && Array.isArray(bms) && bms.length > 0) {
		for (let bm of bms) {
			let tr = document.createElement('tr');
			tbody.appendChild(tr);
			let td = document.createElement('td');
			td.textContent = bm.id;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = bm.date;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = bm.color;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = bm.consistency;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = bm.person.id;
			tr.appendChild(td);
		}
	}
	//TODO XHR to get all the current data


}

function displayBMList() {
	//TODO: add BMs to DOM
}

function displayPersons(persons) {
	let tbody = document.getElementById('personsTableBody');
	tbody.textContent = '';
	if (persons && Array.isArray(persons) && persons.length > 0) {
		for (let person of persons) {
			let tr = document.createElement('tr');
			tbody.appendChild(tr);
			let td = document.createElement('td');
			td.textContent = person.id;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = person.dateOfBirth;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = person.sex;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = person.allergies;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = person.medHistory;
			tr.appendChild(td);
		}
	}
}

function addBm(bm) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', `/api/bms/bm`);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let bm = JSON.parse(xhr.responseText);
				getBM();
			} else {
				console.error("Failed to create BM event");
				console.error(xhr.status + " : " + xhr.responseText);
			}
		}
	}
	let bmJson = JSON.stringify(bm);
	xhr.send(bmJson);
}

function deleteBm(bmId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', '/api/bms/' + bmId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {

				getBM();
				getPersons();
			}
		}
	}
	xhr.send();
};


function updateBm(bmId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/bms/' + bmId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let bmJson = xhr.responseText;
				console.log(bmJson);  //TESTING 
				let bm = JSON.parse(bmJson);
				
				let BMData = document.getElementById('BMData');
				let form = document.createElement('form');
				form.name = 'updateBMform';
				BMData.appendChild(form);
				let color = document.createElement('input');
				color.name = 'color';
				color.type = 'text';
				color.value = bm.color;
				form.appendChild(color);
				let date = document.createElement('input');
				date.name = 'date';
				date.type = 'text';
				date.value = bm.date;
				form.appendChild(date);
				let consistency = document.createElement('input');
				consistency.name = 'consistency';
				consistency.type = 'text';
				consistency.value = bm.consistency;
				form.appendChild(consistency);
				let personId = document.createElement('input');
				personId.name = 'personId';
				personId.type = 'text';
				personId.value = bm.person.id;
				form.appendChild(personId);

				let submit = document.createElement('input');
				submit.name = 'submit';
				submit.type = 'submit';
				submit.value = 'Update Record';
				submit.addEventListener('click', function(e) {
					e.preventDefault();
					let newBm = {
						id: bmId,
						color: color.value,
						consistency: consistency.value,
						date: date.value,
						person: { id: personId.value }
					}
					updateBmSubmit(newBm);
				})
				form.appendChild(submit);
			}
		}
	}
	xhr.send();

}


function updateBmSubmit(bm) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `/api/bms/` + bm.id);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let bm = JSON.parse(xhr.responseText);
				let BMData = document.getElementById('BMData');
				BMData.textContent = '';
				getBM();
			} else {
				console.error("Failed to create BM event");
				console.error(xhr.status + " : " + xhr.responseText);
			}
		}
	}
	let bmJson = JSON.stringify(bm);
	xhr.send(bmJson);

}