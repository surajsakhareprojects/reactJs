export default function ReadMore({title, description, code}) {
    return (
        <div className="container bg-light">
            <h2 className="text-capitalize">{title}</h2>
            <p>{description}</p>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    )
}