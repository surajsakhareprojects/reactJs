import { createPortal} from 'react-dom';
import { forwardRef } from 'react';

const ResultModal = forwardRef( function ResultModal({ result, targetTime }, ref) {
    return createPortal (
        <dialog ref={ref} className="result-modal" open>
            <h2>
                {result}, You Lost!
            </h2>
            <p>
                Target time {targetTime}
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
        ,
        document.getElementById('modal')
    )
})

export default ResultModal;