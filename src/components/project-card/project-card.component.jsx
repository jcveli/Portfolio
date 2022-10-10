import Card from '../card/card.component';

import './project-card.styles.scss'

const ProjectCard = ({Projects}) => {

    return(

            <div className="project-container">
                {
                    Projects.map((project) => {
						const {id} = project;
						return(
							<Card key={id} Project={project}/>
						)
					})}
			</div>
            

    )

}

export default ProjectCard;