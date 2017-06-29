import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

/**
 * Main class for HTTP requests that needs OAuth2 flow.
 */
@Injectable()
export class HttpClient
{
    /**
     * Generate a new OAuth2 HTTP client instance.
     *
     * @param @angular.http.Http _http The Angular main HTTP client.
     *
     * @return void
     */
    public constructor(private _http: Http)
    {

    }

    /**
     * Get the Angular main HTTP client.
     *
     * @return @angular.http.Http
     */
    public get http() : Http
    {
        return this._http;
    }
}
