// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme + '-theme';
    
    // Get theme toggle button from header
    const themeToggleBtn = document.getElementById('themeToggle');
    
    // Update theme toggle button icon based on current theme
    function updateThemeToggleIcon() {
        const isLightTheme = document.body.classList.contains('light-theme');
        themeToggleBtn.innerHTML = isLightTheme ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
    
    // Initialize button icon
    updateThemeToggleIcon();
    
    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // 3D tilt effect for cards
    const tiltCards = document.querySelectorAll('[data-tilt]');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.leadership-card, .department-module, .leadership-section, .departments-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Particle system enhancement
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(3)';
            this.style.opacity = '1';
        });
        
        particle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = document.body.classList.contains('light-theme') ? '0.4' : '0.6';
        });
    });

    // Glitch effect enhancement
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-1 0.3s infinite, glitch-2 0.3s infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });

    // 3D card flip effect
    const flipCards = document.querySelectorAll('.card-3d');
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = this.style.transform.includes('rotateY(180deg)') 
                ? 'rotateY(0deg)' 
                : 'rotateY(180deg)';
        });
    });

    // Search functionality with modern UI
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 Tìm kiếm theo tên hoặc chức vụ...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 15px 25px;
        margin: 20px auto;
        border: 2px solid rgba(102, 126, 234, 0.3);
        border-radius: 30px;
        font-size: 16px;
        background: rgba(15, 15, 35, 0.8);
        backdrop-filter: blur(20px);
        color: #ffffff;
        display: block;
        outline: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    `;

    // Insert search input after header
    const header = document.querySelector('.header');
    header.parentNode.insertBefore(searchInput, header.nextSibling);

    // Update search input styles based on theme
    function updateSearchInputStyles() {
        const isLightTheme = document.body.classList.contains('light-theme');
        if (isLightTheme) {
            searchInput.style.border = '2px solid rgba(102, 126, 234, 0.2)';
            searchInput.style.background = 'rgba(255, 255, 255, 0.9)';
            searchInput.style.color = '#2c3e50';
            searchInput.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        } else {
            searchInput.style.border = '2px solid rgba(102, 126, 234, 0.3)';
            searchInput.style.background = 'rgba(15, 15, 35, 0.8)';
            searchInput.style.color = '#ffffff';
            searchInput.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }
    }

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const allCards = document.querySelectorAll('.leadership-card, .department-module');
        
        allCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0.3';
                card.style.transform = 'translateY(10px)';
                if (searchTerm.length > 2) {
                    card.style.display = 'none';
                }
            }
        });
    });

    // Floating action buttons (only scroll to top now)
    const actionButtons = document.createElement('div');
    actionButtons.className = 'action-buttons';
    actionButtons.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 1000;
    `;

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
    `;

    actionButtons.appendChild(scrollToTopBtn);
    document.body.appendChild(actionButtons);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Theme toggle functionality with smooth transition
    function toggleTheme() {
        const isLightTheme = document.body.classList.contains('light-theme');
        const newTheme = isLightTheme ? 'dark' : 'light';
        
        // Create transition overlay
        const transitionOverlay = document.createElement('div');
        transitionOverlay.className = 'theme-transition';
        document.body.appendChild(transitionOverlay);
        
        // Activate transition
        setTimeout(() => {
            transitionOverlay.classList.add('active');
        }, 10);
        
        // Change theme after transition starts
        setTimeout(() => {
            document.body.className = newTheme + '-theme';
            localStorage.setItem('theme', newTheme);
            
            // Update theme toggle button icon
            updateThemeToggleIcon();
            
            // Update search input styles
            updateSearchInputStyles();
            
            // Update particle opacity
            particles.forEach(particle => {
                particle.style.opacity = newTheme === 'light' ? '0.4' : '0.6';
            });
            
            // Remove transition overlay
            setTimeout(() => {
                transitionOverlay.classList.remove('active');
                setTimeout(() => {
                    transitionOverlay.remove();
                }, 300);
            }, 150);
        }, 150);
    }

    // Add click event to theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Hover effects for action buttons
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Loading animation
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;

    const loadingSpinner = document.createElement('div');
    loadingSpinner.innerHTML = '<i class="fas fa-cube fa-spin" style="font-size: 3rem; color: #667eea;"></i>';
    loadingOverlay.appendChild(loadingSpinner);

    document.body.appendChild(loadingOverlay);

    // Remove loading overlay after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
        
        if (e.key === 't' && e.ctrlKey) {
            e.preventDefault();
            toggleTheme();
        }
    });

    // Mouse trail effect
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(trail);

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        trail.style.opacity = '0.6';
    });

    function updateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        trail.style.left = trailX - 5 + 'px';
        trail.style.top = trailY - 5 + 'px';
        requestAnimationFrame(updateTrail);
    }
    updateTrail();

    // Typing effect for titles
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    };

    // Apply typing effect to main titles
    const mainTitles = document.querySelectorAll('.glitch');
    mainTitles.forEach((title, index) => {
        setTimeout(() => {
            const originalText = title.getAttribute('data-text');
            typeWriter(title, originalText, 150);
        }, index * 500);
    });

    // Magnetic effect for cards
    const magneticCards = document.querySelectorAll('.leadership-card, .department-module');
    
    magneticCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });

    // Sound effects (optional)
    const playSound = (type) => {
        // Create audio context for sound effects
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(type === 'hover' ? 800 : 600, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    };

    // Add sound effects to interactive elements
    const interactiveElements = document.querySelectorAll('.leadership-card, .department-module, .nav-link');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Uncomment to enable sound effects
            // playSound('hover');
        });
    });

    // Performance optimization
    let ticking = false;
    
    function updateOnScroll() {
        // Update parallax and other scroll-based effects
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Initialize search input styles
    updateSearchInputStyles();

    // Share functionality
    const shareBtn = document.getElementById('shareBtn');
    const shareDropdown = document.getElementById('shareDropdown');
    let isShareOpen = false;

    // Toggle share dropdown
    shareBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        isShareOpen = !isShareOpen;
        
        if (isShareOpen) {
            shareDropdown.classList.add('active');
            shareBtn.style.transform = 'scale(1.1) rotate(45deg)';
        } else {
            shareDropdown.classList.remove('active');
            shareBtn.style.transform = 'scale(1) rotate(0deg)';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!shareBtn.contains(e.target) && !shareDropdown.contains(e.target)) {
            isShareOpen = false;
            shareDropdown.classList.remove('active');
            shareBtn.style.transform = 'scale(1) rotate(0deg)';
        }
    });

    // Share options functionality
    const shareOptions = document.querySelectorAll('.share-option');
    const pageUrl = window.location.href;
    const pageTitle = document.title;
    const pageDescription = 'Sơ đồ Tổ chức - Báo và Phát thanh – Truyền hình Cần Thơ';

    shareOptions.forEach(option => {
        option.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            let shareUrl = '';

            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`;
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`;
                    break;
                case 'copy':
                    // Copy to clipboard
                    navigator.clipboard.writeText(pageUrl).then(() => {
                        showNotification('Đã sao chép link!', 'success');
                    }).catch(() => {
                        // Fallback for older browsers
                        const textArea = document.createElement('textarea');
                        textArea.value = pageUrl;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        showNotification('Đã sao chép link!', 'success');
                    });
                    return;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }

            // Close dropdown after sharing
            setTimeout(() => {
                isShareOpen = false;
                shareDropdown.classList.remove('active');
                shareBtn.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });
    });

    // Notification function
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #4CAF50, #45a049)' : 'linear-gradient(135deg, #2196F3, #1976D2)'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
            max-width: 300px;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Light swipe effect on share button
    shareBtn.addEventListener('mouseenter', function() {
        const lightSwipe = this.querySelector('.share-light-swipe');
        if (lightSwipe) {
            lightSwipe.style.left = '100%';
        }
    });

    shareBtn.addEventListener('mouseleave', function() {
        const lightSwipe = this.querySelector('.share-light-swipe');
        if (lightSwipe) {
            lightSwipe.style.left = '-100%';
        }
    });

    console.log('Modern 3D page script loaded successfully!');
}); 