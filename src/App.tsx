import React, { useState } from "react";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TeslaDetail from "./components/TeslaDetail";

const perks = [
  {
    company: "Tesla",
    ticker: "TSLA",
    title: "Early Cyber Cab Access",
    description:
      "Priority access to Tesla's autonomous taxi service in launch cities",
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F10%2F11%2Ftesla-autonomous-cybercab-robotaxi-release-info-001.jpg?q=90&w=1400&cbr=1&fit=max",
    sharesRequired: "150+ Shares Required",
    remaining: "Limited spots available",
  },
  {
    company: "Disney",
    ticker: "DIS",
    title: "Flash Pass - Skip the Lines",
    description:
      "Premium access allowing shareholders to bypass regular queues at all Disney parks worldwide",
    image:
      "https://cdn.shopify.com/s/files/1/0092/8340/3835/files/DYWDW_1.png?v=1643657003",
    sharesRequired: "500+ Shares Required",
    remaining: "Limited spots available",
  },
  {
    company: "Live Nation",
    ticker: "LYV",
    title: "Priority Access on Ticket Releases",
    description:
      "First-access window for concert and event tickets before general public sales",
    image:
      "https://mma.prnewswire.com/media/560282/Live_Nation_Entertainment_Concerts.jpg?p=twitter",
    sharesRequired: "350+ Shares Required",
    remaining: "Limited spots available",
  },
  {
    company: "Delta",
    ticker: "DAL",
    title: "Delta One Upgrade Access",
    description:
      "Complimentary upgrades to Delta One (when available) on international flights",
    // image:
    //   "https://www.delta.com/content/dam/delta-com/products/delta-experiences/delta-one/d1-seat-drink-man-privacy-1042.jpg",
    sharesRequired: "2000+ Shares Required",
    remaining: "Limited spots available",
    image:
      "https://www.greenairnews.com/wp-content/uploads/2022/09/Delta-B737-MAX-1024x682.jpg",
  },
  {
    company: "Starbucks",
    ticker: "SBUX",
    title: "Skip the Line Access",
    description:
      "Enjoy exclusive VIP mobile ordering privileges, with the added benefit of dedicated pickup service at all locations for your convenience.",
    image:
      "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Starbucks-AI-earnings-call_16.jpg?itok=04J6dZu5",
    sharesRequired: "500+ Shares Required",
    remaining: "Limited spots available",
  },
  {
    company: "Nike",
    ticker: "NKE",
    title: "Travis Scott Shoe Drop Access",
    description:
      "Guaranteed exclusive access to highly sought-after, limited edition Travis Scott collaborations that you won't want to miss!",
    image:
      "https://www.hypedrop.com/blog/content/images/size/w1000/2021/10/4-2.png",
    sharesRequired: "500+ Shares Required",
    remaining: "Limited spots available",
  },
  {
    company: "Chipotle",
    ticker: "CMG",
    title: "Double Meat + Free Guac",
    description:
      "Premium meal upgrades on every order with verified shareholder status",
    image:
      "https://www.usatoday.com/gcdn/presto/2018/09/14/USAT/90388d3a-0f91-4e4e-b676-584bff7dddc5-largeguac.jpg?crop=1599,899,x1,y80",
    sharesRequired: "100+ Shares Required",
    remaining: "Limited spots available",
  },
  {
    company: "Airbnb",
    ticker: "ABNB",
    title: "Access to Icon Properties",
    description:
      "Early booking window for Airbnb's most exclusive and unique properties",
    // image:
    //   "https://news.airbnb.com/wp-content/uploads/sites/4/2024/04/02-The-Up-House-Icons-Airbnb-Credit-Ryan-Lowry.jpg?fit=2662,1776",
    sharesRequired: "1000+ Shares Required",
    remaining: "Limited spots available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQK4vslwpHEvUo-9QxFj4RBa2L2DhWvgwGA&s",
  },
  {
    company: "Chase",
    ticker: "JPM",
    title: "VIP Private Concierge",
    description:
      "24/7 dedicated concierge service for premium banking and lifestyle requests",
    image:
      "https://s.yimg.com/ny/api/res/1.2/Bp3A4QXD8gI8nSRhaGP9IQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/fcd30490-8a4c-11ef-ac47-0f56f9f615b3",
    sharesRequired: "2500+ Shares Required",
    remaining: "Limited spots available",
  },
];

function Home() {
  const [filter, setFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTeslaClick = () => {
    navigate("/tesla-detail");
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Offer Type");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div
        className="h-auto bg-cover bg-center px-2 md:px-8 pt-4 pb-0 md:pb-10 relative"
        style={{ backgroundImage: `url('/banner.png')` }}
      >
        {/* Navigation */}
        <nav className=" border-b border-[#1C1C1C] mb-8 sticky z-50">
          <div className="mx-auto">
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
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Why IBKR
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Pricing
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Trading
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Services
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Education
                </button>
                <button className="border border-[#D63B3B] text-[#D63B3B] px-4 py-2 rounded-lg hover:text-white hover:bg-[#D63B3B]">
                  Login
                </button>
                <button className="bg-[#D63B3B] text-white px-4 py-2 rounded hover:bg-transparent hover:text-[#D63B3B] border border-[#D63B3B]">
                  Open Account
                </button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#1C1C1C] px-4 py-2 absolute w-full">
              <div className="flex flex-col space-y-2">
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Why IBKR
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Pricing
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Trading
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Services
                </button>
                <button className="text-[#D1D1D1] hover:text-white px-3 py-2">
                  Education
                </button>
                <button className="bg-[#D63B3B] text-white px-4 py-2 rounded ">
                  Login
                </button>
                <button className="border border-[#D63B3B] text-white px-4 py-2 rounded">
                  Open Account
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* sample */}
        <div className="flex items-center   bg-[#FFFFFF26] rounded-md shadow-md mb-5">
          {/* Search Input */}
          <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9D9FAA]" />
            <input
              type="text"
              placeholder="Offer, Issuer, Store etc"
              className="w-full bg-transparent border-r border-[#54575E] text-[#9D9FAA] placeholder:text-[#9D9FAA] pl-12 py-3 rounded-none focus:outline-none  focus:ring-[#2C2C2C]"
            />
          </div>

          {/* Dropdown and Search Buttons */}
          <div className="hidden sm:flex">
            {/* Offer Type Dropdown */}
            <div className="relative">
              <button
                className="flex items-center justify-between text-white px-6 py-3 rounded-lg w-full sm:w-auto transition-all"
                // onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Offer Type</span>
                <svg
                  className={`h-5 w-5 ml-2 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute z-10 w-full bg-[#1C1C1C] border border-[#54575E] text-white rounded-lg shadow-md mt-2">
                  <li
                    className="px-4 py-2 hover:bg-[#3C3C3C] cursor-pointer"
                    onClick={() => handleSelect("Option 1")}
                  >
                    Option 1
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-[#3C3C3C] cursor-pointer"
                    onClick={() => handleSelect("Option 2")}
                  >
                    Option 2
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-[#3C3C3C] cursor-pointer"
                    onClick={() => handleSelect("Option 3")}
                  >
                    Option 3
                  </li>
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center bg-[#D63B3B] text-white px-8 py-3 rounded-lg hover:bg-[#E04A4A] focus:ring-2 focus:ring-[#FF5A5A] transition-all">
              Search
            </button>
          </div>
        </div>
        {/* sample */}

        <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-4 mb-6 min-w-max">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full ${
                filter === "all"
                  ? "bg-[#D63B3B] text-white hover:cursor-not-allowed"
                  : "text-white bg-[#FFFFFF33] hover:bg-[#D63B3B] hover:text-white"
              }`}
            >
              All Access
            </button>
            <button
              onClick={() => setFilter("qualified")}
              className={`px-4 py-2 rounded-full ${
                filter === "qualified"
                  ? "bg-[#D63B3B] text-white hover:cursor-not-allowed "
                  : "text-white bg-[#FFFFFF33] hover:bg-[#D63B3B] hover:text-white "
              }`}
            >
              Qualified
            </button>
            <button
              onClick={() => setFilter("potential")}
              className={`px-4 py-2 rounded-full ${
                filter === "potential"
                  ? "bg-[#D63B3B] text-white hover:cursor-not-allowed"
                  : "text-white bg-[#FFFFFF33] hover:bg-[#D63B3B] hover:text-white"
              }`}
            >
              Potential
            </button>
            <button
              onClick={() => setFilter("claimed")}
              className={`px-4 py-2 rounded-full ${
                filter === "claimed"
                  ? "bg-[#D63B3B] text-white hover:cursor-not-allowed"
                  : "text-white bg-[#FFFFFF33] hover:bg-[#D63B3B] hover:text-white"
              }`}
            >
              Claimed
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 mb-6">
          <h2 className="text-xl sm:text-2xl text-white font-semibold">
            Available Access
          </h2>
          <div className="text-sm text-[#6B6B6B] flex items-end justify-center gap-2">
            Powered by <img className="h-4 " src="/votr_white.png" />
          </div>

          {/* <div className="text-sm text-[#6B6B6B]">Powered by VOTR</div> */}
        </div>
      </div>

      <div className=" px-4 py-4 absolute top-[350px] sm:top-[300px] max-w-7xl mx-auto">
        {/* First Row of Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {perks.slice(0, 3).map((perk, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden cursor-pointer p-2  hover:shadow-xl hover:scale-105 hover:bg-gray-50  transition-transform"
              // className="bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0px 23px 44px 0px rgba(176, 183, 195, 1)",
              }}
              onClick={perk.company === "Tesla" ? handleTeslaClick : undefined}
            >
              <div className="relative">
                <img
                  src={perk.image}
                  alt={perk.title}
                  className="w-full h-48 object-cover"
                />
                {/* {perk.company === "Tesla" && (
                  <img
                    src="https://www.tesla.com/themes/custom/tesla_frontend/components/images/logo.svg"
                    alt="Tesla Logo"
                    className="absolute top-4 left-4 h-6 invert"
                  />
                )} */}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D63B3B]">
                    <img src="/tesla_logoV1.png" className="h-4" />
                  </span>
                  <span className="text-black font-medium">{perk.ticker}</span>
                </div>
                <h3 className="text-black text-lg font-semibold mb-2">
                  {perk.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm mb-4">
                  {perk.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#D0F5E1] text-[#34A853] text-sm font-semibold px-2 py-1 rounded">
                    {perk.sharesRequired}
                  </span>
                  <span className="bg-[#F0F1FF] text-[#5263FF] text-sm font-semibold px-2 py-1 rounded flex items-center gap-2">
                    VOTR ACCESS{" "}
                    <img src="/votr_purple.png" className="h-5 w-5 " />
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
          <div className="flex flex-col lg:flex-row h-auto items-center justify-between">
            <div className="w-full lg:w-1/2 p-6 h-full">
              <div className="flex items-center gap-2 mb-3 text-white font-bold text-2xl">
                <span className="text-[#D63B3B]">
                  <img src="/tesla_logoV1.png" className="h-6" />
                </span>
                <span className="text-white font-bold text-2xl">AAPL</span>
              </div>
              <h2 className="text-xl sm:text-4xl text-white font-semibold mb-3 py-3">
                10% off iPhone 16 for shareholders with 50+ shares
              </h2>
              <p className="text-[#E6E6E9] mb-6 py-2">
                Exclusive offer for Apple shareholders: Get 10% off the latest
                iPhone 16 when you verify ownership of 50+ AAPL shares.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium w-full sm:w-auto">
                Explore More
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
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl text-black font-semibold">
              Potential Access
            </h2>
            <div className="text-sm text-[#6B6B6B] flex items-end justify-center gap-2">
              Powered by <img className="h-4 " src="/votr_black.png" />
            </div>
          </div>
          <div className="text-[#0038FF] font-medium flex gap-3 cursor-pointer">
            View All <ChevronRight />
          </div>
        </div>
        {/* Remaining Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {perks.slice(3).map((perk, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden cursor-pointer p-2 hover:shadow-xl hover:scale-105 hover:bg-gray-50  transition-transform"
              // className="bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0px 23px 44px 0px rgba(176, 183, 195, 1)",
              }}
            >
              {/* <div key={index} className="bg-[#1C1C1C] rounded-lg overflow-hidden"> */}
              <img
                src={perk.image}
                alt={perk.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D63B3B]">
                    <img src="/tesla_logoV1.png" className="h-4" />
                  </span>
                  <span className="text-black font-medium">{perk.ticker}</span>
                </div>
                <h3 className="text-black text-lg font-semibold mb-2">
                  {perk.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm mb-4">
                  {perk.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FBD8D5] text-[#EA4334] font-semibold text-sm px-2 py-1 rounded">
                    {perk.sharesRequired}
                  </span>
                  <span className="bg-[#F0F1FF] text-[#5263FF] text-sm font-semibold px-2 py-1 rounded flex items-center gap-2">
                    VOTR ACCESS{" "}
                    <img src="/votr_purple.png" className="h-5 w-5 " />
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
