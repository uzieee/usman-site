/*
    File: Footer.jsx
    Author: Usman Shafique
    Copyright: 2023 - Usman Shafique 
    Version: 1.0
    Created: 9/14/2023
    Last Modified: 9/14/2023
*/

import { getCopyrightYear } from "../utils/date";

export default function Footer() {
    return (
        <footer className="bg-neutGray-800 dark:bg-neutGray-1050 mt-auto px-mobileBound py-8 sm:px-6 sm:py-9 md:px-7 md:py-10 lg:px-8">
           <p className="font-heading text-center mx-auto">
  Made with ❤️ by <a href="https://www.linkedin.com/in/usmanshafique4342/" style={{ textDecoration: 'underline' }}>Usman Shafique</a> &copy; {getCopyrightYear()}
</p>

</footer>
    );
}