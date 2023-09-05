let plants = [
    {
        name: "Adenium",
        info: "Blue tiger butterfly on pink flowers  ",
        img: "adenium.jpg"
    },
    {
        name: "Allamanda",
        info: "Allamanda is a genus of flowering plants ",
        img: "allamanda.jpg"
    },
    {
        name:"bonsai",
        info:"Bonsai is the Japanese and East Asi",
        img:"bonsai.jpg"
    },
    {
        name: "coneflower",
        info: "Echinacea is a genus of herbaceous flowering ",
        img:"coneflower.jpeg"
    },
    {
        name: "ferns",
        info: "The ferns are a group of vascular plants that ",
        img: "ferns.webp"
    },
    {
        name: "herbs",
        info: "In general use, herbs are a widely distributed and .",
        img: "herbs.webp"
    },
    {
        name: "hibiscus",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "hibiscus.jpg"
    }
    ,
    {
        name: "jasmine",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "jasmine.jpg"
    }
    ,
    {
        name: "lavender",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "lavender.jpg"
    }
    ,
    {
        name: "lily",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "lily.webp"
    }
    ,
    {
        name: "marigold",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "marigold.jpg"
    }
    ,
    {
        name: "night jasmine",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "night jasmine.jpg"
    }
    ,
    {
        name: "succulents",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "succulents.jpg"
    }
    ,
    {
        name: "sunflower",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "sunflower.webp"
    }
    ,
    {
        name: "tree",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "tree.jpg"
    },
    {
        name: "vines",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "vines.jpg"
    },
    {
        name: "wildflower",
        info: "The ferns are a group of vascular plants that reproduce via ",
        img: "wildflowers.jpg"
    },
    {
        name: "Roshni",
        info: "Dinka chika",
        img: "tree.jpg"
    }
]

const template = "<div class=\"card\"><div class=\"img-container\"> \
<img src=\"images\\{{img}}\" rel=\"flower\">\
</div>\
<div class=\"info\">\
<h4>{{name}}</h4>\
<p>{{info}}</p>\
</div></div>"

function onload() {
    const contentElement = document.getElementsByClassName("content")[0];

    for(let i = 0; i < plants.length; i++) {
        let data = template.replace("{{name}}",plants[i].name);;
        data = data.replace("{{info}}",plants[i].info);
        data = data.replace("{{img}}",plants[i].img)
        contentElement.innerHTML += data;
    }
}

window.addEventListener('load', onload)