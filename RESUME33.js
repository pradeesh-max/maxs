const form=document.getElementById('resumeform')
const editbtn=document.getElementById('editbtn')
const editor=document.querySelector('.editor')

editbtn.addEventListener('click',()=>{
    editor.Style.display=editor.Style.display==='none'?'block':'none';
});

form.addEventListener('submit',function(e){
    e.preventDefault();

    document.getElementById('name').textContent=document.getElementById('nameInput').value;
    document.getElementById('email').textContent=document.getElementById('emailInput').value;
    document.getElementById('phone').textContent=document.getElementById('phoneInput').value;
    document.getElementById('about-text').textContent=document.getElementById('aboutInput').value.trim();

    const skillsArray=document.getElementById('skillsInput').value.split(',').map(skill=>skill.trim());
    const skillsList=document.getElementById('skills');
    skillsArray.innerHTML='';
    skillsArray.forEach(skill => {
        const li=document.createElement('li');
        li.textContent=skill;
        skillsList.appendChild(li);
        
    });
    const expArray=document.getElementById('experienceInput').value.split(',').map(exp=>exp.trim());
    const expList=document.getElementById('experience');
    expList.innerHTML='';
    expArray.forEach(exp=>{
        const li=document.createElement('li');
        li.textContent=exp;
        expList.appendChild(li);
    });

    editor.Style.display='none';

});
function printfunction(){
    window.print();
}
