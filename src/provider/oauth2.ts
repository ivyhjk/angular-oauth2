import {Injectable} from '@angular/core';

import {Credential, AccessToken} from './../entity';

/**
 * Provides a wrapper for OAuth2 flow.
 */
@Injectable()
export class OAuth2
{
    /**
     * Check if the current user is authenticated or not.
     *
     * @return Promise<bolean>
     */
    public async isAuthenticated() : Promise<boolean>
    {
        return new Promise<boolean>(async (resolve, reject) => {

        });
    }

    /**
     * Try to login the given credential object.
     *
     * @return Promise<void>
     */
    public async login(credential: Credential) : Promise<void>
    {
        return new Promise<void>((resolve, reject) => {

        });
    }

    /**
     * Refresh the actual token.
     *
     * @return Promise<oauth2.client.entity.AccessToken>
     */
    public async refreshToken() : Promise<AccessToken>
    {
        return new Promise<AccessToken>((resolve, reject) => {

        });
    }

    /**
     * Logout the current token (revoke the current token).
     *
     * @return Promise<void>
     */
    public async logout() : Promise<void>
    {
        return new Promise<void>((resolve, reject) => {

        });
    }
}
