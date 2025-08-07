let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true ,
    distance:'80px',
    duration:2000,
    Delay: 200
});
ScrollReveal().reveal('.home-content.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.skills-container,.project-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Mern Stack Developer', 'Electrical Engineer'],
    typeSpeed: 100,     
    backSpeed: 100,     
    backDelay: 1000,    
    loop: true          
});


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
   
    const fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
    const mobile = document.querySelector('input[placeholder="Mobile Number"]').value.trim();
    const subject = document.querySelector('input[placeholder="Email subject"]').value.trim();
    const message = document.querySelector('textarea').value.trim();
  
    
    if (fullName === "" || email === "" || mobile === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
  
   
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }
  
   
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Subject:", subject);
    console.log("Message:", message);
  
    
    alert("Your message has been sent successfully!");
  
    
    document.querySelector('form').reset();
  });
  
