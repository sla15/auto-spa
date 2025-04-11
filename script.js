// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sticky navigation bar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Button hover animation
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Highlight the most popular pricing card on hover
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '';
    });
});

// Adjust marquee animation speed for faster scrolling
const marqueeEffect = document.querySelector('.marquee-effect ul');

let start = 0;
function seamlessScroll() {
    start -= 2; // Increase speed by changing the decrement value
    marqueeEffect.style.transform = `translateX(${start}px)`;

    // Reset position when the marquee is completely out of view
    if (Math.abs(start) >= marqueeEffect.offsetWidth) {
        start = 0;
    }

    requestAnimationFrame(seamlessScroll);
}

seamlessScroll();

// Animate service stats when they come into view
const statsSection = document.querySelector('.service-stats');
const stats = document.querySelectorAll('.stat');

function animateStats() {
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.classList.add('animate');
        }, index * 300); // Delay each stat animation
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    if (isInViewport(statsSection)) {
        animateStats();
    }
});

// Fix customer satisfaction animation
const satisfactionStat = document.querySelector('.stat.satisfaction');

function animateSatisfaction() {
    if (satisfactionStat) {
        satisfactionStat.style.background = 'conic-gradient(var(--accent-color-1) 95%, #ccc 0%)';
        satisfactionStat.style.transform = 'scale(1)';
    }
}

window.addEventListener('scroll', () => {
    if (isInViewport(satisfactionStat)) {
        animateSatisfaction();
    }
});

// Typing effect for the header h1
window.addEventListener('load', () => {
    const headerText = document.querySelector('.hero h1');
    const text = headerText.textContent;
    headerText.textContent = '';

    let index = 0;
    const typingSpeed = 100; // Speed of typing in milliseconds

    const type = () => {
        if (index < text.length) {
            headerText.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    };

    type();
});

// Scroll animations for pricing cards
window.addEventListener('DOMContentLoaded', () => {
    const pricingCards = document.querySelectorAll('.pricing-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.1 });

    pricingCards.forEach(card => observer.observe(card));
});
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
  });