import React from "react";

import ComingSoon from "components/shared/ComingSoon";
import useSEO from "hooks/useSEO";

const Explore: React.FC = () => {
    useSEO({
        title: "Explore - Discover with Iris",
        description:
            "Explore new dimensions of self-awareness with Iris. Discover guided exercises, mindfulness practices, and personalized content designed to enhance your personal growth journey.",
        keywords:
            "self-awareness exploration, mindfulness exercises, personal growth discovery, guided meditation, self-reflection tools, Iris exploration",
        ogTitle: "Explore - Discover with Iris",
        ogDescription: "Explore new dimensions of self-awareness with Iris through guided exercises and mindfulness practices.",
        twitterTitle: "Explore - Discover with Iris",
        twitterDescription: "Explore new dimensions of self-awareness with Iris through guided exercises and mindfulness practices.",
    });

    return <ComingSoon message="Explore interface coming soon..." />;
};

export default Explore;
