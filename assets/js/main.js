const closeBtn = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const navBtns = Array.from(document.getElementsByClassName('nav-btn'));
const modalContent = document.getElementById('modal-content-container')

function showProject(project_id) {
    modal.style.left = '-50%';
    modal.style.transform = 'translate(-50%, -50%)';
    setTimeout(() => {
        modal.style.display = 'none';
        setTimeout(() => {
            showModal('project_details', project_id)
        }, 150)
    }, 150);
}

function lightCloseBtn(state) {
    state ? closeBtn.style.fill = '#f5f5f5' : closeBtn.style.fill = '#0B132B'
}

function showModal(code, project_id = null) {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
    }, 10);
    switch (code) {
        case 'project_details':
            fetch('/modals/project_details.html')
                .then(response => response.text())
                .then(html => {
                    modalContent.innerHTML = html;
                    modalTop = modal.querySelector('#modal-top');
                    modalTop.scrollIntoView({ behavior: 'smooth' });
                    attachListeners(code)
                })
                .catch(error => console.error('Error loading HTML:', error));
            setTimeout(() => {
                const projectDetailsContainer = document.getElementById('section-group-container')

                switch (project_id) {
                    case 'webmina':
                        fetch('/modals/project_details/webmina.html')
                            .then(response => response.text())
                            .then(html => {
                                projectDetailsContainer.innerHTML = html;
                                attachListeners(project_id)
                                lightCloseBtn(false)
                            })
                            .catch(error => console.error('Error loading HTML:', error));
                        break;
                }
            }, 500)
            break;
        case 'about':
            fetch('/modals/about.html')
                .then(response => response.text())
                .then(html => {
                    modalContent.innerHTML = html;
                    modalTop = modal.querySelector('.hero');
                    modalTop.scrollIntoView({ behavior: 'smooth' });
                    attachListeners(code)
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;
        case 'projects':
            fetch('/modals/projects.html')
                .then(response => response.text())
                .then(html => {
                    modalContent.innerHTML = html;
                    modalTop = modal.querySelector('.projects-hero');
                    modalTop.scrollIntoView({ behavior: 'smooth' });
                    attachListeners('projects')
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;
        case 'services':
            fetch('/modals/services.html')
                .then(response => response.text())
                .then(html => {
                    modalContent.innerHTML = html;
                    modalTop = modal.querySelector('.hero');
                    modalTop.scrollIntoView({ behavior: 'smooth' });
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;
        case 'contacts':
            fetch('/modals/contacts.html')
                .then(response => response.text())
                .then(html => {
                    modalContent.innerHTML = html;
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;
        case 'blogs':
            fetch('/modals/blogs.html')
                .then(response => response.text())
                .then(html => {
                    modalContent.innerHTML = html;
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;
    }
}

closeBtn.addEventListener('click', function () {
    modal.style.left = '-50%';
    modal.style.transform = 'translate(-50%, -50%)';
    setTimeout(() => {
        modal.style.display = 'none';
        lightCloseBtn(true)
    }, 300);
});

navBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var code = btn.getAttribute('target')
        showModal(code);
    });
});

// Modals

function attachListeners(section) {
    switch (section) {
        case 'about':
            const aboutHeroText = document.querySelector('#about-hero-text')
            const aboutHeroImg = document.querySelector('#about-hero-image')
            aboutHeroImg.addEventListener('mouseenter', function () {
                aboutHeroText.innerText = "I'm Sam!"
            })
            aboutHeroImg.addEventListener('mouseleave', function () {
                aboutHeroText.innerText = 'Hello World!'
            })
            break;
        case 'projects':
            const viewProjectBtns = document.querySelectorAll('.view-project-btn');
            viewProjectBtns.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    showProject(btn.getAttribute('id'));
                });
            });
            const scrollDownToSeeProjects = document.getElementById('scroll-down-to-see-projects')
            scrollDownToSeeProjects.addEventListener('click', function () {
                const modalProjectsGrid = document.querySelector('.projects-grid')
                modalProjectsGrid.scrollIntoView({ behavior: 'smooth' })
            })
            break;
        case 'webmina':
            const featuresGrid = document.querySelectorAll('.feature-grid-item');
            featuresGrid.forEach(function (el) {
                el.addEventListener('click', function () {
                    const isActive = el.getAttribute('status') === 'active';
                    if (!isActive) {
                        const otherElement = document.querySelector('.feature-grid-item[status="active"]');
                        if (otherElement) {
                            otherElement.classList.remove('active');
                            otherElement.setAttribute('status', 'inactive');
                        }
                        el.classList.add('active');
                        el.setAttribute('status', 'active');
                    }
                });
            });
            const backToTopBtn = document.getElementsByClassName('btp')[0]
            const closeProjectsBtn = document.getElementsByClassName('cb')[0]
            backToTopBtn.addEventListener('click', function () {
                modalTop = modal.querySelector('#modal-top');
                modalTop.scrollIntoView({ behavior: 'smooth' });
            })
            closeProjectsBtn.addEventListener('click', function () {
                const clickEvent = new Event('click');
                closeBtn.dispatchEvent(clickEvent);
            })
            break;
    }
}

// End of Modals

const svgObject = document.getElementById('streetcity');
svgObject.addEventListener('load', function () {
    const streetCity = svgObject.contentDocument;
    const aboutSection = streetCity.getElementById('about-section-container');
    const aboutLabel = streetCity.getElementById('about-section-label');
    aboutSection.addEventListener('mouseenter', function () {
        aboutLabel.style.opacity = '1';
        aboutLabel.style.visibility = 'visible';
    });
    aboutLabel.addEventListener('mouseenter', function () {
        aboutLabel.style.opacity = '1';
        aboutLabel.style.visibility = 'visible';
    });
    aboutSection.addEventListener('mouseleave', function () {
        aboutLabel.style.opacity = '0';
        aboutLabel.style.visibility = 'hidden';
    });
    aboutLabel.addEventListener('mouseleave', function () {
        aboutLabel.style.opacity = '0';
        aboutLabel.style.visibility = 'hidden';
    });
    aboutLabel.addEventListener('click', function () {
        showModal('about');
    });

    const servicesSection = streetCity.getElementById('services-section-container');
    const servicesLabel = streetCity.getElementById('services-section-label');
    servicesSection.addEventListener('mouseenter', function () {
        servicesLabel.style.opacity = '1';
        servicesLabel.style.visibility = 'visible';
    });
    servicesLabel.addEventListener('mouseenter', function () {
        servicesLabel.style.opacity = '1';
        servicesLabel.style.visibility = 'visible';
    });
    servicesSection.addEventListener('mouseleave', function () {
        servicesLabel.style.opacity = '0';
        servicesLabel.style.visibility = 'hidden';
    });
    servicesLabel.addEventListener('mouseleave', function () {
        servicesLabel.style.opacity = '0';
        servicesLabel.style.visibility = 'hidden';
    });
    servicesLabel.addEventListener('click', function () {
        showModal('services');
    });

    const projectsSection = streetCity.getElementById('projects-section-container');
    const projectsLabel = streetCity.getElementById('projects-section-label');
    projectsSection.addEventListener('mouseenter', function () {
        projectsLabel.style.opacity = '1';
        projectsLabel.style.visibility = 'visible';
    });
    projectsLabel.addEventListener('mouseenter', function () {
        projectsLabel.style.opacity = '1';
        projectsLabel.style.visibility = 'visible';
    });
    projectsSection.addEventListener('mouseleave', function () {
        projectsLabel.style.opacity = '0';
        projectsLabel.style.visibility = 'hidden';
    });
    projectsLabel.addEventListener('mouseleave', function () {
        projectsLabel.style.opacity = '0';
        projectsLabel.style.visibility = 'hidden';
    });
    projectsLabel.addEventListener('click', function () {
        showModal('projects');
    });

    const contactsSection = streetCity.getElementById('contacts-section-container');
    const contactsLabel = streetCity.getElementById('contacts-section-label');
    contactsSection.addEventListener('mouseenter', function () {
        contactsLabel.style.opacity = '1';
        contactsLabel.style.visibility = 'visible';
    });
    contactsLabel.addEventListener('mouseenter', function () {
        contactsLabel.style.opacity = '1';
        contactsLabel.style.visibility = 'visible';
    });
    contactsSection.addEventListener('mouseleave', function () {
        contactsLabel.style.opacity = '0';
        contactsLabel.style.visibility = 'hidden';
    });
    contactsLabel.addEventListener('mouseleave', function () {
        contactsLabel.style.opacity = '0';
        contactsLabel.style.visibility = 'hidden';
    });
    contactsLabel.addEventListener('click', function () {
        showModal('contacts');
    });

    const blogsSection = streetCity.getElementById('blogs-section-container');
    const blogsLabel = streetCity.getElementById('blogs-section-label');
    blogsSection.addEventListener('mouseenter', function () {
        blogsLabel.style.opacity = '1';
        blogsLabel.style.visibility = 'visible';
    });
    blogsLabel.addEventListener('mouseenter', function () {
        blogsLabel.style.opacity = '1';
        blogsLabel.style.visibility = 'visible';
    });
    blogsSection.addEventListener('mouseleave', function () {
        blogsLabel.style.opacity = '0';
        blogsLabel.style.visibility = 'hidden';
    });
    blogsLabel.addEventListener('mouseleave', function () {
        blogsLabel.style.opacity = '0';
        blogsLabel.style.visibility = 'hidden';
    });
    blogsLabel.addEventListener('click', function () {
        showModal('blogs');
    });
});