import {useEffect} from "react";

interface SEOData {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

const useSEO = (seoData: SEOData) => {
    useEffect(() => {
        // Update document title
        document.title = seoData.title;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", seoData.description);
        }

        // Update meta keywords
        if (seoData.keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute("content", seoData.keywords);
            } else {
                metaKeywords = document.createElement("meta");
                metaKeywords.setAttribute("name", "keywords");
                metaKeywords.setAttribute("content", seoData.keywords);
                document.head.append(metaKeywords);
            }
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", seoData.ogTitle ?? seoData.title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute("content", seoData.ogDescription ?? seoData.description);
        }

        if (seoData.ogImage) {
            const ogImage = document.querySelector('meta[property="og:image"]');
            if (ogImage) {
                ogImage.setAttribute("content", seoData.ogImage);
            }
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute("content", seoData.twitterTitle ?? seoData.title);
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute("content", seoData.twitterDescription ?? seoData.description);
        }

        if (seoData.twitterImage) {
            const twitterImage = document.querySelector('meta[property="twitter:image"]');
            if (twitterImage) {
                twitterImage.setAttribute("content", seoData.twitterImage);
            }
        }
    }, [seoData]);
};

export default useSEO;
