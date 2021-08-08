import React from 'react'
import OneProject from './OneProject'

const In_Progress = (props) => {

    const completeThisTask = xx => {
        props.rFIP(xx);
        props.aTCP(xx);
    }

    return (
        <div className="ff1">
            <header id="hh2"><h2>In Progress</h2></header>
            <article>
            {
                props.list ? props.list.map(
                    (x, index) => (
                        <OneProject
                            thisTask={x}
                            key={index}
                            status="In Progress"
                            // startTask={props.startTask1}
                            completeTask={() => completeThisTask(x)}
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

export default In_Progress
