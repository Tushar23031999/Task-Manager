import React, {useState} from 'react';


function NewToDoForm(props){

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(description !== '' && assigned !== ''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }


    // const descriptionChange = (event) => {
    //     console.log('Desciption', event.target.value);
    //     setDescription(event.target.value);
    // }

    const assignedChange = (event) => {
        console.log('Assigned', event.target.value);
        setAssigned(event.target.value);
    }

    return(
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                      type='text' 
                      className='form-control'
                      required
                      onChange={assignedChange}
                      value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                       className='form-control' 
                       rows={3} 
                       required
                       onChange={e => setDescription(e.target.value)}
                       value={description}
                    ></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3' onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )


}
export default NewToDoForm