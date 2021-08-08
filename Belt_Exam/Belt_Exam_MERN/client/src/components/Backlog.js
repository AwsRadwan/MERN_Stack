import React from 'react'
import OneProject from './OneProject'

const Backlog = (props) => {

    const startThisTask = xx => {
        props.rFBL(xx);
        props.aTCL(xx);
    }

    return (
        <div className="ff1">
            <header id="hh1"><h2>Backlog</h2></header>
            <article>
            {
                props.list ? props.list.map(
                    (x, index) => (
                        <OneProject
                            thisTask={x}
                            status="Backlog"
                            key={index}
                            startTask={() => startThisTask(x)}
                            // completeTask={props.completeTask1}
                            // deleteTask={props.deleteTask}
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

export default Backlog
