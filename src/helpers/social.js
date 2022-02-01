// TODO: 

export function Social(props) {
    return (
        <div className="social">
            <ul className="company">
                <acme/>
            </ul>
            <ul className="others">
                <LinkedIn/>
                <Twitter/>
                <Facebook/>
            </ul>            
        </div>
    )
}

export function acme(props) {
    return (
        <a href="https://www.acme.com"><li className="acme"></li></a>
    )
}

export function LinkedIn(props) {
    return (
       <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.thegameofequity.com&title=The%20Game%20of%20Equity&summary=&source="> <li className="linkedin"/></a>
    )
}

export function Twitter(props) {
    return (
      <a href="https://twitter.com/intent/tweet?text=The%20Game%20of%20Equity%3A%20https%3A//www.thegameofequity.com%0A"><li className="twitter"/></a>
    )
}

export function Facebook(props) {
    return (
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.thegameofequity.com"><li className="facebook"/></a>
    )
}

