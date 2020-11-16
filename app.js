const field = document.querySelector('input');
const form = document.querySelector('form');
const liste = document.querySelector('ul');
const task = document.querySelector('.task')
let toutesLesTaches = [];

// animation input

field.addEventListener('input', (e) => {
    if(e.target.value !=""){
        e.target.parentNode.classList.add('animation');
    } else if (e.target.value ==""){
        e.target.parentNode.classList.remove('animation');
    }
});

// créer la liste

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    task.className = "task";
    
    const txt = field.value.trim();
    
    if(txt !== ""){
        rajouterUneTache(txt);
        field.value = "";
    }
});

const rajouterUneTache = (tache) =>{
    const todo = {
        tache,
        id: Date.now()
      }
    afficherListe(todo);   
}
const afficherListe = (todo)=>{
    const item = document.createElement('li');
    item.setAttribute('data-key',todo.id);
    
    const check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.addEventListener('click',tachefaite);
    item.appendChild(check);
    
    const texte = document.createElement('span');
    texte.innerText =todo.tache;
    item.appendChild(texte);
    
    const btn = document.createElement('button');
    btn.addEventListener('click',fermerTache);
    const img = document.createElement('img');
    img.setAttribute('src','./ressources/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    liste.appendChild(item)
    toutesLesTaches.push(item);
        
}

const tachefaite = (e)=>{
    e.target.parentNode.classList.toggle('finDeTache');
}
const fermerTache = (e)=>{
    toutesLesTaches.forEach(el =>{
        if(e.target.parentNode.getAttribute('data-key')=== el.getAttribute('data-key')){
            console.log(e.target.parentNode);
            el.remove();
            toutesLesTaches.filter(li =>li.dataset.key !== el.dataset.key);
        }
    })
}