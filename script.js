const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.textContent=open?'×':'☰';
    menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.textContent='☰';
    menuButton.setAttribute('aria-label','Open navigation');
  }));
}
const shareButton=document.querySelector('#shareButton');
const shareFeedback=document.querySelector('#shareFeedback');
if(shareButton&&shareFeedback){
  shareButton.addEventListener('click',async()=>{
    const shareData={title:'NILORA',text:'Discover NILORA — a new perspective on sustainable agriculture.',url:window.location.href};
    try{
      if(navigator.share){await navigator.share(shareData);shareFeedback.textContent='Thanks for sharing NILORA.';}
      else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(shareData.url);shareFeedback.textContent='Website link copied. Share it with your network!';}
      else{shareFeedback.textContent='Copy the website address from your browser to share NILORA.';}
    }catch(error){if(error.name!=='AbortError')shareFeedback.textContent='You can share NILORA using the social links above.';}
  });
}