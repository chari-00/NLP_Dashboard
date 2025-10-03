import React from "react";
import { FileText, Layers, Star, Clock } from "lucide-react";

const CoordinatorCards = () => {
  const cardData = [
    { 
      title: "Total Projects", 
      value: "20", 
      subtitle: "Software: 12 | Hardware: 8",
      icon: <FileText size={32} />, 
      gradient: "from-primaryPurple to-accent1" 
    },
    { 
      title: "Mini vs Major", 
      value: "Mini: 6 | Major: 14", 
      subtitle: "",
      icon: <Layers size={32} />, 
      gradient: "from-accent1 to-accent2" 
    },
    { 
      title: "Top Projects", 
      value: "10", 
      subtitle: "",
      icon: <Star size={32} />, 
      gradient: "from-accent2 to-accent3" 
    },
    { 
      title: "Recently Updated", 
      value: "2 days ago", 
      subtitle: "",
      icon: <Clock size={32} />, 
      gradient: "from-accent3 to-accent4" 
    },
  ];

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
              <div className="text-white text-2xl font-bold font-primary mb-1">{card.value}</div>
              {card.subtitle && (
                <div className="text-white/80 text-sm font-secondary">{card.subtitle}</div>
              )}
            </div>
            <div className="text-white/80">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoordinatorCards;
