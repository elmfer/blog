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

async function animateTitle(subtitle) {
  let timeFactor = subtitle ? 0.5 : 1;
  let title = "<ELMFER Dev Blog/>" + (subtitle ? "\n" + subtitle : "");
  const pageKey = subtitle ? `[\"${subtitle}\"]` : "[\"home\"]";

  if(sessionStorage.getItem('titleHasAnimated' + pageKey)) {
    $('#title').text(title);
    $('#title').addClass('glowing-text');
    return;
  }

  let titleToDisplay = "";

  await sleep(500);

  while(title.length > 0) {
    const letter = title[0];

    if(letter === ' ') await sleep(timeFactor * (200 + randInt(100)));
    else if(letter === '\n') {
      await sleep(timeFactor * (400 + randInt(200)));
      timeFactor = 1;
    }
    else await sleep(timeFactor * (70 + randInt(80)));

    title = title.substring(1);
    titleToDisplay += letter;
    $('#title').text(titleToDisplay + '|');
  }

  await sleep(300);
  $('#title').text(titleToDisplay);
  $('#title').addClass('glowing-text');
  sessionStorage.setItem('titleHasAnimated' + pageKey, true);
}

function init() {
  loadBackgroundImage();
  animateTitle($('#title').data('subtitle'));
}

init();