document.addEventListener('DOMContentLoaded',function(){
  var loader=document.getElementById('pageLoader');
  if(loader){
    window.addEventListener('load',function(){setTimeout(function(){loader.classList.add('done');},1200);});
    setTimeout(function(){loader.classList.add('done');},2000);
  }
  var btn=document.getElementById('menuBtn'),menu=document.getElementById('mobileMenu');
  if(btn&&menu){
    btn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();btn.classList.toggle('open');menu.classList.toggle('open');});
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){btn.classList.remove('open');menu.classList.remove('open');});});
  }
  var header=document.querySelector('.header');
  function hs(){if(!header)return;if(window.scrollY>30)header.classList.add('scrolled');else header.classList.remove('scrolled');}
  window.addEventListener('scroll',hs,{passive:true});hs();
  var reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting)en.target.classList.add('visible');});
    },{threshold:0.12,rootMargin:'0px 0px -30px 0px'});
    reveals.forEach(function(el){io.observe(el);});
  } else {reveals.forEach(function(el){el.classList.add('visible');});}
  var soon=document.getElementById('soonBtn');
  if(soon){soon.addEventListener('click',function(){alert('Coming soon — file downloads will be available here.');});}
});