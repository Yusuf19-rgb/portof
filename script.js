function openLightbox(src, cap){
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-cap').textContent = cap;
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLightbox(e){
    if(e.target.id === 'lightbox' || e.target.classList.contains('lightbox-close')){
      document.getElementById('lightbox').classList.remove('open');
    }
  }
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));
