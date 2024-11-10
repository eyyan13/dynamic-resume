// Function to update the resume preview with the submitted data
function updatePreview(data) {
    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
      <h3>${data.fullName}</h3>
      <p>Email: ${data.email} | Phone: ${data.phone}</p>
      <h4>Summary</h4>
      <p>${data.summary}</p>
      <h4>Experience</h4>
      <p>${data.experience}</p>
      <h4>Education</h4>
      <p>${data.education}</p>
      <h4>Skills</h4>
      <p>${data.skills}</p>
    `;
  }
  
  // Function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Collect the form data
    const formData = new FormData(event.target);
  
    // Create an object with the form values
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      summary: formData.get('summary'),
      experience: formData.get('experience'),
      education: formData.get('education'),
      skills: formData.get('skills')
    };
  
    // Update the resume preview with the collected data
    updatePreview(data);
  
    // Show the resume preview section
    const previewSection = document.getElementById('previewSection');
    previewSection.style.display = 'block';
  }
  
  // Attach the event listener to the form
  const resumeForm = document.getElementById('resumeForm');
  resumeForm.addEventListener('submit', handleSubmit);
  