import React from 'react';
import { Rocket } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SaaSPage() {
  const saasFeatures = [
    [
      "AI Chatbots - Website &\nSocial Media platforms",
      "Deploy intelligent AI chatbots that engage visitors instantly across your website and Social media platforms. These bots understand user intent, answer queries, capture leads, and guide customers through your services — all in real time.",
      ["Responds instantly to customer inquiries", "Handles FAQs and product/service queries", "Captures and stores lead information", "Works 24/7 without human intervention"]
    ],
    [
      "Lead Qualification Automation",
      "Automatically filter and qualify incoming leads based on predefined criteria such as budget, interest, and urgency — ensuring your team focuses only on high-quality prospects.",
      ["Asks smart, pre-defined questions", "Scores leads based on behavior and responses", "Routes qualified leads to your sales team", "Reduces time wasted on unqualified prospects"]
    ],
    [
      "CRM Workflow Integration",
      "Seamlessly connect your AI systems with your CRM to automate data flow, task assignments, and follow-ups — creating a fully synchronized business workflow.",
      ["Automatically logs leads into your CRM", "Triggers follow-up emails and reminders", "Assigns leads to the right team members", "Keeps all customer data organized and updated"]
    ],
    [
      "Customer Support Automation",
      "Provide fast, consistent, and reliable customer support using AI-powered systems that resolve common queries and escalate complex issues when needed.",
      ["Handles support queries instantly", "Reduces support team workload", "Provides consistent responses", "Escalates complex cases to human agents"]
    ]
  ];

  return <>
    <Header />
    <main className="solutionsPage">
      <section className="solutionHero" style={{ backgroundImage: 'url("/logos/saasbg.png")' }}>
        <div className="heroContent" >
          <div className="heroText">
            <h1>Build Custom<br /><span>SaaS Solutions</span></h1>
            <p>We develop custom SaaS applications and software solutions that scale with your business. From MVP to enterprise, we build products that users love.</p>
            <a className="btn greenBtn" href="/contact">Get Free Consultation</a>
          </div>
          <div className="heroImage">
            <img src="/logos/saas1.png" alt="" />
          </div>

        </div>
      </section>

      <section className="problemBlock solutionContent">
        <div className="splitHeading">
          <div>
            <svg width="134" height="32" viewBox="0 0 134 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.306 11.966V9.842H10.314V11.966H6.462V23H4.158V11.966H0.306ZM13.9472 23H11.7512V9.608H13.9652V15.26C14.5232 14.396 15.5672 13.838 16.8452 13.838C19.0412 13.838 20.1932 15.224 20.1932 17.528V23H17.9972V18.05C17.9972 16.556 17.2592 15.836 16.1432 15.836C14.7572 15.836 13.9472 16.808 13.9472 18.14V23ZM26.3288 23.234C23.6828 23.234 21.8288 21.308 21.8288 18.554C21.8288 15.764 23.6468 13.838 26.2568 13.838C28.9208 13.838 30.6128 15.62 30.6128 18.392V19.058L23.9168 19.076C24.0788 20.642 24.9068 21.434 26.3648 21.434C27.5708 21.434 28.3628 20.966 28.6148 20.12H30.6488C30.2708 22.064 28.6508 23.234 26.3288 23.234ZM26.2748 15.638C24.9788 15.638 24.1868 16.34 23.9708 17.672H28.4348C28.4348 16.448 27.5888 15.638 26.2748 15.638ZM43.1079 23.216C39.2739 23.216 36.7899 20.552 36.7899 16.43C36.7899 12.344 39.3639 9.626 43.2159 9.626C46.3299 9.626 48.6519 11.444 49.1019 14.27H46.6719C46.2219 12.74 44.9079 11.84 43.1619 11.84C40.7319 11.84 39.2019 13.604 39.2019 16.412C39.2019 19.202 40.7499 21.002 43.1619 21.002C44.9439 21.002 46.3119 20.066 46.7439 18.608H49.1379C48.6339 21.38 46.2219 23.216 43.1079 23.216ZM52.9882 23H50.7922V9.608H53.0062V15.26C53.5642 14.396 54.6082 13.838 55.8862 13.838C58.0822 13.838 59.2342 15.224 59.2342 17.528V23H57.0382V18.05C57.0382 16.556 56.3002 15.836 55.1842 15.836C53.7982 15.836 52.9882 16.808 52.9882 18.14V23ZM64.0378 23.234C62.1478 23.234 60.9958 22.136 60.9958 20.462C60.9958 18.824 62.1838 17.798 64.2898 17.636L66.9538 17.438V17.24C66.9538 16.034 66.2338 15.548 65.1178 15.548C63.8218 15.548 63.1018 16.088 63.1018 17.024H61.2298C61.2298 15.098 62.8138 13.838 65.2258 13.838C67.6198 13.838 69.0958 15.134 69.0958 17.6V23H67.1698L67.0078 21.686C66.6298 22.604 65.4238 23.234 64.0378 23.234ZM64.7578 21.578C66.1078 21.578 66.9718 20.768 66.9718 19.4V18.932L65.1178 19.076C63.7498 19.202 63.2278 19.652 63.2278 20.372C63.2278 21.182 63.7678 21.578 64.7578 21.578ZM73.4671 23H71.2891V9.608H73.4671V23ZM77.9847 23H75.8067V9.608H77.9847V23ZM84.2663 23.234C81.6203 23.234 79.7663 21.308 79.7663 18.554C79.7663 15.764 81.5843 13.838 84.1943 13.838C86.8583 13.838 88.5503 15.62 88.5503 18.392V19.058L81.8543 19.076C82.0163 20.642 82.8443 21.434 84.3023 21.434C85.5083 21.434 86.3003 20.966 86.5523 20.12H88.5863C88.2083 22.064 86.5883 23.234 84.2663 23.234ZM84.2123 15.638C82.9163 15.638 82.1243 16.34 81.9083 17.672H86.3723C86.3723 16.448 85.5263 15.638 84.2123 15.638ZM92.5038 23H90.3078V14.108H92.3418L92.5218 15.26C93.0798 14.36 94.1598 13.838 95.3658 13.838C97.5978 13.838 98.7498 15.224 98.7498 17.528V23H96.5538V18.05C96.5538 16.556 95.8158 15.836 94.6818 15.836C93.3318 15.836 92.5038 16.772 92.5038 18.212V23ZM100.403 18.356C100.403 15.764 102.095 13.82 104.633 13.82C105.965 13.82 107.009 14.378 107.531 15.332L107.657 14.108H109.691V22.55C109.691 25.52 107.909 27.374 105.029 27.374C102.473 27.374 100.727 25.916 100.457 23.54H102.653C102.797 24.692 103.679 25.376 105.029 25.376C106.541 25.376 107.513 24.422 107.513 22.946V21.47C106.955 22.298 105.857 22.82 104.579 22.82C102.059 22.82 100.403 20.93 100.403 18.356ZM102.617 18.302C102.617 19.796 103.571 20.912 105.011 20.912C106.523 20.912 107.459 19.85 107.459 18.302C107.459 16.79 106.541 15.746 105.011 15.746C103.553 15.746 102.617 16.844 102.617 18.302ZM115.942 23.234C113.296 23.234 111.442 21.308 111.442 18.554C111.442 15.764 113.26 13.838 115.87 13.838C118.534 13.838 120.226 15.62 120.226 18.392V19.058L113.53 19.076C113.692 20.642 114.52 21.434 115.978 21.434C117.184 21.434 117.976 20.966 118.228 20.12H120.262C119.884 22.064 118.264 23.234 115.942 23.234ZM115.888 15.638C114.592 15.638 113.8 16.34 113.584 17.672H118.048C118.048 16.448 117.202 15.638 115.888 15.638Z" fill="#151515"/>
              <path d="M112 9L125.141 9.15578V18L134 8.92291V0H120.447L112 9Z" fill="url(#paint0_linear_262_25459)"/>
              <defs>
                <linearGradient id="paint0_linear_262_25459" x1="134" y1="9" x2="112" y2="9" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#22A92E"/>
                  <stop offset="1" stop-color="#AFD5B1"/>
                </linearGradient>
              </defs>
            </svg>


            <h2>Manual Work Is Slowing <br />You Down</h2>
          </div>
          <p>Businesses waste hours on repetitive tasks — responding to leads, managing workflows, and handling customer queries manually. This leads to delays, inefficiency, and missed opportunities.</p>
        </div>
        <img className="widePeople" src="/logos/saas3.png" />
        <div className="painTags">
          {['Hours wasted on repetitive tasks','Missed leads and opportunities','Slow response to customer queries','Limited scalability without hiring'].map((x) => <span key={x}>{x}</span>)}
        </div>
      </section>

      <section className="solutionBlock solutionContent">
        <div className="splitHeading">
          <div>
            <svg width="122" height="34" viewBox="0 0 122 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.464 18.412C13.464 22.408 10.836 25.216 7.056 25.216C3.294 25.216 0.702 22.426 0.702 18.412C0.702 14.416 3.312 11.608 7.074 11.608C10.836 11.608 13.464 14.398 13.464 18.412ZM11.034 18.412C11.034 15.604 9.486 13.822 7.074 13.822C4.662 13.822 3.114 15.604 3.114 18.412C3.114 21.22 4.662 23.002 7.074 23.002C9.486 23.002 11.034 21.184 11.034 18.412ZM21.3144 16.108H23.5104V25H21.4764L21.3144 23.812C20.7744 24.658 19.6224 25.234 18.4344 25.234C16.3824 25.234 15.1764 23.848 15.1764 21.67V16.108H17.3724V20.896C17.3724 22.588 18.0384 23.272 19.2624 23.272C20.6484 23.272 21.3144 22.462 21.3144 20.77V16.108ZM31.3585 16.072V18.106H30.5485C28.9645 18.106 27.9745 18.952 27.9745 20.68V25H25.7785V16.126H27.8485L27.9745 17.422C28.3525 16.54 29.1985 15.946 30.3865 15.946C30.6925 15.946 30.9985 15.982 31.3585 16.072ZM37.2645 15.514C37.2645 13.21 39.1725 11.608 41.9445 11.608C44.6085 11.608 46.3005 13.084 46.3725 15.46H44.0685C44.0145 14.326 43.2045 13.66 41.9085 13.66C40.4865 13.66 39.5685 14.344 39.5685 15.442C39.5685 16.378 40.0725 16.9 41.1705 17.152L43.2405 17.602C45.4905 18.088 46.5885 19.24 46.5885 21.202C46.5885 23.65 44.6805 25.234 41.7825 25.234C38.9745 25.234 37.1385 23.74 37.0845 21.382H39.3885C39.4065 22.498 40.3065 23.164 41.7825 23.164C43.3125 23.164 44.2845 22.498 44.2845 21.4C44.2845 20.518 43.8345 19.996 42.7545 19.762L40.6665 19.294C38.4345 18.808 37.2645 17.53 37.2645 15.514ZM47.8268 20.536C47.8268 17.764 49.8248 15.856 52.5788 15.856C55.3328 15.856 57.3308 17.764 57.3308 20.536C57.3308 23.308 55.3328 25.216 52.5788 25.216C49.8248 25.216 47.8268 23.308 47.8268 20.536ZM50.0228 20.536C50.0228 22.156 51.0668 23.254 52.5788 23.254C54.0908 23.254 55.1348 22.156 55.1348 20.536C55.1348 18.916 54.0908 17.818 52.5788 17.818C51.0668 17.818 50.0228 18.916 50.0228 20.536ZM61.2855 25H59.1075V11.608H61.2855V25ZM69.6191 16.108H71.8151V25H69.7811L69.6191 23.812C69.0791 24.658 67.9271 25.234 66.7391 25.234C64.6871 25.234 63.4811 23.848 63.4811 21.67V16.108H65.6771V20.896C65.6771 22.588 66.3431 23.272 67.5671 23.272C68.9531 23.272 69.6191 22.462 69.6191 20.77V16.108ZM77.1072 25H74.9112V17.944H73.2012V16.108H74.9112V13.336H77.1072V16.108H78.8352V17.944H77.1072V25ZM81.2984 14.326C80.5424 14.326 79.9484 13.732 79.9484 12.994C79.9484 12.256 80.5424 11.68 81.2984 11.68C82.0184 11.68 82.6124 12.256 82.6124 12.994C82.6124 13.732 82.0184 14.326 81.2984 14.326ZM80.2004 25V16.108H82.3964V25H80.2004ZM84.1433 20.536C84.1433 17.764 86.1413 15.856 88.8953 15.856C91.6493 15.856 93.6473 17.764 93.6473 20.536C93.6473 23.308 91.6493 25.216 88.8953 25.216C86.1413 25.216 84.1433 23.308 84.1433 20.536ZM86.3393 20.536C86.3393 22.156 87.3833 23.254 88.8953 23.254C90.4073 23.254 91.4513 22.156 91.4513 20.536C91.4513 18.916 90.4073 17.818 88.8953 17.818C87.3833 17.818 86.3393 18.916 86.3393 20.536ZM97.5839 25H95.3879V16.108H97.4219L97.6019 17.26C98.1599 16.36 99.2399 15.838 100.446 15.838C102.678 15.838 103.83 17.224 103.83 19.528V25H101.634V20.05C101.634 18.556 100.896 17.836 99.7619 17.836C98.4119 17.836 97.5839 18.772 97.5839 20.212V25Z" fill="#151515"/>
              <path d="M100 9L113.141 9.15578V18L122 8.92291V0H108.447L100 9Z" fill="url(#paint0_linear_248_18718)"/>
              <defs>
                <linearGradient id="paint0_linear_248_18718" x1="122" y1="9" x2="100" y2="9" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#22A92E"/>
                  <stop offset="1" stop-color="#AFD5B1"/>
                </linearGradient>
              </defs>
            </svg>

            <h2>Smart Automation That <br />Works for You</h2>
          </div>
          <p>We create AI-driven systems that handle routine operations automatically, allowing your team to focus on growth and strategy.</p>
        </div>
        <img className="widePeople" src="/logos/saas4.png" />
        <div className="successTags">
          {['Intelligent Automation','Lightning Fast','Enterprise-grade security and uptime','Handle 10x volume without hiring'].map((x) => <span key={x}>{x}</span>)}
        </div>
      </section>

      <section className="solutionFeatures">
        <div className="solutionFeatureInner">
          <svg width="104" height="37" viewBox="0 0 104 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.658 22.618H3.762V28H1.458V14.842H9.594V16.966H3.762V20.548H8.658V22.618ZM19.8429 28H11.6709V14.842H19.8429V16.966H13.9749V20.35H19.2309V22.384H13.9749V25.876H19.8429V28ZM23.4748 28H21.0808L25.8328 14.842H28.1908L32.9428 28H30.5128L29.4508 24.958H24.5368L23.4748 28ZM26.7148 18.766L25.2208 23.014H28.7848L27.2728 18.766C27.1648 18.424 27.0388 18.028 27.0028 17.758C26.9488 18.01 26.8408 18.406 26.7148 18.766ZM32.263 16.966V14.842H42.271V16.966H38.419V28H36.115V16.966H32.263ZM43.9422 23.194V14.842H46.2462V23.05C46.2462 24.94 47.2722 25.984 49.1442 25.984C51.0162 25.984 52.0602 24.922 52.0602 23.05V14.842H54.3642V23.194C54.3642 26.272 52.3482 28.216 49.1442 28.216C45.9582 28.216 43.9422 26.29 43.9422 23.194ZM59.5022 28H57.1982V14.842H62.2202C65.2082 14.842 66.9542 16.354 66.9542 18.946C66.9542 20.71 66.1262 21.97 64.5782 22.6L67.0802 28H64.5602L62.3282 23.086H59.5022V28ZM59.5022 16.894V21.052H62.2202C63.6782 21.052 64.5422 20.278 64.5422 18.946C64.5422 17.632 63.6782 16.894 62.2202 16.894H59.5022ZM77.4288 28H69.2568V14.842H77.4288V16.966H71.5608V20.35H76.8168V22.384H71.5608V25.876H77.4288V28ZM79.1708 18.514C79.1708 16.21 81.0788 14.608 83.8508 14.608C86.5148 14.608 88.2068 16.084 88.2788 18.46H85.9748C85.9208 17.326 85.1108 16.66 83.8148 16.66C82.3928 16.66 81.4748 17.344 81.4748 18.442C81.4748 19.378 81.9788 19.9 83.0768 20.152L85.1468 20.602C87.3968 21.088 88.4948 22.24 88.4948 24.202C88.4948 26.65 86.5868 28.234 83.6888 28.234C80.8808 28.234 79.0448 26.74 78.9908 24.382H81.2948C81.3128 25.498 82.2128 26.164 83.6888 26.164C85.2188 26.164 86.1908 25.498 86.1908 24.4C86.1908 23.518 85.7408 22.996 84.6608 22.762L82.5728 22.294C80.3408 21.808 79.1708 20.53 79.1708 18.514Z" fill="white"/>
            <path d="M82 9L95.1406 9.15578V18L104 8.92291V0H90.4466L82 9Z" fill="url(#paint0_linear_248_18923)"/>
            <defs>
              <linearGradient id="paint0_linear_248_18923" x1="104" y1="9" x2="82" y2="9" gradientUnits="userSpaceOnUse">
                <stop stop-color="#22A92E"/>
                <stop offset="1" stop-color="#AFD5B1"/>
              </linearGradient>
            </defs>
          </svg>

          {saasFeatures.map(([title, text, list], i) => <article className="solutionFeature" key={title}>
            <div>
              <h2>{title.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2>
              <p>{text}</p>
              <ul>{list.map((item) => <li key={item}><svg width="24" height="10" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9L13.1406 9.15578V18L22 8.92291V0H8.44664L0 9Z" fill="url(#paint0_linear_262_25716)"/>
                <defs>
                  <linearGradient id="paint0_linear_262_25716" x1="22" y1="9" x2="0" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#22A92E"/>
                    <stop offset="1" stop-color="#AFD5B1"/>
                  </linearGradient>
                </defs>
              </svg>
                {item}</li>)}</ul>
            </div>
            <div className={`f${i + 1}`}>
              <img
                  className="widePeople"
                  src={
                    i + 1 === 1
                        ? "/logos/saas5.png"
                        : i + 1 === 2
                            ? "/logos/saas5.png"
                            : i + 1 === 3
                                ? "/logos/saas5.png"
                                : i + 1 === 4
                                    ? "/logos/saas5.png"
                                    : "/logos/other.png"
                  }
                  alt=""
              />
            </div>
          </article>)}
        </div>
      </section>

      <section className="letsTalk">
        <h2>Let's talk</h2>
        <p>Get more done, faster — together.</p>
        <a className="btn greenBtn" href="/contact">Contact Us</a>
      </section>
    </main>
    <Footer />
  </>;
}

export default SaaSPage;
