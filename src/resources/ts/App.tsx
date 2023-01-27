import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { BasicToaster } from "./components/atoms/BasicToaster";
import { FullDisplaySpinner } from "./components/atoms/FullDisplaySpinner";
import { AppLayout } from "./components/layout/AppLayout";

export default function App() {
    return (
        <RecoilRoot>
            <BasicToaster />
            <FullDisplaySpinner />
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </RecoilRoot>
    );
}
