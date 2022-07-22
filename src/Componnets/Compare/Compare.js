import React from 'react';
import Styles from '../Compare/Compare.module.css'

const Compare = () => {
    return (
        <div className={Styles.mainContainer}>
           <div className={Styles.textBoxs}>
            <input  name='inputA' type="text" />
            <input name='inputB' type="text" />
            </div> 
            <button type="submit">Compute</button>
        </div>
    );
};

export default Compare;