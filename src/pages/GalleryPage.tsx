import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const GalleryPage = () => {
  // Gallery images with real uploaded images
  const galleryImages = [
    { 
      id: 1, 
      src: '/lovable-uploads/80221b50-edad-4055-b69e-69bffaa58d92.png', 
      alt: 'Chess Tournament', 
      category: 'competitions' 
    },
    { 
      id: 2, 
      src: '/lovable-uploads/b5909217-dbb1-4b74-97c0-2cf557ac0574.png', 
      alt: 'Minecraft Java Edition Build Battle Competition', 
      category: 'competitions' 
    },
    { 
      id: 3, 
      src: '/lovable-uploads/0b0a7b09-4005-41b1-8b9e-1c57747a98a5.png', 
      alt: 'Design Mania Competition', 
      category: 'competitions' 
    },
    { 
      id: 4, 
      src: '/lovable-uploads/9d82a706-e023-4f86-8be3-7f18f24152ca.png', 
      alt: '1st ACPS National Astro Carnival', 
      category: 'events' 
    },
    { 
      id: 5, 
      src: '/lovable-uploads/982eb2f7-dfeb-4fbf-a3a8-9fac37f41725.png', 
      alt: 'IT Lab Workshop Session', 
      category: 'workshops' 
    },
    { 
      id: 6, 
      src: '/lovable-uploads/2e906a91-5faf-4f25-9fd9-7f5b9656013a.png', 
      alt: 'Programming Workshop', 
      category: 'workshops' 
    },
    { 
      id: 7, 
      src: '/lovable-uploads/ede2f546-b719-49c3-9d58-87b733eee51c.png', 
      alt: 'Computer Lab Training Session', 
      category: 'workshops' 
    },
    { 
      id: 8, 
      src: '/lovable-uploads/3c124b5d-da99-4cdc-9173-a17003847e7b.png', 
      alt: 'ACPSITC Team Group Photo', 
      category: 'team' 
    },
    { 
      id: 9, 
      src: '/lovable-uploads/7e8b95b5-c923-465c-8467-2e3dda42a2e7.png', 
      alt: 'CCNA Online Training Program', 
      category: 'workshops' 
    },
    { 
      id: 10, 
      src: '/lovable-uploads/a76d1ca0-1fe6-4e69-b9b9-b8717a6eb49d.png', 
      alt: 'Design Workshop with Raiyan Islam', 
      category: 'workshops' 
    },
    { 
      id: 11, 
      src: '/lovable-uploads/7c166ae8-24ba-4fe5-858f-ddfea217dbd3.png', 
      alt: 'ACPSITC Executive Committee Group Photo', 
      category: 'team' 
    },
    { 
      id: 12, 
      src: '/lovable-uploads/805485ef-3cfc-4fab-ad1b-50ae0f2ff572.png', 
      alt: 'Workshop on Cyber Security', 
      category: 'workshops' 
    },
    { 
      id: 13, 
      src: '/lovable-uploads/dc511a54-58f4-4e05-a6b3-3ef6060ef38e.png', 
      alt: 'MEMECON 1.0 Event', 
      category: 'events' 
    },
    { 
      id: 14, 
      src: '/lovable-uploads/72cfb21e-ac18-4c9f-8b07-581035887274.png', 
      alt: 'Science Booster 3.1 Club Partner', 
      category: 'events' 
    },
    { 
      id: 15, 
      src: '/lovable-uploads/319aa5f4-9b67-4d2d-afe2-2b8b9454fc17.png', 
      alt: 'NITO Club Partner Presentation', 
      category: 'events' 
    },
    { 
      id: 16, 
      src: '/lovable-uploads/1f8f19e5-f285-479f-b12d-3f39065ffca6.png', 
      alt: 'GAMER VERSE Registration Ongoing', 
      category: 'competitions' 
    },
    { 
      id: 17, 
      src: '/lovable-uploads/ab9e2471-8f6f-445c-81a8-febcb1efdb9d.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Group Photo', 
      category: 'events' 
    },
    { 
      id: 18, 
      src: '/lovable-uploads/7be28227-bdfe-47d5-9d24-01f09f7d2d9f.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Computer Lab Session', 
      category: 'workshops' 
    },
    { 
      id: 19, 
      src: '/lovable-uploads/0f838e0f-8522-4184-a641-e82cd0f05544.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Speaker Presentation', 
      category: 'events' 
    },
    { 
      id: 20, 
      src: '/lovable-uploads/a9729807-5ba7-4b53-830c-e0bfd486cc09.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Robotics Project', 
      category: 'projects' 
    },
    { 
      id: 21, 
      src: '/lovable-uploads/19c500e8-c9f7-460c-88b4-d492e912918d.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Arduino Workshop', 
      category: 'workshops' 
    },
    { 
      id: 22, 
      src: '/lovable-uploads/2d7f4daa-40e7-441c-aa70-0a5c2daa8316.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Drone Project', 
      category: 'projects' 
    },
    { 
      id: 23, 
      src: '/lovable-uploads/a0728a99-6e9a-4f38-b471-5b40b97f6f4b.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Award Ceremony', 
      category: 'events' 
    },
    { 
      id: 24, 
      src: '/lovable-uploads/ee070340-d29f-4b6f-b312-294294f5e794.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Hardware Showcase', 
      category: 'events' 
    },
    { 
      id: 25, 
      src: '/lovable-uploads/3c954e47-f86e-448d-becf-60f9b1ef8b77.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Gaming Session', 
      category: 'events' 
    },
    { 
      id: 26, 
      src: '/lovable-uploads/fda20313-728f-4532-8ea3-8eadb6baaf24.png', 
      alt: 'ACPS IT CARNIVAL 2017 - Participants Group', 
      category: 'events' 
    }
  ];

  // Executive Members data 2024-25 - Updated with real names and photos
  const executiveMembers = [
    { id: 1, name: "Md. Yousha Bin Ahasan", role: "President", image: "https://i.postimg.cc/Dwnn9DhV/presi.jpg" },
    { id: 2, name: "Almas Sakib", role: "General Secretary", image: "https://i.postimg.cc/t4BQL4DP/gs.jpg" },
    { id: 3, name: "Tabiur Rahman", role: "Organizing Secretary", image: "https://i.postimg.cc/YSjKkByP/os.jpg" },
    { id: 4, name: "Yeasin Arafat", role: "Administrator", image: "https://i.postimg.cc/Df1V7gB7/AS.jpg" },
    { id: 5, name: "Joyanto Kumar Halder", role: "Head Of Segment", image: "https://i.postimg.cc/x83FM64H/js.jpg" },
    { id: 6, name: "Mahdin Mohammed Irfan", role: "Head Of Event Affairs", image: "https://i.postimg.cc/N02JpsnQ/HOEA.jpg" },
    { id: 7, name: "Radin Alom", role: "Head Of Designing", image: "https://i.postimg.cc/3RgLQL76/HOD.jpg" },
    { id: 8, name: "Faiad Bin Munsur Adib", role: "Head Of Student Affairs", image: "https://i.postimg.cc/G21QKkYj/HOSA.jpg" },
    { id: 9, name: "Ishan Das", role: "Head Of Programming", image: "https://i.postimg.cc/MKrmNkVH/HOP.jpg" },
    { id: 10, name: "Saad Bin Yousuf", role: "Head Of Gaming", image: "https://i.postimg.cc/Dw8Bwfn1/HOG.jpg" },
    { id: 11, name: "Md. Ayan Rashid", role: "Head Of Sub-Executive", image: "https://i.postimg.cc/nzHmMTBN/HOSE.jpg" },
    { id: 12, name: "Fawaz", role: "Associate Head Of Event Affairs", image: "https://i.postimg.cc/6qP4jXgN/AHEA.jpg" },
    { id: 13, name: "Tanzim Alam Inan", role: "Associate Head Of Student Affairs", image: "https://i.postimg.cc/4NrhpXp6/AHSA.jpg" },
    { id: 14, name: "Taiabur Rahman", role: "Public Relations Officer (M)", image: "https://i.postimg.cc/3RRwPqgr/PR-M.jpg" },
    { id: 15, name: "Solaiman Hikmati", role: "Public Relations Officer (D)", image: "https://i.postimg.cc/dDMtZtgD/PR-D.jpg" },
  ];

  const categories = ['all', 'events', 'workshops', 'competitions', 'projects', 'team'];
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'gallery' | 'executives'>('gallery');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20">
      <Section className="bg-tech-dark">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/lovable-uploads/ede390a1-f65c-4a66-8f23-95a4b7728456.png" 
            alt="ACPSITC Logo" 
            className="h-16 w-16 object-contain mr-4"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-center tech-gradient-text mb-2">Gallery</h1>
            <p className="text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
              Explore moments from our events, workshops, competitions and meet our team.
            </p>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md overflow-hidden border border-tech-purple/30">
            <button
              className={`px-6 py-2 font-medium ${activeTab === 'gallery' ? 'bg-tech-purple text-white' : 'bg-tech-dark hover:bg-tech-purple/10'}`}
              onClick={() => setActiveTab('gallery')}
            >
              Photo Gallery
            </button>
            <button
              className={`px-6 py-2 font-medium ${activeTab === 'executives' ? 'bg-tech-purple text-white' : 'bg-tech-dark hover:bg-tech-purple/10'}`}
              onClick={() => setActiveTab('executives')}
            >
              Executive Members
            </button>
          </div>
        </div>
        
        {activeTab === 'gallery' ? (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category 
                      ? 'bg-tech-purple text-white' 
                      : 'bg-tech-purple/10 hover:bg-tech-purple/20 text-foreground/80'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid - Updated Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className="cursor-pointer group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-medium">{image.alt}</h3>
                    <p className="text-tech-purple text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="section-title text-center mb-8">Executive Committee 2024-25</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {executiveMembers.map((member) => (
                <Card key={member.id} className="bg-tech-dark/40 border-tech-purple/30 backdrop-blur-sm hover:border-tech-purple/60 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[3/4] overflow-hidden bg-tech-purple/10">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-tech-dark to-transparent">
                        <h3 className="text-lg font-bold tech-gradient-text">{member.name}</h3>
                        <p className="text-white/80">{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
        
        {/* Image Modal */}
        {selectedImage && (
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="bg-tech-dark/95 border-tech-purple/30 max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-tech-purple">
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </DialogTitle>
              </DialogHeader>
              <div className="relative aspect-video overflow-hidden rounded-md">
                <img 
                  src={galleryImages.find(img => img.id === selectedImage)?.src} 
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt} 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-foreground/60 italic mt-2">
                Category: {galleryImages.find(img => img.id === selectedImage)?.category}
              </p>
            </DialogContent>
          </Dialog>
        )}
      </Section>
    </div>
  );
};

export default GalleryPage;
