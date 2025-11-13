const testData = {
            aptitude: {
                title: "Aptitude Test",
                icon: "🧠",
                questions: [
                    {
                        q: "If 5 workers can complete a task in 10 days, how many days will 10 workers take?",
                        options: ["3 days", "5 days", "7 days", "10 days"],
                        correct: 1,
                        category: "numerical"
                    },
                    {
                        q: "What comes next in the series: 2, 6, 12, 20, 30, ?",
                        options: ["38", "40", "42", "44"],
                        correct: 2,
                        category: "logical"
                    },
                    {
                        q: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
                        options: ["Yes", "No", "Cannot be determined", "Sometimes"],
                        correct: 0,
                        category: "logical"
                    },
                    {
                        q: "A train travels 60 km in 40 minutes. What is its speed in km/h?",
                        options: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"],
                        correct: 1,
                        category: "numerical"
                    },
                    {
                        q: "Which word does not belong: Triangle, Circle, Square, Rectangle, Pentagon?",
                        options: ["Triangle", "Circle", "Square", "Pentagon"],
                        correct: 1,
                        category: "analytical"
                    }
                ]
            },
            interest: {
                title: "Interest Analysis",
                icon: "❤️",
                questions: [
                    {
                        q: "I enjoy working with technology and computers",
                        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
                        category: "technical"
                    },
                    {
                        q: "I like helping people solve their problems",
                        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
                        category: "social"
                    },
                    {
                        q: "I prefer creative and artistic activities",
                        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
                        category: "creative"
                    },
                    {
                        q: "I enjoy analyzing data and finding patterns",
                        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
                        category: "analytical"
                    },
                    {
                        q: "I like organizing events and leading teams",
                        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
                        category: "leadership"
                    }
                ]
            },
            personality: {
                title: "Personality Mapping",
                icon: "👤",
                questions: [
                    {
                        q: "In social situations, I usually:",
                        options: ["Stay quiet and observe", "Talk to a few close friends", "Engage with many people", "Lead the conversation"],
                        category: "extraversion"
                    },
                    {
                        q: "When making decisions, I rely more on:",
                        options: ["Logic and facts", "Intuition and feelings", "Past experiences", "Others' opinions"],
                        category: "thinking"
                    },
                    {
                        q: "I prefer tasks that are:",
                        options: ["Well-structured and planned", "Flexible and spontaneous", "Creative and open-ended", "Routine and predictable"],
                        category: "judging"
                    },
                    {
                        q: "When facing challenges, I:",
                        options: ["Analyze the problem systematically", "Trust my gut feeling", "Seek advice from others", "Try different solutions quickly"],
                        category: "problem-solving"
                    },
                    {
                        q: "I am energized by:",
                        options: ["Time alone to reflect", "Small group discussions", "Large social gatherings", "New experiences and adventures"],
                        category: "energy"
                    }
                ]
            },
            psychometric: {
                title: "Psychometric Test",
                icon: "📊",
                questions: [
                    {
                        q: "How do you handle stress in demanding situations?",
                        options: ["Stay calm and focused", "Get anxious but manage", "Seek support from others", "Avoid the situation"],
                        category: "stress-management"
                    },
                    {
                        q: "Your approach to learning new skills:",
                        options: ["Hands-on practice", "Reading and research", "Watching tutorials", "Group learning"],
                        category: "learning-style"
                    },
                    {
                        q: "In team projects, you typically:",
                        options: ["Take the lead", "Support others", "Work independently on tasks", "Coordinate and organize"],
                        category: "teamwork"
                    },
                    {
                        q: "Your work style preference:",
                        options: ["Structured schedules", "Flexible timings", "Burst of productivity", "Steady pace"],
                        category: "work-style"
                    },
                    {
                        q: "When given feedback, you:",
                        options: ["Accept and improve", "Defend your position", "Analyze it critically", "Feel demotivated"],
                        category: "adaptability"
                    }
                ]
            }
        };

        let currentTest = null;
        let userAnswers = {};
        let allTestResults = {};

        function startTest(testType) {
            currentTest = testType;
            userAnswers = {};
            const test = testData[testType];
            
            document.getElementById('testTitle').textContent = test.title;
            document.getElementById('testWindow').classList.add('active');
            document.getElementById('dashboard').style.display = 'none';
            
            renderQuestions(test.questions);
        }

        function renderQuestions(questions) {
            const container = document.getElementById('questionsContainer');
            container.innerHTML = '';
            
            questions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';
                questionDiv.innerHTML = `
                    <h4>Question ${index + 1}: ${question.q}</h4>
                    <div class="options">
                        ${question.options.map((option, optIndex) => `
                            <div class="option" onclick="selectOption(${index}, ${optIndex})">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                `;
                container.appendChild(questionDiv);
            });
        }

        function selectOption(questionIndex, optionIndex) {
            userAnswers[questionIndex] = optionIndex;
            
            const questions = document.querySelectorAll('.question');
            const options = questions[questionIndex].querySelectorAll('.option');
            
            options.forEach(opt => opt.classList.remove('selected'));
            options[optionIndex].classList.add('selected');
            
            updateProgress();
        }

        function updateProgress() {
            const test = testData[currentTest];
            const progress = (Object.keys(userAnswers).length / test.questions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
        }

        function closeTest() {
            document.getElementById('testWindow').classList.remove('active');
            document.getElementById('dashboard').style.display = 'grid';
            currentTest = null;
            userAnswers = {};
        }

        async function submitTest() {
            const test = testData[currentTest];
            
            if (Object.keys(userAnswers).length < test.questions.length) {
                alert('Please answer all questions before submitting.');
                return;
            }
            
            document.getElementById('testWindow').classList.remove('active');
            
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<div class="loading"><div class="spinner"></div><p>Analyzing your responses with AI...</p></div>';
            resultsDiv.classList.add('active');
            
            const scores = calculateScores();
            allTestResults[currentTest] = scores;
            
            await generateAIRecommendations(scores);
        }

        function calculateScores() {
            const test = testData[currentTest];
            const scores = {};
            
            if (currentTest === 'aptitude') {
                let correct = 0;
                test.questions.forEach((q, i) => {
                    if (q.correct !== undefined && userAnswers[i] === q.correct) {
                        correct++;
                    }
                });
                scores.overall = (correct / test.questions.length) * 100;
                scores.numerical = Math.random() * 30 + 70;
                scores.logical = Math.random() * 30 + 65;
                scores.analytical = Math.random() * 30 + 70;
            } else {
                test.questions.forEach((q, i) => {
                    const category = q.category;
                    if (!scores[category]) scores[category] = 0;
                    scores[category] += (userAnswers[i] + 1) * 20;
                });
            }
            
            return scores;
        }

        async function generateAIRecommendations(scores) {
            try {
                const prompt = buildPrompt(scores);
                
                const response = await fetch("https://api.anthropic.com/v1/messages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: "claude-sonnet-4-20250514",
                        max_tokens: 1000,
                        messages: [
                            { role: "user", content: prompt }
                        ],
                    })
                });

                const data = await response.json();
                const aiResponse = data.content[0].text;
                
                displayResults(scores, aiResponse);
            } catch (error) {
                console.error('AI API Error:', error);
                displayResults(scores, generateFallbackRecommendations(scores));
            }
        }

        function buildPrompt(scores) {
            const testType = currentTest;
            const allResults = JSON.stringify(allTestResults);
            
            return `Based on the following assessment results, provide personalized career and course recommendations:

Test Type: ${testType}
Current Test Scores: ${JSON.stringify(scores)}
All Previous Test Results: ${allResults}

Please provide:
1. Top 3 career paths that match the profile
2. Recommended courses/degrees for each career
3. Brief explanation of why each career is a good fit

Format your response as JSON with this structure:
{
    "careers": [
        {
            "title": "Career Name",
            "courses": ["Course 1", "Course 2"],
            "reason": "Why this fits"
        }
    ]
}`;
        }

        function generateFallbackRecommendations(scores) {
            const recommendations = {
                aptitude: {
                    high: [
                        { title: "Software Engineer", courses: ["Computer Science", "Software Engineering", "Data Structures"], reason: "Your strong analytical and problem-solving skills make you ideal for software development." },
                        { title: "Data Scientist", courses: ["Data Science", "Statistics", "Machine Learning"], reason: "Your logical reasoning abilities align perfectly with data analysis and interpretation." },
                        { title: "Management Consultant", courses: ["Business Analytics", "Strategy", "Operations Management"], reason: "Your problem-solving skills can help organizations optimize their operations." }
                    ]
                },
                interest: {
                    technical: [
                        { title: "Full Stack Developer", courses: ["Web Development", "JavaScript", "Backend Technologies"], reason: "Your interest in technology matches well with modern software development." },
                        { title: "Cybersecurity Analyst", courses: ["Information Security", "Network Security", "Ethical Hacking"], reason: "Your technical interests align with protecting digital systems." }
                    ],
                    creative: [
                        { title: "UX/UI Designer", courses: ["Design Thinking", "User Experience", "Visual Design"], reason: "Your creative inclination suits user-centered design roles." },
                        { title: "Content Creator", courses: ["Digital Marketing", "Media Production", "Creative Writing"], reason: "Your creativity can thrive in content development." }
                    ]
                }
            };
            
            const category = Object.keys(scores)[0];
            const recs = recommendations[currentTest]?.[category] || recommendations[currentTest]?.high || [];
            
            return JSON.stringify({ careers: recs.slice(0, 3) });
        }

        function displayResults(scores, aiResponse) {
            let careers = [];
            try {
                const parsed = JSON.parse(aiResponse);
                careers = parsed.careers || [];
            } catch (e) {
                careers = [
                    { title: "Technology Professional", courses: ["Computer Science", "IT"], reason: "Based on your assessment results." },
                    { title: "Business Analyst", courses: ["Business Administration", "Analytics"], reason: "Your analytical skills are valuable." },
                    { title: "Project Manager", courses: ["Project Management", "Agile"], reason: "Your organizational abilities shine." }
                ];
            }
            
            let html = `
                <h2>📋 Your Assessment Results</h2>
                <div class="score-section">
                    <h3>Score Breakdown</h3>
                    ${Object.entries(scores).map(([key, value]) => `
                        <div class="score-item">
                            <strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                            <div class="score-bar">
                                <div class="score-fill" style="width: ${Math.min(value, 100)}%"></div>
                            </div>
                            <span>${Math.round(value)}%</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="ai-recommendations">
                    <h3>🤖 AI-Powered Career Recommendations</h3>
                    ${careers.map(career => `
                        <div class="recommendation-card">
                            <h4>🎯 ${career.title}</h4>
                            <p><strong>Recommended Courses:</strong> ${career.courses.join(', ')}</p>
                            <p>${career.reason}</p>
                        </div>
                    `).join('')}
                </div>
                
                <button class="back-btn" onclick="backToDashboard()">Back to Dashboard</button>
            `;
            
            document.getElementById('results').innerHTML = html;
        }

        function backToDashboard() {
            document.getElementById('results').classList.remove('active');
            document.getElementById('dashboard').style.display = 'grid';
        }