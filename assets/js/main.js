
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        const iconOpen = this.querySelector('svg:not(.hidden)');
        const iconClose = this.querySelector('svg.hidden');
        
        menu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    });

    // Program schedule tabs
    const dayTabs = document.querySelectorAll('.day-tab');
    const daySchedules = document.querySelectorAll('.day-schedule');
    
    dayTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab styling
            dayTabs.forEach(t => t.classList.remove('border-primary', 'text-primary'));
            dayTabs.forEach(t => t.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300'));
            this.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            this.classList.add('border-primary', 'text-primary');
            
            // Show selected day's schedule
            const day = this.getAttribute('data-day');
            daySchedules.forEach(schedule => {
                schedule.classList.add('hidden');
                if (schedule.id === `${day}-schedule`) {
                    schedule.classList.remove('hidden');
                }
            });
        });
    });

    // Radio player functionality
    const playButton = document.querySelector('.play-button');
    let isPlaying = false;
    const audio = new Audio('https://stream.radio.co/sd7db0e9b5/listen'); // Replace with actual stream URL
    
    playButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            this.innerHTML = `
                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                `;
            } else {
                audio.play();
                this.innerHTML = `
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                `;
            }
            isPlaying = !isPlaying;
        });

        // Simulate now playing and listener count updates
        function updateNowPlaying() {
            const nowPlaying = document.getElementById('now-playing');
            const songs = [
                "Morning Vibes - Alimamy Kamara",
                "Latest News Update",
                "Diaspora Connect - Mariatu Bangura",
                "Sports Arena - Mohamed Koroma",
                "Community Forum",
                "Health Matters - Dr. Isatu Kamara",
                "Drive Time - Sarah Johnson",
                "Night Rhythms - DJ K-Man"
            ];
            const randomSong = songs[Math.floor(Math.random() * songs.length)];
            nowPlaying.textContent = randomSong;
            
            // Update listener count
            const listeners = document.getElementById('listeners');
            const randomListeners = Math.floor(Math.random() * 500) + 100;
            listeners.textContent = randomListeners.toLocaleString();
        }

        // Update every 30 seconds
        updateNowPlaying();
        setInterval(updateNowPlaying, 30000);

        // Back to top button
        const backToTopButton = document.getElementById('back-to-top');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
  