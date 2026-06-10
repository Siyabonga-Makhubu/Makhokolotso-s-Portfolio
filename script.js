 const defaultConfig = {
      hero_title: 'Makhokolotso Maria Khapetsi',
      hero_subtitle: 'Empowering women through faith, purpose, and unwavering determination.',
      about_text: 'Makhokolotso Maria Khapetsi is an author, entrepreneur, event host, mentor, and advocate for women\'s empowerment. Driven by faith and a passion for inspiring others, she has dedicated her life to creating platforms that encourage personal growth, healing, and purpose.',
      background_color: '#0f0f0f',
      surface_color: '#1a1208',
      text_color: '#f5f0e8',
      primary_action_color: '#daa520',
      secondary_action_color: '#b8860b',
      font_family: 'Playfair Display',
      font_size: 16
    };

    async function onConfigChange(config) {
      const c = { ...defaultConfig, ...config };
      document.getElementById('hero-title').innerHTML = `${c.hero_title.split(' ').slice(0,1).join(' ')}<br><span class="gold-gradient">${c.hero_title.split(' ').slice(1).join(' ')}</span>`;
      document.getElementById('hero-subtitle').textContent = c.hero_subtitle;
      document.getElementById('about-text').textContent = c.about_text;
      document.body.style.backgroundColor = c.background_color;
      document.body.style.color = c.text_color;
      document.querySelectorAll('.font-heading').forEach(el => {
        el.style.fontFamily = `${c.font_family}, serif`;
      });
    }

    function mapToCapabilities(config) {
      const c = { ...defaultConfig, ...config };
      const makeColor = (key) => ({
        get: () => c[key] || defaultConfig[key],
        set: (v) => { c[key] = v; window.elementSdk.setConfig({ [key]: v }); }
      });
      return {
        recolorables: [
          makeColor('background_color'),
          makeColor('surface_color'),
          makeColor('text_color'),
          makeColor('primary_action_color'),
          makeColor('secondary_action_color')
        ],
        borderables: [],
        fontEditable: {
          get: () => c.font_family || defaultConfig.font_family,
          set: (v) => { c.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
          get: () => c.font_size || defaultConfig.font_size,
          set: (v) => { c.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
        }
      };
    }

    function mapToEditPanelValues(config) {
      const c = { ...defaultConfig, ...config };
      return new Map([
        ['hero_title', c.hero_title],
        ['hero_subtitle', c.hero_subtitle],
        ['about_text', c.about_text]
      ]);
    }

    if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
    }

    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', () => {

            const description =
                button.parentElement.querySelector('.book-description');

            description.classList.toggle('hidden');

            if (description.classList.contains('hidden')) {
                button.textContent = 'Read More';
            } else {
                button.textContent = 'Read Less';
            }
        });
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }

    // Contact form
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const templateParams = {
            title: "Website Contact Form",
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
            "service_gakp0fe",      // Your Service ID
            "template_wahqgv5",     // Your Template ID
            templateParams
        )
        .then(() => {
            successMsg.classList.remove("hidden");
            successMsg.innerText = "Message sent successfully!";

            form.reset();

            setTimeout(() => {
                successMsg.classList.add("hidden");
            }, 5000);
        })
        .catch((error) => {
            console.error(error);

            successMsg.classList.remove("hidden");
            successMsg.innerText = "Failed to send message.";

            setTimeout(() => {
                successMsg.classList.add("hidden");
            }, 5000);
        });
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
    });

    lucide.createIcons();

    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'a058d13e9932d835',t:'MTc4MDQyODA0Nw=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();






    

            

            

            

            

            

            
