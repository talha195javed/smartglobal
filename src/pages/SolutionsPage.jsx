import React from 'react';
import { Rocket } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { solutionFeatures } from '../data';

function SolutionsPage() {
  return <>
    <Header />
    <main className="solutionsPage">
      <section className="solutionHero">
        <div className="solutionHeroBg" style={{ backgroundImage: 'url("/logos/solbg.png")' }} />
        <h1>Automate Your Business with<br /><span>Intelligent AI</span> Systems</h1>
        <p>From lead handling to customer support, we build AI-powered systems that reduce manual work and help your business run 24/7.</p>
        <a className="btn greenBtn" href="/contact">Get Free Consultation</a>
      </section>

      <section className="problemBlock solutionContent">
        <div className="splitHeading">
          <div>
            <svg width="134" height="32" viewBox="0 0 134 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.306 11.966V9.842H10.314V11.966H6.462V23H4.158V11.966H0.306ZM13.9472 23H11.7512V9.608H13.9652V15.26C14.5232 14.396 15.5672 13.838 16.8452 13.838C19.0412 13.838 20.1932 15.224 20.1932 17.528V23H17.9972V18.05C17.9972 16.556 17.2592 15.836 16.1432 15.836C14.7572 15.836 13.9472 16.808 13.9472 18.14V23ZM26.3288 23.234C23.6828 23.234 21.8288 21.308 21.8288 18.554C21.8288 15.764 23.6468 13.838 26.2568 13.838C28.9208 13.838 30.6128 15.62 30.6128 18.392V19.058L23.9168 19.076C24.0788 20.642 24.9068 21.434 26.3648 21.434C27.5708 21.434 28.3628 20.966 28.6148 20.12H30.6488C30.2708 22.064 28.6508 23.234 26.3288 23.234ZM26.2748 15.638C24.9788 15.638 24.1868 16.34 23.9708 17.672H28.4348C28.4348 16.448 27.5888 15.638 26.2748 15.638ZM43.1079 23.216C39.2739 23.216 36.7899 20.552 36.7899 16.43C36.7899 12.344 39.3639 9.626 43.2159 9.626C46.3299 9.626 48.6519 11.444 49.1019 14.27H46.6719C46.2219 12.74 44.9079 11.84 43.1619 11.84C40.7319 11.84 39.2019 13.604 39.2019 16.412C39.2019 19.202 40.7499 21.002 43.1619 21.002C44.9439 21.002 46.3119 20.066 46.7439 18.608H49.1379C48.6339 21.38 46.2219 23.216 43.1079 23.216ZM52.9882 23H50.7922V9.608H53.0062V15.26C53.5642 14.396 54.6082 13.838 55.8862 13.838C58.0822 13.838 59.2342 15.224 59.2342 17.528V23H57.0382V18.05C57.0382 16.556 56.3002 15.836 55.1842 15.836C53.7982 15.836 52.9882 16.808 52.9882 18.14V23ZM64.0378 23.234C62.1478 23.234 60.9958 22.136 60.9958 20.462C60.9958 18.824 62.1838 17.798 64.2898 17.636L66.9538 17.438V17.24C66.9538 16.034 66.2338 15.548 65.1178 15.548C63.8218 15.548 63.1018 16.088 63.1018 17.024H61.2298C61.2298 15.098 62.8138 13.838 65.2258 13.838C67.6198 13.838 69.0958 15.134 69.0958 17.6V23H67.1698L67.0078 21.686C66.6298 22.604 65.4238 23.234 64.0378 23.234ZM64.7578 21.578C66.1078 21.578 66.9718 20.768 66.9718 19.4V18.932L65.1178 19.076C63.7498 19.202 63.2278 19.652 63.2278 20.372C63.2278 21.182 63.7678 21.578 64.7578 21.578ZM73.4671 23H71.2891V9.608H73.4671V23Z" />
              <path d="M112 9L125.141 9.15578V18L134 8.92291V0H120.447L112 9Z" fill="url(#paint0_linear_132_6468)" />
              <defs>
                <linearGradient id="paint0_linear_132_6468" x1="134" y1="9" x2="112" y2="9" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#22A92E" />
                  <stop offset="1" stop-color="#AFD5B1" />
                </linearGradient>
              </defs>
            </svg>

            <h2>Manual Work Is Slowing<br />You Down</h2>
          </div>
          <p>Businesses waste hours on repetitive tasks — responding to leads, managing workflows, and handling customer queries manually. This leads to delays, inefficiency, and missed opportunities.</p>
        </div>
        <img className="widePeople" src="/logos/chlange.png" />
        <div className="painTags">
          {['Hours wasted on repetitive tasks','Missed leads and opportunities','Slow response to customer queries','Limited scalability without hiring'].map((x) => <span key={x}>{x}</span>)}
        </div>
      </section>

      <section className="solutionBlock solutionContent">
        <div className="splitHeading">
          <div>
            <svg width="122" height="34" viewBox="0 0 122 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.464 18.412C13.464 22.408 10.836 25.216 7.056 25.216C3.294 25.216 0.702 22.426 0.702 18.412C0.702 14.416 3.312 11.608 7.074 11.608C10.836 11.608 13.464 14.398 13.464 18.412ZM11.034 18.412C11.034 15.604 9.486 13.822 7.074 13.822C4.662 13.822 3.114 15.604 3.114 18.412C3.114 21.22 4.662 23.002 7.074 23.002C9.486 23.002 11.034 21.184 11.034 18.412ZM21.3144 16.108H23.5104V25H21.4764L21.3144 23.812C20.7744 24.658 19.6224 25.234 18.4344 25.234C16.3824 25.234 15.1764 23.848 15.1764 21.67V16.108H17.3724V20.896C17.3724 22.588 18.0384 23.272 19.2624 23.272C20.6484 23.272 21.3144 22.462 21.3144 20.77V16.108ZM31.3585 16.072V18.106H30.5485C28.9645 18.106 27.9745 18.952 27.9745 20.68V25H25.7785V16.126H27.8485L27.9745 17.422C28.3525 16.54 29.1985 15.946 30.3865 15.946C30.6925 15.946 30.9985 15.982 31.3585 16.072ZM37.2645 15.514C37.2645 13.21 39.1725 11.608 41.9445 11.608C44.6085 11.608 46.3005 13.084 46.3725 15.46H44.0685C44.0145 14.326 43.2045 13.66 41.9085 13.66C40.4865 13.66 39.5685 14.344 39.5685 15.442C39.5685 16.378 40.0725 16.9 41.1705 17.152L43.2405 17.602C45.4905 18.088 46.5885 19.24 46.5885 21.202C46.5885 23.65 44.6805 25.234 41.7825 25.234C38.9745 25.234 37.1385 23.74 37.0845 21.382H39.3885C39.4065 22.498 40.3065 23.164 41.7825 23.164C43.3125 23.164 44.2845 22.498 44.2845 21.4C44.2845 20.518 43.8345 19.996 42.7545 19.762L40.6665 19.294C38.4345 18.808 37.2645 17.53 37.2645 15.514ZM47.8268 20.536C47.8268 17.764 49.8248 15.856 52.5788 15.856C55.3328 15.856 57.3308 17.764 57.3308 20.536C57.3308 23.308 55.3328 25.216 52.5788 25.216C49.8248 25.216 47.8268 23.308 47.8268 20.536ZM50.0228 20.536C50.0228 22.156 51.0668 23.254 52.5788 23.254C54.0908 23.254 55.1348 22.156 55.1348 20.536C55.1348 18.916 54.0908 17.818 52.5788 17.818C51.0668 17.818 50.0228 18.916 50.0228 20.536ZM61.2855 25H59.1075V11.608H61.2855V25Z" />
              <path d="M100 9L113.141 9.15578V18L122 8.92291V0H108.447L100 9Z" fill="url(#paint0_linear_133_6641)" />
              <defs>
                <linearGradient id="paint0_linear_133_6641" x1="122" y1="9" x2="100" y2="9" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#22A92E" />
                  <stop offset="1" stop-color="#AFD5B1" />
                </linearGradient>
              </defs>
            </svg>

            <h2>Smart Automation That<br />Works for You</h2>
          </div>
          <p>We create AI-driven systems that handle routine operations automatically, allowing your team to focus on growth and strategy.</p>
        </div>
        <img className="widePeople" src="/logos/oursol.png" />
        <div className="successTags">
          {['Intelligent Automation','Lightning Fast','Enterprise-grade security and uptime','Handle 10x volume without hiring'].map((x) => <span key={x}>{x}</span>)}
        </div>
      </section>

      <section className="solutionFeatures">
        <div className="solutionFeatureInner">
          <svg width="104" height="37" viewBox="0 0 104 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.658 22.618H3.762V28H1.458V14.842H9.594V16.966H3.762V20.548H8.658V22.618ZM19.8429 28H11.6709V14.842H19.8429V16.966H13.9749V20.35H19.2309V22.384H13.9749V25.876H19.8429V28Z" />
            <path d="M82 9L95.1406 9.15578V18L104 8.92291V0H90.4466L82 9Z" fill="url(#paint0_linear_162_7951)" />
            <defs>
              <linearGradient id="paint0_linear_162_7951" x1="104" y1="9" x2="82" y2="9" gradientUnits="userSpaceOnUse">
                <stop stop-color="#22A92E" />
                <stop offset="1" stop-color="#AFD5B1" />
              </linearGradient>
            </defs>
          </svg>

          {solutionFeatures.map(([title, text, list], i) => <article className="solutionFeature" key={title}>
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
                        ? "/logos/feature1.png"
                        : i + 1 === 2
                            ? "/logos/feature2.png"
                            : i + 1 === 3
                                ? "/logos/feature3.png"
                                : i + 1 === 4
                                    ? "/logos/feature4.png"
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

export default SolutionsPage;
