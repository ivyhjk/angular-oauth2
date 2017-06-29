export interface Config
{
    authorization_server: string;
    resource_server: string;
    application_identifier: string;
    application_secret: string;
    default_scopes: Array<string>;
}
