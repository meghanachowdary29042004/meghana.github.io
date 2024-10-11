const timelineData = [
  
    {
        date: "2024",
        title: "Currently Pursuing B.Tech",
        description: "Currently pursuing my B.Tech at SRM University.",
        icon: "fa-calendar-alt"
    },
    {
        date: "2022",
        title: "Completed Intermediate Studies",
        description: "Finished intermediate studies at some college.",
        icon: "fa-calendar-alt"
    },
    {
        date: "2020",
        title: "Completed 10th Grade",
        description: "Completed my 10th grade at Narayana EM School.",
        icon: "fa-calendar-alt"
    },
];


const projects = [
    {
        title: "Project 1",
        description: "Description for Project 1",
        link: "https://example.com/project1",
        banner: "https://i.ytimg.com/vi/XNgqN_Vojcw/maxresdefault.jpg",
        icon: "fa-code" 
    },
    {
        title: "Project 2",
        description: "Description for Project 2",
        link: "https://example.com/project2",
        banner: "https://i.ytimg.com/vi/XNgqN_Vojcw/maxresdefault.jpg",
        icon: "fa-code"
    },
    {
        title: "Project 3",
        description: "Description for Project 3",
        link: "https://example.com/project3",
        banner: "https://i.ytimg.com/vi/XNgqN_Vojcw/maxresdefault.jpg",
        icon: "fa-code"
    },
    {
        title: "Project 4",
        description: "Description for Project 4",
        link: "https://example.com/project4",
        banner: "https://i.ytimg.com/vi/XNgqN_Vojcw/maxresdefault.jpg",
        icon: "fa-code"
    },
    {
        title: "Project 5",
        description: "Description for Project 5",
        link: "https://example.com/project5",
        banner: "https://i.ytimg.com/vi/XNgqN_Vojcw/maxresdefault.jpg",
        icon: "fa-code"
    }
];


let itemsToShow = 3;
let currentIndex = 0; 

const generateTimeline = (showAll = false) => {
    const timelineContainer = document.querySelector('.timeline-items');
    timelineContainer.innerHTML = ""; 

    
    const itemsToDisplay = showAll ? timelineData.length : currentIndex + itemsToShow;

    
    for (let i = 0; i < itemsToDisplay && i < timelineData.length; i++) {
        const item = timelineData[i];

        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');

        const dot = document.createElement('div');
        dot.classList.add('timeline-dot');
        timelineItem.appendChild(dot);

        const date = document.createElement('div');
        date.classList.add('timeline-date');
        date.innerHTML = `<i class="fas ${item.icon}"></i> ${item.date}`; 
        timelineItem.appendChild(date);

        const content = document.createElement('div');
        content.classList.add('timeline-content');

        const title = document.createElement('h3');
        title.innerHTML = `<i class="fas ${item.icon}"></i> ${item.title}`; 
        content.appendChild(title);

        const description = document.createElement('p');
        description.textContent = item.description;
        content.appendChild(description);

        timelineItem.appendChild(content);
        timelineContainer.appendChild(timelineItem);
    }

   
    currentIndex = itemsToDisplay;

  
    const showMoreBtn = document.querySelector('#show-more-btn');
    if (currentIndex >= timelineData.length) {
        showMoreBtn.style.display = 'none'; 
    } else {
        showMoreBtn.style.display = 'block'; 
    }
};


const showMoreTimeline = () => {
    generateTimeline();
};

window.onload = () => {
    generateTimeline();
};

document.querySelector('#show-more-btn').addEventListener('click', showMoreTimeline);


let visibleProjects = 3; 

function renderProjects() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; 
    const projectsToShow = projects.slice(0, visibleProjects);

    projectsToShow.forEach((project) => {
        const projectItem = document.createElement("div");
        projectItem.className = "project-item";
        projectItem.innerHTML = `
            <img src="${project.banner}" alt="${project.title}">
            <h3><i class="fas ${project.icon}"></i> ${project.title}</h3> <!-- Added icon to project title -->
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project <i class="fas fa-external-link-alt"></i></a> <!-- External link icon -->
        `;
        projectList.appendChild(projectItem);
    });

    const showMoreButton = document.getElementById("show-more");
    showMoreButton.style.display = visibleProjects >= projects.length ? "none" : "block";
}

function showMoreProjects() {
    visibleProjects += 3; 
    renderProjects();
}

document.getElementById("show-more").addEventListener("click", showMoreProjects);

renderProjects();

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdownmenu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};
