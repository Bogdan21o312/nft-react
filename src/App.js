import React from "react";
import Layout from "./components/Layout/Layout";
import {BrowserRouter} from "react-router-dom";
import TitleBig from "./components/Text/TitleBig";
import TitleMedium from "./components/Text/TitleMedium";
import TitleSmall from "./components/Text/TitleSmall";
import SubTitleBig from "./components/Text/SubTitleBig";
import SubTitleMedium from "./components/Text/SubTitleMedium";
import SubTitleSmall from "./components/Text/SubTitleSmall";
import ParagraphBig from "./components/Text/ParagraphBig";
import ParagraphMedium from "./components/Text/ParagraphMedium";
import ParagraphSmall from "./components/Text/ParagraphSmall";

function App() {

    return (
        <BrowserRouter>
            <Layout>
                <TitleBig>TitleBig <span>sla;daksl</span> <b>dsjnfasd</b></TitleBig>
                <TitleMedium>TitleMedium <span>sla;daksl</span> <b>dsjnfasd</b></TitleMedium>
                <TitleSmall>TitleSmall <span>sla;daksl</span> <b>dsjnfasd</b></TitleSmall>
                <SubTitleBig>SubTitleBig <span>sla;daksl</span> <b>dsjnfasd</b></SubTitleBig>
                <SubTitleMedium>SubTitleMedium <span>sla;daksl</span> <b>dsjnfasd</b></SubTitleMedium>
                <SubTitleSmall>SubTitleSmall <span>sla;daksl</span> <b>dsjnfasd</b></SubTitleSmall>
                <ParagraphBig>ParagraphBig <span>sla;daksl</span> <b>dsjnfasd</b></ParagraphBig>
                <ParagraphMedium>ParagraphMedium <span>sla;daksl</span> <b>dsjnfasd</b></ParagraphMedium>
                <ParagraphSmall>ParagraphSmall <span>sla;daksl</span> <b>dsjnfasd</b></ParagraphSmall>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
