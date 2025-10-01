import React from "react";

interface ComingSoonProps {
    message?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({message = "Coming soon..."}) => {
    return (
        <main className="flex-1 flex items-center justify-center mb-(--spacing-navbar)">
            <section className="text-center mx-6" aria-label="Feature coming soon">
                <h2 className="text-2xl font-semibold text-white mb-4">Feature Coming Soon</h2>
                <p className="text-gray-300 mb-6">{message}</p>
                <p className="text-sm text-gray-500">We're working hard to bring you an amazing experience. Stay tuned!</p>
            </section>
        </main>
    );
};

export default ComingSoon;
