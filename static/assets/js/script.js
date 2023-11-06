function loadBackgroundImage() {
  const urls = [
    "/assets/images/low_guadalupe_river.jpg",
    "/assets/images/mid_guadalupe_river.jpg",
    "/assets/images/guadalupe_river.jpg"
  ];

  const loader = new ProgressiveLoader(urls, (url, index) => {
    const divClass = 'body-bg-image' + (index === 0 ? ' first' : '');
    const div = $(`<div class="${divClass}">`);

    div.css('background-image', `url(${url})`);

    $('body').append(div);

    setTimeout(() => { div.css('opacity', '100%'); }, 100);
  });

  loader.load();
}

async function animateTitle() {
  let title = "<ELMFER Dev Blog/>";

  if(sessionStorage.getItem('titleHasAnimated')) {
    $('#title').text(title);
    $('#title').addClass('glowing-text');
    return;
  }

  let titleToDisplay = "";

  await sleep(500);

  while(title.length > 0) {
    const letter = title[0];
    title = title.substring(1);
    titleToDisplay += letter;
    $('#title').text(titleToDisplay + '|');

    if(letter === ' ') await sleep(100 + randInt(100));
    else await sleep(70 + randInt(80));
  }

  await sleep(300);
  $('#title').text(titleToDisplay);
  $('#title').addClass('glowing-text');
  sessionStorage.setItem('titleHasAnimated', true);
}

function init() {
  loadBackgroundImage();
  animateTitle();
}

init();