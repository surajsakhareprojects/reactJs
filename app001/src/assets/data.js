import squirrelImg from './images/squirrel.jpeg';
import owlImg from './images/owl.jpg';
import turtleImg from './images/sea_turtle.jpg';
import birdImg from './images/white_bird.jpg';

export const CORE_CONCEPTS = [
  {
    image: squirrelImg,
    title: 'squirrel',
    updatedOn: '20 min',
    description:
      'quirrels are members of the family Sciuridae, a family that includes small or medium-size rodents. ',
  },
  {
    image: birdImg,
    title: 'bird',
    updatedOn: '2 min',
    description:
      'Birds are a group of warm-blooded vertebrates constituting the class Aves',
  },
  {
    image: turtleImg,
    title: 'turtles',
    updatedOn: '47 min',
    description:
      'Turtles are reptiles of the order Testudines, characterized by a special shell developed mainly from their ribs.',
  },
  {
    image: owlImg,
    title: 'owl',
    updatedOn: '7 min',
    description:
      'Owls are birds from the order Strigiformes, which includes over 200 species ',
  },
];

export const EXAMPLES = {
  squirrel: {
    title: 'squirrel',
    description:
      'The squirrel family includes tree squirrels, ground squirrels, and flying squirrels. ',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  bird: {
    title: 'bird',
    description:
      ', characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  turtles: {
    title: 'turtles',
    description:
      ' Modern turtles are divided into two major groups, the Pleurodira and Cryptodira, which differ in the way the head retracts.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  owl: {
    title: 'owl',
    description:
      'of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};