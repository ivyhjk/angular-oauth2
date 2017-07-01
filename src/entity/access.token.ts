import {Token} from './token';
import {TokenDefinition} from './token.definition';

export class AccessToken extends Token
{
    /**
     * The expiry time, in seconds.
     *
     * @var mixed[null|number]
     */
    private _expiry_time: null|number = null;

    /**
     * Creation date.
     *
     * @var Date
     */
    private _created_at: Date;

    /**
     * Generate a new access token.
     *
     * @param oauth2.client.entity.TokenDefinition
     *
     * @return void
     */
    public constructor(tokenDefinition: TokenDefinition)
    {
        super(tokenDefinition);

        this._created_at = new Date();
    }

    /**
     * Get the expiry time, in seconds.
     *
     * @return number
     */
    public get expiry_time() : number
    {
        if (this._expiry_time === null) {
            this._expiry_time = this.tokenDefinition.expiry_time;
        }

        return this._expiry_time;
    }

    /**
     * Get the created at date.
     *
     * @return Date
     */
    public get created_at() : Date
    {
        return this._created_at;
    }
}
