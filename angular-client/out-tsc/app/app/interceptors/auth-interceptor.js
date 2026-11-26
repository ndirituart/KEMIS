export const authInterceptor = (req, next) => {
    const token = localStorage.getItem('token');
    if (token) {
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(cloned);
    }
    return next(req);
};
