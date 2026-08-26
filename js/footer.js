export function footer(data) {
    return `
        <footer class="footer">
            <div class="footer__container container">
                <div class = "footer__content">
                    <a href="#" class="header__logo footer__logo">${data.company.logo}</a>
                </div>
                <div class="footer__contacts">
                    <a href="${data.company.phone}" class="footer__contact-link">${data.contacts.phone}</a>
                    <a href="mailto:${data.company.email}" class="footer__contact-link">${data.company.email}</a>
                </div>
                <p class="footer__text">© ${new Date().getFullYear()} ${data.company.name}. Документ. Всі права захищені..</p>
            </div>
        </footer>
    `
}