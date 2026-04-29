resource "aws_directory_service_directory" "main" {
  name     = "corp.example.com"
  password = var.admin_password
  size     = "Large"
  type     = "MicrosoftAD"

  vpc_settings {
    vpc_id     = var.vpc_id
    subnet_ids = var.subnet_ids
  }

  tags = {
    Environment = "Production"
    Project     = "Identity-LandingZone"
  }
}
