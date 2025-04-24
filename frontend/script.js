document.getElementById('nameForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const birthDate = document.getElementById('birthDate').value;
  const nationality = document.getElementById('nationality').value;

  const res = await fetch('https://your-backend.vercel.app/api/generate-name', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, birthDate, nationality })
  });

  const names = await res.json();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  names.forEach(n => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `<h3>${n.name}</h3><p>${n.meaning}</p><small>${n.source}</small>`;
    resultsDiv.appendChild(card);
  });
});
