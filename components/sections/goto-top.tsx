"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // Optional: Install lucide-react or use an SVG
import "../../app/globals.css"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top coordinate to 0, make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    id="scrollTopBtn"
                    className="bg-(--color-accent) hover:bg-(--color-accent-hover) text-(--color-surface) p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </div>
    );
}
