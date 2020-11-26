export default class FooterComponent {
    constructor() {

    }

    render() {
        const footer = document.createElement('div');
        footer.classList.add('footer');

        footer.innerHTML = `<span>Made by Kateryna Dotsenko, 2020</span>
                            <a href="https://github.com/katerynadotsenko" target="_blank">
                                GitHub
                            </a>
                            <a href="https://rs.school/js/" target="_blank">
                                <img src='https://rs.school/images/rs_school_js.svg'>
                            </a>`;
        
        return footer;
    }
}