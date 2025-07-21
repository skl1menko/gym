import { useState } from 'react';

const useTabAnimation = (initialTab) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnim = (tab) => {
        if (tab !== activeTab) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveTab(tab);
                setTimeout(() => setIsAnimating(false), 100);
            }, 100);
        }
    }

    return {
        activeTab,
        isAnimating,
        handleAnim
    };
}

export default useTabAnimation;
