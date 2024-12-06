document.addEventListener('DOMContentLoaded', function() {
    // Form pages
    const pages = document.querySelectorAll('.form-page');
    
    // Navigation buttons
    const nextButtons = {
        page1: document.getElementById('nextPage1'),
        page2: document.getElementById('nextPage2'),
        page3: document.getElementById('nextPage3'),
        page4: document.getElementById('nextPage4'),
        page5: document.getElementById('nextPage5'),
        page6: document.getElementById('nextPage6'),
        page7: document.getElementById('nextPage7'),
        page8: document.getElementById('nextPage8'),
        page9: document.getElementById('nextPage9'),
        page10: document.getElementById('nextPage10'),
        page11: document.getElementById('submitApplication')
    };

    const prevButtons = {
        page2: document.getElementById('prevPage2'),
        page3: document.getElementById('prevPage3'),
        page4: document.getElementById('prevPage4'),
        page5: document.getElementById('prevPage5'),
        page6: document.getElementById('prevPage6'),
        page7: document.getElementById('prevPage7'),
        page8: document.getElementById('prevPage8'),
        page9: document.getElementById('prevPage9'),
        page10: document.getElementById('prevPage10'),
        page11: document.getElementById('prevPage11')
    };

    // Validation functions
    function validateBasicInfo() {
        let isValid = true;
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const countryCode = document.getElementById('countrycode');
        const contactNumber = document.getElementById('contactNumber');
        const email = document.getElementById('email');
           
    const countryCodeRegex = /^\+\d{1,3}$/; // Country code: + followed by 1-3 digits
    const contactNumberRegex = /^\d{10}$/; // Contact number: exactly 10 digits

        // First Name Validation
        if (!firstName.value.trim()) {
            document.getElementById('firstNameError').textContent = 'First Name is required';
            isValid = false;
        } else {
            document.getElementById('firstNameError').textContent = '';
        }

        // Last Name Validation
        if (!lastName.value.trim()) {
            document.getElementById('lastNameError').textContent = 'Last Name is required';
            isValid = false;
        } else {
            document.getElementById('lastNameError').textContent = '';
        }
        // Validate country code
    if (!countryCode.value.trim()) {
        document.getElementById('countryCodeError').textContent = 'Country Code is required';
        isValid = false;
    } else if (!countryCodeRegex.test(countryCode.value)) {
        document.getElementById('countryCodeError').textContent = 'Country Code Must start with +';
        isValid = false;
    } else {
        document.getElementById('countryCodeError').textContent = '';
    }

    // Validate contact number
    if (!contactNumber.value.trim()) {
        document.getElementById('contactNumberError').textContent = 'Contact Number is required';
        isValid = false;
    } else if (!contactNumberRegex.test(contactNumber.value)) {
        document.getElementById('contactNumberError').textContent = 'Invalid Mobile number. Must be exactly 10 digits';
        isValid = false;
    } else {
        document.getElementById('contactNumberError').textContent = '';
    }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        return isValid;
    }

    // Show/Hide Pages
    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // Page 3 Domain Selection Logic
    function handleDomainSelection() {
        const domains = document.getElementsByName('professionalDomain');
        const otherRoleContainer = document.getElementById('otherRoleContainer');
        
        domains.forEach(domain => {
            domain.addEventListener('change', function() {
                // Show/hide other role input for 'Other' option
                if (this.value === 'Other') {
                    otherRoleContainer.style.display = 'block';
                } else {
                    otherRoleContainer.style.display = 'none';
                }
            });
        });
    }

    // Skill Validation
    function validateSkills(skillName) {
        const skills = document.querySelectorAll(`input[name="${skillName}"]:checked`);
        const errorElement = document.getElementById(`${skillName}Error`);
        
        if (skills.length === 0) {
            errorElement.textContent = 'Please select at least one skill';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }
    // Helper function to validate date range
    function validateDateRange(yearFrom, yearTo) {
    // If either year is empty, consider it valid
        if (!yearFrom || !yearTo) return true;

    // Convert years to Date objects for comparison
        const fromDate = new Date(yearFrom);
        const toDate = new Date(yearTo);

    // Check if fromDate is greater than toDate
        return fromDate <= toDate;
    }

    // Navigation Event Listeners
    // Page 1 Next
    nextButtons.page1.addEventListener('click', function() {
        if (validateBasicInfo()) {
            showPage('page2');
        }
    });

    // Page 2 Next
    nextButtons.page2.addEventListener('click', function() {
        const locationSelected = document.querySelector('input[name="locationPreference"]:checked');
        const engagementSelected = document.querySelector('input[name="engagementPreference"]:checked');
        
        if (locationSelected && engagementSelected) {
            showPage('page3');
        } else {
            alert('Please select both Location and Engagement Preferences');
        }
    });

    // Page 2 Previous
    prevButtons.page2.addEventListener('click', function() {
        showPage('page1');
    });

    // Page 3 Next
    nextButtons.page3.addEventListener('click', function() {
        const selectedDomain = document.querySelector('input[name="professionalDomain"]:checked');
        
        if (selectedDomain) {
            switch(selectedDomain.value) {
                case 'Hands-on 3D Visual Effects/Animation/Design/Fine-Arts Craftsperson':
                    showPage('page4');
                    document.getElementById('page5').classList.remove('active');
                    document.getElementById('page6').classList.remove('active');
                    break;
                case 'Hands-on 2D Visual Effects/Animation/Design/Fine-Arts Craftsperson':
                    showPage('page5');
                    document.getElementById('page4').classList.remove('active');
                    document.getElementById('page6').classList.remove('active');
                    break;
                case 'Hands-on Generalist Visual Effects/Animation/Design/Fine-Arts Craftsperson':
                    showPage('page6');
                    document.getElementById('page4').classList.remove('active');
                    document.getElementById('page5').classList.remove('active');
                    break;
                case 'Supervisor/Co-ordinator':
                    showPage('page9');
                    document.getElementById('page4').classList.remove('active');
                    document.getElementById('page5').classList.remove('active');
                    document.getElementById('page6').classList.remove('active');
                    document.getElementById('page7').classList.remove('active');
                    document.getElementById('page8').classList.remove('active');
                    break;
                case 'Software Developer':
                case 'Hardware Systems':
                case 'HR/Accounts/Legal Executive':
                case 'Other':
                    showPage('page7');
                    document.getElementById('page4').classList.remove('active');
                    document.getElementById('page5').classList.remove('active');
                    document.getElementById('page6').classList.remove('active');
                    break;
            }
        } else {
            alert('Please select a Professional Domain');
        }
    });

    // Page 3 Previous
    prevButtons.page3.addEventListener('click', function() {
        showPage('page2');
    });

    // Page 4 (3D Skills) Next
    nextButtons.page4.addEventListener('click', function() {
        if (validateSkills('3dSkills')) {
            showPage('page7');
        }
    });

    // Page 4 Previous
    prevButtons.page4.addEventListener('click', function() {
        showPage('page3');
    });

    // Page 5 (2D Skills) Next
    nextButtons.page5.addEventListener('click', function() {
        if (validateSkills('2dSkills')) {
            showPage('page7');
        }
    });

    // Page 5 Previous
    prevButtons.page5.addEventListener('click', function() {
        showPage('page3');
    });

    // Page 6 (Generalist Skills) Next
    nextButtons.page6.addEventListener('click', function() {
        if (validateSkills('generalistSkills')) {
            showPage('page7');
        }
    });

    // Page 6 Previous
    prevButtons.page6.addEventListener('click', function() {
        showPage('page3');
    });

    // Page 7 Next (Professional Background)
    nextButtons.page7.addEventListener('click', function() {
        const backgroundSelected = document.querySelector('input[name="professionalBackground"]:checked');
        
        if (backgroundSelected) {
            if (backgroundSelected.value === 'Fresher') {
                showPage('page8');
                document.getElementById('page9').classList.remove('active');
            } else {
                showPage('page9');
                document.getElementById('page8').classList.remove('active');
            }
        } else {
            alert('Please select your professional background');
        }
    });

    // Page 7 Previous
    prevButtons.page7.addEventListener('click', function() {
        // Go back to the domain-specific page
        const selectedDomain = document.querySelector('input[name="professionalDomain"]:checked').value;
        
        switch(selectedDomain) {
            case 'Hands-on 3D Visual Effects/Animation/Design/Fine-Arts Craftsperson':
                showPage('page4');
                break;
            case 'Hands-on 2D Visual Effects/Animation/Design/Fine-Arts Craftsperson':
                showPage('page5');
                break;
            case 'Hands-on Generalist Visual Effects/Animation/Design/Fine-Arts Craftsperson':
                showPage('page6');
                break;
            default:
                showPage('page3');
        }
    });

    // Page 8 (Academic Record) Next
    nextButtons.page8.addEventListener('click', function() {
        const educationEntries = document.querySelectorAll('#educationContainer .education-entry');
        let isValid = true;
        let errorMessage = '';

        educationEntries.forEach(entry => {
            const yearFrom = entry.querySelector('input[name="educationYearFrom"]');
            const yearTo = entry.querySelector('input[name="educationYearTo"]');
            const institution = entry.querySelector('input[name="educationInstitution"]');
            const course = entry.querySelector('input[name="educationCourse"]');

            if (!yearFrom.value || !yearTo.value || !institution.value || !course.value) {
                isValid = false;
                errorMessage = 'Please fill in all education details';
            }
            // Additional validation for date range
        if (yearFrom.value && yearTo.value && !validateDateRange(yearFrom.value, yearTo.value)) {
            isValid = false;
            errorMessage = `Year(From) cannot be later than Year(To)`;
        }
        });

        if (isValid) {
            showPage('page10');
        } else {
            alert(errorMessage);
        }
    });

    // Page 8 Previous
    prevButtons.page8.addEventListener('click', function() {
        showPage('page7');
    });

    // Page 9 (Work Experience) Next
    nextButtons.page9.addEventListener('click', function() {
        const experienceEntries = document.querySelectorAll('#experienceContainer .experience-entry');
        let isValid = true;
        let errorMessage = '';
        experienceEntries.forEach(entry => {
            const yearFrom = entry.querySelector('input[name="experienceYearFrom"]');
            const yearTo = entry.querySelector('input[name="experienceYearTo"]');
            const company = entry.querySelector('input[name="experienceCompany"]');
            const role = entry.querySelector('input[name="experienceRole"]');

            if (!yearFrom.value || !yearTo.value || !company.value || !role.value) {
                isValid = false;
                errorMessage = 'Please fill in all work experience details';
            }
            // Additional validation for date range
        if (yearFrom.value && yearTo.value && !validateDateRange(yearFrom.value, yearTo.value)) {
            isValid = false;
            errorMessage = 'Year (From) cannot be later than Year (To)';
            return; // Exit the current iteration
        }
        });

        if (isValid) {
            showPage('page10');
        } else {
            alert(errorMessage);
        }
    });

    // Page 9 Previous
    prevButtons.page9.addEventListener('click', function() {
        const selectedDomain = document.querySelector('input[name="professionalDomain"]:checked').value;
        switch(selectedDomain) {
            case 'Supervisor/Co-ordinator':
                showPage('page3');
                break;
            default:
                showPage('page7');
        }
    });

    // Page 10 (Show Reels) Next
    nextButtons.page10.addEventListener('click', function() {
        const showReelEntries = document.querySelectorAll('#showReelsContainer .show-reels-entry');
        let isValid = true;

        showReelEntries.forEach(entry => {
            const link = entry.querySelector('input[name="showReelLink"]');
            
            if (!link.value) {
                isValid = false;
            }
        });

        if (isValid) {
            showPage('page11');
        } else {
            alert('Please add at least one show reel link');
        }
    });

    // Page 10 Previous
prevButtons.page10.addEventListener('click', function() {
    const selectedDomain = document.querySelector('input[name="professionalDomain"]:checked');
    
    if (selectedDomain && selectedDomain.value === 'Supervisor/Co-ordinator') {
        // If domain is Supervisor/Co-ordinator, go directly back to page 3
        showPage('page9');
    } else {
        // For other domains, check professional background
        const backgroundSelected = document.querySelector('input[name="professionalBackground"]:checked');
        
        if (backgroundSelected) {
            if (backgroundSelected.value === 'Fresher') {
                showPage('page8');
            } else {
                showPage('page9');
            }
        } else {
            // Fallback to page 7 if no background is selected
            showPage('page7');
        }
    }
});

    // Page 11 Previous
    prevButtons.page11.addEventListener('click', function() {
        showPage('page10');
    });

    // Terms Checkbox for Submit
    const termsCheckbox = document.getElementById('termsCheckbox');
    const submitButton = document.getElementById('submitApplication'); 
    
   
    termsCheckbox.addEventListener('change', function() {
        submitButton.disabled = !this.checked;
        
    });

   

    // Additional Functionality for Dynamic Fields
    // Add Education
    document.getElementById('addEducation').addEventListener('click', function() {
        const container = document.getElementById('educationContainer');
        const newEntry = container.querySelector('.education-entry').cloneNode(true);
        
        // Clear input values
        newEntry.querySelectorAll('input').forEach(input => input.value = '');
        
        // Add remove button functionality
        const removeButton = newEntry.querySelector('.remove-education');
        if (container.children.length > 0) {
            removeButton.style.display = 'block'; // Make remove button visible
            removeButton.addEventListener('click', function() {
                container.removeChild(newEntry);
            });
        } else {
            removeButton.style.display = 'none'; // Hide remove button for first entry
        }
        
        container.appendChild(newEntry);
    });

    // Add Experience
    document.getElementById('addExperience').addEventListener('click', function() {
        const container = document.getElementById('experienceContainer');
        const newEntry = container.querySelector('.experience-entry').cloneNode(true);
        
        // Clear input values
        newEntry.querySelectorAll('input').forEach(input => input.value = '');
        
        // Add remove button functionality
        const removeButton = newEntry.querySelector('.remove-experience');
        if (container.children.length > 0) {
            removeButton.style.display = 'block'; // Make remove button visible
            removeButton.addEventListener('click', function() {
                container.removeChild(newEntry);
            });
        } else {
            removeButton.style.display = 'none'; // Hide remove button for first entry
        }
        
        container.appendChild(newEntry);
    });

    // Add Show Reel
    document.getElementById('addShowReel').addEventListener('click', function() {
        const container = document.getElementById('showReelsContainer');
        const newEntry = container.querySelector('.show-reels-entry').cloneNode(true);
        
        // Clear input values
        newEntry.querySelector('input').value = '';
        
        // Add remove button functionality
        const removeButton = newEntry.querySelector('.remove-show-reel');
        if (container.children.length > 0) {
            removeButton.style.display = 'block'; // Make remove button visible
            removeButton.addEventListener('click', function() {
                container.removeChild(newEntry);
            });
        } else {
            removeButton.style.display = 'none'; // Hide remove button for first entry
        }
        
        container.appendChild(newEntry);
    });

    // Initialize domain selection logic
    handleDomainSelection();
   // Function to collect form data
   function collectFormData() {
    const countryCodeInput = document.getElementById('countrycode');
    const contactNumberInput = document.getElementById('contactNumber');
    let fullContactNumber = `${countryCodeInput.value}${contactNumberInput.value}`;
    const professionalDomainElement = document.querySelector('input[name="professionalDomain"]:checked');
    const otherRoleValue = document.getElementById('otherRole')?.value;
    const professionalBackgroundElement = document.querySelector('input[name="professionalBackground"]:checked')?.value ;
   
    
    // Initialize the form data object
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        contactNumber: fullContactNumber,
        email: document.getElementById('email').value,
        locationPreference: document.querySelector('input[name="locationPreference"]:checked')?.value || '',
        engagementPreference: document.querySelector('input[name="engagementPreference"]:checked')?.value || '',
        professionalDomain: professionalDomainElement ? 
            (professionalDomainElement.value === 'Other' ? 
                `Other - ${otherRoleValue}` : 
                professionalDomainElement.value) : '',
        skills: {}, // Changed to a single array
        professionalBackground: '',
        education: [],
        workExperience: [],
        showReels: []
    };

    // Set professional background
    if (professionalDomainElement) {
        if (professionalDomainElement.value === 'Supervisor/Co-ordinator') {
            formData.professionalBackground = 'Experienced';
        } else {
            formData.professionalBackground = document.querySelector('input[name="professionalBackground"]:checked')?.value || '';
        }
    }

   // Collect skills based on professional domain
if (professionalDomainElement) {
    switch(professionalDomainElement.value) {
        case 'Hands-on 3D Visual Effects/Animation/Design/Fine-Arts Craftsperson':
            formData.skills = Array.from(document.querySelectorAll('input[name="3dSkills"]:checked'))
                .map(skill => skill.value);
            break;
        case 'Hands-on 2D Visual Effects/Animation/Design/Fine-Arts Craftsperson':
            formData.skills = Array.from(document.querySelectorAll('input[name="2dSkills"]:checked'))
                .map(skill => skill.value);
            break;
        case 'Hands-on Generalist Visual Effects/Animation/Design/Fine-Arts Craftsperson':
            formData.skills = Array.from(document.querySelectorAll('input[name="generalistSkills"]:checked'))
                .map(skill => skill.value);
            break;
        case 'Software Developer': " ";
            break;
        case 'Hardware Systems': " ";
        break;
        case 'HR/Accounts/Legal Executive': " "
        break;
        case 'Other':
            " ";
            break;
        default:
            formData.skills = " "
    }
}
// Function to reverse the date format from YYYY-MM-DD to DD-MM-YYYY
function reverseDateFormat(date) {
    if (!date) return "";
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
}
// Separate function for Supervisor/Co-ordinator handling
function handleSupervisorCoordinator() {
    const experienceEntries = document.querySelectorAll('#experienceContainer .experience-entry');
    experienceEntries.forEach(entry => {
        const yearFromInput = entry.querySelector('input[name="experienceYearFrom"]')?.value;
        const yearToInput = entry.querySelector('input[name="experienceYearTo"]')?.value;
        const yearFrom = yearFromInput ? reverseDateFormat(yearFromInput) : "";
        const yearTo = yearToInput ? reverseDateFormat(yearToInput) : "";
        const company = entry.querySelector('input[name="experienceCompany"]')?.value;
        const role = entry.querySelector('input[name="experienceRole"]')?.value;

        if (yearFrom || yearTo || company || role) {
            const experienceItem = {
                yearFrom: yearFrom || '',
                yearTo: yearTo || '',
                company: company || '',
                role: role || ''
            };
            formData.workExperience.push(experienceItem);
        }
    });
}

// Separate function for Experienced background handling
function handleExperiencedBackground() {
    const experienceEntries = document.querySelectorAll('#experienceContainer .experience-entry');
    experienceEntries.forEach(entry => {
        const yearFromInput = entry.querySelector('input[name="experienceYearFrom"]')?.value;
        const yearToInput = entry.querySelector('input[name="experienceYearTo"]')?.value;
        const yearFrom = yearFromInput ? reverseDateFormat(yearFromInput) : "";
        const yearTo = yearToInput ? reverseDateFormat(yearToInput) : "";
        const company = entry.querySelector('input[name="experienceCompany"]')?.value;
        const role = entry.querySelector('input[name="experienceRole"]')?.value;

        if (yearFrom || yearTo || company || role) {
            const experienceItem = {
                yearFrom: yearFrom,
                yearTo: yearTo,
                company: company,
                role: role
            };
            formData.workExperience.push(experienceItem);
        }
    });
}

// Separate function for Fresher background handling
function handleFresherBackground() {
    const educationEntries = document.querySelectorAll('#educationContainer .education-entry');
    educationEntries.forEach(entry => {
        const yearFromInput = entry.querySelector('input[name="educationYearFrom"]')?.value;
        const yearToInput = entry.querySelector('input[name="educationYearTo"]')?.value;
        const yearFrom = yearFromInput ? reverseDateFormat(yearFromInput) : "";
        const yearTo = yearToInput ? reverseDateFormat(yearToInput) : "";
        const institution = entry.querySelector('input[name="educationInstitution"]')?.value;
        const course = entry.querySelector('input[name="educationCourse"]')?.value;

        if (yearFrom || yearTo || institution || course) {
            const educationItem = {
                yearFrom: yearFrom,
                yearTo: yearTo,
                institution: institution,
                course: course
            };
            formData.education.push(educationItem);
        }
    });
}

// Main condition handling
if (professionalDomainElement) {
    if (professionalDomainElement.value === 'Supervisor/Co-ordinator') {
        handleSupervisorCoordinator();
    } else if (professionalBackgroundElement) {
        if ( document.querySelector('input[name="professionalBackground"]:checked')?.value === "Fresher") {
            handleFresherBackground();
        } else if(document.querySelector('input[name="professionalBackground"]:checked')?.value === "Experienced") {
            handleExperiencedBackground();
        }
    }
}
    // Collect show reel entries
    const showReelEntries = document.querySelectorAll('#showReelsContainer .show-reels-entry');
    showReelEntries.forEach(entry => {
        const link = entry.querySelector('input[name="showReelLink"]')?.value;
        
        // Only add if link has a value
        if (link) {
            const showReelItem = {
                link: link
            };
            formData.showReels.push(showReelItem);
        }
    });

   

    return formData;
}
// Function to submit data to Google Apps Script
function submitToGoogleScript(formData) {
    // Replace with your Google Apps Script deployment URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxDXyZOj1QdaLHS5glGKLFRbhmuzEZvMeileiVZ_fppDKdNNux4B9IYG82IpVy1AX5I/exec';

    return fetch(scriptUrl, {
        method: 'POST',
        mode:'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}


    submitButton.addEventListener('click', async function(e) {
        e.preventDefault();
    
         try {
            const formData = collectFormData();
            const response = await submitToGoogleScript(formData);
            
            if (response.status === 'success') {
                alert('Application submitted successfully!');
                // Optionally reset form or redirect
                window.location.reload();
             } else {
              alert('Error submitting application. Please try again.');
            }
       } catch (error) {
             alert('Error submitting application: ' + error.message);
         }
        
    
    })
    });
   

    
