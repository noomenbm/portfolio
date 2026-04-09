const projectGrid = document.querySelector(".project-grid");
const noResultsMessage = document.querySelector(".no-results");
const searchInput = document.querySelector("#project-search");
const projectsDataURL = "https://noomenbm.github.io/humber-SDBP038-project_1/data/projects.json";

let projects = [];

function renderProjects(projectsToRender) {
    let toRender = ``;
    if (!Array.isArray(projectsToRender)) {
        console.log("Projects not found");
        return;
    }
    projectsToRender.forEach((project) => {
        toRender += `
        <article class="project-card">
            <div class="project-card-media">
            <img class="project-card-image" src="${project.imageURL}" alt="${project.alt}">
            <p class="project-badge">${project.category}</p>
            </div>

            <div class="project-card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a class="project-button" href="${project.link}" target="_blank">View Project</a>
            </div>
        </article>
        `;
    });
    projectGrid.innerHTML = toRender;
}

function getProjectsForCurrentPage(projectList) {
    if (document.querySelector(".featured-projects")) {
        return projectList.filter((project) => project.featured);
    }
    return projectList;
}

function renderProjectsForCurrentPage(projectList) {
    const projectsToRender = getProjectsForCurrentPage(projectList);
    if (projectsToRender.length === 0) {
        projectGrid.innerHTML = "";
        noResultsMessage.hidden = false;
        return;
    }
    noResultsMessage.hidden = true;
    renderProjects(projectsToRender);
}

function findProject(searchWord, projectList) {
  return projectList.filter((project) => {
    const search = searchWord.toLowerCase();
    return (
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.category.toLowerCase().includes(search)
    );
  });
}

async function loadProjects() {
    try {
        const response = await fetch(projectsDataURL);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        projects = await response.json();
        renderProjectsForCurrentPage(projects);
    } catch (error) {
        projectGrid.innerHTML = "";
        noResultsMessage.textContent = "Unable to load projects list!";
        noResultsMessage.hidden = false;
        console.error("Failed to load projects:", error);
    }
}

searchInput.addEventListener("input", (event) => {
    const matches = findProject(event.target.value, projects);
    renderProjectsForCurrentPage(matches);
});

projectGrid.innerHTML = "";
noResultsMessage.hidden = true;
loadProjects();
