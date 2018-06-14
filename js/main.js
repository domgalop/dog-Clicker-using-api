let dogClicker = function(){
  let container = document.getElementById('container');
  let imgContainer = `<h1>Dogs</h1>`;
  let getDogPhotos = function(){
    fetch('https://dog.ceo/api/breeds/image/random/10')
    .then((res) => res.text())
    .then((data) => {
      let dogImages = JSON.parse(data);
      for(let dogImage in dogImages.message){
        imgContainer += `
          <div>
              <img src="${dogImages.message[dogImage]}" alt="dog" data-clicks = 0>
              <p>Clicks</p>
          </div>
        `;
      }
      container.innerHTML = imgContainer;
    })
  }();

  let clicker = (e) => {
    let counter = parseInt((e.target.getAttribute('data-clicks')));
    counter++
    e.target.setAttribute('data-clicks', counter);
    e.target.nextElementSibling.innerHTML = `Clicks ${counter}`;
  };

  return {
    container: container,
    click: clicker
  };

}();

dogClicker.container.addEventListener('click', dogClicker.click);



