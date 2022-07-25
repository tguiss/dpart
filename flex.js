let viewmode = 'none',
  imgnum,
  imgamt = -1;

  for (var i = 0; i < img.length; i++) {
    for (var j = 1; j <= img[i].amount; j++) {
      imgamt++;
    }
  }

function image(number) {
  carouselmove = 0;
  if (viewmode === 'img') {
		if (imgnum != number) {
    imgnum = number;

    for (var i = 0; i < img.length; i++) {
      number -= img[i].amount;
      if (number < 0) {
        var j = 'content' + parseInt(number + img[i].amount + 1);
        if (document.querySelector('#imgheader > h3 > i').innerHTML != img[i].name) {
          document.querySelector('#imgheader > h3 > i').style.opacity = 0;
        }

        document.getElementById('image').style.opacity = 0;
        setTimeout(function() {
          document.querySelector('#imgheader > h3 > i').innerHTML = img[i].name;
          document.querySelector('#imgheader > h3 > i').style.opacity = 1;
          if (img[i].type == 'i') {
            document.getElementById('image').innerHTML = "<img src='" + img[i]['content' + parseInt(number + img[i].amount + 1)] + "' onclick='' />";
          }
          if (img[i].type == 'v') {
            document.getElementById('image').innerHTML = "<video controls loop src='" + img[i]['content' + parseInt(number + img[i].amount + 1)] + "' onclick='' />";
          }
          document.getElementById('image').style.opacity = 1;
        }, 100);
        break;
      }
    }
	}
  } else {
    document.getElementById('viewbox').classList.add('trigger');
    setTimeout(function () {
      document.getElementById('viewbox').classList.remove('trigger');
    }, 2000);

    imgnum = 0;
    for (var i = 0; i < number; i++) {
      imgnum += img[i].amount;
    }
    document.querySelector('#imgheader > h3 > i').innerHTML = img[number].name;
    if (img[number].type == "i") {
      document.getElementById('image').innerHTML = "<img src='" + img[number].content1 + "' onclick='' />";
    }
    if (img[number].type == "v") {
      document.getElementById('image').innerHTML = "<video controls loop src='" + img[number].content1 + "' onclick='' />";
    }
    document.getElementById('img').style.visibility = "visible";
    document.getElementById('img').style.opacity = 1;
    viewmode = 'img';
  }

  if (imgnum == 0) {
    document.getElementById('leftp').style.visibility = 'collapse';
    document.getElementById('rightp').style.visibility = 'visible';
  } else if (imgnum == imgamt) {
    document.getElementById('leftp').style.visibility = 'visible';
    document.getElementById('rightp').style.visibility = 'collapse';
  } else {
    document.getElementById('leftp').style.visibility = 'visible';
    document.getElementById('rightp').style.visibility = 'visible';
  }

}


function remove() {
  if (viewmode == 'img') {

    viewmode = 'none';
    document.getElementById('img').style.opacity = 0;
    setTimeout(function() {
      document.getElementById('img').style.visibility = "hidden";
    }, 300);
  }
}

function keyd(e) {
  if (viewmode == 'img') {

  switch (e.key) {
    case 'ArrowLeft':
        if (imgnum != 0) {
          image(imgnum - 1);
        }
      break;
    case 'ArrowRight':
        if (imgnum != imgamt) {
          image(imgnum + 1);
        }
      break;
  }
}
}

setTimeout(function () {
  document.body.style.opacity = "1";
  setTimeout(function () {
    document.querySelector("head > style").innerHTML += "#top h1::before{width: 110%;}"
  }, 500);
}, 250);
