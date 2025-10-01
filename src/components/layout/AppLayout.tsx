import React, {ReactNode} from "react";

import NavigationBar from "components/layout/NavigationBar";

interface AppLayoutProps {
    children?: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
    return (
        <div className="h-screen w-screen bg-black flex items-center justify-center">
            <main className="flex-1 flex flex-col h-full w-full font-inter text-white" role="main">
                {children}
            </main>
            <NavigationBar />
        </div>
    );
};

export default AppLayout;
