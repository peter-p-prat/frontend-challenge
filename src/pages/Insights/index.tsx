import React from "react";

import ComingSoon from "components/shared/ComingSoon";
import useSEO from "hooks/useSEO";

const Insights: React.FC = () => {
    useSEO({
        title: "Insights - Your AI Journey",
        description:
            "Discover personalized insights from your conversations with Iris. Track your self-awareness progress, identify patterns, and gain deeper understanding of your personal growth journey.",
        keywords:
            "personal insights, self-awareness tracking, AI journey analytics, personal growth metrics, mindfulness insights, self-discovery progress",
        ogTitle: "Insights - Your AI Journey",
        ogDescription: "Discover personalized insights from your conversations with Iris and track your self-awareness progress.",
        twitterTitle: "Insights - Your AI Journey",
        twitterDescription: "Discover personalized insights from your conversations with Iris and track your self-awareness progress.",
    });

    return <ComingSoon message="Insights interface coming soon..." />;
};

export default Insights;
