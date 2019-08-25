import React, {Component} from 'react';

class CheckList extends Component {
    render(){
        let tasks = this.props.tasks.map((task) => {
            return (
                <li className="checklistTask" key={task.id}>
                    <input type="checkbox" defaultChecked={task.done}/>
                    {task.name}
                    <a href="#" className="checklistTaskRemove"/>
                </li>
            );
        });

        return(
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        )
    }
}

export default CheckList;