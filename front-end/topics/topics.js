const url = new URL(location.href);
const blog = url.searchParams.get('topic');
const table = document.getElementById('table');


const h1 = document.getElementById('h1')
h1.innerHTML = blog;

const links = document.getElementById('links')

links.innerHTML = `
<h1><a href="../index.html" id="links">Homepage</a></h1>
> <h1><a href="#" >${blog}</a></h1>
`

function createDropdown( name, type, list) {
    const dropdown = document.createElement("select");
    dropdown.setAttribute('class', `${name}-${type}`);
    dropdown.setAttribute('id', type);

    const option = document.createElement("option");
        option.value = "";
        option.textContent = type;
        option.disabled = true;
        option.selected = true;
        dropdown.appendChild(option);


    list.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        dropdown.appendChild(option);
    });
    return dropdown;
}

function createTableRow(topic) {
    const row = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute('class', 'cell')

    const name = topic.name;



    topic.categories.forEach(top =>{
        const dropdown = createDropdown(name ,top.type, top.list);
        td.appendChild(dropdown);
        row.appendChild(td);
    })
    return row;
}




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
    
    if(topic.name===blog)
    {const row = createTableRow(topic);
    table.appendChild(row);


    topic.categories.forEach(top => {
        const dropdown = document.getElementsByClassName(`${topic.name}-${top.type}`)[0];
        dropdown.addEventListener("change", function() {
            const selectedValue = dropdown.value;
            if (selectedValue) {
                window.location.href = `../subtopics/subtopic.html?${blog}=${selectedValue}`;
            }
        });
    });

}
})