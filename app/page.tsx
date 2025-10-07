import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import AboutMe from './_components/AboutMe';

export default function Home() {
    return (
        <div className="page-">
            { <Banner /> }
            { <AboutMe /> }
            { <Skills /> }
            { <Experiences /> }
            { <ProjectList /> }
        </div>
    );
}
