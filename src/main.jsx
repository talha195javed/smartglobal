import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CirclePlay, ChevronLeft, ChevronRight } from 'lucide-react';
import './styles.css';
import { logos, features, bars } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import WebFunnelPage from './pages/WebFunnelPage';
import SaaSPage from './pages/SaaSPage';


function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialSlides = [
    {
      title: "A game-changer for our\ncustomer support.”",
      text: "GoSmart’s AI agents have completely transformed the way we handle customer inquiries. What used to take hours of manual responses is now handled instantly and accurately.",
      name: "Zakariah Ramdani",
      role: "SEO Manager at GoSmart Ai",
      image: "/logos/review1.svg",
    },
    {
      title: "Exceptional results for our customer \nservice division.”",
      text: "The AI solutions from Algora have revolutionized our customer interaction processes. What once demanded extensive manual effort is now executed swiftly and with precision. Our support staff is now equipped to tackle intricate challenges, while the AI adeptly manages routine inquiries.",
      name: "Zakariah Ramdani",
      role: "SEO Manager at GoSmart Ai",
      image: "/logos/review2.svg",
    },
    {
      title: "An absolute game-changer for \nour team.”",
      text: "Since implementing SmartFlow AI, our operational efficiency has skyrocketed. Manual data entry is a thing of the past, and our team can now focus on strategic tasks. The accuracy and speed of SmartFlow AI are truly impressive.",
      name: "Zakariah Ramdani",
      role: "SEO Manager at GoSmart Ai",
      image: "/logos/review3.svg",
    },
    {
      title: "A game-changer for our\ncustomer support.”",
      text: "GoSmart’s AI agents have completely transformed the way we handle customer inquiries. What used to take hours of manual responses is now handled instantly and accurately.",
      name: "Zakariah Ramdani",
      role: "SEO Manager at GoSmart Ai",
      image: "/logos/review1.svg",
    },
  ];
  const testimonial = testimonialSlides[activeTestimonial];

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonialSlides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, [testimonialSlides.length]);

  if (window.location.pathname === '/about') {
    return <AboutPage />;
  }

  if (window.location.pathname === '/contact') {
    return <ContactPage />;
  }

  if (window.location.pathname === '/solutions') {
    return <SolutionsPage />;
  }

  if (window.location.pathname === '/web-funnel') {
    return <WebFunnelPage />;
  }

  if (window.location.pathname === '/saas') {
    return <SaaSPage />;
  }

  return <>
    <Header />
    <main>
      <section
          className="hero"
          style={{
            display: "flex",
          }}
      >
        <div
            className="heroBg"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
        >
          <div
              className="heroContent"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "20px",
                paddingTop: "10%",
              }}
          >
            <div>
              <h1 style={{ color: "black", margin: 0 }}>
                We build <span style={{ color: "#187EFD" }}>revenue-driven</span> digital <br />
                ecosystems powered by AI
              </h1>
              <p style={{ margin: 0, textAlign: "center", paddingTop: "5%", width: "100%" }}>
                Build modern websites with ease using our powerful tools and expert guidance.
              </p>
            </div>

            <a
                href="#proposal"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#187EFD",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "6px",
                  display: "inline-block",
                }}
            >
              Get a Proposal
            </a>
          </div>
        </div>
      </section>

      <section className="trusted">
        <p>Trusted by startups, founders, and growing brands across UAE, US & global markets.</p>
        <div className="logoRow">{logos.map((logo) => <img key={logo.name} src={logo.src} alt={logo.name} />)}</div>
      </section>

      <section className="product sectionPad">
        <div className="copy">
          <svg width="148" height="30" viewBox="0 0 148 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.20297 20.464H2.30497V25H0.000968754V11.842H5.20297C7.84897 11.842 9.55897 13.57 9.55897 16.144C9.55897 18.682 7.83097 20.464 5.20297 20.464ZM4.75297 13.894H2.30497V18.412H4.71697C6.30097 18.412 7.14697 17.566 7.14697 16.126C7.14697 14.686 6.28297 13.894 4.75297 13.894ZM16.7531 16.072V18.106H15.9431C14.3591 18.106 13.3691 18.952 13.3691 20.68V25H11.1731V16.126H13.2431L13.3691 17.422C13.7471 16.54 14.5931 15.946 15.7811 15.946C16.0871 15.946 16.3931 15.982 16.7531 16.072ZM17.4186 20.536C17.4186 17.764 19.4166 15.856 22.1706 15.856C24.9246 15.856 26.9226 17.764 26.9226 20.536C26.9226 23.308 24.9246 25.216 22.1706 25.216C19.4166 25.216 17.4186 23.308 17.4186 20.536ZM19.6146 20.536C19.6146 22.156 20.6586 23.254 22.1706 23.254C23.6826 23.254 24.7266 22.156 24.7266 20.536C24.7266 18.916 23.6826 17.818 22.1706 17.818C20.6586 17.818 19.6146 18.916 19.6146 20.536ZM32.3173 25.234C29.7433 25.234 28.1413 23.344 28.1413 20.59C28.1413 17.818 29.7613 15.838 32.4433 15.838C33.6853 15.838 34.7833 16.36 35.3413 17.242V11.608H37.5193V25H35.5033L35.3593 23.614C34.8193 24.64 33.6673 25.234 32.3173 25.234ZM32.8033 23.218C34.3333 23.218 35.3233 22.12 35.3233 20.518C35.3233 18.916 34.3333 17.8 32.8033 17.8C31.2733 17.8 30.3373 18.934 30.3373 20.518C30.3373 22.102 31.2733 23.218 32.8033 23.218ZM45.8378 16.108H48.0338V25H45.9998L45.8378 23.812C45.2978 24.658 44.1458 25.234 42.9578 25.234C40.9058 25.234 39.6998 23.848 39.6998 21.67V16.108H41.8958V20.896C41.8958 22.588 42.5618 23.272 43.7858 23.272C45.1718 23.272 45.8378 22.462 45.8378 20.77V16.108ZM49.6042 20.536C49.6042 17.782 51.4222 15.838 54.0502 15.838C56.4802 15.838 58.1362 17.188 58.3702 19.33H56.1742C55.9222 18.322 55.1842 17.8 54.1402 17.8C52.7362 17.8 51.8002 18.862 51.8002 20.536C51.8002 22.21 52.6642 23.254 54.0682 23.254C55.1662 23.254 55.9402 22.714 56.1742 21.742H58.3882C58.1182 23.812 56.3902 25.234 54.0682 25.234C51.3682 25.234 49.6042 23.362 49.6042 20.536ZM63.0467 25H60.8507V17.944H59.1407V16.108H60.8507V13.336H63.0467V16.108H64.7747V17.944H63.0467V25ZM74.9694 25.234C72.3234 25.234 70.4694 23.308 70.4694 20.554C70.4694 17.764 72.2874 15.838 74.8974 15.838C77.5614 15.838 79.2534 17.62 79.2534 20.392V21.058L72.5574 21.076C72.7194 22.642 73.5474 23.434 75.0054 23.434C76.2114 23.434 77.0034 22.966 77.2554 22.12H79.2894C78.9114 24.064 77.2914 25.234 74.9694 25.234ZM74.9154 17.638C73.6194 17.638 72.8274 18.34 72.6114 19.672H77.0754C77.0754 18.448 76.2294 17.638 74.9154 17.638ZM82.1547 25H79.6527L82.7127 20.644L79.6527 16.108H82.2087L84.1707 19.132L86.0607 16.108H88.5267L85.5027 20.608L88.4367 25H85.9167L84.0267 22.066L82.1547 25ZM89.8352 29.122V16.108H91.8692L92.0132 17.458C92.5532 16.432 93.7232 15.838 95.0732 15.838C97.5752 15.838 99.2312 17.656 99.2312 20.446C99.2312 23.218 97.7192 25.234 95.0732 25.234C93.7412 25.234 92.5892 24.712 92.0312 23.812V29.122H89.8352ZM92.0492 20.554C92.0492 22.156 93.0392 23.254 94.5512 23.254C96.0992 23.254 97.0172 22.138 97.0172 20.554C97.0172 18.97 96.0992 17.836 94.5512 17.836C93.0392 17.836 92.0492 18.952 92.0492 20.554ZM103.194 25H101.016V11.608H103.194V25ZM104.975 20.536C104.975 17.764 106.973 15.856 109.727 15.856C112.481 15.856 114.479 17.764 114.479 20.536C114.479 23.308 112.481 25.216 109.727 25.216C106.973 25.216 104.975 23.308 104.975 20.536ZM107.171 20.536C107.171 22.156 108.215 23.254 109.727 23.254C111.239 23.254 112.283 22.156 112.283 20.536C112.283 18.916 111.239 17.818 109.727 17.818C108.215 17.818 107.171 18.916 107.171 20.536ZM121.8 16.072V18.106H120.99C119.406 18.106 118.416 18.952 118.416 20.68V25H116.22V16.126H118.29L118.416 17.422C118.794 16.54 119.64 15.946 120.828 15.946C121.134 15.946 121.44 15.982 121.8 16.072ZM126.966 25.234C124.32 25.234 122.466 23.308 122.466 20.554C122.466 17.764 124.284 15.838 126.894 15.838C129.558 15.838 131.25 17.62 131.25 20.392V21.058L124.554 21.076C124.716 22.642 125.544 23.434 127.002 23.434C128.208 23.434 129 22.966 129.252 22.12H131.286C130.908 24.064 129.288 25.234 126.966 25.234ZM126.912 17.638C125.616 17.638 124.824 18.34 124.608 19.672H129.072C129.072 18.448 128.226 17.638 126.912 17.638Z" fill="#151515"/>
            <path d="M125.543 9L138.684 9.15578V18L147.543 8.92291V0H133.99L125.543 9Z" fill="url(#paint0_linear_0_1)"/>
            <defs>
              <linearGradient id="paint0_linear_0_1" x1="147.543" y1="9" x2="125.543" y2="9" gradientUnits="userSpaceOnUse">
                <stop stopColor="#187EFD"/>
                <stop offset="1" stopColor="#0048FF"/>
              </linearGradient>
            </defs>
          </svg>

          <h2>Gosmart AI powerful<br />AI agent</h2>
          <p>Build AI agents that learn from your data, adapt to conversations, and help your business operate more efficiently.</p>
          <a className="btn" href="/contact">Explore Gosmart AI</a>
        </div>
        <div className="screenMock imageMock"><img src="/logos/Desktop.svg" alt="Gosmart AI dashboard screen" /></div>
      </section>

      <section className="features">
        {features.map(([title, text], i) => <article key={title}>
          {i === 0 ? <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.7772 21.8269V27.8948C26.7772 28.6487 26.7234 29.4026 26.5791 30.1414C25.4784 35.7569 20.4014 40.0003 14.3077 40.0003C7.65608 40.0003 2.22151 34.9513 1.83594 28.5776H7.26189C7.91887 31.7741 10.8246 34.1866 14.3077 34.1866C14.4175 34.1866 14.5252 34.1845 14.6329 34.1802C18.4154 34.0165 21.3513 30.7984 21.3513 27.0116V26.7445C23.5484 25.5598 25.4138 23.8668 26.7794 21.8291L26.7772 21.8269Z" fill="url(#paint0_linear_79_3946)"/>
            <path d="M15.147 0.0473877C14.7679 0.0172315 14.3823 0 13.9946 0C6.26602 0 0 6.09155 0 13.6069C0 21.1222 6.26602 27.2138 13.9946 27.2138C21.7232 27.2138 27.9892 21.1201 27.9892 13.6069C27.9892 10.8756 27.1599 8.33172 25.734 6.2014C28.42 6.03554 30.5417 3.86645 30.5417 1.21486V0.0452341H15.1449L15.147 0.0473877ZM24.489 20.3748L19.3344 18.6257H8.65913C5.82445 18.6257 3.50458 16.3705 3.50458 13.6134C3.50458 12.2348 4.08401 10.9812 5.01885 10.0722C5.95154 9.16532 7.24179 8.60097 8.65913 8.60097H19.3344C22.1691 8.60097 24.489 10.8562 24.489 13.6134V20.3726V20.3748Z" fill="url(#paint1_linear_79_3946)"/>
            <path d="M9.89691 15.3814C10.9057 15.3814 11.7235 14.5867 11.7235 13.6065C11.7235 12.6262 10.9057 11.8315 9.89691 11.8315C8.88811 11.8315 8.07031 12.6262 8.07031 13.6065C8.07031 14.5867 8.88811 15.3814 9.89691 15.3814Z" fill="url(#paint2_linear_79_3946)"/>
            <path d="M17.1977 15.3814C18.2065 15.3814 19.0243 14.5867 19.0243 13.6065C19.0243 12.6262 18.2065 11.8315 17.1977 11.8315C16.1889 11.8315 15.3711 12.6262 15.3711 13.6065C15.3711 14.5867 16.1889 15.3814 17.1977 15.3814Z" fill="url(#paint3_linear_79_3946)"/>
            <path d="M26.7772 21.8269V27.8948C26.7772 28.6487 26.7234 29.4026 26.5791 30.1414C25.4784 35.7569 20.4014 40.0003 14.3077 40.0003C7.65608 40.0003 2.22151 34.9513 1.83594 28.5776H7.26189C7.91887 31.7741 10.8246 34.1866 14.3077 34.1866C14.4175 34.1866 14.5252 34.1845 14.6329 34.1802C18.4154 34.0165 21.3513 30.7984 21.3513 27.0116V26.7445C23.5484 25.5598 25.4138 23.8668 26.7794 21.8291L26.7772 21.8269Z" fill="url(#paint4_linear_79_3946)"/>
            <path d="M15.147 0.0473877C14.7679 0.0172315 14.3823 0 13.9946 0C6.26602 0 0 6.09155 0 13.6069C0 21.1222 6.26602 27.2138 13.9946 27.2138C21.7232 27.2138 27.9892 21.1201 27.9892 13.6069C27.9892 10.8756 27.1599 8.33172 25.734 6.2014C28.42 6.03554 30.5417 3.86645 30.5417 1.21486V0.0452341H15.1449L15.147 0.0473877ZM24.489 20.3748L19.3344 18.6257H8.65913C5.82445 18.6257 3.50458 16.3705 3.50458 13.6134C3.50458 12.2348 4.08401 10.9812 5.01885 10.0722C5.95154 9.16532 7.24179 8.60097 8.65913 8.60097H19.3344C22.1691 8.60097 24.489 10.8562 24.489 13.6134V20.3726V20.3748Z" fill="url(#paint5_linear_79_3946)"/>
            <path d="M9.89691 15.3814C10.9057 15.3814 11.7235 14.5867 11.7235 13.6065C11.7235 12.6262 10.9057 11.8315 9.89691 11.8315C8.88811 11.8315 8.07031 12.6262 8.07031 13.6065C8.07031 14.5867 8.88811 15.3814 9.89691 15.3814Z" fill="url(#paint6_linear_79_3946)"/>
            <path d="M17.1977 15.3814C18.2065 15.3814 19.0243 14.5867 19.0243 13.6065C19.0243 12.6262 18.2065 11.8315 17.1977 11.8315C16.1889 11.8315 15.3711 12.6262 15.3711 13.6065C15.3711 14.5867 16.1889 15.3814 17.1977 15.3814Z" fill="url(#paint7_linear_79_3946)"/>
            <defs>
            <linearGradient id="paint0_linear_79_3946" x1="26.7794" y1="30.9136" x2="1.83594" y2="30.9136" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_79_3946" x1="30.5417" y1="13.6069" x2="0" y2="13.6069" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            <linearGradient id="paint2_linear_79_3946" x1="11.7235" y1="13.6064" x2="8.07031" y2="13.6064" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            <linearGradient id="paint3_linear_79_3946" x1="19.0243" y1="13.6064" x2="15.3711" y2="13.6064" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            <linearGradient id="paint4_linear_79_3946" x1="26.7794" y1="30.9136" x2="1.83594" y2="30.9136" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            <linearGradient id="paint5_linear_79_3946" x1="30.5417" y1="13.6069" x2="0" y2="13.6069" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            <linearGradient id="paint6_linear_79_3946" x1="11.7235" y1="13.6064" x2="8.07031" y2="13.6064" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            <linearGradient id="paint7_linear_79_3946" x1="19.0243" y1="13.6064" x2="15.3711" y2="13.6064" gradientUnits="userSpaceOnUse">
            <stop stop-color="#187EFD"/>
            <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
            </defs>
            </svg> : i === 1 ? <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.4974 27.5008C4.9974 29.6008 4.16406 35.8341 4.16406 35.8341C4.16406 35.8341 10.3974 35.0008 12.4974 32.5008C13.6807 31.1008 13.6641 28.9508 12.3474 27.6508C11.6996 27.0325 10.8462 26.6752 9.95111 26.6475C9.05599 26.6198 8.18219 26.9237 7.4974 27.5008Z" stroke="url(#paint0_linear_79_3962)" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 25.0006L15 20.0006C15.8869 17.6996 17.0037 15.494 18.3333 13.4172C20.2753 10.3122 22.9794 7.75566 26.1883 5.99073C29.3973 4.2258 33.0044 3.31119 36.6667 3.33391C36.6667 7.86724 35.3667 15.8339 26.6667 21.6672C24.5615 22.9984 22.3281 24.1151 20 25.0006Z" stroke="url(#paint1_linear_79_3962)" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.9974 20.0013H6.66406C6.66406 20.0013 7.58073 14.9513 9.9974 13.3347C12.6974 11.5347 18.3307 13.3347 18.3307 13.3347" stroke="url(#paint2_linear_79_3962)" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 25.0003V33.3337C20 33.3337 25.05 32.417 26.6667 30.0003C28.4667 27.3003 26.6667 21.667 26.6667 21.667" stroke="url(#paint3_linear_79_3962)" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_79_3962" x1="13.3609" y1="31.2399" x2="4.16406" y2="31.2399" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#187EFD"/>
                    <stop offset="1" stop-color="#0048FF"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_79_3962" x1="36.6667" y1="14.167" x2="15" y2="14.167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#187EFD"/>
                    <stop offset="1" stop-color="#0048FF"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_79_3962" x1="18.3307" y1="16.268" x2="6.66406" y2="16.268" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#187EFD"/>
                    <stop offset="1" stop-color="#0048FF"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_79_3962" x1="27.4667" y1="27.5003" x2="20" y2="27.5003" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#187EFD"/>
                    <stop offset="1" stop-color="#0048FF"/>
                  </linearGradient>
                </defs>
              </svg>
              : <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.9659 17.8333C34.5992 11.3333 29.7826 5.91667 23.3492 4.81667C23.2492 3.53333 22.1826 2.5 20.8659 2.5H19.1992C17.8826 2.5 16.8326 3.51667 16.7159 4.8C10.2492 5.86667 5.39922 11.3 5.03255 17.8333C3.84922 18.0333 2.94922 19.05 2.94922 20.2833V21.95C2.94922 23.3333 4.06589 24.45 5.44922 24.45H7.11589C8.49922 24.45 9.61589 23.3333 9.61589 21.95V20.2833C9.61589 19.05 8.71589 18.0333 7.53255 17.8333C7.88255 12.6333 11.6992 8.31667 16.7992 7.31667C17.0826 8.38333 18.0492 9.16667 19.1992 9.16667H20.8659C22.0159 9.16667 22.9659 8.38333 23.2659 7.33333C28.3326 8.35 32.1159 12.6667 32.4659 17.8333C31.2826 18.0333 30.3825 19.05 30.3825 20.2833V21.95C30.3825 23.3333 31.4992 24.45 32.8825 24.45H34.5492C35.9325 24.45 37.0492 23.3333 37.0492 21.95V20.2833C37.0492 19.05 36.1492 18.0167 34.9659 17.8333Z" fill="url(#paint0_linear_377_1616)"/>
                <path d="M26.2826 27.5833L23.5492 30H16.4659L13.7326 27.5833C12.1492 26.2833 12.1492 25.2833 13.3492 23.75L18.1659 17.65C18.4992 17.2333 18.8826 16.95 19.3159 16.8C19.7659 16.65 20.2492 16.65 20.7159 16.8C21.1326 16.95 21.5159 17.2333 21.8659 17.65L26.6659 23.7333C27.8826 25.2667 27.8159 26.2167 26.2826 27.5833Z" fill="url(#paint1_linear_377_1616)"/>
                <path d="M22.2009 36.6667H17.8843C16.3509 36.6667 15.2009 35.4167 15.5009 34.0834L16.0176 31.7667C16.1176 31.3001 16.5343 30.9834 17.0009 30.9834H23.0843C23.5509 30.9834 23.9509 31.3001 24.0676 31.7667L24.5843 34.0834C24.9009 35.5001 23.8343 36.6667 22.2009 36.6667Z" fill="url(#paint2_linear_377_1616)"/>
                <defs>
                  <linearGradient id="paint0_linear_377_1616" x1="37.0492" y1="13.475" x2="2.94922" y2="13.475" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#187EFD"/>
                    <stop offset="1" stop-color="#0048FF"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_377_1616" x1="27.5124" y1="23.3437" x2="12.4922" y2="23.3437" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#187EFD"/>
                    <stop offset="1" stop-color="#0048FF"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_377_1616" x1="24.6399" y1="33.8251" x2="15.4531" y2="33.8251" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#187EFD"/>
                    <stop offset="1" stop-color="#0048FF"/>
                  </linearGradient>
                </defs>
              </svg>
          }
          <h3>{title}</h3><p>{text}</p>
        </article>)}
      </section>

      <section className="case sectionPad case-padding">
        <svg width="109" height="32" viewBox="0 0 109 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.02 23.216C3.186 23.216 0.702 20.552 0.702 16.43C0.702 12.344 3.276 9.626 7.128 9.626C10.242 9.626 12.564 11.444 13.014 14.27H10.584C10.134 12.74 8.82 11.84 7.074 11.84C4.644 11.84 3.114 13.604 3.114 16.412C3.114 19.202 4.662 21.002 7.074 21.002C8.856 21.002 10.224 20.066 10.656 18.608H13.05C12.546 21.38 10.134 23.216 7.02 23.216ZM17.2624 23.234C15.3724 23.234 14.2204 22.136 14.2204 20.462C14.2204 18.824 15.4084 17.798 17.5144 17.636L20.1784 17.438V17.24C20.1784 16.034 19.4584 15.548 18.3424 15.548C17.0464 15.548 16.3264 16.088 16.3264 17.024H14.4544C14.4544 15.098 16.0384 13.838 18.4504 13.838C20.8444 13.838 22.3204 15.134 22.3204 17.6V23H20.3944L20.2324 21.686C19.8544 22.604 18.6484 23.234 17.2624 23.234ZM17.9824 21.578C19.3324 21.578 20.1964 20.768 20.1964 19.4V18.932L18.3424 19.076C16.9744 19.202 16.4524 19.652 16.4524 20.372C16.4524 21.182 16.9924 21.578 17.9824 21.578ZM23.7938 20.3H25.8818C25.8998 21.074 26.4758 21.56 27.4838 21.56C28.5098 21.56 29.0678 21.146 29.0678 20.498C29.0678 20.048 28.8338 19.724 28.0418 19.544L26.4398 19.166C24.8378 18.806 24.0638 18.05 24.0638 16.628C24.0638 14.882 25.5398 13.838 27.5918 13.838C29.5898 13.838 30.9398 14.99 30.9578 16.718H28.8698C28.8518 15.962 28.3478 15.476 27.5018 15.476C26.6378 15.476 26.1338 15.872 26.1338 16.538C26.1338 17.042 26.5298 17.366 27.2858 17.546L28.8878 17.924C30.3818 18.266 31.1378 18.95 31.1378 20.318C31.1378 22.118 29.6078 23.234 27.4118 23.234C25.1978 23.234 23.7938 22.046 23.7938 20.3ZM36.7878 23.234C34.1418 23.234 32.2878 21.308 32.2878 18.554C32.2878 15.764 34.1058 13.838 36.7158 13.838C39.3798 13.838 41.0718 15.62 41.0718 18.392V19.058L34.3758 19.076C34.5378 20.642 35.3658 21.434 36.8238 21.434C38.0298 21.434 38.8218 20.966 39.0738 20.12H41.1078C40.7298 22.064 39.1098 23.234 36.7878 23.234ZM36.7338 15.638C35.4378 15.638 34.6458 16.34 34.4298 17.672H38.8938C38.8938 16.448 38.0478 15.638 36.7338 15.638ZM47.2489 13.514C47.2489 11.21 49.1569 9.608 51.9289 9.608C54.5929 9.608 56.2849 11.084 56.3569 13.46H54.0529C53.9989 12.326 53.1889 11.66 51.8929 11.66C50.4709 11.66 49.5529 12.344 49.5529 13.442C49.5529 14.378 50.0569 14.9 51.1549 15.152L53.2249 15.602C55.4749 16.088 56.5729 17.24 56.5729 19.202C56.5729 21.65 54.6649 23.234 51.7669 23.234C48.9589 23.234 47.1229 21.74 47.0689 19.382H49.3729C49.3909 20.498 50.2909 21.164 51.7669 21.164C53.2969 21.164 54.2689 20.498 54.2689 19.4C54.2689 18.518 53.8189 17.996 52.7389 17.762L50.6509 17.294C48.4189 16.808 47.2489 15.53 47.2489 13.514ZM61.3572 23H59.1612V15.944H57.4512V14.108H59.1612V11.336H61.3572V14.108H63.0852V15.944H61.3572V23ZM70.4804 14.108H72.6764V23H70.6424L70.4804 21.812C69.9404 22.658 68.7884 23.234 67.6004 23.234C65.5484 23.234 64.3424 21.848 64.3424 19.67V14.108H66.5384V18.896C66.5384 20.588 67.2044 21.272 68.4284 21.272C69.8144 21.272 70.4804 20.462 70.4804 18.77V14.108ZM78.4228 23.234C75.8488 23.234 74.2468 21.344 74.2468 18.59C74.2468 15.818 75.8668 13.838 78.5488 13.838C79.7908 13.838 80.8888 14.36 81.4468 15.242V9.608H83.6248V23H81.6088L81.4648 21.614C80.9248 22.64 79.7728 23.234 78.4228 23.234ZM78.9088 21.218C80.4388 21.218 81.4288 20.12 81.4288 18.518C81.4288 16.916 80.4388 15.8 78.9088 15.8C77.3788 15.8 76.4428 16.934 76.4428 18.518C76.4428 20.102 77.3788 21.218 78.9088 21.218ZM85.1393 27.122V25.286H86.4533C87.3173 25.286 87.8573 25.088 88.2353 24.044L88.4873 23.378L84.9053 14.108H87.2273L89.5133 20.588L91.9253 14.108H94.1933L89.8373 24.98C89.1713 26.636 88.2353 27.32 86.7773 27.32C86.1653 27.32 85.6253 27.248 85.1393 27.122Z" fill="#151515"/>
          <path d="M87 9L100.141 9.15578V18L109 8.92291V0H95.4466L87 9Z" fill="url(#paint0_linear_79_4456)"/>
          <defs>
            <linearGradient id="paint0_linear_79_4456" x1="109" y1="9" x2="87" y2="9" gradientUnits="userSpaceOnUse">
              <stop stop-color="#187EFD"/>
              <stop offset="1" stop-color="#0048FF"/>
            </linearGradient>
          </defs>
        </svg>

        <h2>See Smart Systems in<br />Action</h2>
        <p>Watch how our AI-powered systems handle leads, automate workflows, and generate results in real-time.</p>
        <div className="video"><CirclePlay className="play" size={42} /></div>
      </section>

      <ServicesSection />

      <section className="testimonial sectionPad testimonial-pading">
        <div className="testimonialContent">
          <svg width="207" height="32" viewBox="0 0 207 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.702 13.514C0.702 11.21 2.61 9.608 5.382 9.608C8.046 9.608 9.738 11.084 9.81 13.46H7.506C7.452 12.326 6.642 11.66 5.346 11.66C3.924 11.66 3.006 12.344 3.006 13.442C3.006 14.378 3.51 14.9 4.608 15.152L6.678 15.602C8.928 16.088 10.026 17.24 10.026 19.202C10.026 21.65 8.118 23.234 5.22 23.234C2.412 23.234 0.576 21.74 0.522 19.382H2.826C2.844 20.498 3.744 21.164 5.22 21.164C6.75 21.164 7.722 20.498 7.722 19.4C7.722 18.518 7.272 17.996 6.192 17.762L4.104 17.294C1.872 16.808 0.702 15.53 0.702 13.514ZM14.8103 23H12.6143V15.944H10.9043V14.108H12.6143V11.336H14.8103V14.108H16.5383V15.944H14.8103V23ZM17.2936 18.536C17.2936 15.764 19.2916 13.856 22.0456 13.856C24.7996 13.856 26.7976 15.764 26.7976 18.536C26.7976 21.308 24.7996 23.216 22.0456 23.216C19.2916 23.216 17.2936 21.308 17.2936 18.536ZM19.4896 18.536C19.4896 20.156 20.5336 21.254 22.0456 21.254C23.5576 21.254 24.6016 20.156 24.6016 18.536C24.6016 16.916 23.5576 15.818 22.0456 15.818C20.5336 15.818 19.4896 16.916 19.4896 18.536ZM34.1183 14.072V16.106H33.3083C31.7243 16.106 30.7343 16.952 30.7343 18.68V23H28.5383V14.126H30.6083L30.7343 15.422C31.1123 14.54 31.9583 13.946 33.1463 13.946C33.4523 13.946 33.7583 13.982 34.1183 14.072ZM36.7027 12.326C35.9467 12.326 35.3527 11.732 35.3527 10.994C35.3527 10.256 35.9467 9.68 36.7027 9.68C37.4227 9.68 38.0167 10.256 38.0167 10.994C38.0167 11.732 37.4227 12.326 36.7027 12.326ZM35.6047 23V14.108H37.8007V23H35.6047ZM44.0475 23.234C41.4015 23.234 39.5475 21.308 39.5475 18.554C39.5475 15.764 41.3655 13.838 43.9755 13.838C46.6395 13.838 48.3315 15.62 48.3315 18.392V19.058L41.6355 19.076C41.7975 20.642 42.6255 21.434 44.0835 21.434C45.2895 21.434 46.0815 20.966 46.3335 20.12H48.3675C47.9895 22.064 46.3695 23.234 44.0475 23.234ZM43.9935 15.638C42.6975 15.638 41.9055 16.34 41.6895 17.672H46.1535C46.1535 16.448 45.3075 15.638 43.9935 15.638ZM49.4051 20.3H51.4931C51.5111 21.074 52.0871 21.56 53.0951 21.56C54.1211 21.56 54.6791 21.146 54.6791 20.498C54.6791 20.048 54.4451 19.724 53.6531 19.544L52.0511 19.166C50.4491 18.806 49.6751 18.05 49.6751 16.628C49.6751 14.882 51.1511 13.838 53.2031 13.838C55.2011 13.838 56.5511 14.99 56.5691 16.718H54.4811C54.4631 15.962 53.9591 15.476 53.1131 15.476C52.2491 15.476 51.7451 15.872 51.7451 16.538C51.7451 17.042 52.1411 17.366 52.8971 17.546L54.4991 17.924C55.9931 18.266 56.7491 18.95 56.7491 20.318C56.7491 22.118 55.2191 23.234 53.0231 23.234C50.8091 23.234 49.4051 22.046 49.4051 20.3ZM62.3907 14.108H63.6687V13.028C63.6687 10.616 64.9467 9.608 66.8727 9.608C67.2147 9.608 67.6287 9.626 68.0067 9.698V11.57H67.2327C66.1167 11.57 65.8467 12.146 65.8467 13.028V14.108H67.9707V15.944H65.8467V23H63.6687V15.944H62.3907V14.108ZM74.9523 14.072V16.106H74.1423C72.5583 16.106 71.5683 16.952 71.5683 18.68V23H69.3723V14.126H71.4423L71.5683 15.422C71.9463 14.54 72.7923 13.946 73.9803 13.946C74.2863 13.946 74.5923 13.982 74.9523 14.072ZM75.6179 18.536C75.6179 15.764 77.6159 13.856 80.3699 13.856C83.1239 13.856 85.1219 15.764 85.1219 18.536C85.1219 21.308 83.1239 23.216 80.3699 23.216C77.6159 23.216 75.6179 21.308 75.6179 18.536ZM77.8139 18.536C77.8139 20.156 78.8579 21.254 80.3699 21.254C81.8819 21.254 82.9259 20.156 82.9259 18.536C82.9259 16.916 81.8819 15.818 80.3699 15.818C78.8579 15.818 77.8139 16.916 77.8139 18.536ZM89.0585 23H86.8625V14.108H88.8785L89.0585 15.152C89.5085 14.414 90.4085 13.838 91.6865 13.838C93.0365 13.838 93.9725 14.504 94.4405 15.53C94.8905 14.504 95.9345 13.838 97.2845 13.838C99.4445 13.838 100.633 15.134 100.633 17.186V23H98.4545V17.762C98.4545 16.484 97.7705 15.818 96.7265 15.818C95.6645 15.818 94.8545 16.502 94.8545 17.96V23H92.6585V17.744C92.6585 16.502 91.9925 15.836 90.9485 15.836C89.9045 15.836 89.0585 16.52 89.0585 17.96V23ZM107.118 18.536C107.118 15.764 109.116 13.856 111.87 13.856C114.624 13.856 116.622 15.764 116.622 18.536C116.622 21.308 114.624 23.216 111.87 23.216C109.116 23.216 107.118 21.308 107.118 18.536ZM109.314 18.536C109.314 20.156 110.358 21.254 111.87 21.254C113.382 21.254 114.426 20.156 114.426 18.536C114.426 16.916 113.382 15.818 111.87 15.818C110.358 15.818 109.314 16.916 109.314 18.536ZM124.182 14.108H126.378V23H124.344L124.182 21.812C123.642 22.658 122.49 23.234 121.302 23.234C119.25 23.234 118.044 21.848 118.044 19.67V14.108H120.24V18.896C120.24 20.588 120.906 21.272 122.13 21.272C123.516 21.272 124.182 20.462 124.182 18.77V14.108ZM134.226 14.072V16.106H133.416C131.832 16.106 130.842 16.952 130.842 18.68V23H128.646V14.126H130.716L130.842 15.422C131.22 14.54 132.066 13.946 133.254 13.946C133.56 13.946 133.866 13.982 134.226 14.072ZM140.042 18.536C140.042 15.782 141.86 13.838 144.488 13.838C146.918 13.838 148.574 15.188 148.808 17.33H146.612C146.36 16.322 145.622 15.8 144.578 15.8C143.174 15.8 142.238 16.862 142.238 18.536C142.238 20.21 143.102 21.254 144.506 21.254C145.604 21.254 146.378 20.714 146.612 19.742H148.826C148.556 21.812 146.828 23.234 144.506 23.234C141.806 23.234 140.042 21.362 140.042 18.536ZM152.674 23H150.496V9.608H152.674V23ZM156.076 12.326C155.32 12.326 154.726 11.732 154.726 10.994C154.726 10.256 155.32 9.68 156.076 9.68C156.796 9.68 157.39 10.256 157.39 10.994C157.39 11.732 156.796 12.326 156.076 12.326ZM154.978 23V14.108H157.174V23H154.978ZM163.421 23.234C160.775 23.234 158.921 21.308 158.921 18.554C158.921 15.764 160.739 13.838 163.349 13.838C166.013 13.838 167.705 15.62 167.705 18.392V19.058L161.009 19.076C161.171 20.642 161.999 21.434 163.457 21.434C164.663 21.434 165.455 20.966 165.707 20.12H167.741C167.363 22.064 165.743 23.234 163.421 23.234ZM163.367 15.638C162.071 15.638 161.279 16.34 161.063 17.672H165.527C165.527 16.448 164.681 15.638 163.367 15.638ZM171.658 23H169.462V14.108H171.496L171.676 15.26C172.234 14.36 173.314 13.838 174.52 13.838C176.752 13.838 177.904 15.224 177.904 17.528V23H175.708V18.05C175.708 16.556 174.97 15.836 173.836 15.836C172.486 15.836 171.658 16.772 171.658 18.212V23ZM183.086 23H180.89V15.944H179.18V14.108H180.89V11.336H183.086V14.108H184.814V15.944H183.086V23ZM185.495 20.3H187.583C187.601 21.074 188.177 21.56 189.185 21.56C190.211 21.56 190.769 21.146 190.769 20.498C190.769 20.048 190.535 19.724 189.743 19.544L188.141 19.166C186.539 18.806 185.765 18.05 185.765 16.628C185.765 14.882 187.241 13.838 189.293 13.838C191.291 13.838 192.641 14.99 192.659 16.718H190.571C190.553 15.962 190.049 15.476 189.203 15.476C188.339 15.476 187.835 15.872 187.835 16.538C187.835 17.042 188.231 17.366 188.987 17.546L190.589 17.924C192.083 18.266 192.839 18.95 192.839 20.318C192.839 22.118 191.309 23.234 189.113 23.234C186.899 23.234 185.495 22.046 185.495 20.3Z" fill="#151515"/>
            <path d="M185 9L198.141 9.15578V18L207 8.92291V0H193.447L185 9Z" fill="url(#paint0_linear_83_6278)"/>
            <defs>
              <linearGradient id="paint0_linear_83_6278" x1="207" y1="9" x2="185" y2="9" gradientUnits="userSpaceOnUse">
                <stop stop-color="#187EFD"/>
                <stop offset="1" stop-color="#0048FF"/>
              </linearGradient>
            </defs>
          </svg>
          <h2>{testimonial.title.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2>
          <p>{testimonial.text}</p>
        </div>
        <div className="portrait"><img src={testimonial.image} /><div><b>{testimonial.name}</b><small>{testimonial.role}</small></div></div>
        <div className="testimonialNav">
          <button
            type="button"
            className="navArrow prev"
            aria-label="Previous testimonial"
            onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonialSlides.length) % testimonialSlides.length)}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="dots">
            {testimonialSlides.map((_, i) => (
              <button
                className={activeTestimonial === i ? 'active' : ''}
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActiveTestimonial(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="navArrow next"
            aria-label="Next testimonial"
            onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonialSlides.length)}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      <section className="cta cta-padding" id="proposal">
        <h2>Get started with <span>Smart Global Hub</span></h2>
        <div className="ctaCards">
          <article><h3>Smart Visitor Management<br />for Safer, Smarter Spaces</h3><p>Digitize visitor entry, approvals, and access control for schools, offices, and residential communities.</p><a className="btn" href="/contact">Get a Demo</a></article>
          <article><h3>AI That Handles Your<br />Business</h3><p>Automate conversations, leads, and workflows with intelligent systems that work 24/7.</p><a className="btn" href="/contact">Try for free</a></article>
          <article><h3>Powerful Systems. Built for<br />Scale.</h3><p>Custom platforms and SaaS solutions tailored to your business operations.</p><a className="btn" href="/contact">Build Your System</a></article>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
createRoot(document.getElementById('root')).render(<App />);
