document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resultContainer = document.getElementById('resultContainer');
    const resultDiv = document.getElementById('result');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      resultDiv.textContent = 'Analyzing...';
      resultContainer.style.display = 'block';
  
      try {
        const response = await fetch('/analyze', {
          method: 'POST',
          body: formData,
        });
  
        const text = await response.text();
        resultDiv.textContent = text;
      } catch (err) {
        resultDiv.textContent = 'Error analyzing resume.';
        console.error(err);
      }
    });
  

    const fileInput = document.getElementById('resumeFile');
    const fileNameDisplay = document.getElementById('fileName');
    const fileZoneDisplay = document.getElementById('fileZone');
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          fileNameDisplay.textContent = fileInput.files[0].name;
          fileNameDisplay.style.display = 'block';
          fileZoneDisplay.innerHTML = '';
          const checkSpan = document.createElement('span');
          checkSpan.textContent = '✔';
          checkSpan.style.color = '#22c55e';
          checkSpan.style.fontSize = '1.5em';
          const textSpan = document.createElement('span');
          textSpan.textContent = ' File uploaded';
          textSpan.style.color = '#22c55e';
          textSpan.style.fontWeight = '500';
          textSpan.style.marginLeft = '0.5em';
          fileZoneDisplay.appendChild(checkSpan);
          fileZoneDisplay.appendChild(textSpan);
        } else {
          fileNameDisplay.textContent = '';
          fileNameDisplay.style.display = 'none';
          fileZoneDisplay.innerHTML = '';
        }
      });
  });
