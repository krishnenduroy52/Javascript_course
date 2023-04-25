// console.log("Hello world")

const root1 = document.getElementById("root")
// // console.log(root)
// root.innerHTML = "<div>My channel name: Krishnendu roy</div>"

// const node = document.createElement("a")
// const nodeText = document.createTextNode("https://www.youtube.com/@KrishnenduRoy52")
// node.setAttribute('href', "https://www.youtube.com/@KrishnenduRoy52")
// node.setAttribute("target", "_blank")

// node.appendChild(nodeText)
// root.appendChild(node)

// #root{
//     color: red
// }

const root = document.querySelector("#root");
root.innerHTML = "<div>My channel name: Krishnendu roy</div>";

const node = document.createElement("a");
const nodeText = document.createTextNode(
  "https://www.youtube.com/@KrishnenduRoy52"
);
node.setAttribute("href", "https://www.youtube.com/@KrishnenduRoy52");
node.setAttribute("target", "_blank");

node.appendChild(nodeText);
root.appendChild(node);

// const p = document.querySelectorAll("p");
// p[0].innerHTML="Krishnendu"
// p[1].innerHTML="Roy"
// p[2].innerHTML="MSIT"

color = 2;
const c = color==1?"green":"red"

root1.style.color = c;
root1.style.animation = "0.5 ease"

