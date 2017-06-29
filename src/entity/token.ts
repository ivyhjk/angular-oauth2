import {TokenDefinition} from './token.definition';

export abstract class Token
{
    /**
     * The token identifier.
     *
     * @var mixed[null|string]
     */
    private _identifier: null|string = null;

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
     * Generate a new token.
     *
     * @param oauth2.client.entity.TokenDefinition
     */
    public constructor(private _tokenDefinition: TokenDefinition)
    {
        this._created_at = new Date();
    }

    /**
     * Get the token identifier.
     *
     * @return string
     */
    public get identifier() : string
    {
        if (this._identifier === null) {
            this._identifier = this._tokenDefinition.identifier;
        }

        return this._identifier;
    }

    /**
     * Get the expiry time, in seconds.
     *
     * @return number
     */
    public get expiry_time() : number
    {
        if (this._expiry_time === null) {
            this._expiry_time = this._tokenDefinition.expiry_time;
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
