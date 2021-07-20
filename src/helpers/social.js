// TODO: 

export function Social(props) {
    return (
        <div className="social">
            <Capdesk/>
            <ul>
                <LinkedIn/>
                <Twitter/>
                <Facebook/>
            </ul>            
        </div>
    )
}

export function Capdesk(props) {
    return (
        <li className="capdesk"><a href="https://www.capdesk.com"></a></li>
    )
}

export function LinkedIn(props) {
    return (
        <li className="linkedin"><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.thegameofequity.com&title=The%20Game%20of%20Equity&summary=&source="></a></li>
    )
}

export function Twitter(props) {
    return (
        <li className="twitter"><a href="https://twitter.com/intent/tweet?text=The%20Game%20of%20Equity%3A%20https%3A//www.thegameofequity.com%0A"></a></li>
    )
}

export function Facebook(props) {
    return (
        <li className="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.thegameofequity.com"></a></li>
    )
}

