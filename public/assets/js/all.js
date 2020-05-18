// code that runs when document is ready
$(document).ready(function () {

  // activates nav bar to be functional
  let burger = document.querySelector('.navbar-burger');
  let menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // grabbing element from all.html
  let all = $('#all-games');

  // get call to retrieve all data from games database
  $.get('/api/all', (data) => {
    for (let i = 0; i < data.length; i++) {
      // template literal for printing data to page
      let collapsible = `<ul class="collapsible popout">
    <li>
        <div class="collapsible-header">${data[i].title}</div>
        <div class="collapsible-body"><span>
        <h4>Category: ${data[i].category}</h4>
        <h4>Country of Origin: ${data[i].country_origin}</h4>
        </span>
        </div>
    </li>
    <li>
        <div class="collapsible-header">Description:</div>
        <div class="collapsible-body"><span>${data[i].description}</span>
        </div>
    </li>
    <li>
        <div class="collapsible-header">Rules:</div>
        <div class="collapsible-body"><span>${data[i].instructions}</span>
        </div>
    </li>
</ul>`;
      $(all).append(collapsible);
      $('.collapsible').collapsible();
    };
  });
});