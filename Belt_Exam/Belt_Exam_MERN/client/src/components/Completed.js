import React from 'react'
import OneProject from './OneProject'

const Completed = (props) => {

    const deleteThisTask = idd => {
        props.removeThis(idd);
    }

    return (
        <div className="ff1">
            <header id="hh3"><h2>Completed</h2></header>
            <article>
            {
                props.list ? props.list.map(
                    (x, index) => (
                        <OneProject
                            thisTask={x}
                            key={index}
                            status="Complete"
                            // startTask={props.startTask1}
                            // completeTask={props.completeTask1}
                            deleteTask={() => deleteThisTask(x)}
                        />
                    )
                )
                :
                <p>There is No Projects</p>
            }
            </article>
        </div>
    )
}

export default Completed
