import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppLayout } from "./components/layout/AppLayout";

export default function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </RecoilRoot>
    );
}
