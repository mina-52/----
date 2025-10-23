// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navSection = document.querySelector('.nav-section');
    
    if (mobileMenuToggle && navSection) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle active class on hamburger menu
            mobileMenuToggle.classList.toggle('active');
            
            // Toggle active class on navigation section
            navSection.classList.toggle('active');
        });
        
        // Close menu when clicking on nav items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navSection.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navSection.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navSection.classList.remove('active');
            }
        });
    }

    // Random tooltip messages
    const tooltipMessages = [
        'あなたが知らない福利厚生があるかも！？',
        'ハロウィン旅行でも利用できる！',
        '紅葉狩り旅行でも利用できる！',
        '温泉リゾートでも利用できる！'
    ];

    const tooltipText = document.getElementById('tooltip-text');
    const randomTooltip = document.getElementById('random-tooltip');
    const welfareButton = document.querySelector('.welfare-button');

    if (tooltipText && randomTooltip && welfareButton) {
        // Set random message on page load
        const randomMessage = tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)];
        tooltipText.textContent = randomMessage;

        // Change message on each hover
        welfareButton.addEventListener('mouseenter', function() {
            const randomMessage = tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)];
            tooltipText.textContent = randomMessage;
        });
    }
});
