import React from "react";
import { FileText, Cpu, Users, Database, Star, Clock } from "lucide-react";

const AdminAnalyticsCards = () => {
  const cards = [
    { title: "Total Projects", value: "20", subtitle: "12 SW / 8 HW", icon: <FileText size={32} />, gradient: "from-primaryPurple to-accent1" },
    { title: "Mini vs Major", value: "6 Mini / 14 Major", subtitle: "", icon: <Cpu size={32} />, gradient: "from-accent1 to-accent2" },
    { title: "Top Projects", value: "10", subtitle: "", icon: <Star size={32} />, gradient: "from-accent2 to-accent3" },
    { title: "Recently Updated", value: "2 days ago", subtitle: "", icon: <Clock size={32} />, gradient: "from-accent3 to-accent4" },
    { title: "Accounts", value: "200 Users", subtitle: "", icon: <Users size={32} />, gradient: "from-accent4 to-accent5" },
    { title: "Database", value: "Healthy", subtitle: "Synced 1hr ago", icon: <Database size={32} />, gradient: "from-accent5 to-accent6" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
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

export default AdminAnalyticsCards;
