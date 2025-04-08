// src/middleware.ts
import { defineMiddleware } from 'astro/middleware';
import { parse } from 'cookie';

export const onRequest = defineMiddleware(({ request, redirect }, next) => {
    const rawCookies = request.headers.get('cookie') || '';
    const cookies = parse(rawCookies);
    const role = cookies.role || 'GUEST';

    // Check if the request is for the /admin route
    if (request.url.endsWith('/admin') && role !== 'ADMIN') {
        // Redirect unauthorized users to the home page with an error query parameter
        return redirect('/?error=unauthorized');
    }

    // Proceed to the next middleware or the requested route
    return next();
});
