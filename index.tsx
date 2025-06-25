/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Define an interface for the structure of a project object.
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

// Array of project data. Each object represents a project to be displayed.
const projects: Project[] = [
  {
    id: 'proj-alpha',
    title: 'Project Alpha',
    description: 'A revolutionary app for managing daily tasks with AI-powered suggestions. Built with React and Node.js.',
    imageUrl: 'https://placehold.co/600x400/112240/CCD6F6/png?text=Project+Alpha&font=montserrat',
    projectUrl: 'https://github.com/captainredtorch/project-alpha',
    tags: ['React', 'Node.js', 'AI']
  },
  {
    id: 'proj-beta',
    title: 'Beta Platform',
    description: 'A collaborative platform for designers and developers to share and iterate on UI/UX mockups.',
    imageUrl: 'https://placehold.co/600x400/112240/CCD6F6/png?text=Beta+Platform&font=montserrat',
    projectUrl: 'https://github.com/captainredtorch/beta-platform',
    tags: ['Vue.js', 'Firebase', 'UX/UI']
  },
  {
    id: 'proj-gamma',
    title: 'Gamma Game Engine',
    description: 'A lightweight 2D game engine built from scratch using C++ and SDL for high performance.',
    imageUrl: 'https://placehold.co/600x400/112240/CCD6F6/png?text=Gamma+Engine&font=montserrat',
    projectUrl: 'https://github.com/captainredtorch/gamma-engine',
    tags: ['C++', 'GameDev', 'SDL']
  },
  {
    id: 'proj-portfolio',
    title: 'Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects. Built with modern web technologies.',
    imageUrl: 'https://placehold.co/600x400/112240/CCD6F6/png?text=My+Portfolio&font=montserrat',
    projectUrl: 'https://github.com/captainredtorch/captainredtorch.github.io',
    tags: ['HTML', 'CSS', 'JavaScript']
  }
];

/**
 * Creates the header element for the portfolio.
 * Includes the site owner's icon, name, subtitle ("Portfolio"), and navigation links.
 * @returns {HTMLElement} The created header element.
 */
function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'portfolio-header';

  const headerContent = document.createElement('div');
  headerContent.className = 'header-content';

  // Left section: Icon and Title/Subtitle
  const leftSection = document.createElement('div');
  leftSection.className = 'header-left';

  const iconLink = document.createElement('a');
  iconLink.href = '#'; // Links to the top of the page
  iconLink.setAttribute('aria-label', 'Homepage');
  const iconImg = document.createElement('img');
  iconImg.src = 'your-icon.png'; // USER: Replace with your actual icon image path
  iconImg.alt = 'CaptainRedtorch Icon'; // Descriptive alt text for accessibility
  iconImg.className = 'header-icon';
  iconLink.appendChild(iconImg);

  const titleSubtitleContainer = document.createElement('div');
  titleSubtitleContainer.className = 'title-subtitle-container';

  const mainTitle = document.createElement('h1');
  mainTitle.className = 'portfolio-main-title';
  mainTitle.textContent = "CaptainRedtorch";

  const subtitleText = document.createElement('p');
  subtitleText.className = 'portfolio-subtitle';
  subtitleText.textContent = "Portfolio"; 

  titleSubtitleContainer.appendChild(mainTitle);
  titleSubtitleContainer.appendChild(subtitleText);

  leftSection.appendChild(iconLink);
  leftSection.appendChild(titleSubtitleContainer);

  // Right section: Navigation
  const nav = document.createElement('nav');
  nav.className = 'header-nav';
  const aboutLink = document.createElement('a');
  aboutLink.href = "#about"; // Placeholder link for "About" section/page
  aboutLink.textContent = "About";
  
  nav.appendChild(aboutLink);

  headerContent.appendChild(leftSection);
  headerContent.appendChild(nav);
  header.appendChild(headerContent);
  
  return header;
}

/**
 * Creates a project card element.
 * Each card displays project details like image, title, description, tags, and a link.
 * @param {Project} project - The project data object.
 * @returns {HTMLElement} The created project card element.
 */
function createProjectCard(project: Project): HTMLElement {
  const card = document.createElement('article');
  card.className = 'project-card';
  // ARIA attributes link the card to its title and description for accessibility.
  card.setAttribute('aria-labelledby', `${project.id}-title`);
  card.setAttribute('aria-describedby', `${project.id}-desc`);

  // Clickable image linking to the project
  const imageLink = document.createElement('a');
  imageLink.href = project.projectUrl;
  imageLink.target = '_blank'; // Open in new tab
  imageLink.rel = 'noopener noreferrer'; // Security best practice for target="_blank"
  imageLink.className = 'project-image-link';
  imageLink.setAttribute('aria-label', `View details for ${project.title}`);

  const image = document.createElement('img');
  image.src = project.imageUrl;
  image.alt = `${project.title} screenshot`; // Descriptive alt text
  image.className = 'project-image';
  image.loading = 'lazy'; // Lazy load images for better performance
  imageLink.appendChild(image);

  // Content section of the card (title, description, tags, link)
  const content = document.createElement('div');
  content.className = 'project-content';

  const title = document.createElement('h3');
  title.id = `${project.id}-title`; // ID for ARIA linking
  title.className = 'project-title';
  title.textContent = project.title;

  // Wrapper for the description to manage its animation and layout
  const descriptionWrapper = document.createElement('div');
  descriptionWrapper.className = 'description-wrapper';
  const description = document.createElement('p');
  description.id = `${project.id}-desc`; // ID for ARIA linking
  description.className = 'project-description';
  description.textContent = project.description;
  descriptionWrapper.appendChild(description);

  // Wrapper for tags and project link button, for bottom anchoring
  const actionsWrapper = document.createElement('div');
  actionsWrapper.className = 'actions-wrapper';

  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'project-tags';
  project.tags.forEach((tagText: string) => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = tagText;
    tagsContainer.appendChild(tag);
  });
  
  const linkButton = document.createElement('a');
  linkButton.href = project.projectUrl;
  linkButton.target = '_blank';
  linkButton.rel = 'noopener noreferrer';
  linkButton.className = 'project-link';
  linkButton.textContent = 'View Project';
  linkButton.setAttribute('aria-label', `View ${project.title} project`);

  actionsWrapper.appendChild(tagsContainer);
  actionsWrapper.appendChild(linkButton);
  
  content.appendChild(title);
  content.appendChild(descriptionWrapper);
  content.appendChild(actionsWrapper);
  
  card.appendChild(imageLink);
  card.appendChild(content);

  return card;
}

/**
 * Creates the main section to display all project cards.
 * @returns {HTMLElement} The created projects section element.
 */
function createProjectsSection(): HTMLElement {
  const section = document.createElement('main');
  section.className = 'projects-section';
  section.setAttribute('aria-label', 'My Projects'); // Main content landmark

  const grid = document.createElement('div');
  grid.className = 'projects-grid';
  
  projects.forEach(project => {
    const card = createProjectCard(project);
    grid.appendChild(card);
  });
  
  section.appendChild(grid);
  return section;
}

/**
 * Creates the footer element for the portfolio.
 * Includes copyright information and social media links.
 * @returns {HTMLElement} The created footer element.
 */
function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'portfolio-footer';

  const footerInnerContainer = document.createElement('div');
  footerInnerContainer.className = 'footer-inner-container';
  
  // Copyright notice
  const copyrightText = document.createElement('p');
  copyrightText.className = 'footer-copyright';
  const currentYear = new Date().getFullYear();
  copyrightText.innerHTML = `&copy; ${currentYear} CaptainRedtorch. All rights reserved. <br> Hosted on <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.`;
  
  // Social media links
  const socialLinksContainer = document.createElement('div');
  socialLinksContainer.className = 'footer-social-links';

  // LinkedIn
  const linkedinLink = document.createElement('a');
  linkedinLink.href = 'https://www.linkedin.com/in/your-profile-name'; // USER: Replace with your LinkedIn profile URL
  linkedinLink.target = '_blank';
  linkedinLink.rel = 'noopener noreferrer';
  linkedinLink.setAttribute('aria-label', 'CaptainRedtorch on LinkedIn');
  const linkedinIcon = document.createElement('img');
  linkedinIcon.src = 'linkedin-logo.svg'; // USER: Replace with your LinkedIn logo image path
  linkedinIcon.alt = ''; // Decorative icon, label is on the link
  linkedinIcon.className = 'footer-social-icon';
  const linkedinText = document.createElement('span');
  linkedinText.textContent = 'LinkedIn';
  linkedinLink.appendChild(linkedinIcon);
  linkedinLink.appendChild(linkedinText);

  // GitHub
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/captainredtorch'; // USER: Replace with your GitHub profile URL
  githubLink.target = '_blank';
  githubLink.rel = 'noopener noreferrer';
  githubLink.setAttribute('aria-label', 'CaptainRedtorch on GitHub');
  const githubIcon = document.createElement('img');
  githubIcon.src = 'github-logo.svg'; // USER: Replace with your GitHub logo image path
  githubIcon.alt = ''; // Decorative icon
  githubIcon.className = 'footer-social-icon';
  const githubText = document.createElement('span');
  githubText.textContent = 'GitHub';
  githubLink.appendChild(githubIcon);
  githubLink.appendChild(githubText);
  
  // Email
  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:your.email@example.com'; // USER: Replace with your email address
  emailLink.setAttribute('aria-label', 'Contact CaptainRedtorch via Email');
  const emailIcon = document.createElement('img');
  emailIcon.src = 'email-logo.svg'; // USER: Replace with your email logo image path
  emailIcon.alt = ''; // Decorative icon
  emailIcon.className = 'footer-social-icon';
  const emailText = document.createElement('span');
  emailText.textContent = 'Email';
  emailLink.appendChild(emailIcon);
  emailLink.appendChild(emailText);

  socialLinksContainer.appendChild(linkedinLink);
  socialLinksContainer.appendChild(githubLink);
  socialLinksContainer.appendChild(emailLink);
  
  footerInnerContainer.appendChild(copyrightText);
  footerInnerContainer.appendChild(socialLinksContainer);
  footer.appendChild(footerInnerContainer);

  return footer;
}

/**
 * Initializes a hover-like effect for project cards on touch devices.
 * Uses IntersectionObserver to add a 'is-mobile-focused' class when a card
 * is significantly visible in the viewport, triggering hover styles.
 */
function initializeMobileCardFocus(): void {
  // Check if the device likely supports hover (mouse) or is primarily touch-based.
  // '(hover: none)' targets devices where primary interaction is not hover.
  // '(pointer: coarse)' targets devices where the primary pointing mechanism is not precise (e.g., finger).
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length === 0) return;

    const observerOptions: IntersectionObserverInit = {
      root: null, // Observe intersections relative to the viewport.
      rootMargin: '0px', // No margin around the viewport.
      threshold: 0.5 // Trigger when 50% of the card is visible.
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-mobile-focused');
        } else {
          entry.target.classList.remove('is-mobile-focused');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    projectCards.forEach(card => observer.observe(card));
  }
}

/**
 * Main application function.
 * Initializes the portfolio by creating and appending header, projects section, and footer
 * to the main app container. Also initializes mobile card focus behavior.
 */
function App(): void {
  const appContainer = document.getElementById('app');
  if (!appContainer) {
    console.error('App container not found! Cannot render portfolio.');
    return;
  }
  
  // Clear any existing content (e.g., if re-running for development)
  appContainer.innerHTML = ''; 
  
  // Build and append page sections
  appContainer.appendChild(createHeader());
  appContainer.appendChild(createProjectsSection());
  appContainer.appendChild(createFooter());

  // Enhance card interaction on mobile devices
  initializeMobileCardFocus(); 
}

// Initialize the application once the DOM is ready
App();
