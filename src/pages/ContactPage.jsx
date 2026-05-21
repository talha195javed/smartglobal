import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
  return <>
    <Header />
    <main className="contactPage">
      <section className="contactHero">
        <div className="contactCopy">
          <h1>Contact Smart Global Hub</h1>
          <p>Questions about products, features, or pricing? Need a demo? Our sales experts are ready to help.</p>
          <h3>Talk With Our Team</h3>
          <div className="contactMethods">
            <a href="tel:+971504406565">+971 50 440 6565</a>
            <a href="mailto:team@smartglobalhub.com">team@smartglobalhub.com</a>
          </div>
        </div>
        <div className="contactDot" />
        <form className="contactForm">
          <div><label>First Name*</label><input placeholder="John" /></div>
          <div><label>Last Name*</label><input placeholder="Don" /></div>
          <div><label>Email Address</label><input placeholder="mike@example.com" /></div>
          <div><label>Company Name</label><input placeholder="John Doe" /></div>
          <div className="full"><label>Phone</label><select defaultValue=""><option value="" disabled>Enter your phone number</option></select></div>
          <div className="full"><label>Sector of Interest *</label><select defaultValue=""><option value="" disabled>Select a Sector</option><option>AI Automation Systems</option><option>Website & Funnel Development</option><option>SaaS & Custom Software</option></select></div>
          <div className="full"><label>Message</label><textarea placeholder="Tell us about your project or inquiry..." /></div>
          <button className="btn full" type="button">Send Message</button>
        </form>
      </section>

      <section className="mapBand">
        <iframe
            src="https://www.google.com/maps?q=Al+Futtaim+Tower+Dubai&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office location - UAE"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
        />

        <div className="mapCard">
          <h2>Office location - UAE</h2>
          <p>Al Futtaim Tower, Day to Day Building, Office No 102,</p>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </section>

      <section className="cta contactCta" id="proposal">
        <h2>Get started with <span>Smart Global Hub</span></h2>
        <div className="ctaCards">
          <article><h3>Smart Visitor Management<br />for Safer, Smarter Spaces</h3><p>Digitize visitor entry, approvals, and access control for schools, offices, and residential communities.</p><a className="btn">Get a Demo</a></article>
          <article><h3>AI That Handles Your<br />Business</h3><p>Automate conversations, leads, and workflows with intelligent systems that work 24/7.</p><a className="btn">Try for free</a></article>
          <article><h3>Powerful Systems. Built for<br />Scale.</h3><p>Custom platforms and SaaS solutions tailored to your business operations.</p><a className="btn">Build Your System</a></article>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

export default ContactPage;
