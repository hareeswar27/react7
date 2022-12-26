import React from 'react';

const EditDetails = ({ editForm, handlestudentUpdate, handleChange, handleCancel }) => {
    let {Name, Age, Course, Batch} = editForm

    return (
        <>
            <div className='edit'>
                <div className='header'>
                    <input type="text" name="Name" className='input' value={Name} onChange={handleChange} />
                    <input type="text" name="Age" className='input' value={Age} onChange={handleChange} />
                    <input type="text" name="Course" className='input' value={Course} onChange={handleChange} />
                    <input type="text" name="Batch" className='input' value={Batch} onChange={handleChange} />
                </div>
            </div>

            <div className='btn'>
                <button className='button' onClick={handleCancel}>Cancel</button>
                <button className='button' onClick={handlestudentUpdate}>Update</button>
            </div>
        </>
    );
}

export default EditDetails;