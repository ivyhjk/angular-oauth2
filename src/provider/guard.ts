import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {OAuth2} from './oauth2';

/**
 * Guard provides a safe access for routes that requires authentication.
 */
@Injectable()
export class Guard implements CanActivate
{
    /**
     * Generate a new guard instance.
     *
     * @param oauth2client.provider.OAuth2 _oauth2 The OAuth2 wrapper.
     *
     * @return void
     */
    public constructor(private _oauth2: OAuth2, private _router: Router)
    {

    }

    /**
     * Get the OAuth2 wrapper.
     *
     * @return oauth2client.provider.OAuth2
     */
    public get oauth2() : OAuth2
    {
        return this._oauth2;
    }

    /**
     * Get the Antular router.
     *
     * @return @angular.router.Router
     */
    public get router() : Router
    {
        return this._router;
    }

    /**
     * Decide if a route can be activated to the user.
     *
     * @return Promise<boolean>
     */
    public async canActivate() : Promise<boolean>
    {
        return new Promise<boolean>(async (resolve, reject) => {
            let isAuthenticated : boolean = await this.oauth2.isAuthenticated();

            if (isAuthenticated) {
                resolve(isAuthenticated);
            } else {
                await this.router.navigate(['login']);

                reject('Missing authentication.');
            }
        });
    }
}
