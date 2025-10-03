import React from "react";
import { FileText, Cpu, HardDrive, Star } from "lucide-react";

const cardData = [
  { title: "Total Projects", value: 20, icon: <FileText size={32} />, gradient: "from-primaryPurple to-accent1" },
  { title: "Software Projects", value: 12, icon: <Cpu size={32} />, gradient: "from-accent1 to-accent2" },
  { title: "Hardware Projects", value: 8, icon: <HardDrive size={32} />, gradient: "from-accent2 to-accent3" },
  { title: "Best Projects", value: 10, icon: <Star size={32} />, gradient: "from-accent3 to-accent4" },
];

const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${card.gradient} rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
          <div className="flex items-center justify-between">
            <div className="text-white">
              <div className="text-white/90 text-lg font-medium font-primary mb-2">{card.title}</div>
              <div className="text-white text-3xl font-bold font-primary">{card.value}</div>
            </div>
            <div className="text-white/80">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
