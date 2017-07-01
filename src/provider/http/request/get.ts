import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Request} from './../request';

export class Get extends Request
{
    /**
     * Handle the current request.
     *
     * @return rxjs.Observable.Observable<@angular.http.Response>
     */
    public handle() : Observable<Response>
    {
        return this.http.get(this.url, this.options);
    }
}
