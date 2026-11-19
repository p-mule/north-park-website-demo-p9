(function(){
  var b=document.getElementById('menu'),l=document.getElementById('links');
  b.addEventListener('click',function(){
    var o=l.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
  });
  l.addEventListener('click',function(){l.classList.remove('open');b.setAttribute('aria-expanded','false')});
})();
(function(){
  var V=['home','about','admissions','gallery','apply'],T={home:'North Park School',gallery:'Class of 2026 – North Park School',about:'About us – North Park School',admissions:'Admissions – North Park School',apply:'How to apply – North Park School'},cur='';
  function go(tok){
    var t=(typeof tok==='string'?tok:location.hash.slice(1))||'home',el=null,raw=t;
    if(t==='faq'||t==='stages'){el=document.getElementById(t);t='home'}
    else if(t==='fees'){el=document.getElementById('fees-sec');t='admissions'}
    else if(t==='contact'){el=document.getElementById('contact');t=cur||'home'}
    if(V.indexOf(t)<0)t='home';
    var changed=t!==cur;
    V.forEach(function(v){document.getElementById(v).hidden=(v!==t)});
    cur=t;document.title=T[t];
    document.querySelectorAll('.links a').forEach(function(a){
      if(a.getAttribute('href')==='#'+(raw==='fees'?'fees':t))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    if(el)el.scrollIntoView();else if(changed||true)window.scrollTo({top:0,behavior:'instant'});
  }
  window.addEventListener('hashchange',function(){go()});go();
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;
    var t=a.getAttribute('href').slice(1);if(!t)return;
    e.preventDefault();try{location.hash=t}catch(x){}go(t);
  });
  var f=document.getElementById('apply-form'),a=document.getElementById('send');
  function upd(){
    var d=new FormData(f),rows=[['Parent or guardian','parent'],['Phone','phone'],['Email','email'],['Child name','child'],['Class applying for','grade'],['Message','msg']];
    var body=rows.map(function(r){return r[0]+': '+(d.get(r[1])||'')}).join('\n');
    a.href='mailto:northparkschool@gmail.com?subject='+encodeURIComponent('Application for North Park School')+'&body='+encodeURIComponent(body);
  }
  f.addEventListener('input',upd);upd();
})();
(function(){
  var lb=document.getElementById('lb'),im=lb.querySelector('img');
  document.addEventListener('click',function(e){
    var z=e.target.closest&&e.target.closest('.zoom');
    if(z){var p=z.querySelector('img');im.src=p.src;im.alt=p.alt;lb.hidden=false;return}
    if(e.target.closest&&e.target.closest('#lb'))lb.hidden=true;
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});
})();
