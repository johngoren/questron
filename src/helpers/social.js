// TODO: 

export function Social(props) {
    return (
        <div>
            <Capdesk/>
            <div className="socialGroup">
                <LinkedIn/>
                <Twitter/>
                <Facebook/>
            </div>            
        </div>
    )
}

export function Capdesk(props) {
    return (
        <a href="https://www.capdesk.com"><img src="/images/social/capdesk.svg"/></a>
    )
}

export function LinkedIn(props) {
    return (
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.thegameofequity.com&title=The%20Game%20of%20Equity&summary=&source="><img src="/images/social/linkedin.svg"/></a>
    )
}

export function Twitter(props) {
    return (
        <a href="https://twitter.com/intent/tweet?text=Check%20out%20The%20Game%20of%20Equity%3A%20https%3A//www.thegameofequity.com%0A"><img src="/images/social/twitter.svg"/></a>
    )
}

export function Facebook(props) {
    return (
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.thegameofequity.com"><img src="/images/social/facebook.svg"/></a>
    )
}

