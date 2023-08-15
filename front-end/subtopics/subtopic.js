
const h1 = document.getElementById('h1')
const url = new URL(location.href);
const blog = url.searchParams.toString().split('=')[0];
const heading = url.searchParams.toString().split('=')[1];
const p = document.getElementById('info')

const pages = document.getElementById('pages')

const links = document.getElementById('links')
links.innerHTML = `
<a href="../index.html" ><h1>Homepage</h1></a>
 > <a href="../topics/topics.html?topic=${blog}"><h1>${blog}</h1></a>
 > <h1>${heading}</h1>
`
fetch(`http://localhost:3000/${heading}`)
    .then(response => response.text())
    .then(data => {
        p.innerText = data;
    })
    .catch(error => {
        console.error("Error:", error);
    });


h1.innerHTML = `${heading}`;

const Topics = [
    {
        name: "animals",
        categories: [
            { type: "aquatic", list: ["dolphin", "octopus", "whale"] },
            { type: "terrestrial", list: ["cat", "dog", "giraffe"] },
            { type: "birds", list: ["parrot", "crow", "sparrow"] }
        ]
    },
    {
        name: "plants",
        categories: [
            { type: "bushes", list: ["oleander", "pistachio", "aloe-vera"] },
            { type: "trees", list: ["coconut", "banyan", "neem"] },
            { type: "shrubs", list: ["magnolia", "jasmine", "willow"] }
        ]
    },
    {
        name: "vehicles",
        categories: [
            { type: "airways", list: ["airplane", "helicopter", "hot-air-balloon"] },
            { type: "roadways", list: ["car", "motorcycle", "bicycle"] },
            { type: "waterways", list: ["ship", "boat", "submarine"] }
        ]
    },
    {
        name: "skills",
        categories: [
            { type: "frontend", list: ["html", "css", "javascript"]},
            { type: "backend", list: ["nodejs", "express.js", "nest.js"]},
            { type: "others", list: ["mongodb", "vscode", "github"]},
        ]
    }
];

Topics.forEach(topic =>{
    
    if(topic.name===blog){

    topic.categories.forEach(categ => {
        if(categ.list.includes(heading)) {
            categ.list.forEach(item=>{
                const link = document.createElement('a');
                link.setAttribute('data-value', item);
                link.setAttribute('href', `./subtopic.html?${blog}=${item}`)
                const linkText = document.createTextNode(item); 
                link.appendChild(linkText);
                const br = document.createElement('br');
                link.appendChild(br);
                pages.appendChild(link)
        })
        }
    })

}
})