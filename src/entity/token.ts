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
     * Generate a new token.
     *
     * @param oauth2.client.entity.TokenDefinition
     *
     * @return void
     */
    public constructor(private _tokenDefinition: TokenDefinition)
    {

    }

    /**
     * Get the token definition.
     *
     * @return oauth2.client.entity.TokenDefinition
     */
    public get tokenDefinition() : TokenDefinition
    {
        return this._tokenDefinition;
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
}
