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
       <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/johngoren"> <li className="linkedin"/></a>
    )
}

export function Twitter(props) {
    return (
      <a href="https://twitter.com/intent/tweet?text=ACMEy%3A%20https%3A//github.com/johngoren%0A"><li className="twitter"/></a>
    )
}

export function Facebook(props) {
    return (
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com/johngoren"><li className="facebook"/></a>
    )
}

