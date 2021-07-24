import React, {useState} from 'react'
import Box from './Box';

const ColorForm = (props) => {

        // const [msg, setMsg] = useState([]);
        const [color, setColor] = useState('');
        const [number, setNumber] = useState(0);
        const [width, setWidth] = useState(0);
        const [height, setHeight] = useState(0);
        
        const handleColor = (e) => {
            setColor(e.target.value);
        }
        const handleNumber = (e) => {
            setNumber(e.target.value);
        }
        const handleWidth = (e) => {
            setWidth(e.target.value);
        }
        const handleHeight = (e) => {
            setHeight(e.target.value);
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            props.addBox({color, number, width, height});
            setColor("");
            setWidth(0);
            setHeight(0);
            setNumber(0);
        }

        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     // let x = msg;
        //     // x.push(e.target.value);
        //     setMsg([...msg, e.target.value]);
        //     props.onNewMessage(msg);
        // };

        return (
            <>
            <section>
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col">
                            <input class="form-control" placeholder="Color" type="text" id="color" onChange={handleColor} />
                        </div>
                        <div class="col">
                            <input class="form-control" placeholder="Number of new boxes" type="number" id="number" onChange={handleNumber} />
                            </div>
                            <div class="col">
                            <input class="form-control" placeholder="Width" type="width" id="width" onChange={handleWidth} />
                            </div>
                            <div class="col">
                            <input class="form-control" placeholder="Height" type="height" id="height" onChange={handleHeight} />
                            </div>
                            <div class="col">
                            <button type="submit" class="btn btn-primary">Add Box</button>
                            </div>
                    </div>
                </form>
            </section>
            <br /><br />
            </>
    )
}

export default ColorForm
