import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Section from '../components/Section';
import { ArrowRight, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const HomePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // IMPORTANT: Replace 'YOUR_SERVICE_ID' with your actual service ID from EmailJS dashboard
      // Go to https://dashboard.emailjs.com/admin and create a service to get the service ID
      const result = await emailjs.send(
        'service_1w20j1a', // Your EmailJS service ID
        'template_vmifsud',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'ACPSITC Team',
        },
        'ar1r5xlW8OY0fo36t'
      );

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error: any) {
      console.error('EmailJS error:', error);
      
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.status === 412) {
        errorMessage = "Email service not configured properly. Please contact the administrator.";
      } else if (error.status === 400) {
        errorMessage = "Invalid email configuration. Please check your details.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectors = [
    { 
      title: 'Programming', 
      description: 'Learn various programming languages and build real-world applications.',
      icon: '💻'
    },
    { 
      title: 'PowerPoint', 
      description: 'Master the art of creating stunning presentations and visual content.',
      icon: '📊'
    },
    { 
      title: 'Web Design', 
      description: 'Design and develop modern, responsive websites with the latest technologies.',
      icon: '🌐'
    },
    { 
      title: 'Graphics Design', 
      description: 'Create eye-catching visual content using industry-standard design tools.',
      icon: '🎨'
    },
    { 
      title: 'Video Editing', 
      description: 'Learn professional video editing techniques and visual storytelling.',
      icon: '🎬'
    },
    { 
      title: 'Gaming', 
      description: 'Explore game development and competitive gaming strategies.',
      icon: '🎮'
    },
    { 
      title: 'Cyber Security', 
      description: 'Understand digital security principles and ethical hacking techniques.',
      icon: '🔒'
    }
  ];

  const testimonials = [
    {
      name: 'Bm. Badshah Alamgir',
      role: 'Senior Teacher, ICT, ACPS',
      content: 'The IT Club has transformed the way our students approach technology. Their enthusiasm and creativity inspire me every day.',
      image: '/lovable-uploads/63742d0a-d15e-4f48-997b-6fae92ea6ce2.png'
    },
    {
      name: 'Tareq Mahmud',
      role: 'Founder',
      content: "It's amazing to see how the club has grown over the years. The talent and passion of our members continue to drive innovation.",
      image: '/lovable-uploads/32be2d33-a4bd-4b30-ba07-274d6a4225c5.png'
    },
    {
      name: 'Kh. Sifat Sami',
      role: 'Advisor',
      content: "Our IT Club provides a platform where students can explore their technological interests and develop valuable skills for the future.",
      image: '/lovable-uploads/fc23d8d8-3277-436b-a3a3-5cfc2577ce52.png'
    },
    {
      name: 'Samin Islam',
      role: 'Advisor',
      content: "Leading this talented group of tech enthusiasts has been an honor. Together, we're creating a lasting impact on our school community.",
      image: '/lovable-uploads/708ad79c-e7bc-4ded-94fe-17897119e2cd.png'
    }
  ];

  const galleryImages = [
    { src: '/lovable-uploads/80221b50-edad-4055-b69e-69bffaa58d92.png', alt: 'Chess Tournament' },
    { src: '/lovable-uploads/b5909217-dbb1-4b74-97c0-2cf557ac0574.png', alt: 'Minecraft Competition' },
    { src: '/lovable-uploads/0b0a7b09-4005-41b1-8b9e-1c57747a98a5.png', alt: 'Design Mania Competition' },
    { src: '/lovable-uploads/9d82a706-e023-4f86-8be3-7f18f24152ca.png', alt: 'ACPS National Astro Carnival' },
    { src: '/lovable-uploads/982eb2f7-dfeb-4fbf-a3a8-9fac37f41725.png', alt: 'IT Lab Workshop' },
    { src: '/lovable-uploads/ab9e2471-8f6f-445c-81a8-febcb1efdb9d.png', alt: 'ACPS IT CARNIVAL 2017' },
  ];

  return (
    <>
      {/* Hero Section with Call of Duty Animation */}
      <section className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-call-of-duty-video-game-using-a-rifle-44682-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 to-tech-dark/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/ede390a1-f65c-4a66-8f23-95a4b7728456.png" 
                alt="ACPSITC Logo" 
                className="h-28 w-28 object-contain animate-float"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron">
              <span className="block text-white mt-2">Adamjee Cantonment Public School IT Club</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-foreground/80 mt-4">
              Technology is to be invented or adopted
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <a href="#sectors" className="btn-outlined">
                Our Sectors
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowRight className="h-6 w-6 transform rotate-90 text-tech-purple" />
          </a>
        </div>
      </section>

      {/* About Section with Gaming Character */}
      <Section id="about" className="bg-section-gradient">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">About Us</h2>
            <p className="text-foreground/80 mb-6">
              The Adamjee Cantonment Public School IT Club (ACPSITC) is a student-led organization 
              dedicated to fostering technological innovation and digital literacy among students. 
              We provide a collaborative environment where tech enthusiasts can explore their passion 
              for various aspects of information technology through workshops, competitions, and projects.
            </p>
            <p className="text-foreground/80 mb-6">
              Our mission is to inspire the next generation of tech leaders by providing hands-on 
              experience and mentorship in various technology domains, preparing them for the 
              challenges of an increasingly digital world.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-video rounded-lg overflow-hidden border border-tech-purple/30 shadow-xl shadow-tech-purple/20">
              <img 
                src="/lovable-uploads/7c166ae8-24ba-4fe5-858f-ddfea217dbd3.png"
                alt="About ACPS IT Club"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full border-4 border-tech-dark bg-tech-purple flex items-center justify-center text-white font-orbitron font-bold text-xl">
              8+ YRS
            </div>
          </div>
        </div>
      </Section>

      {/* Sectors Section with Gaming Character */}
      <Section id="sectors" className="bg-tech-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-10">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-game-controller-43527-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <h2 className="section-title text-center mb-12">Our Sectors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="tech-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{sector.icon}</div>
              <h3 className="text-xl font-bold font-orbitron mb-3 group-hover:text-tech-purple transition-colors">
                {sector.title}
              </h3>
              <p className="text-foreground/70">{sector.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section with Gaming Animation */}
      <Section id="testimonials" className="bg-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-gamer-playing-with-a-ps4-controller-44282-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <h2 className="section-title text-center mb-12">What Our Members Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-tech-dark/50 border border-tech-purple/20 rounded-lg p-6 backdrop-blur-sm hover:border-tech-purple/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-tech-purple mb-2">
                  <img 
                    src={testimonial.image || "/images/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
              <p className="text-foreground/80 text-center italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Section with Gaming Character Overlay */}
      <Section id="gallery" className="bg-tech-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-mechanical-keyboard-pov-angle-41497-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <h2 className="section-title text-center mb-12">Gallery</h2>
        
        <div className="flex flex-wrap justify-center gap-5">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg shadow-tech-purple/10 group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-dark/20 to-tech-dark/90">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium text-white text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/gallery" className="btn-primary inline-flex items-center">
            View More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Contact Section with functional form */}
      <Section id="contact" className="bg-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <h2 className="section-title text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold font-orbitron mb-3 text-tech-purple">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-tech-purple mr-3" />
                  <span>+880 1741947492</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-tech-purple mr-3" />
                  <a href="mailto:acpsitc@gmail.com" className="hover:text-tech-purple transition-colors">
                    acpsitc@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-tech-purple mr-3 mt-1" />
                  <p>Adamjee Cantonment Public School, Dhaka Cantonment, Bangladesh</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-orbitron mb-3 text-tech-purple">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/acpsit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-tech-purple/10 hover:bg-tech-purple/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5 text-tech-purple" />
                </a>
                <a 
                  href="https://www.instagram.com/acpsitc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-tech-purple/10 hover:bg-tech-purple/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5 text-tech-purple" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/adamjee-cantonment-public-school-it-club/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-tech-purple/10 hover:bg-tech-purple/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5 text-tech-purple" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-tech-purple/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold font-orbitron mb-6 text-center text-foreground">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  rows={4}
                  className="resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
