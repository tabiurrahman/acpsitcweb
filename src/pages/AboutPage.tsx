import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const coreValues = [
    {
      title: 'Innovation',
      description: 'We foster a culture of creative problem-solving and embrace new technologies.',
      icon: '💡'
    },
    {
      title: 'Collaboration', 
      description: 'We believe in the power of teamwork and collective knowledge sharing.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in all our technological endeavors.',
      icon: '🏆'
    },
    {
      title: 'Inclusivity',
      description: 'We welcome students of all backgrounds and skill levels to join our tech community.',
      icon: '🌈'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-section-gradient">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron tech-gradient-text mb-6">About ACPSITC</h1>
            <p className="text-foreground/80 mb-6">
              Founded with a vision to empower students with technological skills and knowledge, 
              Adamjee Cantonment Public School IT Club (ACPSITC) has been a hub for tech enthusiasts since 2015. 
              We are dedicated to fostering innovation, collaboration, and excellence in the field of information technology.
            </p>
            <p className="text-foreground/80 mb-6">
              Our club provides a platform for students to explore various technological domains, 
              develop practical skills, and engage in meaningful projects that address real-world challenges. 
              Through workshops, competitions, and collaborative initiatives, we aim to nurture the next generation 
              of tech leaders who will drive innovation in an increasingly digital world.
            </p>
            <div className="flex items-center space-x-2 text-tech-purple">
              <span className="font-bold">Our Tagline:</span>
              <span className="italic">"Technology is to be invented or adopted"</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-tech-purple/30 shadow-xl shadow-tech-purple/20">
              <img 
                src="/lovable-uploads/7c166ae8-24ba-4fe5-858f-ddfea217dbd3.png" 
                alt="ACPSITC Members" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-tech-dark rounded-full border-4 border-tech-purple flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold font-orbitron tech-gradient-text">8+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-tech-dark">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="tech-card h-full">
            <h2 className="text-2xl font-bold font-orbitron mb-4 text-tech-purple">Our Mission</h2>
            <p className="text-foreground/80">
              To empower students with technological knowledge and skills through hands-on learning experiences, 
              fostering a community of innovation and collaboration that prepares them for the digital future.
            </p>
          </div>
          <div className="tech-card h-full">
            <h2 className="text-2xl font-bold font-orbitron mb-4 text-tech-purple">Our Vision</h2>
            <p className="text-foreground/80">
              To be a leading student-run technology club that inspires and nurtures the next generation 
              of tech leaders, innovators, and problem-solvers who will make meaningful contributions to society.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-section-gradient">
        <h2 className="section-title text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className="tech-card text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold font-orbitron mb-3 text-tech-purple">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section className="bg-tech-dark">
        <h2 className="section-title text-center mb-12">Our Achievements</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-tech-purple pl-6 ml-6 relative">
            <div className="absolute w-4 h-4 bg-tech-purple rounded-full -left-8 top-4"></div>
            <h3 className="text-xl font-bold font-orbitron mb-2">BEST CLUB PARTNER - AIUB CS Fest 2024</h3>
            <p className="text-foreground/70">
              Recognized as the Best Club Partner at AIUB CS Fest 2024, showcasing our collaborative spirit and commitment to technology education.
            </p>
          </div>
          <div className="border-l-4 border-tech-purple pl-6 ml-6 relative">
            <div className="absolute w-4 h-4 bg-tech-purple rounded-full -left-8 top-4"></div>
            <h3 className="text-xl font-bold font-orbitron mb-2">BEST INSTITUTION - TechTrivia 2.0</h3>
            <p className="text-foreground/70">
              Achieved the Best Institution award at TechTrivia 2.0, demonstrating our excellence in technology knowledge and competitive spirit.
            </p>
          </div>
          <div className="border-l-4 border-tech-purple pl-6 ml-6 relative">
            <div className="absolute w-4 h-4 bg-tech-purple rounded-full -left-8 top-4"></div>
            <h3 className="text-xl font-bold font-orbitron mb-2">BEST INSTITUTION - 2nd National Astro Carnival</h3>
            <p className="text-foreground/70">
              Honored with the Best Institution award at the 2nd National Astro Carnival, highlighting our interdisciplinary approach to technology and science.
            </p>
          </div>
          <div className="border-l-4 border-tech-purple pl-6 ml-6 relative">
            <div className="absolute w-4 h-4 bg-tech-purple rounded-full -left-8 top-4"></div>
            <h3 className="text-xl font-bold font-orbitron mb-2">BEST CLUB PARTNER - Science Booster 3.1</h3>
            <p className="text-foreground/70">
              Recognized as the Best Club Partner at Science Booster 3.1, demonstrating our commitment to supporting scientific innovation and collaboration.
            </p>
          </div>
          <div className="border-l-4 border-tech-purple pl-6 ml-6 relative">
            <div className="absolute w-4 h-4 bg-tech-purple rounded-full -left-8 top-4"></div>
            <h3 className="text-xl font-bold font-orbitron mb-2">BEST CLUB PARTNER - 2nd National Astro Carnival</h3>
            <p className="text-foreground/70">
              Awarded Best Club Partner at the 2nd National Astro Carnival, showcasing our dedication to fostering partnerships in the astronomy and technology fields.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-section-gradient text-center">
        <h2 className="section-title mb-6">Join Our Tech Community</h2>
        <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
          Are you passionate about technology? Join the ACPSITC and be part of a vibrant community of tech enthusiasts! 
          Explore new technologies, develop valuable skills, and collaborate on exciting projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/#contact" className="btn-primary">
            Get In Touch
          </Link>
          <Link to="/members" className="btn-outlined">
            Meet Our Team
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
