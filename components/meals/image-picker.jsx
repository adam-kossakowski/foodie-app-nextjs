
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {

    return (
        <div className={calculateSizeAdjustValues.picker}>
            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <input type='file' id={name} 
                accept="image/png, image/jpeg" name={name} />

            </div>
        </div>
    );
}