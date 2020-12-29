import React,{ useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue( e.target.value );
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if( inputValue.length > 2){
            setCategories( category => [inputValue, ...category ]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <h1> Add Category </h1>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
