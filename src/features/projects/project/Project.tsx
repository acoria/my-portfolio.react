import { ProjectDetails } from '../projectDetails/ProjectDetails';
import { IProjectProps } from './IProjectProps';
import styles from './Project.module.scss';

export const Project: React.FC<IProjectProps>=(props)=>{
return <div className={styles.project}>
    test
    <ProjectDetails />
</div>}