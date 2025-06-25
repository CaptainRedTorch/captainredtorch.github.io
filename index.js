"use strict";

// Array of project data. Each object represents a project to be displayed.
const projects = [
    {
        id: 'proj-easyu',
        title: 'EasyU - Extension',
        description: 'Chrome extention for The Open University students, with 250+ users.',
        imageUrl: 'easyucompact.png',
        projectUrl: 'https://chromewebstore.google.com/detail/fnngffcjbcgnecomoaedkcagihkldebf?utm_source=portfolio',
        tags: ['Javascript', 'Web Scraping', 'Chrome API']
    },
    {
        id: 'proj-chessvision',
        title: 'Chessvision',
        description: 'Computer Vision and AI powered real-time Chess analyzer.',
        imageUrl: 'chessvision.png',
        projectUrl: 'https://github.com/captainredtorch/',
        tags: ['Python', 'AI/ML', 'Computer Vision','OpenCV']
    },
    {
        id: 'proj-chatserver',
        title: 'Chat Server',
        description: 'Multi-threaded Java server using TCP/IP sockets to manage multi-client chat room, developed for an Advanced Java course.',
        imageUrl: 'chatroom.png',
        projectUrl: 'https://github.com/CaptainRedTorch/Open-University-Course-Work/tree/main/20554%20Advanced%20Java/mmn16',
        tags: ['Java', 'Multithreading', 'TCP/IP','OOP']
    },
    {
        id: 'proj-assembler',
        title: 'Two-Pass Assembler',
        description: 'Two-Pass Assembler developed in C for a custom instruction set, developed for C-Lab course.',
        imageUrl: 'assemblercompact.png',
        projectUrl: 'https://github.com/CaptainRedTorch/Open-University-Course-Work/tree/main/20465%20mmn14',
        tags: ['C-Programming', 'Low-Level']
    },
    {
        id: 'proj-watermelon',
        title: 'Watermelon Game',
        description: 'Unity project recreating the watermelon game from scratch.',
        imageUrl: 'watermelon.png',
        projectUrl: 'https://github.com/CaptainRedTorch/WaterMelon-game',
        tags: ['C#', 'Unity', 'GameDev']
    },
    {
        id: 'proj-gamejam',
        title: 'Poop-Fall',
        description: 'Web browser supported game co-developed during a 2 week game jam, using Unity.',
        imageUrl: 'poop-fall.png',
        projectUrl: 'https://nnuurr3.itch.io/poop-fall',
        tags: ['C#', 'Unity', 'Team work']
    }
];
/**
 * Creates the header element for the portfolio.
 * Includes the site owner's icon, name, subtitle ("Portfolio"), and navigation links.
 * @returns {HTMLElement} The created header element.
 */
function createHeader() {
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
    iconImg.src = 'logoMe.png'; // USER: Replace with your actual icon image path
    iconImg.alt = 'CaptainRedtorch Icon'; // Descriptive alt text for accessibility
    iconImg.className = 'header-icon';
    iconLink.appendChild(iconImg);
    const titleSubtitleContainer = document.createElement('div');
    titleSubtitleContainer.className = 'title-subtitle-container';
    const mainTitle = document.createElement('h1');
    mainTitle.className = 'portfolio-main-title';
    mainTitle.textContent = "Hen Ben Dor";
    const subtitleText = document.createElement('p');
    subtitleText.className = 'portfolio-subtitle';
    subtitleText.textContent = "a collection of projects";
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
function createProjectCard(project) {
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
    project.tags.forEach((tagText) => {
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
function createProjectsSection() {
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
function createFooter() {
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
    linkedinLink.href = 'https://www.linkedin.com/in/hen-ben-dor'; // USER: Replace with your LinkedIn profile URL
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
    emailLink.href = 'mailto:henbendor.gmail.com'; // USER: Replace with your email address
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
function initializeMobileCardFocus() {
    // Check if the device likely supports hover (mouse) or is primarily touch-based.
    // '(hover: none)' targets devices where primary interaction is not hover.
    // '(pointer: coarse)' targets devices where the primary pointing mechanism is not precise (e.g., finger).
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length === 0)
            return;
        const observerOptions = {
            root: null, // Observe intersections relative to the viewport.
            rootMargin: '0px', // No margin around the viewport.
            threshold: 0.5 // Trigger when 50% of the card is visible.
        };
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-mobile-focused');
                }
                else {
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
function App() {
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
