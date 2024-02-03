import './card.css';
export default function Card({ image, title, description, updatedOn, onClickHandler, isSelected }) {

    return (
        <div className="col-md-4">
            <div className={isSelected ? 'card mt-4 mb-5 selected-card' : 'card mt-3 mb-3'}
                style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a type="button" className="float-end"
                        onClick={onClickHandler}>
                        {'Read more ... '}
                    </a>

                </div>
                <div className="card-footer" style={{ backgroundColor: '#a7c0e540' }} >
                    <small className="text-muted">Updated on {updatedOn} ago.</small>
                </div>
            </div>
        </div>
    )
}