
import React from 'react';
import Section from '../components/Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from 'lucide-react';

const MembersPage = () => {
  // Updated committees data with real member information
  const committees = [
    {
      year: '2024-2025',
      members: [
        {
          id: '24-1',
          name: 'Md. Yousha Bin Ahasan',
          position: 'President',
          image: 'https://i.postimg.cc/Dwnn9DhV/presi.jpg'
        },
        {
          id: '24-2',
          name: 'Almas Sakib',
          position: 'General Secretary',
          image: 'https://i.postimg.cc/t4BQL4DP/gs.jpg'
        },
        {
          id: '24-3',
          name: 'Tabiur Rahman',
          position: 'Organizing Secretary',
          image: 'https://i.postimg.cc/YSjKkByP/os.jpg'
        },
        {
          id: '24-4',
          name: 'Yeasin Arafat',
          position: 'Administrator',
          image: 'https://i.postimg.cc/Df1V7gB7/AS.jpg'
        },
        {
          id: '24-5',
          name: 'Joyanto Kumar Halder',
          position: 'Head Of Segment',
          image: 'https://i.postimg.cc/x83FM64H/js.jpg'
        },
        {
          id: '24-6',
          name: 'Mahdin Mohammed Irfan',
          position: 'Head Of Event Affairs',
          image: 'https://i.postimg.cc/N02JpsnQ/HOEA.jpg'
        },
        {
          id: '24-7',
          name: 'Radin Alom',
          position: 'Head Of Designing',
          image: 'https://i.postimg.cc/3RgLQL76/HOD.jpg'
        },
        {
          id: '24-8',
          name: 'Faiad Bin Munsur Adib',
          position: 'Head Of Student Affairs',
          image: 'https://i.postimg.cc/G21QKkYj/HOSA.jpg'
        },
        {
          id: '24-9',
          name: 'Ishan Das',
          position: 'Head Of Programming',
          image: 'https://i.postimg.cc/MKrmNkVH/HOP.jpg'
        },
        {
          id: '24-10',
          name: 'Saad Bin Yousuf',
          position: 'Head Of Gaming',
          image: 'https://i.postimg.cc/Dw8Bwfn1/HOG.jpg'
        },
        {
          id: '24-11',
          name: 'Md. Ayan Rashid',
          position: 'Head Of Sub-Executive',
          image: 'https://i.postimg.cc/nzHmMTBN/HOSE.jpg'
        },
        {
          id: '24-12',
          name: 'Fawaz',
          position: 'Associate Head Of Event Affairs',
          image: 'https://i.postimg.cc/6qP4jXgN/AHEA.jpg'
        },
        {
          id: '24-13',
          name: 'Tanzim Alam Inan',
          position: 'Associate Head Of Student Affairs',
          image: 'https://i.postimg.cc/4NrhpXp6/AHSA.jpg'
        },
        {
          id: '24-14',
          name: 'Taiabur Rahman',
          position: 'Public Relations Officer (M)',
          image: 'https://i.postimg.cc/3RRwPqgr/PR-M.jpg'
        },
        {
          id: '24-15',
          name: 'Solaiman Hikmati',
          position: 'Public Relations Officer (D)',
          image: 'https://i.postimg.cc/dDMtZtgD/PR-D.jpg'
        }
      ]
    },
    {
      year: '2023-2024',
      members: [
        {
          id: '23-1',
          name: 'Samin Islam',
          position: 'President',
          image: 'https://i.postimg.cc/fLKCjgr1/1-President-Samin-Islam.png'
        },
        {
          id: '23-2',
          name: 'Safinur Rahman',
          position: 'General Secretary',
          image: 'https://i.postimg.cc/J4y3GnMf/2-General-Secretary-Safinur-Rahman.png'
        },
        {
          id: '23-3',
          name: 'Almas Sakib Ovi',
          position: 'Organising Secretary',
          image: 'https://i.postimg.cc/LsVLrg31/3-Organizing-Secretary-Almas-Sakib-Ovi.png'
        },
        {
          id: '23-4',
          name: 'Tabiur Rahman',
          position: 'Administrator',
          image: 'https://i.postimg.cc/HWNXDgXB/4-Administrator-Tabiur-Rahman.png'
        },
        {
          id: '23-5',
          name: 'Yousha Bin Ahasan',
          position: 'Head of Event Affairs',
          image: 'https://i.postimg.cc/SKmz7NbN/5-Head-of-Event-Affairs-Yousha-Bin-Ahasan.png'
        },
        {
          id: '23-6',
          name: 'Joyanto Kumar Haldar',
          position: 'Head of Designing',
          image: 'https://i.postimg.cc/qBNQCQGD/6-Head-of-Designing-Joyanto-Kumar-Haldar.png'
        },
        {
          id: '23-7',
          name: 'Pallab Kumar Saha',
          position: 'Head of Gaming',
          image: 'https://i.postimg.cc/DwPcKN20/7-Head-of-Gaming-Pallab-Kumar-Saha.png'
        },
        {
          id: '23-8',
          name: 'Shanzid Hossain',
          position: 'Head of Programming',
          image: 'https://i.postimg.cc/C5bqsZ55/9-Head-of-Programming-Shanzid-Hossain.png'
        },
        {
          id: '23-9',
          name: 'Muztabir Azraf',
          position: 'Head of Sub-Executives',
          image: 'https://i.postimg.cc/Zq0vDsn1/10-Head-of-Sub-Executives-Muztabir-Azraf.png'
        },
        {
          id: '23-10',
          name: 'Taiabur Rahman',
          position: 'Associate Head of Event Affairs',
          image: 'https://i.postimg.cc/fTK3WQ0G/11-Associate-Head-of-Event-Affairs-Taiabur-Rahman.png'
        },
        {
          id: '23-11',
          name: 'Md Mutasim Sadik',
          position: 'Associate Head of Student Affairs',
          image: 'https://i.postimg.cc/YS4jx4y7/12-Associate-Head-of-Student-Affairs-Md-Mutasim-Sadik.png'
        },
        {
          id: '23-12',
          name: 'Faiad Bin Munsur Adib',
          position: 'Public Relation Officer (Morning Shift)',
          image: 'https://i.postimg.cc/Qt1tR23n/13-Public-Relation-Officer-Morning-Shift-Faiad-Bin-Munsur-Adib.png'
        },
        {
          id: '23-13',
          name: 'Mahdin Mohammed Irfan',
          position: 'Public Relation Officer (Day Shift)',
          image: 'https://i.postimg.cc/Cx5KFB08/14-Public-Relation-Officer-Day-Shift-Mahdin-Mohammed-Irfan.png'
        }
      ]
    },
    {
      year: '2022-2023',
      members: [
        {
          id: '22-1',
          name: 'Khandaker Sifat Sami',
          position: 'President',
          image: 'https://i.postimg.cc/SsHMwtCb/sifat.jpg'
        },
        {
          id: '22-2',
          name: 'MD Shariyar Tashkir',
          position: 'General Secretary',
          image: 'https://i.postimg.cc/6qS9pDzY/shahriyar.jpg'
        },
        {
          id: '22-3',
          name: 'Salehin Alam Tahsin',
          position: 'Organising Secretary',
          image: 'https://i.postimg.cc/7ZtNYXyb/salehin.jpg'
        },
        {
          id: '22-4',
          name: 'K.M. Ahnaf Zamil',
          position: 'Administrator',
          image: 'https://i.postimg.cc/3NcYLPv2/zamil.jpg'
        },
        {
          id: '22-5',
          name: 'Syed Mirsab Hasan',
          position: 'Head of Student Affairs',
          image: 'https://i.postimg.cc/28j7fgBn/hasan.jpg'
        },
        {
          id: '22-6',
          name: 'Shahta Showkat',
          position: 'Associate Head of Student Affairs',
          image: 'https://i.postimg.cc/ZnLMf3v3/shahta.jpg'
        },
        {
          id: '22-7',
          name: 'MD Samin Islam',
          position: 'Head of Sub-Executives',
          image: 'https://i.postimg.cc/jd5wdTqQ/samin.jpg'
        },
        {
          id: '22-8',
          name: 'Muhannad Al Wahid',
          position: 'Head of Gaming',
          image: 'https://i.postimg.cc/BZ8yHLvj/wahid.jpg'
        },
        {
          id: '22-9',
          name: 'Sadman Rohan',
          position: 'Head of Event Affairs',
          image: 'https://i.postimg.cc/fW15Y83d/rohan.jpg'
        },
        {
          id: '22-10',
          name: 'Almas Sakib Ovi',
          position: 'Associate Head of Event Affairs',
          image: 'https://i.postimg.cc/0QP158v8/sakib.jpg'
        },
        {
          id: '22-11',
          name: 'Tabiur Rahman',
          position: 'Head of Programming',
          image: 'https://i.postimg.cc/rsc801Lt/tabiur.jpg'
        },
        {
          id: '22-12',
          name: 'Atiq Shahriyer',
          position: 'Head of Designing',
          image: 'https://i.postimg.cc/K8QmKk91/shahriyer.jpg'
        },
        {
          id: '22-13',
          name: 'MD Muztabir Azraf',
          position: 'Associate General Secretary',
          image: 'https://i.postimg.cc/zvyDCJcn/muztabir.jpg'
        },
        {
          id: '22-14',
          name: 'Samin Yasar Sakif',
          position: 'Treasurer',
          image: 'https://i.postimg.cc/wjXWqDjm/sakif.jpg'
        },
        {
          id: '22-15',
          name: 'Mikdad Tieb Adib',
          position: 'Representative (English Version)',
          image: 'https://i.postimg.cc/yxR46WGr/adib.jpg'
        },
        {
          id: '22-16',
          name: 'Sadik',
          position: 'Representative (Morning)',
          image: 'https://i.postimg.cc/sgxXy4cn/sadik.jpg'
        },
        {
          id: '22-17',
          name: 'Muhammad Yousha',
          position: 'Representative (Day)',
          image: 'https://i.postimg.cc/fyK0JW1D/yousha.jpg'
        }
      ]
    },
    {
      year: '2021-2022',
      members: [
        {
          id: '21-1',
          name: 'Maqsud Zayan Abdullah',
          position: 'President',
          image: 'https://i.postimg.cc/fTHkSrq7/zayan.jpg'
        },
        {
          id: '21-2',
          name: 'S M Ferdous Nabil',
          position: 'General Secretary',
          image: 'https://i.postimg.cc/xdbRGD2r/ferdous.jpg'
        },
        {
          id: '21-3',
          name: 'Zakariya Islam Shahad',
          position: 'Organising Secretary',
          image: 'https://i.postimg.cc/KjR7t2NL/zakaria.jpg'
        },
        {
          id: '21-4',
          name: 'Safwan Rahman',
          position: 'Head of Segments',
          image: 'https://i.postimg.cc/WpGjGvQ0/safwan.jpg'
        },
        {
          id: '21-5',
          name: 'Mohayminul Islam Sajon',
          position: 'Head of Designing',
          image: 'https://i.postimg.cc/GtVk3Dds/sajon.jpg'
        },
        {
          id: '21-6',
          name: 'Muhannad Al Wahid',
          position: 'Head of Gaming',
          image: 'https://i.postimg.cc/6q8WKjWt/wahid.jpg'
        },
        {
          id: '21-7',
          name: 'Yeasir Islam',
          position: 'Head of Volunteering Affairs and Student Affairs',
          image: 'https://i.postimg.cc/PrnNWH2j/yeasir.jpg'
        },
        {
          id: '21-8',
          name: 'Khandaker Sifat Sami',
          position: 'Head of Sub-Executives',
          image: 'https://i.postimg.cc/TwCMpr71/sifat.jpg'
        },
        {
          id: '21-9',
          name: 'Nudrat Towsif',
          position: 'Treasurer',
          image: 'https://i.postimg.cc/XYmw6mn7/towsiif.jpg'
        },
        {
          id: '21-10',
          name: 'MD. Sadik Tanzim Hossain(Jasin)',
          position: 'Joint Secretary',
          image: 'https://i.postimg.cc/bwz52Gn2/tanzim.jpg'
        },
        {
          id: '21-11',
          name: 'Shahriar Ahmed Nirob',
          position: 'Associate General Secretary',
          image: 'https://i.postimg.cc/kMFdNLJt/nirob.jpg'
        },
        {
          id: '21-13',
          name: 'Saadman Rohan',
          position: 'Associate Head of Segments',
          image: 'https://i.postimg.cc/436mzBm4/rohan.jpg'
        },
        {
          id: '21-14',
          name: 'Syed Mirsab Hasan',
          position: 'Associate Head of Volunteering and Student Affairs',
          image: 'https://i.postimg.cc/85CXXx4k/syed.jpg'
        },
        {
          id: '21-15',
          name: 'Salehin Alam Tahsin',
          position: 'Public Relation Officer',
          image: 'https://i.postimg.cc/85sJFCyd/salehin.jpg'
        },
        {
          id: '21-16',
          name: 'Sathvik Alam Risad',
          position: 'Public Relation Officer',
          image: 'https://i.postimg.cc/15Xs9JSn/risad.jpg'
        },
        {
          id: '21-17',
          name: 'Nafee Al Rashid',
          position: 'Representative(Morning Shift)',
          image: 'https://i.postimg.cc/rp3tJK9g/rashid.jpg'
        },
        {
          id: '21-18',
          name: 'Zunaed Shiam',
          position: 'Representative(English Version)',
          image: 'https://i.postimg.cc/Fshktmcx/shiam.jpg'
        },
        {
          id: '21-19',
          name: 'Shahriyar Tashkir',
          position: 'Representative(Day Shift)',
          image: 'https://i.postimg.cc/kM0wW20g/shahriyar.jpg'
        }
      ]
    },
    {
      year: '2020-2021',
      members: [
        {
          id: '20-1',
          name: 'Sayed Muhammed Nahiyan',
          position: 'President',
          image: 'https://i.postimg.cc/kgyszLqt/nahiyan.jpg'
        },
        {
          id: '20-2',
          name: 'Muhammad Bin Zafar',
          position: 'General Secretary',
          image: 'https://i.postimg.cc/xTQkHL7F/zafar.jpg'
        },
        {
          id: '20-3',
          name: 'Nazmul Saleyhin Nabil',
          position: 'Organizing Secretary',
          image: 'https://i.postimg.cc/jqhp63JC/nabil.jpg'
        },
        {
          id: '20-4',
          name: 'Shah Farzeen Hossain',
          position: 'Adviser',
          image: 'https://i.postimg.cc/8kLcmG1D/farzeen.jpg'
        },
        {
          id: '20-5',
          name: 'M.M. Asif Yousuf',
          position: 'Adviser',
          image: 'https://i.postimg.cc/fTZnnnYw/asif.jpg'
        },
        {
          id: '20-6',
          name: 'Jubaedul Islam Shihab',
          position: 'Adviser',
          image: 'https://i.postimg.cc/vTz7kVdw/shihab.jpg'
        },
        {
          id: '20-7',
          name: 'Farhan Mahadi Moon',
          position: 'Head of Segments',
          image: 'https://i.postimg.cc/bYFGvgNS/moon.jpg'
        },
        {
          id: '20-8',
          name: 'Muhtashim Ahmad Khan',
          position: 'Head of Designing',
          image: 'https://i.postimg.cc/Fs5YcR3h/muhtashim.jpg'
        },
        {
          id: '20-9',
          name: 'Nafisul Islam Efaz',
          position: 'Head of Volunteering and Student Affairs',
          image: 'https://i.postimg.cc/5yyzjkCj/efaz.jpg'
        },
        {
          id: '20-10',
          name: 'Shabab Sadatain Jaffry',
          position: 'Head of Gaming',
          image: 'https://i.postimg.cc/wj4DYzyZ/jaffry.jpg'
        },
        {
          id: '20-11',
          name: 'K.M. Ahnaf Zamil',
          position: 'Head of Programming',
          image: 'https://i.postimg.cc/Qd4VRwMR/zamil.jpg'
        },
        {
          id: '20-12',
          name: 'Mahroof Shahrirar',
          position: 'Assistant General Secretary',
          image: 'https://i.postimg.cc/qvrpB6nC/mahroof.jpg'
        },
        {
          id: '20-13',
          name: 'Md. Safwan Ur Rahman',
          position: 'Assistant Head of Segments',
          image: 'https://i.postimg.cc/Yqvwpfh9/safwan.jpg'
        },
        {
          id: '20-14',
          name: 'Md. Tamjid Islam Rafi',
          position: 'Representative (Sr.)',
          image: 'https://i.postimg.cc/NfkPvKxM/tamjid.jpg'
        },
        {
          id: '20-15',
          name: 'Yeasir Islam',
          position: 'Representative (Sr.)',
          image: 'https://i.postimg.cc/sfNg92WM/yeasir.jpg'
        },
        {
          id: '20-16',
          name: 'Salehin Alam Tahsin',
          position: 'Public Relation Officer (Jr.)',
          image: 'https://i.postimg.cc/mg3pRtNk/salehin.jpg'
        },
        {
          id: '20-17',
          name: 'Syed Mirsab Hasan',
          position: 'Representative (Jr.)',
          image: 'https://i.postimg.cc/j2TMnThv/mirsab.jpg'
        }
      ]
    },
    {
      year: '2019-2020',
      members: [
        {
          id: '19-1',
          name: 'Farzeen Hossain',
          position: 'President',
          image: 'https://i.postimg.cc/6623gzHz/farzeen.png'
        },
        {
          id: '19-2',
          name: 'Jubaedul Isalm Shihab',
          position: 'General Secretary',
          image: 'https://i.postimg.cc/76c33V9h/jubaedul.png'
        },
        {
          id: '19-3',
          name: 'M.M Asif Yousuf',
          position: 'Administrator',
          image: 'https://i.postimg.cc/Ss2h1S6d/yousuf.png'
        },
        {
          id: '19-4',
          name: 'MD. Faysal Mahmud',
          position: 'Administrator',
          image: 'https://i.postimg.cc/nVY5FfwL/faysal.png'
        },
        {
          id: '19-5',
          name: 'Ahnaf Abir',
          position: 'Head of All Segments',
          image: 'https://i.postimg.cc/rsc8BBHk/ahnaf.png'
        },
        {
          id: '19-6',
          name: 'Shahriar Hakim',
          position: 'Instructor',
          image: 'https://i.postimg.cc/8P3CTY5j/shahriar.png'
        },
        {
          id: '19-7',
          name: 'Rafiul Islam',
          position: 'Public Relation Officer',
          image: 'https://i.postimg.cc/xdvhFXh9/rafiul.png'
        },
        {
          id: '19-8',
          name: 'Tasrif Zawad',
          position: 'Public Relation Officer',
          image: 'https://i.postimg.cc/K8vCscFT/zawad.png'
        },
        {
          id: '19-9',
          name: 'Syed Abid Reza',
          position: 'Official Photographer',
          image: 'https://i.postimg.cc/vTf0Dkyb/reza.png'
        },
        {
          id: '19-10',
          name: 'Adil Mahmud',
          position: 'Treasurer',
          image: 'https://i.postimg.cc/XvpXx6R1/adil.png'
        },
        {
          id: '19-11',
          name: 'Estesamul Haque Jiam',
          position: 'Head of Gaming',
          image: 'https://i.postimg.cc/tJYVMjsz/jiam.png'
        },
        {
          id: '19-12',
          name: 'Al-Muhaimin',
          position: 'Official Programmer',
          image: 'https://i.postimg.cc/7hgKb0Nc/al-muhaimin.png'
        }
      ]
    },
    {
      year: '2017-2019',
      members: [
        {
          id: '17-1',
          name: 'Raiyan Islam',
          position: 'President',
          useIcon: true
        },
        {
          id: '17-2',
          name: 'Rifayet Islam',
          position: 'General Secretary',
          useIcon: true
        },
        {
          id: '17-3',
          name: 'Sk Al Musavvir Sakir',
          position: 'General Secretary',
          useIcon: true
        },
        {
          id: '17-4',
          name: 'Mahim Reza',
          position: 'Vice President',
          useIcon: true
        },
        {
          id: '17-5',
          name: 'Saiful Islam Oni',
          position: 'Vice President',
          useIcon: true
        },
        {
          id: '17-6',
          name: 'Shaykul Sakib',
          position: 'Senior Executive',
          useIcon: true
        },
        {
          id: '17-7',
          name: 'Ashik Rahman',
          position: 'Senior Executive',
          useIcon: true
        },
        {
          id: '17-8',
          name: 'Ashfakur Rahman',
          position: 'Public Relation',
          useIcon: true
        },
        {
          id: '17-9',
          name: 'Manal Ahmed',
          position: 'Public Relation',
          useIcon: true
        },
        {
          id: '17-10',
          name: 'Alif Mahmud',
          position: 'Volunteer Leader',
          useIcon: true
        },
        {
          id: '17-11',
          name: 'Tanvin Kayes',
          position: 'VP of all Segments',
          useIcon: true
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Section className="bg-tech-dark">
        <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-center tech-gradient-text mb-2">Executive Committee</h1>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Meet the dedicated team of students who lead our IT Club through various initiatives and activities.
        </p>

        <Tabs defaultValue="2024-2025" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
            {committees.map((committee) => (
              <TabsTrigger 
                key={committee.year} 
                value={committee.year}
                className="px-4 py-2 rounded-full data-[state=active]:bg-tech-purple data-[state=active]:text-white"
              >
                {committee.year}
              </TabsTrigger>
            ))}
          </TabsList>

          {committees.map((committee) => (
            <TabsContent key={committee.year} value={committee.year} className="focus:outline-none">
              <h2 className="text-2xl font-orbitron font-bold mb-6 text-center">
                Executive Committee <span className="tech-gradient-text">{committee.year}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {committee.members.map((member) => (
                  <div 
                    key={member.id} 
                    className="tech-card flex flex-col items-center text-center"
                  >
                    <div className="h-32 w-32 rounded-full overflow-hidden border-2 border-tech-purple/50 mb-4 flex items-center justify-center bg-tech-purple/10">
                      {member.useIcon ? (
                        <User size={48} className="text-tech-purple" />
                      ) : (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <h3 className="text-lg font-bold font-orbitron mb-1">{member.name}</h3>
                    <p className="text-tech-purple text-sm">{member.position}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </div>
  );
};

export default MembersPage;
