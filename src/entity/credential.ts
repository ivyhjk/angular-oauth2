export class Credential
{
    /**
     * Generate a new credential entity.
     *
     * @param string _username The username.
     * @param string _password The password.
     *
     * @return void
     */
    public constructor(private _username: string, private _password: string)
    {

    }

    /**
     * Get the associated username.
     *
     * @return string
     */
    public get username() : string
    {
        return this._username;
    }

    /**
     * Get the associated password.
     *
     * @return string
     */
    public get password() : string
    {
        return this._password;
    }
}
