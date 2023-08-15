const searchButton = document.getElementById('searchButton');
const searchQuery = document.getElementById('searchQuery');
const searchResults = document.getElementById('searchResults');
const dropdown = document.getElementById('dropdown')


searchQuery.addEventListener('input', () => {
    const query = searchQuery.value;
    dropdown.innerHTML = ''
    if (query) {
      fetch(`http://localhost:3000/search/${query}`)
        .then(response => response.json())
        .then(data => {
          displaySearchResults(data);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    }
  });

  function displaySearchResults(results) {
    dropdown.innerHTML = '';
    results.forEach(result => {
    let [name] = result.split('\t');
      const option = document.createElement('div');

      const link = document.createElement('a');
      const item = name.split(' : ')[0].toLowerCase();


      const paragraph = name;
      const words = paragraph.split(' ');
      words[2] = `<span class="highlight">${words[2]}</span>`;
      option.innerHTML = words.join(' ');


      console.log("item = ",item);
      let blog = "";
      Topics.forEach(topic =>{
        if(topic.list.includes(item)){
          blog = topic.name;
        }
      })

      link.setAttribute('href', `subtopics/subtopic.html?${blog}=${item}`);
      option.classList.add('dropdown-item');

      link.appendChild(option)
      dropdown.appendChild(link);
    });
  }

  const Topics = [
    {
        name: "animals",
        list: ["dolphin", "octopus", "whale", "cat", "dog", "giraffe", "parrot", "crow", "sparrow"] ,
      },
    {
        name: "plants",
        list: ["oleander", "pistachio", "aloe-vera", "coconut", "banyan", "neem", "magnolia", "jasmine", "willow"]
    },
    {
        name: "vehicles",
        list: ["airplane", "helicopter", "hot-air-balloon", "car", "motorcycle", "bicycle", "ship", "boat", "submarine"] 
    },
    {
      name: "skills",
      list: ["html", "css", "javascript", "nodejs", "express.js", "nest.js", "mongodb", "vscode", "github"] 
  },
];