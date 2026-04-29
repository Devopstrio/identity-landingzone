resource "azuread_application" "federation_proxy" {
  display_name     = "Identity-LZ-Federation-Proxy"
  identifier_uris  = ["api://identity-lz-federation"]
  owners           = [data.azuread_client_config.current.object_id]

  web {
    redirect_uris = ["https://portal.example.com/auth/callback"]
    implicit_grant {
      access_token_issuance_enabled = true
      id_token_issuance_enabled     = true
    }
  }

  required_resource_access {
    resource_app_id = "00000003-0000-0000-c000-000000000000" # Microsoft Graph

    resource_access {
      id   = "df021288-bdef-4463-88db-98f22de89214" # User.Read.All
      type = "Role"
    }
  }
}
