//Q1
const cat = {
    complain: function () {
        console.log("Meow");
    }
}
cat.complain();

//Q2
const heading = document.querySelector("h3");
console.log (heading);

heading.innerHTML = "update heading";

//Q3
heading.style.fontSize = "2em";

//Q4
heading.classList.add ("subheading");

console.log(heading);

//Q5
const paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = paragraphs[i].style.color + "red";
}

//Q6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML =`<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//Q7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function getName(list) {
    for (let i =0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
}
getName(cats);

//Q8
const catContainer = document.querySelector(".cat-container");
  
  function createCats(cats) {
    let html = "";
  
    for (let i = 0; i < cats.length; i++) {
      let Age = "";
  
      if (cats[i].age) {
        Age = cats[i].age;
      } else {
        Age = " Unknown";
      }
  
      html += `
      <div>
      <h5>Name: ${cats[i].name}</h5>
      <p>Age: ${Age}</p>
      </div>
      `;
    }
  
    return html;
  }
  
  catContainer.innerHTML = createCats(cats);




