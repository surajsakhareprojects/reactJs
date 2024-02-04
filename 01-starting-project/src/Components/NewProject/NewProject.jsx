import Input from '../Input.jsx';
import { useRef } from 'react';
import Modal from '../Modal/Modal.jsx';

export default function NewProject({ onAdd }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const modal = useRef();

    function handleSave() {
        if (
            titleRef.current.value === '' ||
            descriptionRef.current.value === '' ||
            dueDateRef.current.value === ''
        ) {
            modal.current.open();
            return;
        }



        onAdd({
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: dueDateRef.current.value,
        })
    }


    return (
        <>
            <Modal ref={modal} buttonCaption="Cancel">
                <h2 className="text-xl font-bold text-stone-500 my-4">
                    Invalid input</h2>
                    <p className="text-x text-stone-400 my-4">Please enter valid data</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSave}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label="Title" />
                    <Input ref={descriptionRef} label="Description" textArea />
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                </div>
            </div>
        </>
    )
}