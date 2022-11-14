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
		document.addPerson.addPersonButton.addEventListener('click', function(e) {
		e.preventDefault();

		let person = {
			dateOfBirth: document.addPerson.dateOfBirth.value,
			sex: document.addPerson.sex.value,
			allergies: document.addPerson.allergies.value,
			med_History: document.addPerson.medHistory.value

		};
		addperson(person);
	})
	
	document.deleteBm.deleteBtn.addEventListener('click', function(e) {
		e.preventDefault();
		deleteBm(document.deleteBm.bmId.value);
	})
	
		document.deletePerson.deletePersonBtn.addEventListener('click', function(e) {
		e.preventDefault();
		deletePerson(document.deletePerson.personId.value);
	})
	
	document.updateBm.update.addEventListener('click', function(e) {
		e.preventDefault();
		updateBm(document.updateBm.bmId.value);
	})
		document.updatePerson.updatePersonBtn.addEventListener('click', function(e) {
		e.preventDefault();
		updatePerson(document.updatePerson.personId.value);
	})
}

function getBM() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/bms');
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
	xhr.open('GET', 'api/persons');
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
			let totalBM = 0;
			for(bm of bms) {
				totalBM ++;		
			}
						tr = document.createElement('tr');
			tbody.appendChild(tr);
			td = document.createElement('td');
			td.textContent = "Total BMs in Record: " + totalBM; 
			tr.appendChild(td);
	}
	//TODO XHR to get all the current data


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
	xhr.open('POST', `api/bms/bm`);

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

function addperson(person) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', `api/persons/person`);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let person = JSON.parse(xhr.responseText);
				getPersons();
			} else {
				console.error("Failed to create Person record");
				console.error(xhr.status + " : " + xhr.responseText);
			}
		}
	}
	let personJson = JSON.stringify(person);
	xhr.send(personJson);
}

function deleteBm(bmId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/bms/' + bmId);
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

function deletePerson(personId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/persons/' + personId);
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

function updatePerson(personId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/persons/' + personId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let personJson = xhr.responseText;
				console.log(personJson);  //TESTING 
				let person = JSON.parse(personJson);
				
				let PersonData = document.getElementById('PersonData');
				let form = document.createElement('form');
				form.name = 'updatePersonform';
				PersonData.appendChild(form);
				let dateOfBirth = document.createElement('input');
				dateOfBirth.name = 'dateOfBirth';
				dateOfBirth.type = 'text';
				dateOfBirth.value = person.dateOfBirth;
				form.appendChild(dateOfBirth);
				let sex = document.createElement('input');
				sex.name = 'sex';
				sex.type = 'text';
				sex.value = person.sex;
				form.appendChild(sex);
				let allergies = document.createElement('input');
				allergies.name = 'allergies';
				allergies.type = 'text';
				allergies.value = person.allergies;
				form.appendChild(allergies);
				let medHistory = document.createElement('input');
				medHistory.name = 'medHistory';
				medHistory.type = 'text';
				medHistory.value = person.medHistory;
				form.appendChild(medHistory);

				let submit = document.createElement('input');
				submit.name = 'submit';
				submit.type = 'submit';
				submit.value = 'Update Record';
				submit.addEventListener('click', function(e) {
					e.preventDefault();
					let newPerson = {
						id: personId,
						dateOfBirth: dateOfBirth.value,
						sex: sex.value,
						allergies: allergies.value,
						medHistory: medHistory.value
					}
					updatePersonSubmit(newPerson);
				})
				form.appendChild(submit);
			}
		}
	}
	xhr.send();

}

function updatePersonSubmit(person) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/persons/` + person.id);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let person = JSON.parse(xhr.responseText);
				let PersonData = document.getElementById('PersonData');
				PersonData.textContent = '';
				getPersons();
			} else {
				console.error("Failed to create Person Record");
				console.error(xhr.status + " : " + xhr.responseText);
			}
		}
	}
	let personJson = JSON.stringify(person);
	xhr.send(personJson);

}

function updateBmSubmit(bm) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/bms/` + bm.id);

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

