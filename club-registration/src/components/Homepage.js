import React from 'react';
import { Link } from 'react-router-dom';
import d1 from "../assets/drama.jpeg";
import aero from "../assets/aerokle.jpeg";
import upsc from "../assets/upsc.jpeg";
import cc from "../assets/cc.jpeg";
import Navbar from './Navbar';

function Homepage() {
  const events = [
    { title: 'Annual Showcase' },
    { title: 'Code & Hackathon' },
    { title: 'Cultural Fest' },
    { title: 'Sports Meet' },
    { title: 'Drama meet' },
    { title: 'Dance Meet' },
    { title: 'Music Meet' },
    { title: 'KannadaClub Meet' },
  ];

  return (
    <div className="homepage" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
       {/* Navbar Section */}
       <Navbar />

      <div className="border-bar" style={{ width: '100%', height: '5px', backgroundColor: '#9b111e', margin: '10px 0' }}></div>
{/* Clubs Section */}
<section id="clubs" className="clubs-section" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
  <h2 style={{ fontSize: '24px', color: '#9b111e', margin: '20px 0', textAlign: 'center' }}>Clubs</h2>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
    
    {/* Drama Club Box */}
    <Link to="/drama" style={{ textDecoration: 'none' }}>
      <div style={{
        width: '250px',
        height: '350px',  // Fixed height for consistency
        padding: '20px',
        backgroundColor: '#FAF0F1',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer'
      }}>
        <img src={d1} alt="Club" style={{
          width: '220px',  // Increased width for a bit wider images
          height: '220px',  // Adjusted height to match the width increase
          objectFit: 'cover',  // Ensure the image fills the space without distortion
          borderRadius: '10px',
          marginBottom: '10px'
        }} />
        <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>Drama Club</h3>
        <p style={{ fontSize: '14px', color: '#6c757d' }}>Bringing Stories to Life: Acting, Expression, and Creativity</p>
      </div>
    </Link>

    {/* UPSC Club Box */}
    <Link to="/upsc" style={{ textDecoration: 'none' }}>
      <div style={{
        width: '250px',
        height: '350px',  // Same height as other boxes
        padding: '20px',
        backgroundColor: '#FAF0F1',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer'
      }}>
        <img src={upsc} alt="Club" style={{
          width: '220px',  // Same increased width for consistency
          height: '220px',  // Adjusted height to match the width increase
          objectFit: 'cover',  // Maintain aspect ratio without stretching
          borderRadius: '10px',
          marginBottom: '10px'
        }} />
        <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>UPSC Club</h3>
        <p style={{ fontSize: '14px', color: '#6c757d' }}>Empowering Aspirants, Shaping Future Leaders</p>
      </div>
    </Link>

    {/* Music Club Box */}
    <Link to="/aerokle" style={{ textDecoration: 'none' }}>
      <div style={{
        width: '250px',
        height: '350px',  // Ensure this box is the same height
        padding: '20px',
        backgroundColor: '#FAF0F1',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer'
      }}>
        <img src={aero} alt="Club" style={{
          width: '220px',  // Increased width for a bit wider images
          height: '220px',  // Adjusted height to match the width increase
          objectFit: 'cover',  // Maintain aspect ratio without stretching
          borderRadius: '10px',
          marginBottom: '10px'
        }} />
        <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>Aerokle Club</h3>
        <p style={{ fontSize: '14px', color: '#6c757d' }}>Explores aerospace and mechanical engineering concepts.</p>
      </div>
    </Link>

    {/* Code Club Box */}
    <Link to="/code" style={{ textDecoration: 'none' }}>
      <div style={{
        width: '250px',
        height: '350px',  // Same height as others
        padding: '20px',
        backgroundColor: '#FAF0F1',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer'
      }}>
        <img src={cc} alt="Club" style={{
          width: '220px',  // Same width as the other images
          height: '220px',  // Same height as the other images
          objectFit: 'cover',  // Maintain aspect ratio without stretching
          borderRadius: '10px',
          marginBottom: '10px'
        }} />
        <h3 style={{ fontSize: '20px', color: '#9b111e', marginBottom: '10px' }}>Code Club</h3>
        <p style={{ fontSize: '14px', color: '#6c757d' }}>Turning Ideas into Applications: Learn, Build, Innovate</p>
      </div>
    </Link>
  </div>
</section>

      {/* Events Section */}
      <section className="events-section" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '24px', color: '#9b111e', margin: '20px 0', textAlign: 'center' }}>Upcoming Events</h2>
        <div className="horizontal-scroll" style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '10px 0' }}>
          {events.map((event, index) => (
            <div className="event-card" key={index} style={{ flex: '0 0 auto', minWidth: '150px', padding: '15px', backgroundColor: '#faf0f1', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Page Section */}
      <section className="why-page" style={{ margin: '20px auto', padding: '20px', backgroundColor: '#faf0f1', borderRadius: '10px', color: '#9b111e', fontSize: '18px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '24px', color: '#9b111e', margin: '20px 0', textAlign: 'center' }}>Why This Page?</h2>
        <p>
          The Campus Club Registration and Events Management System is a platform that connects
          students with campus clubs and events. It allows students to explore clubs, register for
          events, and stay updated on campus activities. With features like QR codes for easy event
          entry and feedback options, the system simplifies student engagement and fosters a connected
          campus community. This tool helps students discover new interests, join communities, and
          make the most of their college experience.
        </p>
      </section>
      
       {/* Footer Section */}
      <footer style={{ padding: '20px', backgroundColor: '#9b111e', color: '#ffffff', textAlign: 'center', marginTop: '20px' }}>
         <p style={{ fontSize: '14px', margin: 0 }}>© 2025 KLE Technological University | <a href="https://www.kletech.ac.in" style={{ color: '#ffffff', textDecoration: 'underline' }}>www.kletech.ac.in</a></p>
       </footer>
      
    </div>
  );
}

export default Homepage;