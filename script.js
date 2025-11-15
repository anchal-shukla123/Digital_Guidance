// script.js - Integrated Authentication and UI Logic for EduGuide

// ============= INITIALIZATION =============

document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeTypedText();
    checkAuthStatus();
    setupEventListeners();
});

// ============= AUTHENTICATION STATUS =============

/**
 * Check if user is logged in and update UI
 */
function checkAuthStatus() {
    const currentUser = userDB.getCurrentUser();
    
    if (currentUser) {
        showLoggedInState(currentUser);
    } else {
        showLoggedOutState();
    }
}

/**
 * Show logged-in UI state
 */
function showLoggedInState(user) {
    const welcomeText = document.getElementById('welcomeText');
    const loginBtn = document.getElementById('loginBtn');
    const profileBtn = document.getElementById('profileBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Update welcome text
    const displayName = user.firstName || user.username;
    welcomeText.textContent = `Welcome, ${displayName}!`;
    welcomeText.style.display = 'inline-block';

    // Show/hide buttons
    loginBtn.style.display = 'none';
    profileBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'inline-block';
}

/**
 * Show logged-out UI state
 */
function showLoggedOutState() {
    const welcomeText = document.getElementById('welcomeText');
    const loginBtn = document.getElementById('loginBtn');
    const profileBtn = document.getElementById('profileBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Hide welcome text
    welcomeText.style.display = 'none';

    // Show/hide buttons
    loginBtn.style.display = 'inline-block';
    profileBtn.style.display = 'none';
    logoutBtn.style.display = 'none';
}

// ============= EVENT LISTENERS =============

function setupEventListeners() {
    // Login button
    document.getElementById('loginBtn').addEventListener('click', function() {
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.classList.add('show');
        switchTab('login');
    });

    // Profile button
    document.getElementById('profileBtn').addEventListener('click', function() {
        showProfile();
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Modal close
    document.getElementById('modalClose').addEventListener('click', function() {
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.classList.remove('show');
        clearErrors();
    });

    // Modal overlay click
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
            clearErrors();
        }
    });

    // Category change
    document.getElementById('studentCategory').addEventListener('change', handleCategoryChange);
}

// ============= MODAL FUNCTIONS =============

function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.form-section');
    
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    if (tab === 'login') {
        tabs[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        tabs[1].classList.add('active');
        document.getElementById('signupForm').classList.add('active');
    }
    
    clearErrors();
}

// ============= FORM HANDLING =============

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

// ============= LOGIN =============

function handleLogin() {
    clearErrors();
    let isValid = true;
    
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    // Validate username
    if (!username) {
        showError('loginUsername', 'Username is required');
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        showError('loginPassword', 'Password is required');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Attempt login using database
    const result = userDB.loginUser(username, password);
    
    if (result.success) {
        // Clear form
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
        
        // Close modal
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.classList.remove('show');
        
        // Show success message
        showSuccess(`Login successful! Welcome back, ${result.user.firstName || username}!`);
        
        // Update UI
        checkAuthStatus();
        
        // Optional: Reload page to update all components
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } else {
        showError('loginPassword', result.message);
    }
}

// ============= SIGNUP =============

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
    } else if (username.length < 3) {
        showError('signupUsername', 'Username must be at least 3 characters');
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
    
    if (!confirmPassword) {
        showError('confirmPassword', 'Please confirm password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }
    
    // Prepare user data
    const userData = {
        firstName,
        lastName,
        username,
        email,
        studentCategory: category,
        gender,
        state,
        city,
        password
    };
    
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
        
        userData.university = university;
        userData.course = course;
        userData.cgpa = cgpa;
        
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
        
        userData.stream = stream;
        userData.tenth = tenth;
        userData.twelfth = twelfth;
        userData.board = board;
    }
    
    if (!isValid) return;
    
    // Register user using database
    const result = userDB.registerUser(userData);
    
    if (result.success) {
        // Show success message
        showSuccess(`Registration successful! Welcome to EduGuide, ${firstName}!`);
        
        // Clear form
        clearSignupForm();
        
        // Switch to login tab after a delay
        setTimeout(() => {
            switchTab('login');
        }, 1500);
    } else {
        showError('signupUsername', result.message);
    }
}

// ============= LOGOUT =============

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        userDB.logoutUser();
        showSuccess('Logged out successfully!');
        checkAuthStatus();
        
        // Optional: Reload page
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

// ============= PROFILE =============

function showProfile() {
    const user = userDB.getCurrentUser();
    
    if (!user) {
        alert('Please login first');
        return;
    }

    let profileHTML = `
        <div style="padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; max-width: 700px; margin: 20px auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
            <div style="background: white; padding: 30px; border-radius: 8px;">
                <h2 style="color: #667eea; margin-bottom: 25px; text-align: center; font-size: 28px;">
                    <i class="fas fa-user-circle"></i> User Profile
                </h2>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <strong style="color: #667eea; display: block; margin-bottom: 5px;">👤 Username</strong>
                        <p style="margin: 0; color: #333; font-size: 16px;">${user.username}</p>
                    </div>
                    <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <strong style="color: #667eea; display: block; margin-bottom: 5px;">📧 Email</strong>
                        <p style="margin: 0; color: #333; font-size: 16px;">${user.email}</p>
                    </div>
                    <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <strong style="color: #667eea; display: block; margin-bottom: 5px;">📝 Full Name</strong>
                        <p style="margin: 0; color: #333; font-size: 16px;">${user.firstName} ${user.lastName}</p>
                    </div>
                    <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <strong style="color: #667eea; display: block; margin-bottom: 5px;">🎓 Category</strong>
                        <p style="margin: 0; color: #333; font-size: 16px; text-transform: capitalize;">${user.studentCategory} Student</p>
                    </div>
                    <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <strong style="color: #667eea; display: block; margin-bottom: 5px;">⚧ Gender</strong>
                        <p style="margin: 0; color: #333; font-size: 16px;">${user.gender}</p>
                    </div>
                    <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <strong style="color: #667eea; display: block; margin-bottom: 5px;">📍 Location</strong>
                        <p style="margin: 0; color: #333; font-size: 16px;">${user.city}, ${user.state}</p>
                    </div>
                </div>
    `;

    if (user.studentCategory === 'college') {
        profileHTML += `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin-bottom: 20px; color: white;">
                    <h3 style="margin: 0 0 15px 0; font-size: 20px;">🏛️ College Information</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
                        <div>
                            <strong style="opacity: 0.9;">University</strong>
                            <p style="margin: 5px 0 0 0; font-size: 16px;">${user.university}</p>
                        </div>
                        <div>
                            <strong style="opacity: 0.9;">Course</strong>
                            <p style="margin: 5px 0 0 0; font-size: 16px;">${user.course}</p>
                        </div>
                        <div>
                            <strong style="opacity: 0.9;">CGPA</strong>
                            <p style="margin: 5px 0 0 0; font-size: 16px;">${user.cgpa} / 10</p>
                        </div>
                    </div>
                </div>
        `;
    } else if (user.studentCategory === 'school') {
        profileHTML += `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin-bottom: 20px; color: white;">
                    <h3 style="margin: 0 0 15px 0; font-size: 20px;">🏫 School Information</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <strong style="opacity: 0.9;">Stream</strong>
                            <p style="margin: 5px 0 0 0; font-size: 16px;">${user.stream}</p>
                        </div>
                        <div>
                            <strong style="opacity: 0.9;">Board</strong>
                            <p style="margin: 5px 0 0 0; font-size: 16px;">${user.board}</p>
                        </div>
                        <div>
                            <strong style="opacity: 0.9;">10th Percentage</strong>
                            <p style="margin: 5px 0 0 0; font-size: 16px;">${user.tenth}%</p>
                        </div>
                        <div>
                            <strong style="opacity: 0.9;">12th Percentage</strong>
                            <p style="margin: 5px 0 0 0; font-size: 16px;">${user.twelfth}%</p>
                        </div>
                    </div>
                </div>
        `;
    }

    profileHTML += `
                <div style="text-align: center; margin-top: 20px;">
                    <button onclick="closeProfileModal()" style="padding: 12px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; transition: transform 0.2s;">
                        Close Profile
                    </button>
                </div>
            </div>
        </div>
    `;

    // Create modal for profile
    const profileModal = document.createElement('div');
    profileModal.id = 'profileModal';
    profileModal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000; overflow-y: auto; padding: 20px;';
    profileModal.innerHTML = profileHTML;
    
    document.body.appendChild(profileModal);
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.remove();
    }
}

// ============= GOOGLE AUTH (PLACEHOLDER) =============

function handleGoogleAuth() {
    alert('Google Authentication would be integrated here.\nThis feature will be available soon!');
}

// ============= VALIDATION HELPERS =============

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
}

function clearSignupForm() {
    // Clear all input fields
    document.getElementById('signupForm').querySelectorAll('input, select').forEach(input => {
        input.value = '';
    });
    
    // Hide category fields
    document.getElementById('collegeFields').classList.remove('show');
    document.getElementById('schoolFields').classList.remove('show');
    document.getElementById('commonFields').classList.remove('show');
}

function showSuccess(message) {
    // Create a toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; 
        top: 20px; 
        right: 20px; 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
        color: white; 
        padding: 20px 30px; 
        border-radius: 10px; 
        z-index: 10001; 
        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        font-size: 16px;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
    `;
    toast.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            toast.remove();
            style.remove();
        }, 300);
    }, 3000);
}

// ============= SLIDER FUNCTIONS =============

let currentSlide = 0;
let slideInterval;

function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('dots');
    const slider = document.getElementById('slider');

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Mouse events to pause/resume slider
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    // Start auto-slide
    startSlider();
}

function startSlider() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Reset interval
    clearInterval(slideInterval);
    startSlider();
}

// ============= TYPED TEXT ANIMATION =============

function initializeTypedText() {
    const text = "Find your Future Step by Step";
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.cursor');
    let charIndex = 0;

    function typeText() {
        if (charIndex < text.length) {
            typedTextElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            cursorElement.style.display = 'none';
        }
    }
    
    setTimeout(typeText, 500);
}