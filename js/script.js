import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const getGitHubProjects = async () => {
    const octokit = new Octokit();

    const { data } = await octokit.rest.repos.listForUser({
        username: "ErmoGarcia",
        sort: "created"
    });

    const portfolio = document.getElementById("portfolio")

    const projects = document.createElement("ul")
    projects.className = "projects"

    data.forEach(element => {
        const projects_item = document.createElement("li")
        projects_item.className = "projects-item"

        const {html_url, name} = element
        projects_item.innerHTML = `
            <a href="`+html_url+`"></a>
            <img src="../assets/example.svg">
            <p>`+name+`</p>
        `

        projects.appendChild(projects_item)
    })
    portfolio.appendChild(projects)
}

getGitHubProjects()