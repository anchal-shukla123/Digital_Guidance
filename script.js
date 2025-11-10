 const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('dots');
        let currentSlide = 0;
        let slideInterval;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = n;
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function startSlider() {
            slideInterval = setInterval(nextSlide, 3000);
        }

        function stopSlider() {
            clearInterval(slideInterval);
        }

        // Start automatic sliding
        startSlider();

        // Pause on hover
        const slider = document.getElementById('slider');
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);


const text = "Find your Future Step by Step";
const typedTextElement = document.querySelector('.typed-text');
const cursorElement = document.querySelector('.cursor');
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typedTextElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
    else {
        
            cursorElement.style.display = 'none';
       
    }
}
setTimeout(typeText, 500);
// script.js - client-side behaviors (vanilla JS)
// const API_ROOT = ''; // same origin

// // --- Auth modal and actions (shared across pages) ---
// document.addEventListener('DOMContentLoaded', () => {
//   initAuthUI();
//   initProfileButtons();
//   initCollegePage();
//   loadProfileIfOnPage();
// });

// function initAuthUI() {
//   const authModal = document.getElementById('authModal');
//   const closeAuth = document.querySelectorAll('#closeAuth');
//   const toggleAuthMode = document.querySelectorAll('#toggleAuthMode');
//   const authForm = document.querySelectorAll('#authForm');

//   // open auth modal from several buttons (header profile)
//   document.querySelectorAll('#profileBtn, #profileBtn2, #profileBtn3, #profileBtn4, #profileBtn5').forEach(b => {
//     b && b.addEventListener('click', openAuthModal);
//   });

//   // open from profile page button
//   const openAuthFromProfile = document.getElementById('openAuthFromProfile');
//   if (openAuthFromProfile) openAuthFromProfile.addEventListener('click', openAuthModal);

//   if (closeAuth) closeAuth.forEach(btn => btn.addEventListener('click', closeAuthModal));
//   if (toggleAuthMode) toggleAuthMode.forEach(btn => btn.addEventListener('click', toggleMode));

//   // support multiple pages having the form
//   authForm.forEach(form => {
//     form.addEventListener('submit', async (e) => {
//       e.preventDefault();
//       const isSignup = (document.getElementById('nameRow') && !document.getElementById('nameRow').classList.contains('hidden'));
//       const name = document.getElementById('authName') ? document.getElementById('authName').value.trim() : '';
//       const email = document.getElementById('authEmail').value.trim();
//       const password = document.getElementById('authPassword').value.trim();
//       const errorEl = document.getElementById('authError');

//       errorEl.textContent = '';

//       try {
//         if (isSignup) {
//           const res = await fetch(API_ROOT + '/api/signup', {
//             method: 'POST',
//             headers:{'Content-Type':'application/json'},
//             body: JSON.stringify({ name, email, password })
//           });
//           const data = await res.json();
//           if (!res.ok) throw new Error(data.error || 'Signup failed');
//           localStorage.setItem('eg_token', data.token);
//           closeAuthModal();
//           window.location.href = 'profile.html';
//         } else {
//           const res = await fetch(API_ROOT + '/api/login', {
//             method: 'POST',
//             headers:{'Content-Type':'application/json'},
//             body: JSON.stringify({ email, password })
//           });
//           const data = await res.json();
//           if (!res.ok) throw new Error(data.error || 'Login failed');
//           localStorage.setItem('eg_token', data.token);
//           closeAuthModal();
//           window.location.href = 'profile.html';
//         }
//       } catch (err) {
//         errorEl.textContent = err.message;
//       }
//     });
//   });

//   // initial state: login mode
//   setAuthMode('login');
// }

// function openAuthModal(){ 
//   const m = document.getElementById('authModal'); 
//   if (m) m.classList.remove('hidden');
//   document.getElementById('authTitle').textContent = 'Log In';
//   setAuthMode('login');
// }
// function closeAuthModal(){
//   const m = document.getElementById('authModal'); 
//   if (m) m.classList.add('hidden');
// }
// function setAuthMode(mode){
//   const nameRow = document.getElementById('nameRow');
//   const toggle = document.querySelectorAll('#toggleAuthMode');
//   const submit = document.querySelectorAll('#authSubmit');
//   if (mode === 'signup') {
//     nameRow && nameRow.classList.remove('hidden');
//     if (toggle) toggle.forEach(t=>t.textContent = 'Switch to Log in');
//     if (submit) submit.forEach(s=>s.textContent = 'Sign up');
//     document.getElementById('authTitle') && (document.getElementById('authTitle').textContent = 'Sign Up');
//   } else {
//     nameRow && nameRow.classList.add('hidden');
//     if (toggle) toggle.forEach(t=>t.textContent = 'Switch to Sign up');
//     if (submit) submit.forEach(s=>s.textContent = 'Log in');
//     document.getElementById('authTitle') && (document.getElementById('authTitle').textContent = 'Log In');
//   }
// }
// function toggleMode(){
//   const nameRow = document.getElementById('nameRow');
//   if (nameRow && nameRow.classList.contains('hidden')) setAuthMode('signup');
//   else setAuthMode('login');
// }

// // --- profile and header hooks ---
// function initProfileButtons(){
//   // Take Quiz buttons all point to career.html
//   document.querySelectorAll('#takeQuizBtn, #takeQuizBtn2, #takeQuizBtn3, #takeQuizBtn4, #takeQuizBtn5').forEach(b=>{
//     b && b.addEventListener('click', ()=> window.location.href = 'career.html');
//   });

//   // header profile button behaviour: if logged in go to profile, else open modal
//   document.querySelectorAll('#profileBtn, #profileBtn2, #profileBtn3, #profileBtn4, #profileBtn5').forEach(b=>{
//     if (!b) return;
//     b.addEventListener('click', () => {
//       const token = localStorage.getItem('eg_token');
//       if (token) window.location.href = 'profile.html';
//       else openAuthModal();
//     });
//   });
// }

// async function loadProfileIfOnPage(){
//   if (!document.getElementById('profileCard')) return;
//   const token = localStorage.getItem('eg_token');
//   const profileCard = document.getElementById('profileCard');
//   const authNotice = document.getElementById('authNotice');

//   if (!token) {
//     profileCard.classList.add('hidden');
//     authNotice.classList.remove('hidden');
//     return;
//   }

//   try {
//     const res = await fetch(API_ROOT + '/api/profile', { headers: { Authorization: 'Bearer ' + token }});
//     if (!res.ok) throw new Error('Not authorized');
//     const data = await res.json();
//     const user = data.user;
//     document.getElementById('profileName').textContent = user.name;
//     document.getElementById('profileEmail').textContent = user.email;
//     profileCard.classList.remove('hidden');
//     authNotice && authNotice.classList.add('hidden');
//   } catch (err) {
//     console.warn(err);
//     profileCard.classList.add('hidden');
//     authNotice.classList.remove('hidden');
//   }
// }

// // --- Colleges page dynamic content ---
// function initCollegePage(){
//   if (!document.querySelector('.college-list')) return;

//   // sample data
//   const sample = [
//     { name: "Delhi University - Sri Venkateswara College", type:"government", city:"New Delhi", est:1961, seats:2500, courses:5, fees:"₹15,000 - 25,000", cutoff:"95+" },
//     { name: "Jamia Millia Islamia", type:"government", city:"New Delhi", est:1920, seats:8000, courses:6, fees:"₹20,000 - 40,000", cutoff:"90+" },
//     { name: "Amity University", type:"private", city:"Noida", est:2005, seats:15000, courses:6, fees:"₹80,000 - 2,50,000", cutoff:"70+" },
//     { name: "Bharati Vidyapeeth", type:"deemed", city:"New Delhi", est:1996, seats:5000, courses:6, fees:"₹50,000 - 4,00,000", cutoff:"75+" }
//   ];

//   const container = document.querySelector('.college-list');
//   const search = document.getElementById('collegeSearch');
//   const typeSel = document.getElementById('collegeType');

//   function render(list){
//     container.innerHTML = '';
//     list.forEach(c=>{
//       const el = document.createElement('div');
//       el.className = 'college-card';
//       el.innerHTML = `
//         <h4>${c.name}</h4>
//         <p class="muted">${c.city} • Established ${c.est}</p>
//         <div style="margin-top:8px"><strong>Fees:</strong> ${c.fees} • <strong>Cutoff:</strong> ${c.cutoff}</div>
//         <div style="margin-top:12px"><button class="btn small primary" onclick="window.alert('View details for ${c.name}')">View Details</button></div>
//       `;
//       container.appendChild(el);
//     });
//   }

//   render(sample);

//   function applyFilters(){
//     const q = search.value.trim().toLowerCase();
//     const type = typeSel.value;
//     let filtered = sample.filter(s => (s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q)));
//     if (type !== 'any') filtered = filtered.filter(s => s.type === type);
//     render(filtered);
//   }

//   search && search.addEventListener('input', applyFilters);
//   typeSel && typeSel.addEventListener('change', applyFilters);
// }
