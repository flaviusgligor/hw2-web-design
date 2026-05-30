document.getElementById('projectForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  let totulEValid = true;

  const name = document.getElementById('pName').value.trim();
  const desc = document.getElementById('pDesc').value.trim();
  const url = document.getElementById('pUrl').value.trim();
  const tech = document.getElementById('pTech').value;
  const date = document.getElementById('pDate').value;


  if (name === "") {
    document.getElementById('pNameError').textContent = "Introdu numele!";
    totulEValid = false;
  } else {
    document.getElementById('pNameError').textContent = "";
  }


  if (desc.length < 10) {
    document.getElementById('pDescError').textContent = "Scrie o descriere mai lungă (min 10 litere)!";
    totulEValid = false;
  } else {
    document.getElementById('pDescError').textContent = "";
  }

  if (url === "" || !url.startsWith("http")) {
    document.getElementById('pUrlError').textContent = "Introdu un link valid (să înceapă cu http)!";
    totulEValid = false;
  } else {
    document.getElementById('pUrlError').textContent = "";
  }

  if (tech === "") {
    document.getElementById('pTechError').textContent = "Alege o tehnologie!";
    totulEValid = false;
  } else {
    document.getElementById('pTechError').textContent = "";
  }

  if (date === "") {
    document.getElementById('pDateError').textContent = "Alege o dată!";
    totulEValid = false;
  } else {
    document.getElementById('pDateError').textContent = "";
  }

 
  if (totulEValid) {
    const tbody = document.querySelector('#projectsTable tbody');

    const randNou = document.createElement('tr');
    

    randNou.innerHTML = `
      <td>${name}</td>
      <td>${desc}</td>
      <td><a href="${url}" target="_blank">Deschide link</a></td>
      <td>${tech}</td>
      <td>${date}</td>
    `;
    tbody.appendChild(randNou);
    this.reset();
  }
});