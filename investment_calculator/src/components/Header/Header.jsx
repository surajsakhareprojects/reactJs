import imgSrc from '../../assets/investment-calculator-logo.png';

export default function Header() {

    return (
        <header id='header'>
            <img src={imgSrc} alt="investment bag logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}