import React from 'react';
import './Student.css';

let StudentInfo = (props) =>{
    console.log(props)
    return (
    <div className='student'>
        <p className='name'>{props.student.name}</p>
        <br></br>
        <p><span className='bullets'>From: </span>{props.student.from}</p>
        <p><span className='bullets'>Fun Fact: </span>{props.student.funFact}</p>
        <br></br  >
        <p className ='facts'><span className='bullets'>City or country? </span>{props.student.cityOrCountry}</p>
        <p className ='facts'><span className='bullets'>Indoors or outdoors? </span>{props.student.indoorsOrOutdoors}</p>
        <p className ='facts'><span className='bullets'>Travel or never leave home? </span>{props.student.travel}</p>
        <p className ='facts'><span className='bullets'>Food? </span>{props.student.food}</p>
        <p className ='facts'><span className='bullets'>Dog or cat? </span>{props.student.dogOrCat}</p>
        
    </div>
    )
}

export default StudentInfo;