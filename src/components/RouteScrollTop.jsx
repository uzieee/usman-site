/*
    File: RouteScrollTop.jsx
    Author: Usman Shafique
    Copyright: 2023 - Usman Shafique
    Version: 1.0
    Created: 9/14/2023
    Last Modified: 9/14/2023
*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}
