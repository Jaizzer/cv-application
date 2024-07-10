import { useState } from 'react';

export default function Image() {
    const [status, setStatus] = useState('save');
    const [link, setLink] = useState(
        'data:image/jpeg;base64,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'
    );

    // Update link everytime the input value changes
    function handleChange(event) {
        const updatedInput = event.target;
        setLink(updatedInput.value);
    }

    // Toggle between 'edit' and 'save' mode depending on the type of button clicked
    function handleClick(e) {
        e.preventDefault();
        const clickedButton = e.target;
        const newStatus = clickedButton.className;
        setStatus(newStatus);
    }

    if (status === 'edit') {
        // Return a form if status is 'edit'
        return (
            <div className="image-container">
                <img src={link} alt="profile image" className="profile-image" />
                <form className="image-link">
                    <label>
                        {'Link: '}
                        <input type="text" placeholder="www.image.com" value={link} onChange={handleChange} />
                    </label>
                    <button className="save" type="submit" onClick={handleClick}>
                        Save
                    </button>
                </form>
            </div>
        );
    } else if (status === 'save') {
        // Return an editable photo container if status is save
        return (
            <div className="image-container">
                <img src={link} alt="profile image" className="profile-image" />
                <button className="edit" onClick={handleClick}>
                    Change Photo
                </button>
            </div>
        );
    }
}
