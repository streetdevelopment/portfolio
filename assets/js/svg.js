const closeBtn = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const navBtns = Array.from(document.getElementsByClassName('nav-btn'));

function showModal() {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
    }, 10);
}

closeBtn.addEventListener('click', function () {
    modal.style.left = '-50%';
    modal.style.transform = 'translate(-50%, -50%)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

navBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        showModal();
    });
});

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
        showModal();
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
        showModal();
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
        showModal();
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
        showModal();
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
        showModal();
    });
});
