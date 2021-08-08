import React from 'react'
import CompleteButton from './CompleteButton'
import DeleteButton from './DeleteButton'
import StartButton from './StartButton'
import dateFormat from 'dateformat';



const OneProject = (props) => {
    return (
        <div key={props.key} className="oneCard">
            <h4>{props.thisTask.name}</h4>
            <p>{dateFormat(props.thisTask.date, "mmmm dS, yyyy")}</p>
            {
                (props.status === "Backlog") ? 
                <StartButton task={props.thisTask} onClickHandler={props.startTask} />
                : (props.status === "In Progress") ?
                <CompleteButton task={props.thisTask} onClickHandler={props.completeTask} />
                : <DeleteButton task={props.thisTask} onClickHandler={props.deleteTask} />
            }
        </div>
    )
}

export default OneProject
