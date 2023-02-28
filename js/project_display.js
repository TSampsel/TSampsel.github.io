let project_education = document.getElementById('project_education');

project_education.addEventListener('click', async () => {
    project_display_h2.innerText = "Education"
    project_display_p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    isFirst()
})

project_word.addEventListener('click', async () => {
    project_display_h2.innerText = "Word Editor"
    project_display_p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    isFirst()
})

project_game.addEventListener('click', async () => {
    project_display_h2.innerText = "Unity Game"
    project_display_p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    isFirst()
})

project_musicplayer.addEventListener('click', async () => {
    project_display_h2.innerText = "Music Player"
    project_display_p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    isFirst()
    
})

function isFirst(){
    console
    if(project_display.classList.contains("project_display_initial")){

        project_display.removeAttribute('class', 'project_display_initial')
        project_display.setAttribute('class', 'project_display_first_reload')
    } else {
        project_display.setAttribute('class', 'project_display_reload')
    }
}


project_display.addEventListener("animationend", () => {
    //project_display.removeAttribute('class', 'project_display_reload')
    project_display.classList.remove("project_display_reload");
});