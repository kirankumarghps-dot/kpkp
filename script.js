var io=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting){i.target.classList.add('in');io.unobserve(i.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var m=document.getElementById('menu'),u=document.getElementById('nav');
if(m)m.addEventListener('click',function(){u.classList.toggle('open')});
var mq=document.getElementById('mq');
if(mq){var t=['Right Talent. Real Growth.','Hiring Talent That Drives Revenue.','Where Talent Meets Business Growth.','Building Teams. Driving Revenue.','Your Growth, Our Recruitment Expertise.'],h='';
for(var k=0;k<2;k++)t.forEach(function(x){h+='<span>'+x+'</span><b>◆</b>'});mq.innerHTML=h;}
