// db.js - In-Memory Database for EduGuide College Directory

class CollegeDatabase {
    constructor() {
        this.colleges = [
            {
                id: 1,
                name: "IIT Bombay",
                type: "Government",
                location: "Mumbai",
                established: 1958,
                fees: 8.5,
                rating: 4.8,
                courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports", "WiFi"],
                description: "Premier engineering institute with world-class facilities",
                website: "https://www.iitb.ac.in",
                email: "info@iitb.ac.in",
                phone: "+91-22-2572-2545",
                accreditation: "NAAC A++",
                placements: {
                    averagePackage: 20,
                    highestPackage: 1.8,
                    placementRate: 95
                }
            },
            {
                id: 2,
                name: "Delhi Technological University",
                type: "Government",
                location: "Delhi",
                established: 1941,
                fees: 7.2,
                rating: 4.5,
                courses: ["B.Tech", "M.Tech", "MBA"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports"],
                description: "Leading technical university in Delhi",
                website: "https://www.dtu.ac.in",
                email: "info@dtu.ac.in",
                phone: "+91-11-2787-1000",
                accreditation: "NAAC A+",
                placements: {
                    averagePackage: 12,
                    highestPackage: 50,
                    placementRate: 88
                }
            },
            {
                id: 3,
                name: "Manipal Institute of Technology",
                type: "Private",
                location: "Bangalore",
                established: 1957,
                fees: 15.5,
                rating: 4.3,
                courses: ["B.Tech", "MBA", "M.Tech"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports", "WiFi", "Cafeteria"],
                description: "Renowned private institution with excellent placements",
                website: "https://www.manipal.edu",
                email: "info@manipal.edu",
                phone: "+91-820-292-3000",
                accreditation: "NAAC A",
                placements: {
                    averagePackage: 8,
                    highestPackage: 42,
                    placementRate: 85
                }
            },
            {
                id: 4,
                name: "Pune University",
                type: "Government",
                location: "Pune",
                established: 1949,
                fees: 3.5,
                rating: 4.2,
                courses: ["B.A", "B.Sc", "B.Com", "MBA"],
                medium: "English",
                facilities: ["Library", "Sports", "WiFi"],
                description: "Historic university offering diverse programs",
                website: "https://www.unipune.ac.in",
                email: "info@unipune.ac.in",
                phone: "+91-20-2560-1000",
                accreditation: "NAAC A+",
                placements: {
                    averagePackage: 5,
                    highestPackage: 18,
                    placementRate: 75
                }
            },
            {
                id: 5,
                name: "BITS Pilani",
                type: "Deemed",
                location: "Hyderabad",
                established: 1964,
                fees: 18.0,
                rating: 4.7,
                courses: ["B.Tech", "M.Tech", "MBA", "B.Sc"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports", "WiFi"],
                description: "Premier deemed university with excellent research facilities",
                website: "https://www.bits-pilani.ac.in",
                email: "info@bits-pilani.ac.in",
                phone: "+91-1596-245-073",
                accreditation: "NAAC A++",
                placements: {
                    averagePackage: 15,
                    highestPackage: 60,
                    placementRate: 92
                }
            },
            {
                id: 6,
                name: "Loyola College",
                type: "Private",
                location: "Chennai",
                established: 1925,
                fees: 2.8,
                rating: 4.4,
                courses: ["B.A", "B.Sc", "B.Com", "MBA"],
                medium: "English",
                facilities: ["Library", "Sports", "WiFi", "Cafeteria"],
                description: "Prestigious institution with strong academic heritage",
                website: "https://www.loyolacollege.edu",
                email: "info@loyolacollege.edu",
                phone: "+91-44-2817-8200",
                accreditation: "NAAC A",
                placements: {
                    averagePackage: 4.5,
                    highestPackage: 15,
                    placementRate: 80
                }
            },
            {
                id: 7,
                name: "Jadavpur University",
                type: "Government",
                location: "Kolkata",
                established: 1955,
                fees: 1.5,
                rating: 4.3,
                courses: ["B.Tech", "B.A", "B.Sc"],
                medium: "English",
                facilities: ["Library", "Lab", "Sports"],
                description: "Well-established state university",
                website: "https://www.jaduniv.edu.in",
                email: "info@jaduniv.edu.in",
                phone: "+91-33-2414-6666",
                accreditation: "NAAC A",
                placements: {
                    averagePackage: 8,
                    highestPackage: 35,
                    placementRate: 82
                }
            },
            {
                id: 8,
                name: "Amity University",
                type: "Private",
                location: "Delhi",
                established: 2005,
                fees: 12.5,
                rating: 4.0,
                courses: ["B.Tech", "MBA", "B.A", "B.Sc"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports", "WiFi", "Cafeteria"],
                description: "Modern private university with multiple campuses",
                website: "https://www.amity.edu",
                email: "info@amity.edu",
                phone: "+91-120-471-5000",
                accreditation: "NAAC A+",
                placements: {
                    averagePackage: 6,
                    highestPackage: 25,
                    placementRate: 78
                }
            },
            {
                id: 9,
                name: "Symbiosis International",
                type: "Deemed",
                location: "Pune",
                established: 1971,
                fees: 16.0,
                rating: 4.5,
                courses: ["MBA", "B.Tech", "B.A", "B.Sc"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports", "WiFi"],
                description: "Top-ranked deemed university",
                website: "https://www.siu.edu.in",
                email: "info@siu.edu.in",
                phone: "+91-20-2528-1000",
                accreditation: "NAAC A++",
                placements: {
                    averagePackage: 10,
                    highestPackage: 40,
                    placementRate: 90
                }
            },
            {
                id: 10,
                name: "Christ University",
                type: "Deemed",
                location: "Bangalore",
                established: 1969,
                fees: 9.5,
                rating: 4.4,
                courses: ["B.A", "B.Sc", "B.Com", "MBA"],
                medium: "English",
                facilities: ["Library", "Sports", "WiFi", "Cafeteria"],
                description: "Reputed deemed university with holistic education",
                website: "https://www.christuniversity.in",
                email: "info@christuniversity.in",
                phone: "+91-80-4012-9100",
                accreditation: "NAAC A+",
                placements: {
                    averagePackage: 5.5,
                    highestPackage: 20,
                    placementRate: 85
                }
            },
            {
                id: 11,
                name: "Anna University",
                type: "Government",
                location: "Chennai",
                established: 1978,
                fees: 2.0,
                rating: 4.1,
                courses: ["B.Tech", "M.Tech", "MBA"],
                medium: "English",
                facilities: ["Library", "Lab", "Sports"],
                description: "Leading technical university in Tamil Nadu",
                website: "https://www.annauniv.edu",
                email: "info@annauniv.edu",
                phone: "+91-44-2235-8712",
                accreditation: "NAAC A+",
                placements: {
                    averagePackage: 6,
                    highestPackage: 30,
                    placementRate: 80
                }
            },
            {
                id: 12,
                name: "VIT Vellore",
                type: "Private",
                location: "Chennai",
                established: 1984,
                fees: 14.5,
                rating: 4.6,
                courses: ["B.Tech", "M.Tech", "MBA", "B.Sc"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports", "WiFi", "Cafeteria"],
                description: "Premier private engineering institution",
                website: "https://www.vit.ac.in",
                email: "info@vit.ac.in",
                phone: "+91-416-220-2000",
                accreditation: "NAAC A++",
                placements: {
                    averagePackage: 7.5,
                    highestPackage: 41,
                    placementRate: 88
                }
            },
            {
                id: 13,
                name: "DU - Delhi University",
                type: "Government",
                location: "Delhi",
                established: 1922,
                fees: 1.2,
                rating: 4.3,
                courses: ["B.A", "B.Sc", "B.Com"],
                medium: "English",
                facilities: ["Library", "Sports", "WiFi"],
                description: "Historic central university with multiple colleges",
                website: "https://www.du.ac.in",
                email: "info@du.ac.in",
                phone: "+91-11-2766-7853",
                accreditation: "NAAC A++",
                placements: {
                    averagePackage: 4,
                    highestPackage: 25,
                    placementRate: 70
                }
            },
            {
                id: 14,
                name: "SRM Institute",
                type: "Private",
                location: "Chennai",
                established: 1985,
                fees: 11.0,
                rating: 4.2,
                courses: ["B.Tech", "MBA", "B.Sc"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "Sports", "WiFi"],
                description: "Well-known private institution",
                website: "https://www.srmist.edu.in",
                email: "info@srmist.edu.in",
                phone: "+91-44-2741-7000",
                accreditation: "NAAC A+",
                placements: {
                    averagePackage: 6.5,
                    highestPackage: 35,
                    placementRate: 82
                }
            },
            {
                id: 15,
                name: "NMIMS Mumbai",
                type: "Deemed",
                location: "Mumbai",
                established: 1981,
                fees: 19.0,
                rating: 4.6,
                courses: ["MBA", "B.Tech", "B.A"],
                medium: "English",
                facilities: ["Hostel", "Library", "Lab", "WiFi", "Cafeteria"],
                description: "Top business school and deemed university",
                website: "https://www.nmims.edu",
                email: "info@nmims.edu",
                phone: "+91-22-4235-5555",
                accreditation: "NAAC A++",
                placements: {
                    averagePackage: 18,
                    highestPackage: 55,
                    placementRate: 95
                }
            }
        ];
        
        this.nextId = 16; // For auto-increment IDs
    }

    // ============= READ OPERATIONS =============
    
    /**
     * Get all colleges
     * @returns {Array} Array of all colleges
     */
    getAllColleges() {
        return [...this.colleges];
    }

    /**
     * Get college by ID
     * @param {number} id - College ID
     * @returns {Object|null} College object or null if not found
     */
    getCollegeById(id) {
        return this.colleges.find(college => college.id === id) || null;
    }

    /**
     * Get college by name
     * @param {string} name - College name
     * @returns {Object|null} College object or null if not found
     */
    getCollegeByName(name) {
        return this.colleges.find(college => 
            college.name.toLowerCase() === name.toLowerCase()
        ) || null;
    }

    /**
     * Search colleges with filters
     * @param {Object} filters - Filter criteria
     * @returns {Array} Filtered array of colleges
     */
    searchColleges(filters = {}) {
        return this.colleges.filter(college => {
            // Search by name
            if (filters.search) {
                const searchLower = filters.search.toLowerCase();
                if (!college.name.toLowerCase().includes(searchLower)) {
                    return false;
                }
            }

            // Filter by type
            if (filters.types && filters.types.length > 0) {
                if (!filters.types.includes(college.type)) {
                    return false;
                }
            }

            // Filter by location
            if (filters.location) {
                if (college.location !== filters.location) {
                    return false;
                }
            }

            // Filter by courses
            if (filters.courses && filters.courses.length > 0) {
                const hasAnyCourse = filters.courses.some(course => 
                    college.courses.includes(course)
                );
                if (!hasAnyCourse) {
                    return false;
                }
            }

            // Filter by medium
            if (filters.mediums && filters.mediums.length > 0) {
                if (!filters.mediums.includes(college.medium)) {
                    return false;
                }
            }

            // Filter by minimum rating
            if (filters.minRating !== undefined) {
                if (college.rating < filters.minRating) {
                    return false;
                }
            }

            // Filter by maximum fees
            if (filters.maxFees !== undefined) {
                if (college.fees > filters.maxFees) {
                    return false;
                }
            }

            // Filter by fees range
            if (filters.minFees !== undefined && filters.maxFeesRange !== undefined) {
                if (college.fees < filters.minFees || college.fees > filters.maxFeesRange) {
                    return false;
                }
            }

            return true;
        });
    }

    /**
     * Get colleges by location
     * @param {string} location - Location name
     * @returns {Array} Array of colleges in that location
     */
    getCollegesByLocation(location) {
        return this.colleges.filter(college => college.location === location);
    }

    /**
     * Get colleges by type
     * @param {string} type - College type (Government, Private, Deemed)
     * @returns {Array} Array of colleges of that type
     */
    getCollegesByType(type) {
        return this.colleges.filter(college => college.type === type);
    }

    /**
     * Get colleges offering specific course
     * @param {string} course - Course name
     * @returns {Array} Array of colleges offering that course
     */
    getCollegesByCourse(course) {
        return this.colleges.filter(college => college.courses.includes(course));
    }

    /**
     * Get unique locations
     * @returns {Array} Array of unique location names
     */
    getUniqueLocations() {
        return [...new Set(this.colleges.map(college => college.location))].sort();
    }

    /**
     * Get unique college types
     * @returns {Array} Array of unique college types
     */
    getUniqueTypes() {
        return [...new Set(this.colleges.map(college => college.type))].sort();
    }

    /**
     * Get all unique courses
     * @returns {Array} Array of unique courses
     */
    getAllCourses() {
        const courses = new Set();
        this.colleges.forEach(college => {
            college.courses.forEach(course => courses.add(course));
        });
        return [...courses].sort();
    }

    /**
     * Get all unique facilities
     * @returns {Array} Array of unique facilities
     */
    getAllFacilities() {
        const facilities = new Set();
        this.colleges.forEach(college => {
            college.facilities.forEach(facility => facilities.add(facility));
        });
        return [...facilities].sort();
    }

    // ============= CREATE OPERATIONS =============

    /**
     * Add a new college
     * @param {Object} collegeData - College data object
     * @returns {Object} Newly created college with ID
     */
    addCollege(collegeData) {
        const newCollege = {
            id: this.nextId++,
            name: collegeData.name || "Unnamed College",
            type: collegeData.type || "Private",
            location: collegeData.location || "Unknown",
            established: collegeData.established || new Date().getFullYear(),
            fees: collegeData.fees || 0,
            rating: collegeData.rating || 3.0,
            courses: collegeData.courses || [],
            medium: collegeData.medium || "English",
            facilities: collegeData.facilities || [],
            description: collegeData.description || "",
            website: collegeData.website || "",
            email: collegeData.email || "",
            phone: collegeData.phone || "",
            accreditation: collegeData.accreditation || "Not Accredited",
            placements: collegeData.placements || {
                averagePackage: 0,
                highestPackage: 0,
                placementRate: 0
            }
        };

        this.colleges.push(newCollege);
        return newCollege;
    }

    // ============= UPDATE OPERATIONS =============

    /**
     * Update college by ID
     * @param {number} id - College ID
     * @param {Object} updateData - Data to update
     * @returns {Object|null} Updated college or null if not found
     */
    updateCollege(id, updateData) {
        const index = this.colleges.findIndex(college => college.id === id);
        
        if (index === -1) {
            return null;
        }

        // Merge update data with existing college
        this.colleges[index] = {
            ...this.colleges[index],
            ...updateData,
            id: this.colleges[index].id // Preserve original ID
        };

        return this.colleges[index];
    }

    /**
     * Update specific fields of a college
     * @param {number} id - College ID
     * @param {string} field - Field name to update
     * @param {any} value - New value
     * @returns {boolean} Success status
     */
    updateCollegeField(id, field, value) {
        const college = this.getCollegeById(id);
        
        if (!college) {
            return false;
        }

        college[field] = value;
        return true;
    }

    /**
     * Add course to college
     * @param {number} id - College ID
     * @param {string} course - Course name
     * @returns {boolean} Success status
     */
    addCourse(id, course) {
        const college = this.getCollegeById(id);
        
        if (!college || college.courses.includes(course)) {
            return false;
        }

        college.courses.push(course);
        return true;
    }

    /**
     * Remove course from college
     * @param {number} id - College ID
     * @param {string} course - Course name
     * @returns {boolean} Success status
     */
    removeCourse(id, course) {
        const college = this.getCollegeById(id);
        
        if (!college) {
            return false;
        }

        const index = college.courses.indexOf(course);
        if (index > -1) {
            college.courses.splice(index, 1);
            return true;
        }
        
        return false;
    }

    /**
     * Add facility to college
     * @param {number} id - College ID
     * @param {string} facility - Facility name
     * @returns {boolean} Success status
     */
    addFacility(id, facility) {
        const college = this.getCollegeById(id);
        
        if (!college || college.facilities.includes(facility)) {
            return false;
        }

        college.facilities.push(facility);
        return true;
    }

    /**
     * Remove facility from college
     * @param {number} id - College ID
     * @param {string} facility - Facility name
     * @returns {boolean} Success status
     */
    removeFacility(id, facility) {
        const college = this.getCollegeById(id);
        
        if (!college) {
            return false;
        }

        const index = college.facilities.indexOf(facility);
        if (index > -1) {
            college.facilities.splice(index, 1);
            return true;
        }
        
        return false;
    }

    // ============= DELETE OPERATIONS =============

    /**
     * Delete college by ID
     * @param {number} id - College ID
     * @returns {boolean} Success status
     */
    deleteCollege(id) {
        const index = this.colleges.findIndex(college => college.id === id);
        
        if (index === -1) {
            return false;
        }

        this.colleges.splice(index, 1);
        return true;
    }

    /**
     * Delete multiple colleges by IDs
     * @param {Array} ids - Array of college IDs
     * @returns {number} Number of colleges deleted
     */
    deleteMultipleColleges(ids) {
        let deletedCount = 0;
        
        ids.forEach(id => {
            if (this.deleteCollege(id)) {
                deletedCount++;
            }
        });

        return deletedCount;
    }

    // ============= UTILITY OPERATIONS =============

    /**
     * Sort colleges
     * @param {Array} colleges - Array of colleges to sort
     * @param {string} sortBy - Sort criteria (rating, fees, name, established)
     * @param {string} order - Sort order (asc, desc)
     * @returns {Array} Sorted array of colleges
     */
    sortColleges(colleges, sortBy = 'name', order = 'asc') {
        const sorted = [...colleges];

        sorted.sort((a, b) => {
            let compareA, compareB;

            switch (sortBy) {
                case 'rating':
                    compareA = a.rating;
                    compareB = b.rating;
                    break;
                case 'fees':
                    compareA = a.fees;
                    compareB = b.fees;
                    break;
                case 'established':
                    compareA = a.established;
                    compareB = b.established;
                    break;
                case 'name':
                default:
                    return order === 'asc' 
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name);
            }

            return order === 'asc' 
                ? compareA - compareB 
                : compareB - compareA;
        });

        return sorted;
    }

    /**
     * Get statistics
     * @returns {Object} Database statistics
     */
    getStatistics() {
        return {
            totalColleges: this.colleges.length,
            governmentColleges: this.colleges.filter(c => c.type === 'Government').length,
            privateColleges: this.colleges.filter(c => c.type === 'Private').length,
            deemedColleges: this.colleges.filter(c => c.type === 'Deemed').length,
            averageRating: (this.colleges.reduce((sum, c) => sum + c.rating, 0) / this.colleges.length).toFixed(2),
            averageFees: (this.colleges.reduce((sum, c) => sum + c.fees, 0) / this.colleges.length).toFixed(2),
            locations: this.getUniqueLocations().length,
            totalCourses: this.getAllCourses().length
        };
    }

    /**
     * Export data as JSON
     * @returns {string} JSON string of all colleges
     */
    exportToJSON() {
        return JSON.stringify(this.colleges, null, 2);
    }

    /**
     * Import data from JSON
     * @param {string} jsonString - JSON string of colleges
     * @returns {boolean} Success status
     */
    importFromJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (Array.isArray(data)) {
                this.colleges = data;
                this.nextId = Math.max(...data.map(c => c.id)) + 1;
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error importing JSON:', error);
            return false;
        }
    }

    /**
     * Reset database to initial state
     */
    reset() {
        this.colleges = [];
        this.nextId = 1;
    }

    /**
     * Get paginated results
     * @param {Array} colleges - Array of colleges
     * @param {number} page - Page number (1-indexed)
     * @param {number} pageSize - Number of items per page
     * @returns {Object} Paginated results with metadata
     */
    paginate(colleges, page = 1, pageSize = 10) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedColleges = colleges.slice(startIndex, endIndex);

        return {
            data: paginatedColleges,
            currentPage: page,
            pageSize: pageSize,
            totalItems: colleges.length,
            totalPages: Math.ceil(colleges.length / pageSize),
            hasNextPage: endIndex < colleges.length,
            hasPreviousPage: page > 1
        };
    }
}



// ============= USER DATABASE =============

class UserDatabase {
    constructor() {
        this.users = [];
        this.nextUserId = 1;
        this.currentUser = null;
        
        // Load users from localStorage if available
        this.loadFromStorage();
    }

    // ============= STORAGE OPERATIONS =============

    /**
     * Save users to localStorage
     */
    saveToStorage() {
        try {
            const userData = {
                users: this.users,
                nextUserId: this.nextUserId
            };
            localStorage.setItem('eduguide_users', JSON.stringify(userData));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    /**
     * Load users from localStorage
     */
    loadFromStorage() {
        try {
            const stored = localStorage.getItem('eduguide_users');
            if (stored) {
                const userData = JSON.parse(stored);
                this.users = userData.users || [];
                this.nextUserId = userData.nextUserId || 1;
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
    }

    /**
     * Save current user session
     */
    saveCurrentUser() {
        try {
            if (this.currentUser) {
                localStorage.setItem('eduguide_current_user', JSON.stringify(this.currentUser));
            } else {
                localStorage.removeItem('eduguide_current_user');
            }
        } catch (error) {
            console.error('Error saving current user:', error);
        }
    }

    /**
     * Load current user session
     */
    loadCurrentUser() {
        try {
            const stored = localStorage.getItem('eduguide_current_user');
            if (stored) {
                this.currentUser = JSON.parse(stored);
                return this.currentUser;
            }
        } catch (error) {
            console.error('Error loading current user:', error);
        }
        return null;
    }

    // ============= USER CRUD OPERATIONS =============

    /**
     * Register a new user
     * @param {Object} userData - User registration data
     * @returns {Object} Result object with success status and message
     */
    registerUser(userData) {
        // Validate required fields
        if (!userData.username || !userData.password) {
            return { success: false, message: 'Username and password are required' };
        }

        // Check if username already exists
        if (this.users.some(user => user.username.toLowerCase() === userData.username.toLowerCase())) {
            return { success: false, message: 'Username already exists' };
        }

        // Check if email already exists
        if (userData.email && this.users.some(user => user.email.toLowerCase() === userData.email.toLowerCase())) {
            return { success: false, message: 'Email already exists' };
        }

        // Create new user
        const newUser = {
            id: this.nextUserId++,
            username: userData.username,
            password: userData.password, // In production, hash this!
            email: userData.email || '',
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            studentCategory: userData.studentCategory || '',
            gender: userData.gender || '',
            state: userData.state || '',
            city: userData.city || '',
            createdAt: new Date().toISOString(),
            lastLogin: null,
            
            // School student specific fields
            stream: userData.stream || '',
            tenth: userData.tenth || '',
            twelfth: userData.twelfth || '',
            board: userData.board || '',
            
            // College student specific fields
            university: userData.university || '',
            course: userData.course || '',
            cgpa: userData.cgpa || ''
        };

        this.users.push(newUser);
        this.saveToStorage();

        return { 
            success: true, 
            message: 'Registration successful',
            user: this.sanitizeUser(newUser)
        };
    }

    /**
     * Login user
     * @param {string} username - Username
     * @param {string} password - Password
     * @returns {Object} Result object with success status and user data
     */
    loginUser(username, password) {
        const user = this.users.find(u => 
            u.username.toLowerCase() === username.toLowerCase() && 
            u.password === password
        );

        if (!user) {
            return { success: false, message: 'Invalid username or password' };
        }

        // Update last login
        user.lastLogin = new Date().toISOString();
        this.saveToStorage();

        // Set current user
        this.currentUser = this.sanitizeUser(user);
        this.saveCurrentUser();

        return { 
            success: true, 
            message: 'Login successful',
            user: this.currentUser
        };
    }

    /**
     * Logout current user
     */
    logoutUser() {
        this.currentUser = null;
        this.saveCurrentUser();
        return { success: true, message: 'Logout successful' };
    }

    /**
     * Get current logged-in user
     * @returns {Object|null} Current user or null
     */
    getCurrentUser() {
        if (!this.currentUser) {
            this.loadCurrentUser();
        }
        return this.currentUser;
    }

    /**
     * Check if user is logged in
     * @returns {boolean} Login status
     */
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }

    /**
     * Get user by ID
     * @param {number} id - User ID
     * @returns {Object|null} User object or null
     */
    getUserById(id) {
        const user = this.users.find(u => u.id === id);
        return user ? this.sanitizeUser(user) : null;
    }

    /**
     * Get user by username
     * @param {string} username - Username
     * @returns {Object|null} User object or null
     */
    getUserByUsername(username) {
        const user = this.users.find(u => u.username.toLowerCase() === username.toLowerCase());
        return user ? this.sanitizeUser(user) : null;
    }

    /**
     * Update user profile
     * @param {number} userId - User ID
     * @param {Object} updateData - Data to update
     * @returns {Object} Result object
     */
    updateUser(userId, updateData) {
        const index = this.users.findIndex(u => u.id === userId);
        
        if (index === -1) {
            return { success: false, message: 'User not found' };
        }

        // Don't allow changing username or password through this method
        delete updateData.username;
        delete updateData.password;
        delete updateData.id;

        // Update user
        this.users[index] = {
            ...this.users[index],
            ...updateData
        };

        this.saveToStorage();

        // Update current user if it's the same user
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser = this.sanitizeUser(this.users[index]);
            this.saveCurrentUser();
        }

        return { 
            success: true, 
            message: 'Profile updated successfully',
            user: this.sanitizeUser(this.users[index])
        };
    }

    /**
     * Change password
     * @param {number} userId - User ID
     * @param {string} oldPassword - Old password
     * @param {string} newPassword - New password
     * @returns {Object} Result object
     */
    changePassword(userId, oldPassword, newPassword) {
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
            return { success: false, message: 'User not found' };
        }

        if (user.password !== oldPassword) {
            return { success: false, message: 'Incorrect old password' };
        }

        user.password = newPassword;
        this.saveToStorage();

        return { success: true, message: 'Password changed successfully' };
    }

    /**
     * Delete user
     * @param {number} userId - User ID
     * @returns {Object} Result object
     */
    deleteUser(userId) {
        const index = this.users.findIndex(u => u.id === userId);
        
        if (index === -1) {
            return { success: false, message: 'User not found' };
        }

        this.users.splice(index, 1);
        this.saveToStorage();

        // Logout if current user is deleted
        if (this.currentUser && this.currentUser.id === userId) {
            this.logoutUser();
        }

        return { success: true, message: 'User deleted successfully' };
    }

    /**
     * Get all users (admin function)
     * @returns {Array} Array of sanitized users
     */
    getAllUsers() {
        return this.users.map(user => this.sanitizeUser(user));
    }

    /**
     * Remove sensitive data from user object
     * @param {Object} user - User object
     * @returns {Object} Sanitized user object
     */
    sanitizeUser(user) {
        const { password, ...sanitized } = user;
        return sanitized;
    }

    /**
     * Get user statistics
     * @returns {Object} Statistics object
     */
    getUserStatistics() {
        const schoolStudents = this.users.filter(u => u.studentCategory === 'school').length;
        const collegeStudents = this.users.filter(u => u.studentCategory === 'college').length;

        return {
            totalUsers: this.users.length,
            schoolStudents,
            collegeStudents,
            loggedIn: this.isLoggedIn()
        };
    }

    /**
     * Clear all users (reset database)
     */
    clearAllUsers() {
        this.users = [];
        this.nextUserId = 1;
        this.currentUser = null;
        this.saveToStorage();
        this.saveCurrentUser();
    }
}

// Create and export singleton instances
const collegeDB = new CollegeDatabase();
const userDB = new UserDatabase();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { collegeDB, userDB };
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
    window.collegeDB = collegeDB;
    window.userDB = userDB;
    
    // For backward compatibility
    window.db = collegeDB;
}