import NewProject from './Components/NewProject/NewProject.jsx';
import ProjectSidebar from './Components/SideBar/ProjectSidebar.jsx';
import NoProjectSelected from './Components/NoProjectSelected.jsx';
import { useState } from 'react';

function App() {

  const [projectState, setProjectState] = useState(
    {
      selectedProject: undefined,
      projects: []
    }
  );

  function handleStartAddProject() {
    setProjectState( prvState=> {
      return {
        ...prvState, // added old state of projectState
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState=> {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject ],
        selectedProject: undefined
      }
    });

    console.log('your hereere');
  }
  
  let content;
  console.log('projectState:: ', projectState);

  if(projectState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if(projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar  onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      { content }
    </main>
  );
}

export default App;
