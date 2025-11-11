let registeredUsers = new Set();

        // Switch between login and signup tabs
        function switchTab(tab) {
            const tabs = document.querySelectorAll('.tab');
            const sections = document.querySelectorAll('.form-section');
            
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            if (tab === 'login') {
                tabs[0].classList.add('active');
                document.getElementById('loginForm').classList.add('active');
                clearErrors();
            } else {
                tabs[1].classList.add('active');
                document.getElementById('signupForm').classList.add('active');
                clearErrors();
            }
        }

        // Handle category change
        function handleCategoryChange() {
            const category = document.getElementById('studentCategory').value;
            const collegeFields = document.getElementById('collegeFields');
            const schoolFields = document.getElementById('schoolFields');
            const commonFields = document.getElementById('commonFields');
            
            // Hide all category-specific fields first
            collegeFields.classList.remove('show');
            schoolFields.classList.remove('show');
            commonFields.classList.remove('show');
            
            // Show relevant fields
            if (category === 'college') {
                collegeFields.classList.add('show');
                commonFields.classList.add('show');
            } else if (category === 'school') {
                schoolFields.classList.add('show');
                commonFields.classList.add('show');
            }
            
            clearErrors();
        }

        // Clear all error messages
        function clearErrors() {
            const errors = document.querySelectorAll('.error');
            errors.forEach(error => {
                error.classList.remove('show');
                error.textContent = '';
            });
        }

        // Show error message
        function showError(fieldId, message) {
            const errorElement = document.getElementById(fieldId + 'Error');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.classList.add('show');
            }
        }

        // Validate email format
        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        }

        // Handle Login
        function handleLogin() {
            clearErrors();
            let isValid = true;
            
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            
            if (!username) {
                showError('loginUsername', 'Username is required');
                isValid = false;
            }
            
            if (!password) {
                showError('loginPassword', 'Password is required');
                isValid = false;
            }
            
            if (isValid) {
                alert(`Login successful!\nUsername: ${username}`);
                // Clear form
                document.getElementById('loginUsername').value = '';
                document.getElementById('loginPassword').value = '';
            }
        }

        // Handle Signup
        function handleSignup() {
            clearErrors();
            let isValid = true;
            
            // Get all form values
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const username = document.getElementById('signupUsername').value.trim();
            const email = document.getElementById('email').value.trim();
            const category = document.getElementById('studentCategory').value;
            const gender = document.getElementById('gender').value;
            const state = document.getElementById('state').value;
            const city = document.getElementById('city').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Basic validations
            if (!firstName) {
                showError('firstName', 'First name is required');
                isValid = false;
            }
            
            if (!lastName) {
                showError('lastName', 'Last name is required');
                isValid = false;
            }
            
            if (!username) {
                showError('signupUsername', 'Username is required');
                isValid = false;
            } else if (registeredUsers.has(username.toLowerCase())) {
                showError('signupUsername', 'Username already taken. Please choose another.');
                isValid = false;
            }
            
            if (!email) {
                showError('email', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Invalid email format');
                isValid = false;
            }
            
            if (!category) {
                showError('category', 'Select student category');
                isValid = false;
            }
            
            // Category-specific validations
            if (category === 'college') {
                const university = document.getElementById('university').value.trim();
                const course = document.getElementById('course').value.trim();
                const cgpa = document.getElementById('cgpa').value;
                
                if (!university) {
                    showError('university', 'University is required');
                    isValid = false;
                }
                
                if (!course) {
                    showError('course', 'Course is required');
                    isValid = false;
                }
                
                if (!cgpa) {
                    showError('cgpa', 'CGPA is required');
                    isValid = false;
                } else if (cgpa < 0 || cgpa > 10) {
                    showError('cgpa', 'CGPA must be between 0-10');
                    isValid = false;
                }
            } else if (category === 'school') {
                const stream = document.getElementById('stream').value;
                const tenth = document.getElementById('tenth').value;
                const twelfth = document.getElementById('twelfth').value;
                const board = document.getElementById('board').value;
                
                if (!stream) {
                    showError('stream', 'Stream is required');
                    isValid = false;
                }
                
                if (!tenth) {
                    showError('tenth', '10th percentage is required');
                    isValid = false;
                } else if (tenth < 0 || tenth > 100) {
                    showError('tenth', 'Invalid percentage');
                    isValid = false;
                }
                
                if (!twelfth) {
                    showError('twelfth', '12th percentage is required');
                    isValid = false;
                } else if (twelfth < 0 || twelfth > 100) {
                    showError('twelfth', 'Invalid percentage');
                    isValid = false;
                }
                
                if (!board) {
                    showError('board', 'Board is required');
                    isValid = false;
                }
            }
            
            // Common field validations
            if (category) {
                if (!gender) {
                    showError('gender', 'Gender is required');
                    isValid = false;
                }
                
                if (!state) {
                    showError('state', 'State is required');
                    isValid = false;
                }
                
                if (!city) {
                    showError('city', 'City is required');
                    isValid = false;
                }
                
                if (!password) {
                    showError('signupPassword', 'Password is required');
                    isValid = false;
                } else if (password.length < 6) {
                    showError('signupPassword', 'Password must be at least 6 characters');
                    isValid = false;
                }
                
                if (password !== confirmPassword) {
                    showError('confirmPassword', 'Passwords do not match');
                    isValid = false;
                }
            }
            
            if (isValid) {
                // Add username to registered users
                registeredUsers.add(username.toLowerCase());
                
                alert(`Registration successful!\nWelcome to EduGuide, ${firstName}!`);
                
                // Reset form and switch to login
                document.getElementById('signupForm').querySelectorAll('input, select').forEach(input => {
                    input.value = '';
                });
                document.getElementById('collegeFields').classList.remove('show');
                document.getElementById('schoolFields').classList.remove('show');
                document.getElementById('commonFields').classList.remove('show');
                
                switchTab('login');
            }
        }

        // Handle Google Authentication
        function handleGoogleAuth() {
            alert('Google Authentication would be integrated here.\nRedirecting to Google Sign-In...');
        }