import '../styles/ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
    );
}