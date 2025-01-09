import React from "react";

interface OfferCardProps {
  backgroundImageUrl?: string;
  avatarUrl?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  backgroundImageUrl = "/offerImage1.png",
  avatarUrl = "/Avatar.png",
  title = "AAPL",
  subtitle = "10% off iPhone 16 for shareholders with 50+ shares",
  description = "Exclusive offer for Apple shareholders: Get 10% off the latest iPhone 16 when you verify ownership of 50+ AAPL shares.",
  buttonText = "Explore More",
}) => {
  return (
    <div className="rounded-lg overflow-hidden mb-8">
      <div
        className="flex h-auto items-center justify-between"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          objectFit: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full lg:w-1/2 px-6 py-5 h-full">
          <div className="flex items-center gap-2 mb-3 text-white font-bold text-2xl">
            <span className="text-[#D63B3B]">
              <img src={avatarUrl} className="h-6" alt="Avatar" />
            </span>
            <span className="text-white font-bold text-2xl font">{title}</span>
          </div>
          <h2 className="text-xl sm:text-4xl text-white font-semibold mb-3 py-3">
            {subtitle}
          </h2>
          <p className="text-[#E6E6E9] mb-6 py-2 jakartaFont hidden lg:block">
            {description}
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium w-full sm:w-auto">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
