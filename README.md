Azure AD RBAC
--------------------------------------------
**RBAC - role-based access.**
**AD - active directory**

Tools used
Ember-Simple-Auth - https://ember-simple-auth.com/
ADAL.js - https://github.com/AzureAD/azure-activedirectory-library-for-js

To restrict access to different parts of the API(or application) which uses Azure AD as an identity provider there are a couple of choices:
1. Use new `appRoles` attribute available in application configuration file.
2. Use `GraphAPI` to query authenticated user data from AD and write a custom logic which will parse user roles and permissions(permissions specific to AD)

As we are looking for the most natural way to incorporate RBAC for our applications approach 1 is preferred.

How it works:

Firstly, we need to create application in Azure AD. To do this we have to follow the next steps:
1. Open Azure Portal
2. Open Azure Active directory section
3. Click `App Registrations`
4. Click `Add`
5. Type app info in the dialog and press create

Next, select newly created application and press `Manifest` button. `Manifest` is Azure AD specific configurations of the application. The `appRoles` is a property of this configuration.
`appRoles` is an array, each instance represents the specific role which our application can understand.

> Example configuration
> `"appRoles": [
    {
      "allowedMemberTypes": [
        "Application",
        "User"
      ],
      "displayName": "Access admin part of an app",
      "id": "17a67f38-b915-40bb-bd09-228a5c8a997e",
      "isEnabled": true,
      "description": "Allows to access admin functionality of an app",
      "value": "Admin"
    },
    {
      "allowedMemberTypes": [
        "User"
      ],
      "displayName": "Access non-admin part of the site",
      "id": "17a67f38-b915-40bb-bd09-228a5c8a997c",
      "isEnabled": true,
      "description": "Allows to access non-admin functionality",
      "value": "RegularUser"
    }
  ],`
 
The main things here:
`allowedMemberTypes` - this is the array of the types of entities for which we the role can be applied. There are 3 available types here: `User` - says that a role can be applied to AD users only. `Application` - says that role can be applied to another application registered in Azure AD, `Group` - such roles can be applied to groups defined in AD. As this is an array any combination of this types is possible.
`displayName` - this text you will see when you will try to assign role to user/group/application in Azure Portal.
`value` - This is the name of the Role(this value should be mirrored as Role.Name inside application)

When `appRoles` added. Authentication token will be populated with `role` claim.
This configuration is transitive. 

> Example
> Role **"Admins"** for groups is configured->Role "Admins" **assigned to** GroupA-> User John Doe **is a member of** GroupA->John Doe **has a role** "Admins"

This also works for nested groups and this information will added to user claims in id_token. 

There is another way to restrict access to specific resources of the application/WebAPI - Group Claims.
To configure group claims for application we need to: 
1. Create app
2. In `Manifest` file set `groupMembershipClaims` to `All`, `SecurityGroups`,  `null`. `All` will result in the group claim populated with user's groups ids and also distribution lists ids, `SecurityGroup` - only groups. 
This approach requires the usage of the `GraphAPI` to query AD information about groups and users groups. 
The usual flow is the following: configure group claims->get groups, ids to be clear and save them somewhere ->decide which group has access to which part of the application-> authenticate user and get his groups claims-> check if the user is a member of the needed group by ids comparison.
**Group claims are transitive** - this means that if the user is a member of Admins Group and Admins Group contains Regular Users Group than user will have id of both groups in his claims.
Roles permissions
-----------------------------
Permissions for a specific role have to be configured inside application/Web API identity framework and there is no way to do it in Azure application `Manifest` or through any other application`s configs.
