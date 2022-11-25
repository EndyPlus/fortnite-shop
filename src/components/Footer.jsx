function Footer() {
    return <footer className="page-footer #ff5252 red accent-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#">REP</a>
            </div>
        </div>
    </footer>
}

export {Footer}