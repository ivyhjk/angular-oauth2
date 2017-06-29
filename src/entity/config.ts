export interface Config
{
    /**
     * The authorization server.
     *
     * @var string
     */
    authorization_server: string;

    /**
     * The resource server.
     *
     * @var string
     */
    resource_server: string;

    /**
     * The application identifier.
     *
     * @var string
     */
    application_identifier: string;

    /**
     * The application secret.
     *
     * @var string
     */
    application_secret: string;

    /**
     * The default scopes.
     *
     * @var string
     */
    default_scopes: Array<string>;
}
