import { HttpRequest, HttpInterceptor, HttpHandler } from "@angular/common/http";
import { OAuthService } from "angular-oauth2-oidc";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: OAuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.startsWith('/')) {
            // Get the auth token from the service.
            const authToken = this.auth.getIdToken();
            console.log('token', authToken)

            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
                url: 'api' + req.url,
                headers: req.headers.set('Authorization', 'Bearer ' + authToken),
                withCredentials: true,
            });

            // send cloned request with header to the next handler.
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
