let categoriesBoxes = document.querySelector(".categories__boxes");
// console.log(categoriesBoxes)

let BASE_URL = "http://localhost:3000/";

function getFetch(endPoint, func) {
  fetch(`${BASE_URL}${endPoint}`)
    .then((res) => res.json())
    .then((data) => {
      func(data);
    });
}
// getFetch();

function URLSearch() {
  let path = window.location.pathname.split("/").pop();
  console.log(path);
}
URLSearch();

function getInnerCategory(data) {
  let innerData = "";

  data.map((item) => {
    innerData += `
    <div class="categories__box">
          <a href="#" class="categories__box-bg"></a>
          <a href="#" class="categories__box-text">#Food</a>
    </div>
    `;
  });
}
