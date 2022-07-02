import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allJokes } from '../../actions/jokesActions';

function Jokes() {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState("");
    const selector = useSelector(state => state.jokes.joke);
    console.log(selector);

    const submit = (e) => {
        e.preventDefault();
        dispatch(allJokes(inputData));
    }

    return (
        <>
            <div className="jokes py-5">
                <div className="container">
                    <div className="input-feild text-center">
                        <h1>J<span>😂</span>kes</h1>
                        <form onSubmit={submit}>
                            <input type="text" placeholder='who many joke you want😂' onChange={(e) => setInputData(e.target.value)} />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="joke-container py-5">
                        <div className="row">
                            <div className="col-lg-10 col-md-12 mx-auto">
                                <div className="joke-content">
                                    {selector && selector.map((val, id) => {
                                        return (
                                            <div key={id}>
                                                <p><span>👉</span>{val.joke}😂🤣😀...</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jokes