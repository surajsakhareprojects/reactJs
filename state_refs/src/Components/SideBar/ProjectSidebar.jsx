import Button from "../Button";

export default function ProjectSidebar({onStartAddProject, projects}) {
    console.log('projectsdsfsdf::', projects);
    return (
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2>
                    Your Projects
                </h2>
                <div>
                    <Button onClick={onStartAddProject}>
                        + New Project
                    </Button>
                </div>
                <div>
                    <h2>Project Title: {projects.title}</h2>
                    <ul>
                        {projects.map((project)=> 
                        <li key={project.id}>
                            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hove:bg-stone-800">
                                {project.title}</button>
                        </li>
                        )}
                    </ul>
                </div>
            </aside>
    )
}