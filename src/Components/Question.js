import React from 'react';
// import { NavLink, Route } from 'react-router-dom';

const Question = () => {

    //const randomQuestion = calculate random question here
    return (
        <article className= 'questionBox'>
            <div>
                <h2>Insert Random Question Here</h2>
            </div>
            <form className= 'answerInput'>
                {/*<Answer /> //I think to do this correctly we should have this be a component that will hold state... it will also contain the submit button to set the value to POST and thus re-render App...? */}
            </form>
        </article>
    )
}

export default Question;