import {Injectable} from '@angular/core';

import {OAuth2} from './oauth2';

/**
 * Guard provides a safe access for routes that requires authentication.
 */
@Injectable()
export class Guard
{
    /**
     * Generate a new guard instance.
     *
     * @param oauth2client.provider.OAuth2 _oauth2 The OAuth2 wrapper.
     *
     * @return void
     */
    public constructor(private _oauth2: OAuth2)
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
}
