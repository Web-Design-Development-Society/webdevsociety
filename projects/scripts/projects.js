
import { renderHeader } from "/webdevsociety/scripts/header.mjs";

const previous_projects = [
    {
        title: "",
        urls: [],
        timeframe: "",
        desc: "",
        img: "",
        alt: "",
        contributers: [],
    },
    {
        title: "Brother Shoaf's Site",
        urls: ["https://amhart02.github.io/musicportfolio/"],
        timeframe: "September 2024 - April 2025",
        desc: "Brother Shoaf is a music professor who we helped build a site for, showing off his projects, gallery, and other things",
        img: "/webdevsociety/images/project_images/musicportfolio.png",
        alt: "Brother Shoaf's music portfolio",
        contributers: ["Alayna Hart", "Ricky Vang"] // ADD MORE CONTRIBUTERS 
    },
    {
        title: "Halloween Websites",
        urls: ["https://alexanderdombroski.github.io/halloween/","https://gagedorl.github.io/halloweensite/index.html"], // ADD OTHER HALLOWEEN SITE Links
        timeframe: "October 2024",
        desc: "Halloween Sites were created in preparation for halloween and to show to the high schoolers in Rexburg",
        img: "/webdevsociety/images/project_images/halloween-sites.jpg",
        alt: "showing off halloween sites in high school",
        contributers: ["Alex Dombroski", "Ellie Talbot", "Amitai Finlayson"], // ADD OTHER SITE CONTRIBUTERS
    }
];
const next_projects = [
    {
        title: "Society Page",
        desc: "We will finish the society page, and add projects and members as semesters go on.",
        timeframe: "Sept 2024 - ongoing"
    }
];





(function loadPage() {
    renderHeader();
    document.querySelector('.upcoming-projects').innerHTML = nextSectionTemplate();
    document.querySelector('.previous-projects').innerHTML = prevSectionTemplate();

})();

(function initListeners() {

})();



function nextSectionTemplate() {
    return `
        <h2>Upcoming Projects</h2>
        ${next_projects.map(nextProjectTemplate).join('')}
    `;
}
function nextProjectTemplate(project) {
    const timeframe = project.timeframe ? `<p>${project.timeframe}</p>` : "";
    return `
        <article>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            ${timeframe}
        </article>
    `;
}
function prevSectionTemplate() {
    return `
        <h2>Past Projects</h2>
        ${previous_projects.map(prevProjectTemplate).join('')}
    `;
}
function prevProjectTemplate(project) {
    return `
        <article>
            <div>
                <h3>${project.title}</h3>
                <ul>
                    ${project.urls.map(url =>`<li><a href="${url}">${url}</a></li>`).join('')}
                </ul>
                <p>${project.timeframe}</p>
                <p>${project.contributers.join(", ")}</p>
                <p>${project.desc}</p>
            </div>
            ${project.img ? `<img src="${project.img}" alt="${project.alt}" />` : ""}
        </article>
    `;
}
