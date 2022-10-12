'use strict'
console.log('Starting up');
$(document).ready(init)

function init() {
    renderPortfolioCards()
    renderModals()
    addEventListeners()
}

function renderPortfolioCards() {
    var projects = getProjects()
    var projectIdx = 1
    var strHtmls = projects.map(project => `
        <article class="col-md-4 col-sm-6 portfolio-item">
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
            </div>
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${projectIdx++}" style="background-image: url(img/portfolio/${project.id}.png);">
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

function renderModals() {
    var projects = getProjects()
    var projectIdx = 1
    var strHtmls = projects.map(project => `
    <!-- Modal ${projectIdx} -->
    <div class="portfolio-modal modal fade" id="portfolioModal${projectIdx++}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">${project.title}</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt="${project.name}">
                  <a target="_blank" href="${project.url}" class="project-link">Lets Play!</a>
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                    blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                    cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <li>Date: ${getDate(project.publishedAt)}</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    )
    $('.portfolio-modals').html(strHtmls)
}

function addEventListeners(){
    $('.contact-me button').on('click', onContactMe)
}

function onContactMe(){
    const userEmail = $('.contact-me .email').val()
    const messageSubject = $('.contact-me .subject').val()
    const messageBody = $('.contact-me .message-body').val()

    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=${messageSubject}&body=${messageBody}`

    window.open(emailUrl, '_blank');

}
