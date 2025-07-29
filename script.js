// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scroll behavior for all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
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

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.person-card, .department-card, .section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add hover effects for department cards
    const departmentCards = document.querySelectorAll('.department-card');
    departmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click to expand/collapse department content
    const departmentHeaders = document.querySelectorAll('.department-header');
    departmentHeaders.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            const departmentCard = this.closest('.department-card');
            const content = departmentCard.querySelector('.department-content');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                content.style.animation = 'slideDown 0.3s ease-out';
            } else {
                content.style.animation = 'slideUp 0.3s ease-out';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
    });

    // Add search functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Tìm kiếm theo tên hoặc chức vụ...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 12px 20px;
        margin: 20px auto;
        border: 2px solid rgba(102, 126, 234, 0.3);
        border-radius: 25px;
        font-size: 16px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        display: block;
        outline: none;
        transition: all 0.3s ease;
    `;

    // Insert search input after header
    const header = document.querySelector('.header');
    header.parentNode.insertBefore(searchInput, header.nextSibling);

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const allCards = document.querySelectorAll('.person-card, .department-card');
        
        allCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0.3';
                if (searchTerm.length > 2) {
                    card.style.display = 'none';
                }
            }
        });
    });

    // Add floating action button for scroll to top
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;

    document.body.appendChild(scrollToTopBtn);

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

    // Add hover effect to scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Add loading animation
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;

    const loadingSpinner = document.createElement('div');
    loadingSpinner.innerHTML = '<i class="fas fa-broadcast-tower fa-spin" style="font-size: 3rem; color: white;"></i>';
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

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    });

    // Add tooltip for department cards
    departmentCards.forEach(card => {
        const title = card.querySelector('h3').textContent;
        card.setAttribute('title', `Nhấp để xem chi tiết ${title}`);
    });

    // Add counter animation for statistics
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Add statistics section if needed
    const statsSection = document.createElement('section');
    statsSection.className = 'section stats-section';
    statsSection.innerHTML = `
        <div class="section-header">
            <i class="fas fa-chart-bar"></i>
            <h2>Thống kê Tổ chức</h2>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <i class="fas fa-users"></i>
                <h3><span class="counter" data-target="9">0</span></h3>
                <p>Phó Tổng Biên tập</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-building"></i>
                <h3><span class="counter" data-target="12">0</span></h3>
                <p>Phòng Ban</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-user-tie"></i>
                <h3><span class="counter" data-target="50">0</span>+</h3>
                <p>Cán bộ Lãnh đạo</p>
            </div>
        </div>
    `;

    // Insert stats section after deputy editors
    const deputySection = document.querySelector('.deputy-editors');
    deputySection.parentNode.insertBefore(statsSection, deputySection.nextSibling);

    // Add CSS for stats section
    const statsCSS = `
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .stat-card i {
            font-size: 2.5rem;
            color: #667eea;
            margin-bottom: 1rem;
        }
        
        .stat-card h3 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
        }
        
        .stat-card p {
            color: #718096;
            font-size: 1rem;
            font-weight: 500;
        }
    `;

    // Add CSS to document
    const style = document.createElement('style');
    style.textContent = statsCSS;
    document.head.appendChild(style);

    // Animate counters when they come into view
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });

    console.log('Landing page script loaded successfully!');
}); 