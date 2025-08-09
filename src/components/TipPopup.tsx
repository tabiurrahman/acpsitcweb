
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Gamepad, Lightbulb } from 'lucide-react';

const tips = [
  "The ACPSITC was founded in 2016 by Tareq Mahmud and Fatin Bin Ferdous.",
  "Our club has organized over 50 workshops on various tech topics since inception.",
  "ACPSITC members have won 15+ national-level programming competitions.",
  "The Gaming Division of ACPSITC holds monthly tournaments for popular games like Call of Duty and Valorant.",
  "Our Cyber Security team has participated in multiple ethical hacking challenges.",
  "The ACPSITC website was built by our own Web Design team.",
  "We have a dedicated YouTube channel featuring tutorials created by our members.",
  "Over 500 students have been trained in various IT skills through our workshops.",
  "ACPSITC alumni are now working at top tech companies around the world.",
  "Our annual Tech Fest attracts over 1000 participants from different schools.",
  "The Graphics Design team has created logos for several school events and clubs.",
  "Our Video Editing team has produced award-winning short films.",
  "Our Gaming Division participated in the national Call of Duty championship last year.",
  "We offer specialized training in game design and development for interested members.",
  "Our members have created several indie games that have been published online.",
];

const TipPopup = () => {
  const [open, setOpen] = useState(false);
  const [tip, setTip] = useState('');

  useEffect(() => {
    // Randomly select a tip
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
    
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-tech-dark/95 border-tech-purple/50 max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-tech-purple">
            <Lightbulb className="h-5 w-5" />
            Do you know?
          </DialogTitle>
        </DialogHeader>
        <div className="p-4 bg-tech-purple/10 rounded-md border border-tech-purple/20">
          <p className="text-foreground/90">{tip}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button 
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-tech-purple hover:bg-tech-purple/90 text-white rounded-md flex items-center gap-2"
          >
            <Gamepad className="h-4 w-4" />
            Got it
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TipPopup;
