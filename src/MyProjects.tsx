import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "./data/projects";

const MyProjects=()=> <section id="projects" className="projects-stage">
  <div className="projects-intro">
    <div><p className="micro-label">03 / Selected work</p><h2>The work should<br/><em>speak first.</em></h2></div>
    <p>Product interfaces, collaborative builds, and focused experiments—shown large enough to judge the actual work.</p>
  </div>
  <div className="project-spreads">
    {projects.map((project,index)=>{
      const hasLive=Boolean(project.liveLink&&project.liveLink!=="#");
      return <article className={`project-spread ${index===0?"project-spread--lead":""}`} key={project.name??index}>
        <div className="project-number" aria-hidden="true">{String(index+1).padStart(2,"0")}</div>
        <a className="project-image" href={hasLive?project.liveLink:project.repoLink} target="_blank" rel="noreferrer"><img src={project.thumbNail} alt={`${project.name??"Project"} preview`}/></a>
        <div className="project-copy">
          <div className="project-copy__head"><span>{String(index+1).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}</span><h3>{project.name}</h3></div>
          <p>{project.description}</p>
          <div className="project-stack">{project.tools?.map(tool=><span key={`${project.name}-${tool}`}>{tool}</span>)}</div>
          <div className="project-actions">{hasLive&&<a href={project.liveLink} target="_blank" rel="noreferrer"><LaunchIcon sx={{fontSize:17}}/>Live</a>}{project.repoLink&&<a href={project.repoLink} target="_blank" rel="noreferrer"><CodeIcon sx={{fontSize:17}}/>Code</a>}</div>
        </div>
      </article>;
    })}
  </div>
</section>;
export default MyProjects;
