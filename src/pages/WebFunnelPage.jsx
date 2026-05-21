import React from 'react';
import { Rocket } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceVisual from '../components/ServiceVisual';
import {solutionFeatures} from "../data";

function WebFunnelPage() {
  const webFunnelFeatures = [
    [
      "High-Converting\nLanding Pages",
      "We design landing pages that capture attention and drive action. Every element is strategically placed to maximize conversions and guide visitors toward your desired outcome.",
      ["Optimized for conversions", "A/B tested designs", "Mobile-first approach", "Fast load times"]
    ],
    [
      "Sales Funnel\nDevelopment",
      "Build complete sales funnels that nurture leads from awareness to purchase. We create multi-step journeys that guide prospects through the buying process automatically.",
      ["Lead capture systems", "Email automation", "Retargeting integration", "Analytics tracking"]
    ],
    [
      "E-commerce\nSolutions",
      "Full-featured online stores with seamless checkout experiences. From product catalogs to payment processing, we build e-commerce platforms that sell.",
      ["Secure payment integration", "Inventory management", "Order tracking", "Multi-currency support"]
    ],
    [
      "Corporate\nWebsites",
      "Professional business websites that establish credibility and showcase your brand. Perfect for companies looking to make a strong online impression.",
      ["Custom branding", "Content management", "SEO optimization", "Responsive design"]
    ]
  ];

  return <>
    <Header />
    <main className="solutionsPage">
      <section className="solutionHero">
        <div className="heroContent">
          <div className="heroImage">
            <img src="/logos/web1.png" alt="" />
          </div>
          <div className="heroText">
            <h1>Build High-Converting<br /><span>Websites & Funnels</span></h1>
            <p>We design and develop stunning websites and sales funnels that convert visitors into customers. From landing pages to complete e-commerce solutions.</p>
            <a className="btn greenBtn" href="/contact">Get Free Consultation</a>
          </div>
        </div>
      </section>

      <section className="problemBlock solutionContent">
        <div className="splitHeading">
          <div>
            <svg width="167" height="32" viewBox="0 0 167 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.02 23.216C3.186 23.216 0.702 20.552 0.702 16.43C0.702 12.344 3.276 9.626 7.128 9.626C10.242 9.626 12.564 11.444 13.014 14.27H10.584C10.134 12.74 8.82 11.84 7.074 11.84C4.644 11.84 3.114 13.604 3.114 16.412C3.114 19.202 4.662 21.002 7.074 21.002C8.856 21.002 10.224 20.066 10.656 18.608H13.05C12.546 21.38 10.134 23.216 7.02 23.216ZM14.2702 18.536C14.2702 15.764 16.2682 13.856 19.0222 13.856C21.7762 13.856 23.7742 15.764 23.7742 18.536C23.7742 21.308 21.7762 23.216 19.0222 23.216C16.2682 23.216 14.2702 21.308 14.2702 18.536ZM16.4662 18.536C16.4662 20.156 17.5102 21.254 19.0222 21.254C20.5342 21.254 21.5782 20.156 21.5782 18.536C21.5782 16.916 20.5342 15.818 19.0222 15.818C17.5102 15.818 16.4662 16.916 16.4662 18.536ZM27.7109 23H25.5149V14.108H27.5309L27.7109 15.152C28.1609 14.414 29.0609 13.838 30.3389 13.838C31.6889 13.838 32.6249 14.504 33.0929 15.53C33.5429 14.504 34.5869 13.838 35.9369 13.838C38.0969 13.838 39.2849 15.134 39.2849 17.186V23H37.1069V17.762C37.1069 16.484 36.4229 15.818 35.3789 15.818C34.3169 15.818 33.5069 16.502 33.5069 17.96V23H31.3109V17.744C31.3109 16.502 30.6449 15.836 29.6009 15.836C28.5569 15.836 27.7109 16.52 27.7109 17.96V23ZM43.6366 23H41.4406V14.108H43.4566L43.6366 15.152C44.0866 14.414 44.9866 13.838 46.2646 13.838C47.6146 13.838 48.5506 14.504 49.0186 15.53C49.4686 14.504 50.5126 13.838 51.8626 13.838C54.0226 13.838 55.2106 15.134 55.2106 17.186V23H53.0326V17.762C53.0326 16.484 52.3486 15.818 51.3046 15.818C50.2426 15.818 49.4326 16.502 49.4326 17.96V23H47.2366V17.744C47.2366 16.502 46.5706 15.836 45.5266 15.836C44.4826 15.836 43.6366 16.52 43.6366 17.96V23ZM56.8444 18.536C56.8444 15.764 58.8424 13.856 61.5964 13.856C64.3504 13.856 66.3484 15.764 66.3484 18.536C66.3484 21.308 64.3504 23.216 61.5964 23.216C58.8424 23.216 56.8444 21.308 56.8444 18.536ZM59.0404 18.536C59.0404 20.156 60.0844 21.254 61.5964 21.254C63.1084 21.254 64.1524 20.156 64.1524 18.536C64.1524 16.916 63.1084 15.818 61.5964 15.818C60.0844 15.818 59.0404 16.916 59.0404 18.536ZM70.2851 23H68.0891V14.108H70.1231L70.3031 15.26C70.8611 14.36 71.9411 13.838 73.1471 13.838C75.3791 13.838 76.5311 15.224 76.5311 17.528V23H74.3351V18.05C74.3351 16.556 73.5971 15.836 72.4631 15.836C71.1131 15.836 70.2851 16.772 70.2851 18.212V23ZM89.0663 18.464H86.1683V23H83.8643V9.842H89.0663C91.7123 9.842 93.4223 11.57 93.4223 14.144C93.4223 16.682 91.6943 18.464 89.0663 18.464ZM88.6163 11.894H86.1683V16.412H88.5803C90.1643 16.412 91.0103 15.566 91.0103 14.126C91.0103 12.686 90.1463 11.894 88.6163 11.894ZM100.616 14.072V16.106H99.8063C98.2223 16.106 97.2323 16.952 97.2323 18.68V23H95.0363V14.126H97.1063L97.2323 15.422C97.6103 14.54 98.4563 13.946 99.6443 13.946C99.9503 13.946 100.256 13.982 100.616 14.072ZM101.282 18.536C101.282 15.764 103.28 13.856 106.034 13.856C108.788 13.856 110.786 15.764 110.786 18.536C110.786 21.308 108.788 23.216 106.034 23.216C103.28 23.216 101.282 21.308 101.282 18.536ZM103.478 18.536C103.478 20.156 104.522 21.254 106.034 21.254C107.546 21.254 108.59 20.156 108.59 18.536C108.59 16.916 107.546 15.818 106.034 15.818C104.522 15.818 103.478 16.916 103.478 18.536ZM114.561 23H112.527V9.608H114.723V15.404C115.299 14.414 116.487 13.82 117.837 13.82C120.375 13.82 121.923 15.8 121.923 18.608C121.923 21.344 120.249 23.234 117.693 23.234C116.361 23.234 115.227 22.64 114.705 21.614L114.561 23ZM114.741 18.518C114.741 20.12 115.731 21.218 117.243 21.218C118.791 21.218 119.709 20.102 119.709 18.518C119.709 16.934 118.791 15.8 117.243 15.8C115.731 15.8 114.741 16.916 114.741 18.518ZM125.885 23H123.707V9.608H125.885V23ZM132.167 23.234C129.521 23.234 127.667 21.308 127.667 18.554C127.667 15.764 129.485 13.838 132.095 13.838C134.759 13.838 136.451 15.62 136.451 18.392V19.058L129.755 19.076C129.917 20.642 130.745 21.434 132.203 21.434C133.409 21.434 134.201 20.966 134.453 20.12H136.487C136.109 22.064 134.489 23.234 132.167 23.234ZM132.113 15.638C130.817 15.638 130.025 16.34 129.809 17.672H134.273C134.273 16.448 133.427 15.638 132.113 15.638ZM140.404 23H138.208V14.108H140.224L140.404 15.152C140.854 14.414 141.754 13.838 143.032 13.838C144.382 13.838 145.318 14.504 145.786 15.53C146.236 14.504 147.28 13.838 148.63 13.838C150.79 13.838 151.978 15.134 151.978 17.186V23H149.8V17.762C149.8 16.484 149.116 15.818 148.072 15.818C147.01 15.818 146.2 16.502 146.2 17.96V23H144.004V17.744C144.004 16.502 143.338 15.836 142.294 15.836C141.25 15.836 140.404 16.52 140.404 17.96V23Z" fill="#151515"/>
              <path d="M145 9L158.141 9.15578V18L167 8.92291V0H153.447L145 9Z" fill="url(#paint0_linear_248_18725)"/>
              <defs>
                <linearGradient id="paint0_linear_248_18725" x1="167" y1="9" x2="145" y2="9" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#22A92E"/>
                  <stop offset="1" stop-color="#AFD5B1"/>
                </linearGradient>
              </defs>
            </svg>


            <h2>Your Website Isn't <br />Converting</h2>
          </div>
          <p>Most websites look good but fail to generate leads or sales. Poor UX, slow speed, and lack of strategy cost you customers daily.</p>
        </div>
        <img className="widePeople" src="/logos/web2.png" />
        <div className="painTags">
          {['Visitors leave without taking action','Slow loading times hurt conversions','Poor mobile experience loses customers','Confusing navigation drives users away'].map((x) => <span key={x}>{x}</span>)}
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


            <h2>Conversion-Focused <br />Digital Experiences</h2>
          </div>
          <p>We build websites and funnels designed with strategy, psychology, and performance in mind.</p>
        </div>
        <img className="widePeople" src="/logos/web3.png" />
        <div className="successTags">
          {['Data-driven approach to user journeys','Psychology-Based Design','Lightning-fast load times guaranteed','Intuitive experiences that convert'].map((x) => <span key={x}>{x}</span>)}
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

export default WebFunnelPage;
