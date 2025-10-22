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
});
