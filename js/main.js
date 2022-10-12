'use strict'
console.log('Starting up');
$(document).ready(init)

function init() {
    renderPortfolioCards()
}

function renderPortfolioCards() {
    var projects = getProjects()
    console.log(`projects:`, projects)
    var strHtmls = projects.map(project => `
        <article class="col-md-4 col-sm-6 portfolio-item">
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
            </div>
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" style="background-image: url(img/portfolio/${project.id}.png);">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
            </a>
        </article>
        `
    )
    $('.projects-container').html(strHtmls)
}
