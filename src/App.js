import React, { Component } from 'react';
import './App.css';
import './reset.css';
import students from './students.js';
import StudentInfo from './studentInfo.js';

class StudentDirectory extends Component {
  constructor(props){
    super(props);

    this.state={
      students: students, index: 0
    };
    // this.handleStudents = this.handleStudents.bind(this);
  }

nextStudent=()=>{
  if(this.state.index<this.state.students.length - 1){
    this.setState({index: this.state.index +1})
  }else{
    this.setState({index: 0})
  }
}

prevStudent=()=>{
  if(this.state.index>0){
  this.setState({index: this.state.index -1})
  }else{
    this.setState({index: this.state.students.length - 1})
  }
}

  render() {
    return (
      <div className="Student Directory">
          <title>Devmtn Dir</title>
        <nav>
          <p className="home">Home</p>
          <p className="dev">DevMountain Directory</p>
        </nav>
        <main>
          <StudentInfo 
            student={this.state.students[this.state.index]}
            length={this.state.students.length}
            current={this.state.index+1}
          />
        </main>
        <div className='button_alignment'>
        <button className='left'onClick={this.prevStudent}>Previous</button>
        <button id='edit'>Edit</button>
        <button id='delete'>Delete</button>
        <button id='new'>New</button>
        <button className='right' onClick={this.nextStudent}>Next</button>
        </div>
      </div>
    );
  }
}

export default StudentDirectory;
