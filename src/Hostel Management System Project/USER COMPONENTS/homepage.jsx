import React from "react";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  const facilities = [
    {
      icon: "🍛",
      title: "Quality Food",
      description:
        "Enjoy fresh, hygienic, and delicious meals prepared with care every day.",
    },
    {
      icon: "🛒",
      title: "Daily Essentials",
      description:
        "Convenient access to groceries and essential items for everyday needs.",
    },
    {
      icon: "📶",
      title: "24/7 Wi-Fi",
      description:
        "Stay connected with high-speed internet for studying, working, and entertainment.",
    },
    {
      icon: "💧",
      title: "Water Supply",
      description:
        "Reliable water facilities to support your daily needs and comfortable living.",
    },
    {
      icon: "⚡",
      title: "Electricity",
      description:
        "Essential electrical facilities for a comfortable and convenient stay.",
    },
    {
      icon: "🛏️",
      title: "Comfortable Rooms",
      description:
        "Clean, comfortable accommodation designed for rest, privacy, and peace of mind.",
    },
    {
      icon: "🧹",
      title: "Clean Environment",
      description:
        "Well-maintained living spaces that promote cleanliness and healthy living.",
    },
    {
      icon: "🔐",
      title: "Safety & Security",
      description:
        "A security-conscious environment designed to help residents feel safe.",
    },
    {
      icon: "👕",
      title: "Laundry Facilities",
      description:
        "Convenient laundry arrangements to make everyday hostel life easier.",
    },
    {
      icon: "📚",
      title: "Study Space",
      description:
        "A peaceful environment where students can focus on their studies and goals.",
    },
    {
      icon: "🍽️",
      title: "Dining Area",
      description:
        "A comfortable space to enjoy meals and spend time with fellow residents.",
    },
    {
      icon: "🪑",
      title: "Common Area",
      description:
        "Relax, interact with friends, and enjoy your free time in a welcoming space.",
    },
  ];

  const benefits = [
    {
      icon: "📍",
      title: "Convenient Location",
      description:
        "Located in SR Nagar, Hyderabad, with access to everyday essentials and local facilities.",
    },
    {
      icon: "✨",
      title: "Comfortable Living",
      description:
        "A welcoming environment focused on cleanliness, comfort, and convenience.",
    },
    {
      icon: "🍲",
      title: "Everyday Convenience",
      description:
        "Food, essential amenities, and comfortable shared spaces for daily living.",
    },
    {
      icon: "🤝",
      title: "Friendly Environment",
      description:
        "A place where residents can feel at home while focusing on their personal goals.",
    },
  ];

  return (
    <main className="peddi-home">
      {/* Hero Section */}
      <section className="peddi-hero">
        <div className="peddi-hero-overlay"></div>

        <div className="peddi-hero-content">
          <span className="peddi-eyebrow">
            YOUR COMFORT, OUR PRIORITY
          </span>

          <h1>
            Welcome to <span>Peddi Hostel</span>
          </h1>

          <p className="peddi-hero-description">
            More than just a place to stay. A place to feel at home,
            build your future, and create unforgettable memories.
          </p>

          <blockquote className="peddi-quote">
            "A comfortable place to stay, a peaceful place to grow."
          </blockquote>

          <div className="peddi-hero-actions">
            <Link to="/bookBed"><button className="peddi-btn peddi-btn-primary">
              Book Your Bed <span>→</span>
            </button></Link>

            <a
              href="#facilities"
              className="peddi-btn peddi-btn-outline"
            >
              Explore Our Facilities
            </a>
          </div>

          <div className="peddi-location-tag">
            <span>📍</span> SR Nagar, Hyderabad, Telangana
          </div>
        </div>

        <div className="peddi-hero-bottom">
          <span>COMFORT</span>
          <span className="peddi-bottom-dot"></span>
          <span>CARE</span>
          <span className="peddi-bottom-dot"></span>
          <span>COMMUNITY</span>
        </div>
      </section>

      {/* About Section */}
      <section className="peddi-about peddi-section">
        <div className="peddi-about-image">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=85"
            alt="Comfortable hostel accommodation"
          />

          <div className="peddi-image-caption">
            <span>YOUR SPACE</span>
            <h3>Your comfort comes first.</h3>
          </div>
        </div>

        <div className="peddi-about-content">
          <span className="peddi-section-label">ABOUT PEDDI HOSTEL</span>

          <h2>
            A place that feels like <span>home.</span>
          </h2>

          <p>
            Finding the right place to stay makes a real difference.
            Peddi Hostel aims to provide a comfortable, welcoming, and
            convenient living environment for students and working
            professionals in SR Nagar, Hyderabad.
          </p>

          <p>
            From comfortable accommodation to everyday essentials,
            our goal is to make hostel life simpler so you can focus on
            your education, career, and personal growth.
          </p>

          <div className="peddi-about-points">
            <div>
              <span className="peddi-check">✓</span>
              Comfortable accommodation
            </div>
            <div>
              <span className="peddi-check">✓</span>
              Clean and welcoming spaces
            </div>
            <div>
              <span className="peddi-check">✓</span>
              Essential facilities for daily living
            </div>
            <div>
              <span className="peddi-check">✓</span>
              Convenient Hyderabad location
            </div>
          </div>

          <div className="peddi-about-location">
            <span>📍</span>
            <div>
              <strong>Find us in Hyderabad</strong>
              <p>SR Nagar, Telangana, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section
        className="peddi-facilities peddi-section"
        id="facilities"
      >
        <div className="peddi-section-heading">
          <span className="peddi-section-label">
            EVERYTHING YOU NEED
          </span>

          <h2>
            Facilities for a <span>better stay.</span>
          </h2>

          <p>
            Everyday essentials and thoughtfully planned amenities
            for a comfortable hostel experience.
          </p>
        </div>

        <div className="peddi-facility-grid">
          {facilities.map((facility, index) => (
            <article className="peddi-facility-card" key={facility.title}>
              <div className="peddi-facility-icon">
                {facility.icon}
              </div>

              <span className="peddi-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>

              <div className="peddi-card-accent"></div>
            </article>
          ))}
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="peddi-rooms peddi-section">
        <div className="peddi-rooms-content">
          <span className="peddi-section-label">
            YOUR PERSONAL SPACE
          </span>

          <h2>
            Rest well. <br />
            <span>Live comfortably.</span>
          </h2>

          <p>
            A comfortable room makes every day better. Our accommodation
            section highlights the essentials that matter for a
            convenient stay, from comfortable beds to clean and
            organized living spaces.
          </p>

          <ul className="peddi-room-list">
            <li>
              <span>✓</span> Comfortable sleeping arrangements
            </li>
            <li>
              <span>✓</span> Storage space for personal belongings
            </li>
            <li>
              <span>✓</span> Clean and organized surroundings
            </li>
            <li>
              <span>✓</span> Suitable spaces for rest and relaxation
            </li>
          </ul>

          <div className="peddi-room-note">
            <span>ℹ️</span>
            Room types, availability, and occupancy can be confirmed
            directly with the hostel administration.
          </div>
        </div>

        <div className="peddi-room-gallery">
          <div className="peddi-room-image peddi-room-image-large">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85"
              alt="Comfortable and modern bedroom"
              loading="lazy"
            />
          </div>

          <div className="peddi-room-image peddi-room-image-small">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=700&q=85"
              alt="Clean and relaxing room interior"
              loading="lazy"
            />
          </div>

          <div className="peddi-gallery-label">
            <span>YOUR STAY</span>
            <strong>Comfort in every corner.</strong>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="peddi-benefits peddi-section">
        <div className="peddi-section-heading">
          <span className="peddi-section-label">
            THE PEDDI EXPERIENCE
          </span>

          <h2>
            Why choose <span>Peddi Hostel?</span>
          </h2>

          <p>
            The little things that make everyday living easier.
          </p>
        </div>

        <div className="peddi-benefit-grid">
          {benefits.map((benefit) => (
            <article className="peddi-benefit-card" key={benefit.title}>
              <div className="peddi-benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="peddi-quote-banner">
        <div className="peddi-quote-banner-overlay"></div>

        <div className="peddi-quote-banner-content">
          <span className="peddi-section-label">
            MORE THAN A PLACE TO STAY
          </span>

          <h2>
            "Feel at home, <br />
            wherever life takes you."
          </h2>

          <p>
            Peddi Hostel — Your stay, your comfort, your journey.
          </p>

          <button className="peddi-btn peddi-btn-primary" onClick={()=>{navigate("/Bookbed")}}>
            Book Your Bed <span>→</span>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="peddi-contact peddi-section">
        <div className="peddi-contact-content">
          <span className="peddi-section-label">GET IN TOUCH</span>

          <h2>
            Your next stay <span>starts here.</span>
          </h2>

          <p>
            Have questions about accommodation, facilities, or
            availability? Contact the hostel administration for
            accurate information.
          </p>

          <div className="peddi-contact-details">
            <div className="peddi-contact-item">
              <div className="peddi-contact-icon">📍</div>
              <div>
                <strong>Our Location</strong>
                <p>SR Nagar, Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="peddi-contact-item">
              <div className="peddi-contact-icon">📞</div>
              <div>
                <strong>Phone Number</strong>
                <p>+91 XXXXX XXXXX</p>
                <small>Replace with the actual hostel phone number.</small>
              </div>
            </div>

            <div className="peddi-contact-item">
              <div className="peddi-contact-icon">🕒</div>
              <div>
                <strong>Enquiries</strong>
                <p>Contact us for current room availability and services.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="peddi-contact-card">
          <div className="peddi-contact-card-top">
            <span className="peddi-contact-card-icon">⌖</span>
            <span className="peddi-contact-card-label">
              VISIT PEDDI HOSTEL
            </span>
          </div>

          <h3>Located in the heart of SR Nagar.</h3>

          <p>
            Explore the surrounding neighbourhood and contact the
            administration for directions to the hostel.
          </p>

          <div className="peddi-map-placeholder">
            <span>📍</span>
            <strong>SR Nagar</strong>
            <small>Hyderabad, Telangana</small>
          </div>

          <button className="peddi-btn peddi-btn-dark">
            Contact Administration <span>→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="peddi-footer">
        <div className="peddi-footer-main">
          <div className="peddi-footer-brand">
            <div className="peddi-brand-logo">
              <span className="peddi-brand-symbol">P</span>
              <div>
                <strong>Peddi Hostel</strong>
                <small>YOUR HOME AWAY FROM HOME</small>
              </div>
            </div>

            <p>
              A comfortable place to stay, a peaceful place to grow.
              Discover a welcoming hostel experience in SR Nagar,
              Hyderabad.
            </p>

            <div className="peddi-footer-location">
              <span>📍</span> SR Nagar, Hyderabad, Telangana
            </div>
          </div>

          <div className="peddi-footer-links">
            <h3>Explore</h3>
            <a href="#">Home</a>
            <a href="#about" onClick={()=>{navigate("/about")}}>About Us</a>
            <a href="#facilities" onClick={()=>{navigate("/Services")}}>Our Facilities</a>
            <a href="#facilities" onClick={()=>{navigate("/Rooms")}}>Accommodation</a>
            <a href="#contact" onClick={()=>{navigate("/ContactUs")}}>Contact Us</a>
          </div>

          <div className="peddi-footer-links">
            <h3>Quick Access</h3>
            <a href="#">Student Login</a>
            <a href="#">Admin Login</a>
            <a href="#">Book Your Bed</a>
            <a href="#facilities">Services</a>
          </div>

          <div className="peddi-footer-contact">
            <h3>Contact Information</h3>

            <p>
              <span>📍</span>
              SR Nagar, Hyderabad, Telangana, India
            </p>

            <p>
              <span>📞</span>
              +91 XXXXX XXXXX
            </p>

            <p>
              <span>✉️</span>
              Hostel contact details to be added
            </p>
          </div>
        </div>

        <div className="peddi-footer-bottom">
          <p>
            © {new Date().getFullYear()} Peddi Hostel. All rights reserved.
          </p>

          <p>Comfort. Care. Community.</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;