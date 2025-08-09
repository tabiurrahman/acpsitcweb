
import React from 'react';
import Section from '../components/Section';

const HistoryPage = () => {
  return (
    <div className="pt-20">
      <Section className="bg-section-gradient">
        <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-center tech-gradient-text mb-2">Our History</h1>
        <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
          Discover the journey of ACPSITC, from its humble beginnings to becoming one of the most active IT clubs.
        </p>
        
        <div className="max-w-3xl mx-auto bg-tech-dark/50 border border-tech-purple/30 rounded-lg p-8 backdrop-blur-sm">
          <p className="mb-6 text-lg leading-relaxed">
            Marking an important milestone, we raise our glasses to eight years of Adamjee Cantonment Public School IT Club! 
            As we celebrate the 8th anniversary of our esteemed IT club, we reminisce about the countless breakthroughs 
            and transformative discoveries that have shaped our journey.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Respectfully recalling our IT Club founders Tariq Mahmood, Fatin Bin Ferdous, and Asad Bin Shaheed and our 
            esteemed previous Moderator Mahe Alam Sir (now Alamgir Badsha Sir) led the way together. Special thanks to all 
            our Executives and Sub-Executives. Through their hard work and tireless efforts they have brought 
            Adamjee IT Club this far.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            This moment calls for celebration, as it is a testament to the passion and dedication of our members, whose 
            unwavering commitment has fueled the club's success. As we toast this special occasion, we also look forward 
            to the limitless possibilities that lie ahead, eager to continue our pursuit of innovation and excellence 
            in the ever-evolving technology landscape.
          </p>
        </div>
      </Section>
      
      {/* Timeline */}
      <Section className="bg-tech-dark">
        <h2 className="section-title text-center mb-12">Our Journey</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-purple/30"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-tech-dark bg-tech-purple"></div>
              <div className="ml-auto mr-10 md:mr-auto md:ml-[calc(50%+30px)] md:w-[45%] p-6 bg-tech-dark/50 border border-tech-purple/30 rounded-lg">
                <h3 className="text-xl font-bold font-orbitron mb-2">2015</h3>
                <p className="text-foreground/80">
                  Founded by Tariq Mahmood, Fatin Bin Ferdous, and Asad Bin Shaheed with the goal of promoting tech literacy 
                  among students at Adamjee Cantonment Public School.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-tech-dark bg-tech-purple"></div>
              <div className="mr-auto ml-10 md:ml-auto md:mr-[calc(50%+30px)] md:w-[45%] p-6 bg-tech-dark/50 border border-tech-purple/30 rounded-lg">
                <h3 className="text-xl font-bold font-orbitron mb-2">2016</h3>
                <p className="text-foreground/80">
                  Expanded into multiple technology sectors including programming, web development, and graphic design.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-tech-dark bg-tech-purple"></div>
              <div className="ml-auto mr-10 md:mr-auto md:ml-[calc(50%+30px)] md:w-[45%] p-6 bg-tech-dark/50 border border-tech-purple/30 rounded-lg">
                <h3 className="text-xl font-bold font-orbitron mb-2">2018</h3>
                <p className="text-foreground/80">
                  Organized the first inter-school tech competition, attracting participants from across the region.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-tech-dark bg-tech-purple"></div>
              <div className="mr-auto ml-10 md:ml-auto md:mr-[calc(50%+30px)] md:w-[45%] p-6 bg-tech-dark/50 border border-tech-purple/30 rounded-lg">
                <h3 className="text-xl font-bold font-orbitron mb-2">2020</h3>
                <p className="text-foreground/80">
                  Adapted to virtual operations during the pandemic, conducting online workshops and competitions.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-tech-dark bg-tech-purple"></div>
              <div className="ml-auto mr-10 md:mr-auto md:ml-[calc(50%+30px)] md:w-[45%] p-6 bg-tech-dark/50 border border-tech-purple/30 rounded-lg">
                <h3 className="text-xl font-bold font-orbitron mb-2">2022</h3>
                <p className="text-foreground/80">
                  Recognized for excellence in STEM education promotion by the Regional Education Board.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-tech-dark bg-tech-purple"></div>
              <div className="mr-auto ml-10 md:ml-auto md:mr-[calc(50%+30px)] md:w-[45%] p-6 bg-tech-dark/50 border border-tech-purple/30 rounded-lg">
                <h3 className="text-xl font-bold font-orbitron mb-2">2023</h3>
                <p className="text-foreground/80">
                  Celebrating 8 years of excellence and innovation with expanded technology sectors and greater impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Founders */}
      <Section className="bg-section-gradient">
        <h2 className="section-title text-center mb-12">Our Founders</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="tech-card flex flex-col items-center text-center">
            <div className="h-40 w-40 rounded-full overflow-hidden border-2 border-tech-purple mb-4">
              <img 
                src="/lovable-uploads/32be2d33-a4bd-4b30-ba07-274d6a4225c5.png" 
                alt="Tariq Mahmud"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-2">Tariq Mahmud</h3>
            <p className="text-tech-purple mb-4">Founder</p>
            <p className="text-foreground/70">
              Visionary founder who initiated the IT Club with the goal of empowering students through technology education.
            </p>
          </div>
          
          <div className="tech-card flex flex-col items-center text-center">
            <div className="h-40 w-40 rounded-full overflow-hidden border-2 border-tech-purple mb-4">
              <img 
                src="/lovable-uploads/b851559b-a805-4c30-b6ed-0a6327bcf2b8.png" 
                alt="Fatin Bin Ferdous"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-2">Fatin Bin Ferdous</h3>
            <p className="text-tech-purple mb-4">Founder</p>
            <p className="text-foreground/70">
              Technology enthusiast who helped establish the initial structure and curriculum for the club's activities.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HistoryPage;
