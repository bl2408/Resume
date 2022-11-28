let content = {}
const sectionSkills = {
    displayId: "pills-skills",
    elTag: {
        start: "<div>",
        end: "</div>"
    },
    
    wordStyleFn: (word)=> word.toUpperCase()
};
const sectionHobbies = {
    displayId: "ul-hobbies",
    elTag: {
        start: "<li>",
        end: "</li>"
    },
    wordStyleFn: (word)=> `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
};

const sectionExperience = { displayId: "sec-experience" };

window.addEventListener("load",()=>{

    fetch("./js/content.json")
    .then(res=>res.json())
    .then(json=>{
        displayLists({...sectionSkills, items: json.lists.skills});
        displayLists({...sectionHobbies, items: json.lists.hobbies});

        displayContent({...sectionExperience, items: json.experience})

    })
});


function displayLists({displayId, items, elTag, wordStyleFn}){
    el = document.querySelector(`#${displayId}`);

    items.forEach(item => {
        el.innerHTML += `${elTag.start}${wordStyleFn(item)}${elTag.end}`;
    });
}

function displayContent({displayId, items}){
    el = document.querySelector(`#${displayId}`);

    items.forEach(item => {
        el.innerHTML += templateTimeline(item);
    });
}

function templateTimeline({title, date, body}){
    return `
        <div class="gt-item">
            <div></div>
            <div>
                <div>${title}</div>
                <div>${date}</div>
            </div>
            <div></div>
            <div>
                ${body}
            </div>
        </div>
    `;
}
