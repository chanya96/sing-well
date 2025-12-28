// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer setup
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe dream items
  const dreamItems = document.querySelectorAll('.dream-item');
  dreamItems.forEach(item => observer.observe(item));

  // Observe problem items
  const problemItems = document.querySelectorAll('.problem-item');
  problemItems.forEach(item => observer.observe(item));

  // Observe mechanism cards
  const mechanismCards = document.querySelectorAll('.mechanism-card');
  mechanismCards.forEach(card => observer.observe(card));

  // Observe outcome list items with animation delay
  const outcomeListItems = document.querySelectorAll('.outcome-list li');
  outcomeListItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Observe value items with animation delay
  const valueItems = document.querySelectorAll('.value-item');
  valueItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Observe comparison cards with animation delay
  const comparisonCards = document.querySelectorAll('.comparison-card');
  comparisonCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe for-list items with animation delay
  const forListItems = document.querySelectorAll('.for-list li');
  forListItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Observe FAQ items and add click handlers
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);

    const questionWrapper = item.querySelector('.faq-question-wrapper');
    if (questionWrapper) {
      questionWrapper.addEventListener('click', function() {
        item.classList.toggle('active');
      });
    }
  });

  // Observe choice items with animation delay
  const choiceItems = document.querySelectorAll('.choice-item');
  choiceItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
    observer.observe(item);
  });

  // Sticky CTA scroll handler
  const stickyCta = document.getElementById('sticky-cta');
  const heroSection = document.getElementById('hero');
  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0;

    if (scrollTop > heroBottom && scrollTop > lastScrollTop) {
      if (stickyCta) {
        stickyCta.classList.add('visible');
      }
    } else if (scrollTop < heroBottom) {
      if (stickyCta) {
        stickyCta.classList.remove('visible');
      }
    }

    lastScrollTop = scrollTop;
  };

  window.addEventListener('scroll', handleScroll);

  // Smooth scroll for CTA buttons
  const ctaButtons = document.querySelectorAll('a[href="#checkout"]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const checkoutSection = document.getElementById('checkout');
      if (checkoutSection) {
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Apply animation delay to floating cards
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.3}s`;
  });

  // Cleanup function (optional, for SPA scenarios)
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
  });
});
