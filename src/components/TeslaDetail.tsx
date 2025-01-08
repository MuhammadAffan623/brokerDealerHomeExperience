import React from 'react';
import { ArrowLeft, Share2, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TeslaDetail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Navigation section remains the same */}
      <nav className="bg-[#0B0B0B] border-b border-[#1C1C1C] px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="text-white flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="text-white">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="text-white">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header section remains the same */}
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-2xl text-white font-bold">Tesla x RoboTaxi Early Access</h1>
          <span className="bg-[#1A2B3B] text-[#4A90E2] text-sm px-2 py-1 rounded">
            VOTR ACCESS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column remains the same */}
          <div>
            <div className="bg-[#1C1C1C] rounded-lg overflow-hidden mb-4">
              <img 
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F10%2F11%2Ftesla-autonomous-cybercab-robotaxi-release-info-001.jpg?q=90&w=1400&cbr=1&fit=max" 
                alt="Tesla RoboTaxi"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Tesla Interior"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Tesla Exterior"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-6">
            <img 
              src="https://e7.pngegg.com/pngimages/1022/248/png-clipart-tesla-logo-car-logo-tesla-icons-logos-emojis-car-logos-thumbnail.png" 
              alt="Tesla Logo"
              className="h-8 mb-6"
            />
            
            {/* Rest of the component remains the same */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D63B3B]" />
                <span className="text-white">Minimum of 1,000 Shares</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                <span className="text-white">Only for Tesla Shareholders</span>
              </div>
            </div>

            <div className="border-t border-[#2C2C2C] py-6">
              <div className="text-2xl text-white font-bold mb-2">$200 Deposit</div>
              <div className="text-[#6B6B6B] mb-6">Available Places: 10</div>
              
              <div className="bg-[#1A3B23] text-[#4CAF50] p-4 rounded-lg mb-6">
                You need to buy 100 more shares to unlock this
              </div>

              <button className="w-full bg-[#D63B3B] text-white py-3 rounded-lg font-medium">
                Buy More Shares
              </button>
            </div>

            <div className="border-t border-[#2C2C2C] pt-6">
              <h3 className="text-white font-bold mb-4">Description</h3>
              <p className="text-[#6B6B6B] mb-4">
                Autonomy meets luxury design in Tesla's groundbreaking RoboTaxi platform. This early access program showcases the future of sustainable urban transportation.
              </p>
              <ul className="text-[#6B6B6B] space-y-2">
                <li>• Book instantly through the Tesla app and the vehicle comes to you - no parking hassles, no designated driver needed</li>
                <li>• Relax during your journey - catch up on work, take a nap, or enjoy entertainment while the vehicle handles traffic</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-white font-bold text-xl mb-4">Similar Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1C1C1C] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Apple iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-white font-medium mb-2">10% off new iPhone</div>
                <button className="text-[#D63B3B]">Learn More</button>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549650686-70914b5be0bb?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Uber Ride"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-white font-medium mb-2">Complimentary Uber One</div>
                <button className="text-[#D63B3B]">Learn More</button>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Tesla Factory"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-white font-medium mb-2">Tesla Giga Factory Tour</div>
                <button className="text-[#D63B3B]">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}