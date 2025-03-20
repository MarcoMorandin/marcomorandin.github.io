function updateActiveLink() {
  const hash = window.location.hash || '#home';
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const isActive = link.getAttribute('href') === hash;
    link.classList.toggle('translate-x-3', isActive);
    link.classList.toggle('text-white', isActive);
    link.classList.toggle('font-semibold', isActive);
    const chevron = link.previousElementSibling;
    chevron.classList.toggle('opacity-100', isActive);
    chevron.classList.toggle('translate-x-0', isActive);
    chevron.classList.toggle('text-white', isActive);
    chevron.classList.toggle('font-semibold', isActive);
    chevron.classList.toggle('translate-x-5', !isActive);
    chevron.classList.toggle('opacity-0', !isActive);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    if (!main) return;
  
    // Get all section elements inside <main>
    const sections = main.querySelectorAll('section');
    const options = {
      root: main, // Use <main> as the scroll container
      rootMargin: '0px', // No extra margin
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
  
    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          history.replaceState(null, null, `#${id}`); // Update URL hash
          updateActiveLink(); // Update sidebar styles
        }
      });
    }, options);
  
    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Handle initial page load
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.slice(1); // Remove the '#'
      const targetSection = main.querySelector(`#${targetId}`);
      updateActiveLink(); // Update sidebar styles
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const firstSection = sections[0];
      if (firstSection) {
        history.replaceState(null, null, `#${firstSection.id}`); // Default to first section
      }
    }

    // Open modal when clicking a project title
  document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function () {
      const projectId = this.parentElement.getAttribute('data-project'); // e.g., "project1"
      const modal = document.getElementById(`modal-${projectId}`);
      if (modal) {
        modal.classList.remove('hidden');
        document.querySelector('footer').classList.add('hidden');
      }
    });
  });

  // Close modal when clicking the close button
  document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function () {
      const modal = this.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
        document.querySelector('footer').classList.remove('hidden');
      }
    });
  });

  // Close modal when clicking outside (backdrop)
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.querySelector('footer').classList.remove('hidden');
      }
    });
  });
  });
