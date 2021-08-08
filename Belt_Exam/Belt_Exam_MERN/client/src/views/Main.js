import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Backlog from '../components/Backlog'
import In_Progress from '../components/In_Progress'
import Completed from '../components/Completed'
import { Link } from '@reach/router';
import axios from 'axios';



const Main = (props) => {

    const [allProjects, setAllProjects] = useState([]);
    const [backlog, setBacklog] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/tasks")
            .then(res => {
                const data = res.data.Tasks;
                setAllProjects(res.data.Tasks);
                setBacklog(data.filter(pp => pp.status === "Backlog").sort((a,b) => a.date < b.date ? -1 : 1));
                setInProgress(data.filter(pp => pp.status === "In Progress").sort((a,b) => a.date < b.date ? -1 : 1));
                setCompleted(data.filter(pp => pp.status === "Completed").sort((a,b) => a.date < b.date ? -1 : 1));
                setLoaded(true);
            })
        }, []
    );
    // const setData = (data) => {
    //     setBacklog(data.filter(pp => pp.status === "Backlog"));
    //     setInProgress(data.filter(pp => pp.status === "In Progress"));
    //     setCompleted(data.filter(pp => pp.status === "Completed"));
        
    // }
    

    const removeFromStart = xx => {
        setBacklog(backlog.filter(pp => pp._id != xx._id).sort((a,b) => a.date < b.date ? -1 : 1));
    }

    const addToInProgress = xx => {
        setInProgress([...inProgress, xx].sort((a,b) => a.date < b.date ? -1 : 1));
    }

    const removeFromInProgress = xx => {
        setInProgress(inProgress.filter(pp => pp._id != xx._id).sort((a,b) => a.date < b.date ? -1 : 1));
    }

    const addToCompleted = xx => {
        setCompleted([...completed, xx].sort((a,b) => a.date < b.date ? -1 : 1));
    }

    const removeFromDom = xx => {
        setAllProjects(allProjects.filter(pp => pp._id != xx._id).sort((a,b) => a.date < b.date ? -1 :1));
        setCompleted(completed.filter(pp => pp._id != xx._id).sort((a,b) => a.date < b.date ? -1 : 1));
    }
    
    return (
        <div>
            <Header />
            {
                loaded ?
                <section>
                    <Backlog list={backlog} rFBL={removeFromStart} aTCL={addToInProgress} />
                    <In_Progress list={inProgress} rFIP={removeFromInProgress} aTCP={addToCompleted} />
                    <Completed list={completed} removeThis={removeFromDom} />
                </section>
                :
                <p>Loading ...</p>
            }
            <div id="linkk"><Link to="/projects/new" className="link-success" > Create New Project </Link></div>
        </div>
    )
}

export default Main
