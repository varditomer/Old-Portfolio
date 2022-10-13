'use strict'
console.log('Starting up');
$(document).ready(init)

function init() {
    renderPortfolioCards()
    addEventListeners()
}

function renderPortfolioCards() {
    var projects = getProjects()
    var strHtmls = projects.map((project, idx) => `
        <article class="col-md-4 col-sm-6 portfolio-item">
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
            </div>
            <a onclick="onOpenModal(${idx})" class="portfolio-link" data-toggle="modal" href="#portfolioModal" style="background-image: url(img/portfolio/${project.id}.png);">
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

function onOpenModal(projectIdx) {
  var projects = getProjects()
  var project = projects[projectIdx]
  $('.modal-body h2').text(project.name)
  $('.modal-body .item-intro').text(project.title)
  const $elImg = $('.modal-body img')
  $elImg.prop('src', `img/portfolio/${project.id}.png`)
  $elImg.prop('alt', `image-${project.id}`)
  $('.modal-body a').prop('href', `${project.url}`)
  $('.modal-body .list-inline .date span').text(getDate(project.publishedAt))

}

function addEventListeners(){
    $('.contact-me button').on('click', onContactMe)
}

function onContactMe(){
    
    const userEmail = $('.contact-me .email').val()
    const messageSubject = $('.contact-me .subject').val()
    const messageBody = $('.contact-me .message-body').val()

    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tomer.vardi@gmail.com&su=${messageSubject}&body=${messageBody}`

    window.open(emailUrl, '_blank')

    openCanvas()
}