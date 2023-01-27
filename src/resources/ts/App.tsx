import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { BasicToaster } from "./components/atoms/BasicToaster";
import { AppLayout } from "./components/layout/AppLayout";

export default function App() {
    return (
        <RecoilRoot>
            <BasicToaster />
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </RecoilRoot>
    );
}
