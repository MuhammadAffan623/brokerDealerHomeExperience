import React, { useState } from 'react';
import { Search, SlidersHorizontal, Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TeslaDetail from './components/TeslaDetail';

const perks = [
  {
    company: "Tesla",
    ticker: "TSLA",
    title: "Early Cyber Cab Access",
    description: "Priority access to Tesla's autonomous taxi service in launch cities",
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F10%2F11%2Ftesla-autonomous-cybercab-robotaxi-release-info-001.jpg?q=90&w=1400&cbr=1&fit=max",
    sharesRequired: "150+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Disney",
    ticker: "DIS",
    title: "Flash Pass - Skip the Lines",
    description: "Premium access allowing shareholders to bypass regular queues at all Disney parks worldwide",
    image: "https://cdn.shopify.com/s/files/1/0092/8340/3835/files/DYWDW_1.png?v=1643657003",
    sharesRequired: "500+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Live Nation",
    ticker: "LYV",
    title: "Priority Access on Ticket Releases",
    description: "First-access window for concert and event tickets before general public sales",
    image: "https://mma.prnewswire.com/media/560282/Live_Nation_Entertainment_Concerts.jpg?p=twitter",
    sharesRequired: "350+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Delta",
    ticker: "DAL",
    title: "Delta One Upgrade Access",
    description: "Complimentary upgrades to Delta One (when available) on international flights",
    image: "https://www.delta.com/content/dam/delta-com/products/delta-experiences/delta-one/d1-seat-drink-man-privacy-1042.jpg",
    sharesRequired: "2000+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Starbucks",
    ticker: "SBUX",
    title: "Skip the Line Access",
    description: "VIP mobile ordering privileges with dedicated pickup at all locations",
    image: "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Starbucks-AI-earnings-call_16.jpg?itok=04J6dZu5",
    sharesRequired: "500+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Nike",
    ticker: "NKE",
    title: "Travis Scott Shoe Drop Access",
    description: "Guaranteed access to limited edition Travis Scott collaborations",
    image: "https://www.hypedrop.com/blog/content/images/size/w1000/2021/10/4-2.png",
    sharesRequired: "500+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Chipotle",
    ticker: "CMG",
    title: "Double Meat + Free Guac",
    description: "Premium meal upgrades on every order with verified shareholder status",
    image: "https://www.usatoday.com/gcdn/presto/2018/09/14/USAT/90388d3a-0f91-4e4e-b676-584bff7dddc5-largeguac.jpg?crop=1599,899,x1,y80",
    sharesRequired: "100+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Airbnb",
    ticker: "ABNB",
    title: "Access to Icon Properties",
    description: "Early booking window for Airbnb's most exclusive and unique properties",
    image: "https://news.airbnb.com/wp-content/uploads/sites/4/2024/04/02-The-Up-House-Icons-Airbnb-Credit-Ryan-Lowry.jpg?fit=2662,1776",
    sharesRequired: "1000+ shares",
    remaining: "Limited spots available"
  },
  {
    company: "Chase",
    ticker: "JPM",
    title: "VIP Private Concierge",
    description: "24/7 dedicated concierge service for premium banking and lifestyle requests",
    image: "https://s.yimg.com/ny/api/res/1.2/Bp3A4QXD8gI8nSRhaGP9IQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/fcd30490-8a4c-11ef-ac47-0f56f9f615b3",
    sharesRequired: "2500+ shares",
    remaining: "Limited spots available"
  }
];

function Home() {
  const [filter, setFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTeslaClick = () => {
    navigate('/tesla-detail');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Navigation */}
      <nav className="bg-[#0B0B0B] border-b border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/ib-logo.svg" alt="IB Logo" className="h-6 sm:h-8" />
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden lg:flex space-x-4">
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Why IBKR</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Pricing</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Trading</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Services</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Education</button>
              <button className="bg-[#D63B3B] text-white px-4 py-2 rounded">Login</button>
              <button className="border border-[#D63B3B] text-white px-4 py-2 rounded">Open Account</button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1C1C1C] px-4 py-2">
            <div className="flex flex-col space-y-2">
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Why IBKR</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Pricing</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Trading</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Services</button>
              <button className="text-[#D1D1D1] hover:text-white px-3 py-2">Education</button>
              <button className="bg-[#D63B3B] text-white px-4 py-2 rounded">Login</button>
              <button className="border border-[#D63B3B] text-white px-4 py-2 rounded">Open Account</button>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-[#6B6B6B]" />
            <input
              type="text"
              placeholder="Offer, Issuer, Store etc"
              className="w-full bg-[#1C1C1C] text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C2C2C]"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex-1 sm:flex-none bg-[#1C1C1C] text-white px-4 sm:px-6 py-3 rounded-lg flex items-center justify-center gap-2">
              <span>Offer Type</span>
              <SlidersHorizontal className="h-5 w-5" />
            </button>
            <button className="flex-1 sm:flex-none bg-[#D63B3B] text-white px-4 sm:px-8 py-3 rounded-lg">
              Search
            </button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex space-x-4 mb-6 min-w-max">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-[#D63B3B] text-white' : 'text-[#D1D1D1]'}`}
            >
              All Access
            </button>
            <button
              onClick={() => setFilter('qualified')}
              className={`px-4 py-2 rounded-full ${filter === 'qualified' ? 'bg-[#D63B3B] text-white' : 'text-[#D1D1D1]'}`}
            >
              Qualified
            </button>
            <button
              onClick={() => setFilter('potential')}
              className={`px-4 py-2 rounded-full ${filter === 'potential' ? 'bg-[#D63B3B] text-white' : 'text-[#D1D1D1]'}`}
            >
              Potential
            </button>
            <button
              onClick={() => setFilter('claimed')}
              className={`px-4 py-2 rounded-full ${filter === 'claimed' ? 'bg-[#D63B3B] text-white' : 'text-[#D1D1D1]'}`}
            >
              Claimed
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl sm:text-2xl text-white font-semibold">Available Access</h2>
          <span className="text-sm text-[#6B6B6B]">Powered by VOTR</span>
        </div>

        {/* First Row of Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {perks.slice(0, 3).map((perk, index) => (
            <div 
              key={index} 
              className="bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer"
              onClick={perk.company === "Tesla" ? handleTeslaClick : undefined}
            >
              <div className="relative">
                <img src={perk.image} alt={perk.title} className="w-full h-48 object-cover" />
                {perk.company === "Tesla" && (
                  <img 
                    src="https://www.tesla.com/themes/custom/tesla_frontend/components/images/logo.svg"
                    alt="Tesla Logo" 
                    className="absolute top-4 left-4 h-6 invert"
                  />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D63B3B]">●</span>
                  <span className="text-white font-medium">{perk.ticker}</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{perk.title}</h3>
                <p className="text-[#6B6B6B] text-sm mb-4">{perk.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#1A3B23] text-[#4CAF50] text-sm px-2 py-1 rounded">
                    {perk.sharesRequired}
                  </span>
                  <span className="bg-[#1A2B3B] text-[#4A90E2] text-sm px-2 py-1 rounded">
                    VOTR ACCESS
                  </span>
                </div>
                <div className="mt-4 text-sm text-[#6B6B6B]">
                  {perk.remaining}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="bg-[#1C1C1C] rounded-lg overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#D63B3B]">●</span>
                <span className="text-white font-medium">AAPL</span>
              </div>
              <h2 className="text-xl sm:text-2xl text-white font-bold mb-3">
                Early iPhone 17 Access + MacWorld Invite
              </h2>
              <p className="text-[#6B6B6B] mb-4">
                Preview and pre-order access for next-gen products plus exclusive event access. Only available for shareholders with 50+ shares.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium w-full sm:w-auto">
                Learn More
              </button>
            </div>
            <div className="w-full lg:w-1/2 h-40 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=600&h=400"
                alt="iPhone 17"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Remaining Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {perks.slice(3).map((perk, index) => (
            <div key={index} className="bg-[#1C1C1C] rounded-lg overflow-hidden">
              <img src={perk.image} alt={perk.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D63B3B]">●</span>
                  <span className="text-white font-medium">{perk.ticker}</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{perk.title}</h3>
                <p className="text-[#6B6B6B] text-sm mb-4">{perk.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#1A3B23] text-[#4CAF50] text-sm px-2 py-1 rounded">
                    {perk.sharesRequired}
                  </span>
                  <span className="bg-[#1A2B3B] text-[#4A90E2] text-sm px-2 py-1 rounded">
                    VOTR ACCESS
                  </span>
                </div>
                <div className="mt-4 text-sm text-[#6B6B6B]">
                  {perk.remaining}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tesla-detail" element={<TeslaDetail />} />
      </Routes>
    </Router>
  );
}

export default App;