import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const All_Tasks = (props) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">completed property</th>
                    <th scope="col">Change completed property</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.tasks.map( (item, index) => {
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{item.text}</td>
                            <td>{item.q}</td>
                            <td> <button type="button" class="btn btn-light" onClick={e => change(item.comment)}>Change</button> </td>
                            <td> <button type="button" class="btn btn-danger" onClick={e => deletethis(item.comment)}>Delete</button> </td>
                        </tr>
                    }
                    
                )}
                </tbody>
            </table>
        </div>
    )
}

export default All_Tasks
