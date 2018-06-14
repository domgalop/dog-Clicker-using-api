const dogClicker = (function dogClicker() {
  const container = document.getElementById("container");
  let imgContainer = `<h1>Dogs</h1>`;
  function getDogPhotos() {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then(res => res.text())
      .then(data => {
        const dogImages = JSON.parse(data).message;
        dogImages.forEach(element => {
          imgContainer += `
          <div>
              <img src="${element}" alt="dog" data-clicks = 0>
              <p>Clicks</p>
          </div>
        `;
        });
        container.innerHTML = imgContainer;
      });
  }
  getDogPhotos();
  const clicker = e => {
    let counter = parseInt(e.target.getAttribute("data-clicks"), 10);
    counter += 1;
    e.target.setAttribute("data-clicks", counter);
    e.target.nextElementSibling.innerHTML = `Clicks ${counter}`;
  };

  return {
    container,
    click: clicker
  };
})();

dogClicker.container.addEventListener("click", dogClicker.click);
