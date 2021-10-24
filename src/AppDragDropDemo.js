import React from "react";
import "./App.css";
import { useState } from 'react';


// class AppDragDropDemo extends React.Component {
const AppDragDropDemo = () =>{
    const [result, setResult] = useState(0);
    const [values, setValues] = useState({
        tasks: [
        { name: "1", category: "wip", bgcolor: "yellow" },
        { name: "2", category: "wip", bgcolor: "pink" },
        { name: "3", category: "wip", bgcolor: "skyblue" },
        { name: "4", category: "wip", bgcolor: "cadetblue" }
        ]
    });

  const onDragStart = (ev, id) => {
    console.log("dragstart:", id + "-----" + ev);
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
    console.log(values.tasks['category'])
  };

  const count = () =>{
    var prod = values.tasks;
    var sum = 0;
    for(var i=0;i<prod.length; i++){
        if (prod[i].category === 'complete'){
            sum += Number(prod[i].name);
        }
    }
    console.log(prod.length);
    return sum;
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    // count();
    let tasks = values.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    values.tasks.filter((task) =>{
        if (task.category === 'complete'){
            // console.log(task);
            // setResult(result + parseInt(task.name));
            setResult(count());

        }
        //   else if(task.category == 'wip'){
        //     setResult(result - parseInt(task.name));
        //   }
        return task    
    })

    setValues({
      ...values,
      tasks
    });
  };
    
    var tasks = {
      wip: [],
      complete: []
    };

    values.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div
          className="wip"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "wip");
          }}
        >
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "complete")}
        >
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
        <h1 className='result'>{result}</h1>
      </div>
    );
//   }
}

export default AppDragDropDemo;
