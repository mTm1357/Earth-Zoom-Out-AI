"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://earthzoomoutai.top/#webapp",
        "name": "Earth Zoom Out Free - AI Earth Zoom Effect Generator",
        "alternateName": [
          "Earth Zoom Out Free",
          "Earth Zoom Effect Generator", 
          "Free Earth Zoom Out Tool",
          "Earth Zoom Out AI",
          "Earth Zoom Out Gratis"
        ],
        "description": "Free earth zoom out effect generator! Create stunning earth zoom out to universe videos with AI. Transform photos into epic earth zoom effects - completely gratis!",
        "url": "https://earthzoomoutai.top",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web Browser",
        "keywords": "earth zoom out free, earth zoom out effect, earth zoom effect, earth zoom out gratis, earth zoom out effect free, earth zoom out ai, earth zoom, zoom earth live, earth zoom out to universe",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "description": "Free earth zoom out effect generator with no subscription required"
        },
        "featureList": [
          "Earth zoom out free - No cost, no subscription",
          "Earth zoom out effect - Professional quality results",
          "Earth zoom effect - Smooth camera movements", 
          "Earth zoom out gratis - Completely free to use",
          "Earth zoom out effect free - No watermarks",
          "Earth zoom out ai - Advanced AI processing",
          "Earth zoom - Quick and easy generation",
          "Zoom earth live - Real-time preview",
          "Earth zoom out to universe - Epic space animations",
          "4K video output",
          "Mobile-friendly interface"
        ],
        "creator": {
          "@type": "Organization",
          "name": "Earth Zoom Out AI",
          "url": "https://earthzoomoutai.top"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "screenshot": "https://earthzoomoutai.top/screenshot.jpg"
      },
      {
        "@type": "FAQPage",
        "@id": "https://earthzoomoutai.top/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the earth zoom out effect generator really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our earth zoom out free tool is completely gratis with no hidden fees, subscriptions, or watermarks. You can create unlimited earth zoom out effects for free."
            }
          },
          {
            "@type": "Question", 
            "name": "How does the earth zoom out AI work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our earth zoom out ai analyzes your photo using advanced machine learning to create realistic depth mapping. This enables smooth earth zoom out to universe transitions and professional earth zoom effects."
            }
          },
          {
            "@type": "Question",
            "name": "What makes this earth zoom effect generator different?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Our earth zoom out effect generator provides 4K quality output, no watermarks, real-time zoom earth live preview, and completely free access. Unlike other tools, it's earth zoom out gratis forever."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use it on mobile devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our earth zoom out free generator is fully mobile-friendly. You can create stunning earth zoom effects directly from your phone or tablet with the same quality as desktop."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://earthzoomoutai.top/#howto",
        "name": "How to Create Earth Zoom Out Effects Free",
        "description": "Step-by-step guide to create stunning earth zoom out to universe videos using our free AI generator",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Upload Your Photo",
            "text": "Upload any photo to start creating your earth zoom out effect free",
            "image": "https://earthzoomoutai.top/step1.jpg"
          },
          {
            "@type": "HowToStep", 
            "name": "Choose Settings",
            "text": "Select your preferred earth zoom effect settings including zoom level, duration, and quality",
            "image": "https://earthzoomoutai.top/step2.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Generate Video",
            "text": "Click generate to create your earth zoom out to universe video with our earth zoom out ai",
            "image": "https://earthzoomoutai.top/step3.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Download Result", 
            "text": "Preview your earth zoom out effect and download the final video in 4K quality",
            "image": "https://earthzoomoutai.top/step4.jpg"
          }
        ],
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
