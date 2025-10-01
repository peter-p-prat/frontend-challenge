import {BrowserRouter} from "react-router-dom";

import AppLayout from "components/layout/AppLayout";
import {NavigationContextProvider} from "contexts/NavigationContext";
import MainRouter from "router";

const App = () => {
    return (
        <BrowserRouter>
            <NavigationContextProvider>
                <AppLayout>
                    <MainRouter />
                </AppLayout>
            </NavigationContextProvider>
        </BrowserRouter>
    );
};

export default App;
