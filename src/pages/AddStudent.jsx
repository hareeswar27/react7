import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StudentAdded } from '../features/StudentSlice';

const AddStudent = () => {
    const data = useSelector((state)=> state.student);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Course, setCourse] = useState('');
    const [Batch, setBatch] = useState('');

    const cancelAddStudent = () => {
        navigate('/Students');
    }

    const submitNewStudent = () => {
        if(Name && Age && Course && Batch){
            dispatch(StudentAdded({
                "id": data.length,
                "Name": Name,
                "Age": Age,
                "Course": Course,
                "Batch": Batch,
                "Change": "Edit"
            }))
            navigate('/Students');
        }
    }

    return (
        <>
            <div className='edit'>
                <div className='header'>
                    <input type="text" name="Name" className='input' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="Age" className='input' placeholder='Age' value={Age} onChange={(e) => setAge(e.target.value)} />
                    <input type="text" name="Course" className='input' placeholder='Course' value={Course} onChange={(e) => setCourse(e.target.value)} />
                    <input type="text" name="Batch" className='input' placeholder='Batch' value={Batch} onChange={(e) => setBatch(e.target.value)} />
                </div>
            </div>
            <div className='btn'>
                <button className='button' onClick={cancelAddStudent}>Cancel</button>
                <button className='button' onClick={submitNewStudent}>Submit</button>
            </div>
        </>
    );
}

export default AddStudent;