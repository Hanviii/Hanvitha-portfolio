$(function(){
  $('.menu-btn').on('click', function(){ $('.nav-links').toggleClass('open'); });
  $('.nav-links a').on('click', function(){ $('.nav-links').removeClass('open'); });

  if(localStorage.getItem('hk-theme') === 'dark'){
    document.documentElement.setAttribute('data-theme','dark');
  }

  $('#themeToggle').on('click', function(){
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if(dark){
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('hk-theme','light');
    }else{
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('hk-theme','dark');
    }
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  },{threshold:.12});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
});
