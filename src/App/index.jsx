import { useEffect } from 'react';

import { store } from './store';
import { Provider } from "react-redux";
import { useStates } from '../Hooks/useStates';

import { cambiarThema } from '../Core/helper';
import { Theme } from '../Components/Theme';

import { Index } from '../Pages/Index';
import { Goals } from '../Pages/Goals';
import { Skills } from '../Pages/Skills';
import { Contact } from '../Pages/Contact';
import { Projects } from '../Pages/Projects';
import { Experience } from '../Pages/Experience';

import { Test } from '../Pages/Test';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Menu } from '../Components/Menu';
import { FirstLoad } from '../Components/Loaders/FirstLoad';

const BgTheme = () => {
    const { ls } = useStates();
    return (
        <>
            <div className={`wipeInDown full-page-container bg-my`}></div>
            <Theme />
        </>
    )
}

function AppUI() {
    const { ls, s, f } = useStates();

    useEffect(() => {
        f.u0('firstLoaded', true);
    }, []);

    if (!s.firstLoaded) return (
        <FirstLoad />
    );
    return (
        <div className={`text-[var(--my-minor)]`}>
            <BgTheme />
            <Menu />
            <Routes>
                {/* -----------   Index   ----------- */}
                <Route
                    path="/"
                    element={
                        <Index />
                    }
                />
                {/* -----------   /Index   ----------- */}
                {/* -----------   Goals   ----------- */}
                <Route
                    path="goals"
                    element={
                        <Goals />
                    }
                />
                {/* -----------   /Goals   ----------- */}
                {/* -----------   Skills   ----------- */}
                <Route
                    path="skills"
                    element={
                        <Skills />
                    }
                />
                {/* -----------   /Skills   ----------- */}
                {/* -----------   Contact   ----------- */}
                <Route
                    path="contact"
                    element={
                        <Contact />
                    }
                />
                {/* -----------   /Contact   ----------- */}
                {/* -----------   Projects   ----------- */}
                <Route
                    path="projects"
                    element={
                        <Projects />
                    }
                />
                {/* -----------   /Projects   ----------- */}
                {/* -----------   Experience   ----------- */}
                <Route
                    path="experience"
                    element={
                        <Experience />
                    }
                />
                {/* -----------   /Experience   ----------- */}
                {/* -----------   Test   ----------- */}
                <Route
                    path="test"
                    element={
                        <Test />
                    }
                />
                {/* -----------   /Test   ----------- */}

                {/* -----------   404   ----------- */}
                <Route path="*/" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
                {/* -----------   /404   ----------- */}

            </Routes>
        </div>
    );
}

function App(props) {
    return (
        <Provider store={store}>
            <AppUI />
        </Provider>
    );
}

export default App;
