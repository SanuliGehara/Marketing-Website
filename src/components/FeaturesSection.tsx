
import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, CircleCheck, UsersRound } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-petblue-dark mb-4">
            Our Key Features
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how our innovative features can transform your pet care experience
            and help animals in need.
          </p>
        </div>

        {/* AI Pet Assistance Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-petblue/10 text-petblue-dark rounded-full mb-6">
              <Video className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-petblue-dark mb-4">
              AI Pet Assistance
            </h3>
            <p className="text-gray-600 mb-6">
              Our advanced AI analyzes your pet's behavior, diet, and health data to provide
              personalized recommendations and alert you to potential issues before they become serious.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-petorange-light mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-petblue-dark">Behavior Analysis</h4>
                  <p className="text-gray-600">Detects changes in behavior that might indicate health or emotional issues</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-petorange-light mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-petblue-dark">Dietary Recommendations</h4>
                  <p className="text-gray-600">Suggests optimal nutrition based on breed, age, weight, and activity level</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-petorange-light mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-petblue-dark">Health Monitoring</h4>
                  <p className="text-gray-600">Tracks vital health metrics and provides early warning for potential health issues</p>
                </div>
              </div>
            </div>
            
            <a href='https://youtu.be/6TfQl8xQXtk?si=2kZNJMwChkQvQkH6

Unlisted marketing video'>
              <Button className="bg-petorange-light hover:bg-petorange-dark text-white">
                Learn More
              </Button>
            </a>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="relative z-10 w-80 h-auto rounded-2xl shadow-lg"></div>
            <img 
              src="https://i.imgur.com/s9eiz9w.jpeg" 
              alt="AI Pet Assistance" 
              className="relative z-10 w-400 h-auto rounded-2xl shadow-lg transform translate-x-4"
            />
          </div>  

        </div>
        
        {/* Rescue Community Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-petgreen/20 rounded-full mix-blend-multiply filter blur-xl"></div>
            <img 
              src="https://i.imgur.com/BWMavwG.jpeg" 
              alt="Rescue Community" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-200 text-petblue-dark rounded-full mb-6">
              <UsersRound className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Community-Driven</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-petblue-dark mb-4">
              Rescue Community
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with a local network of pet lovers dedicated to rescuing and rehoming 
              animals in need. Share resources, advice, and support with fellow animal advocates.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-orange-400  mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-petblue-dark">Trusthworthy Pet Sitters</h4>
                  <p className="text-gray-600">Connect with reliable and trustworthy pet sitters to get temporary care for your pet</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-orange-400 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-petblue-dark">Locate Pets</h4>
                  <p className="text-gray-600">Join with pet community to locate your missing pets without worries!</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-orange-400 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-petblue-dark">Pet Adoption</h4>
                  <p className="text-gray-600">Connect with pet lovers to find the perfect forever homes for rescued pets</p>
                </div>
              </div>
            </div>
            
            <a href='https://www.instagram.com/pawsome.lk.app/'>
              <Button className="bg-orange-400 hover:bg-petorange-dark text-white">
                Join Our Community
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
