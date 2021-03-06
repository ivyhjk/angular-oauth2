import {Observable} from 'rxjs/Observable';
import {
    Http,
    Headers,
    Response,
    RequestOptions,
    RequestOptionsArgs
} from '@angular/http';

/**
 * Requests aware logic.
 */
export abstract class Request
{
    /**
     * The request full path url.
     *
     * @var mixed[null|string]
     */
    private _url: null|string = null;

    /**
     * Generate a new HTTP request object.
     *
     * @param @angular.http.Http _http The Angular HTTP service.
     * @param string _resourceServer The resource server.
     * @param string _endpoint The request endpoint.
     * @param @angular.http.RequestOptionsArgs _options The request options.
     *
     * @return void
     */
    public constructor(
        private _http: Http,
        private _resourceServer: string,
        private _endpoint: string,
        private _options?: RequestOptionsArgs
    )
    {

    }

    /**
     * Get the request endpoint.
     *
     * @return string
     */
    public get endpoint() : string
    {
        return this._endpoint;
    }

    /**
     * Get the resource server.
     *
     * @return string
     */
    public get resourceServer() : string
    {
        return this._resourceServer;
    }

    /**
     * Get the request options.
     *
     * @return @angular.http.RequestOptionsArgs
     */
    public get options() : RequestOptionsArgs
    {
        if ( ! this._options) {
            this._options = new RequestOptions();
        }

        return this._options;
    }

    /**
     * Get the request headers.
     *
     * @return @angular.http.Headers
     */
    public get headers() : Headers
    {
        if ( ! this.options.headers) {
            this.options.headers = new Headers({});
        }

        return this.options.headers;
    }

    /**
     * Get the Angular HTTP service.
     *
     * @return @angular.http.Http
     */
    public get http() : Http
    {
        return this._http;
    }

    /**
     * Get the request full path url.
     *
     * @return string
     */
    public get url() : string
    {
        if (this._url === null) {
            this._url = this.resourceServer + this.endpoint;
        }

        return this._url;
    }

    /**
     * Handle the current request.
     *
     * @return rxjs.Observable.Observable<@angular.http.Response>
     */
    public abstract handle() : Observable<Response>;
}
