
const Footer = () => {
    return <>
    <footer class="container-fluid d-flex flex-wrap justify-content-between align-items-center p-3 border-top border-dark">
        <p class="col-md-4 mb-0 text-body-secondary">This site is a work in progress</p>
        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
                <a href="https://github.com/gilbertlb" class="nav-link px-2 text-body-secondary .display-6">
                    <i className="fab fa-github" />
                </a>
            </li>
            <li class="nav-item">
                <a href="https://www.linkedin.com/in/landon-gilbert/" class="nav-link px-2 text-body-secondary .display-6">
                    <i className="fab fa-linkedin" />
                </a>
            </li>
            {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li> */}
        </ul>
    </footer>
    </>
}

export default Footer;