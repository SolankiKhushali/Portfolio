document.addEventListener("DOMContentLoaded", () => {
  // AOS init
  AOS.init();

  // Theme Toggle
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // EmailJS Init
  (function () {
    emailjs.init("07sQdsnEO7o7KsVH6"); // Replace with your EmailJS public key
  })();

  // Form Submission
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm('khushali_gmail_service', 'template_kjom0kn', this)
        .then(() => {
          alert("Message sent!");
          this.reset();
        }, (error) => {
          alert("Failed to send message.");
          console.error(error);
        });
    });
  }

});
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
  }
// Slider Logic
 let currentSlide = 0;
const slider = document.getElementById("experienceSlider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Optional: Auto Slide
let autoSlide = setInterval(() => showSlide(currentSlide + 1), 6000);

const sliderContainer = document.querySelector(".slider-container");
if (sliderContainer) {
  sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
  sliderContainer.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => showSlide(currentSlide + 1), 6000);
  });
}

// Initialize
showSlide(currentSlide);

// For Sliders overlay
  // Hide all overlays
    function closeAllOverlays() {
      document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.style.display = 'none';
      });
    }
  
    // Handle 'Certificate' clicks
    document.querySelectorAll('.certi-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        closeAllOverlays(); // Hide any open overlay first
        const slide = button.closest('.slide');
        const overlay = slide.querySelector('.overlay');
        overlay.style.display = 'flex';
      });
    });

  // Handle 'Go Back' clicks
    document.querySelectorAll('.go-back-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const slide = button.closest('.slide');
        const overlay = slide.querySelector('.overlay');
        overlay.style.display = 'none';
      });
    });

  // Close overlay on background click
    document.querySelectorAll('.overlay').forEach(overlay => {
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
          overlay.style.display = 'none';
        }
      });
  });

// For Project card Overlays
  const overlay = document.getElementById("globalOverlay");
  const overlayContent = document.getElementById("overlayContent");
  const closeBtn = document.getElementById("closeOverlay");

  const projectData = {
    worksync: `
          <h3 class="project-about">ABOUT</h3>
          <p><b>Tech Stack:</b> .NET Core, MVC architecture, Controller-Service-Repository Layered architecture, SQL- SQL Server Management Studio (SSMS), AdminLTE Bootstraping, HTML, CSS, JavaScript, AJAX.</p>
          <p>WorkSync Hub is a role-based employee management system built using <b>ASP.NET Core MVC</b>ASP.NET Core MVC with a layered architecture (Controller-Service-Repository). It streamlines HR and administrative tasks, including<b> role-based login, payroll management, leave management, and dynamic salary head assignment</b>. Key features include:
            <br> - Secure <b>cookie-based authentication</b> and <b>role-based access control</b> for Admin, HR, and Employee roles
            <br> - Dynamic <b>payroll generation</b>, approval workflow, and <b>PDF salary slips</b>
            <br> - <b>Interactive dashboards</b> powered by <b>AdminLTE Bootstrap</b>
            <br> - employee profile management and leave handling
            <br> - with <b>SQL Server stored procedures</b> for efficient data operations
            <br> - The chat feature was implemented using <b>SignalR</b>, which is the official real-time communication library for ASP.NET Core.
            Hub is designed to optimize HR workflows, ensure secure access, and deliver a seamless user experience for organizations of all sizes.
          </p>        
          <a href="https://github.com/SolankiKhushali?tab=repositories" class="project-card-go-back-btn project-card-details-box-btn">Show Projects</a>
          <a href="#" class="closeOverlayBtn project-card-go-back-btn project-card-details-box-btn details-box-btn">Go Back</a>
    `,
    note: `
          <h3 class="project-about">ABOUT</h3>
          <p><b>Tech Stack:</b> Python, Flask, MongoDB</p>
          <p><b>Developed a user-friendly web-based note-taking application using Flask (Python) and MongoDB. The app features secure user authentication with login and sign-up functionality. After logging in, users can access a personalized dashboard to manage their notes. They can create, read, and delete notes as needed. Each user's data is securely stored and isolated using MongoDB, ensuring privacy and data integrity.</p>
          <a href="https://github.com/SolankiKhushali?tab=repositories" class="project-card-go-back-btn project-card-details-box-btn">Show Projects</a>
          <a href="#" class="closeOverlayBtn project-card-go-back-btn project-card-details-box-btn">Go Back</a>
    `,
    game: `
          <h3 class="project-about">ABOUT</h3>
          <p><b>Tech Stack:</b> Python</p>
          <p>Built a command-line based Tic-Tac-Toe game using Python. The game supports two players and includes full game logic, including win detection, draw handling, and turn-based input validation. This project showcases a strong grasp of control flow, loops, and data structures in Python, and serves as a foundational example of game development using core programming concepts without external libraries.
          </p>        
          <a href="https://github.com/SolankiKhushali?tab=repositories" class="project-card-go-back-btn project-card-details-box-btn">Show Projects</a>
          <a href="#" class="closeOverlayBtn project-card-go-back-btn project-card-details-box-btn">Go Back</a>
    `,
    blog: `
          <h3 class="project-about">ABOUT</h3>
          <p><b>Tech Stack:</b> HTML, CSS, JavaScript, GSAP, Locomotive Scroll</p>
          <p>Designed and developed a highly interactive blog website with immersive scroll-based animations. Leveraging GSAP (GreenSock Animation Platform) and Locomotive Scroll, the site offers a smooth, modern user experience with dynamic visual effects.
          <br>  A standout feature is a stylized Korean character illustration whose facial expressions change fluidly based on the user's scroll position, adding an engaging and storytelling element to the browsing experience. This project demonstrates advanced front-end animation techniques, scroll event handling, and seamless user experience design.
          <br>  Includes sections for blog content, animated transitions, and responsive layout — crafted to reflect a blend of creativity and technical precision.</p>
          <a href="https://github.com/SolankiKhushali?tab=repositories" class="project-card-go-back-btn project-card-details-box-btn">Show Projects</a>
          <a href="#" class="closeOverlayBtn project-card-go-back-btn project-card-details-box-btn">Go Back</a>
    `,
    music: `
          <h3 class="project-about">ABOUT</h3>
          <p><b>Tech Stack:</b> HTML, CSS, JavaScript</p>
          <p>Developed a sleek and responsive music player web application with core functionalities such as play, pause, next/previous track, progress bar, and volume control. The player features a clean UI and smooth transitions to enhance user interaction.
            <br>  Tracks can be dynamically loaded, and the player visually reflects the current state with real-time updates. This project highlights skills in DOM manipulation, event handling, and responsive web design, showcasing a strong foundation in front-end development and user-centric UI/UX design.
          </p>        
          <a href="https://github.com/SolankiKhushali?tab=repositories" class="project-card-go-back-btn project-card-details-box-btn">Show Projects</a>
          <a href="#" class="closeOverlayBtn project-card-go-back-btn project-card-details-box-btn">Go Back</a>
        `
  };

  document.querySelectorAll('.open-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.dataset.project;
      overlayContent.innerHTML = projectData[key] || "<p>No details found.</p>";
      overlay.style.display = "flex";
    });
  });
  document.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeOverlayBtn")) {
    e.preventDefault();
    overlay.style.display = "none";
  }
});

