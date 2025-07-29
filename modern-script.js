// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
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
            this.style.opacity = '0.6';
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

    // Floating action buttons
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

    // Theme toggle button
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggleBtn.style.cssText = `
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
    `;

    actionButtons.appendChild(scrollToTopBtn);
    actionButtons.appendChild(themeToggleBtn);
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

    // Theme toggle functionality
    let isDarkTheme = true;
    themeToggleBtn.addEventListener('click', function() {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            document.body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
            this.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Hover effects for action buttons
    [scrollToTopBtn, themeToggleBtn].forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
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
            themeToggleBtn.click();
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

    console.log('Modern 3D page script loaded successfully!');
}); 