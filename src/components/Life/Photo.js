import './Life.css';

const Photo = ({ index, photo, onClick }) => {
    const handleClick = event => {
        onClick(event, { photo, index });
    };

    return (
        <img
            {...photo}
            onClick={onClick ? handleClick : null}
            width=''
            height=''
            loading='lazy'
            title='Drag me or open in new tab'
        />
    );
};

export default Photo;
