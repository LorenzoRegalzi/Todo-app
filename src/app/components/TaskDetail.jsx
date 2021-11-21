import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from './../store/mutations'

export const TaskDetail = ({id, comments, task, isComplete, groups, setTaskCompletion, setTaskGroup, setTaskName}) => (
    
    <div>
        <div>
            <input onChange={(event) => setTaskName(event.target.value, id)} value={task.name}></input>
        </div>
        <div>
            <button onClick={() => setTaskCompletion(id, !isComplete)}>{ isComplete ? 'Reopen' : 'Complete'}</button>
        </div>
        <div>
            <select onChange={(event) => setTaskGroup(event.target.value, id)} value={task.group}>
                {groups.map(group => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                ))}
            </select>
        </div>
        <div>
            <Link to="/dashboard">
                <button >Done</button>
            </Link>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {

    console.log(state, ownProps);
    
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;

    console.warn('quiii', id,task,groups)
    console.log(state);

    return {
        id,
        task,
        groups,
        isComplete:task.isComplete
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    let id = ownProps.match.params.id;
    
    return {
        setTaskCompletion(id, isComplete){
            dispatch(mutations.setTaskCompletion(id, isComplete))
        },
        setTaskGroup(e, id){
            dispatch(mutations.setTaskGroup(e, id))
        },
        setTaskName(e, id){
            dispatch(mutations.setTaskName(e, id))
        }
    }
}



export const ConnectTaskDetail = connect(mapStateToProps,mapDispatchToProps) (TaskDetail);