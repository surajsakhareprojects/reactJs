import './core_block.css';
import Card from '../card/card';
import { CORE_CONCEPTS, EXAMPLES } from '../../assets/data';
import { useState } from 'react';
import ReadMore from '../read_more/ReadMore';

export default function CoreBlock() {

    let isAnimalSelected = (<p>Please select animal.</p>);
    const [animalName, setanimalName] = useState('');


    // not working if
    // if(animalName) {
    //     isAnimalSelected = (<div>
    //     <ReadMore title={EXAMPLES[animalName].title} description={EXAMPLES[animalName].description} code={EXAMPLES[animalName].code} />
    //     </div> )
    // }

    function handleClick(animalName) {
        console.log('clicked:: ', animalName);
        setanimalName(animalName);
    }

    return (
        <div className="bg-color-white">
            <div className="container">
                <div className='row g-0'>
                    {
                        CORE_CONCEPTS.map((animal) =>
                            <Card {...animal}
                                onClickHandler={() => handleClick(animal.title)}
                                isSelected={animalName === animal.title}
                            ></Card>
                        )
                    }
                </div>
                {!animalName && <div>Please select animal to see more information.</div>}
                {animalName &&
                    <div>
                        <ReadMore title={EXAMPLES[animalName].title} description={EXAMPLES[animalName].description} code={EXAMPLES[animalName].code} />
                    </div>
                }

            </div>
        </div>

    )
}